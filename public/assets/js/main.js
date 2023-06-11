// VARIABLES
const resultsList = document.querySelector('.js-results-list');
const inputDisney = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');
const favoriteList = document.querySelector('.js-favorite-list');

let dataDisney = [];
let favoritesDisney = [];


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

// FUNCIONES
// Función para renderizar la lista de personajes
function renderDisney() {
  let html = '';

  for (const oneDisney of dataDisney) {
    let imageUrl =
      oneDisney.imageUrl && oneDisney.imageUrl.length > 0
        ? oneDisney.imageUrl[0].url
        : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';

    html += `<li class="js-list-disney disney__results-list" id="${oneDisney._id}">
              <div class="js-container-disney disney__results-list-container">
                <h3 class="js-title-disney disney__results-list-title" id="${oneDisney._id}">${oneDisney.name}</h3>
                <img class="disney__results-list-image" src="${oneDisney.imageUrl}" alt="Disney Character ${oneDisney.name}" title="Disney Character ${oneDisney.name}"/>
              </div>
            </li>`;
  }

  resultsList.innerHTML = html;
}

// Función para obtener datos del API
function getDataApi(value) {
  fetch(`https://dev.adalab.es/api/disney?pageSize=15`)
    .then((response) => response.json())
    .then((data) => {
      dataDisney = data.data;

      renderDisney();
    })
    .catch((error) => console.log('Error fetching characters:', error));
}

// Función para agregar o quitar un personaje favorito
function handleClickAddFavorite(event) {
  const id = event.currentTarget.id;
  const selectedCharacter = dataDisney.find((item) => item.id === id);
  const indexCharacter = favoritesDisney.findIndex((item) => item.id === id);
  if (indexCharacter === -1) {
    favoritesDisney.push(selectedCharacter);
  } else {
    favoritesDisney.splice(indexCharacter, 1);
  }
  renderFavoriteDisney();
  
}

// Función para renderizar la lista de personajes favoritos
function renderFavoriteDisney() {
  favoriteList.innerHTML = '';
  for (const fav of favoritesDisney) {
    favoriteList.innerHTML += renderDisney(fav);
  }
}

// Código para obtener los datos del API al cargar la página
getDataApi('');

//# sourceMappingURL=main.js.map
