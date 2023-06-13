// VARIABLES
const resultsList = document.querySelector('.js-characters-list');
const inputDisney = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');
const favoriteList = document.querySelector('.js-favorite-list');

const url = `https://dev.adalab.es/api/disney?pageSize=15`;
let dataDisney = [];
let favoritesDisney = [];

const charactersLS = JSON.parse(localStorage.getItem('characters'));

//pintar el favorite que se guarda en el LS
init();

function init() {
  if (charactersLS) {
    favoritesDisney = charactersLS;
    renderFavoriteDisney(favoritesDisney);
  }
}
//Quitar de favoritos pulsando en los fav
function handleClickRemoveFavorite(id) {
  const idSelected = parseInt(id);

  const favoriteFoundIndex = favoritesDisney.findIndex((fav)=> fav._id === idSelected);
  if(favoriteFoundIndex >= 0){
    favoritesDisney.splice(favoriteFoundIndex,1);
  }
  localStorage.setItem('favorites_disney', JSON.stringify(favoritesDisney));
  
  renderFavoriteDisney();
}

// FUNCIONES
// Renderizar la lista de personajes
function renderDisney(dataDisney) {
  let html = '';

  for (const oneDisney of dataDisney) {
    let imageUrl =
      oneDisney.imageUrl && oneDisney.imageUrl.length > 0
        ? oneDisney.imageUrl[0].url
        : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';

    html += `<li class="js-list-disney js_li_characters disney_characters_list" id="${oneDisney._id}">
              <div class="js-container-disney">
                <h3 class="js-name-disney disney_characters-list-name" id="${oneDisney._id}">${oneDisney.name}</h3>
                <img class="disney_characters-list-image" src="${oneDisney.imageUrl}" alt="Disney Character ${oneDisney.name}" title="Disney Character ${oneDisney.name}"/>
              </div>
            </li>`;
  }

  resultsList.innerHTML = html;
  addEventCharacter();
}

// Obtener datos del API
function getDataApi(value) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dataDisney = data.data;
      renderDisney(dataDisney);
    })
    .catch((error) => console.log('Error fetching characters:', error));
}
//Click en las tarjetas
function addEventCharacter() {
  const liCharacterList = document.querySelectorAll('.js_li_characters');
  for (const li of liCharacterList) {
    li.addEventListener('click', handleClickAddFavorite);
  }
}

// Agregar o quitar un personaje favorito
function handleClickAddFavorite(event) {
  const id = parseInt(event.currentTarget.id);
  const selectedCharacter = dataDisney.find((item) => item._id === id);
  const indexCharacter = favoritesDisney.findIndex((item) => item._id === id);
  if (indexCharacter === -1) {
    favoritesDisney.push(selectedCharacter);
  } else {
    favoritesDisney.splice(indexCharacter, 1);
  }
  localStorage.setItem('characters', JSON.stringify(favoritesDisney));
  console.log(favoritesDisney);
  renderFavoriteDisney(favoritesDisney);
}

// Renderizar la lista de personajes favoritos
function renderFavoriteDisney(favoritesDisney) {
  favoriteList.innerHTML = '';
  let html = '';
  for (const oneDisney of favoritesDisney) {
    let imageUrl =
      oneDisney.imageUrl && oneDisney.imageUrl.length > 0
        ? oneDisney.imageUrl[0].url
        : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';

    html += `<li class="js-list-disney js_li_characters fav_card disney_favorite_list" id="${oneDisney._id}">
              <div class="js-container-disney">
                <h3 class="js-name-disney disney_characters-list-name" id="${oneDisney._id}">${oneDisney.name}</h3>
                <img class="disney_characters-list-image" src="${oneDisney.imageUrl}" alt="Disney Character ${oneDisney.name}" title="Disney Character ${oneDisney.name}"/>
                <div><i class="fa-solid fa-square-xmark icon" style="color: #000000;"></i></div>
              </div>
            </li>`;
  }

  favoriteList.innerHTML = html;
}
// Evento botón de búsqueda
const handleClickSearch = (event) => {
  event.preventDefault();
  const inputValue = inputDisney.value;
  const filterList = dataDisney.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(filterList);
  renderDisney(filterList);
};

btnSearch.addEventListener('click', handleClickSearch);

// Código para obtener los datos del API al cargar la página
getDataApi('');

//# sourceMappingURL=main.js.map
