"use strict";

// DECLARAR CONST DEL LISTADO DE GATOS Y DE LOS DATOS DE CADA GATO
// como Bonus ponía poner el name en MAYUS, pero no me sale :( 

const listKitten = document.querySelector(".js-list");

const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneDesc =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenOneRace = "Siamés";
const kittenOne = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenOneImage}
      alt="siames-cat"
    />
    <h3 class="card_title">${kittenOneName}</h3>
    <h4 class="card_race">${kittenOneRace}</h4>
    <p class="card_description">${kittenOneDesc}
    </p>
  </article>
  </li>`;

const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoDesc =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenTwoRace = "Sphynx";
const kittenTwo = `<li class="card">
              <img
                class="card_img"
                src= ${kittenTwoImage}
                alt="sphynx-cat"
              />
              <h3 class="card_title">${kittenTwoName}</h3>
              <h4 class="card_race">${kittenTwoRace}</h4>
              <p class="card_description">
              ${kittenTwoDesc}
              </p>
            </li>`;

const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeDesc =
  " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenThreeRace = "Maine Coon";
const kittenThree = `<li class="card">
              <img
                class="card_img"
                src=${kittenThreeImage}
                alt="maine-coon-cat"
              />
              <h3 class="card_title">${kittenThreeName}</h3>
              <h4 class="card_race">${kittenThreeRace}</h4>
              <p class="card_description">
              ${kittenThreeDesc}
              </p>
            </li>`;

listKitten.innerHTML = kittenOne + kittenTwo + kittenThree;

// DARLE FUNCIÓN AL INPUT DESCRIPTION (filtrar por busqueda)

// const input_search_desc = document.querySelector(".js_in_search_desc");
// const descrSearchText = input_search_desc.value;

// if (kittenOneDesc.includes(descrSearchText)) {
//   const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src=${kittenOneImage}
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${kittenOneName}</h3>
//   <h4 class="card_race">${kittenOneRace}</h4>
//   <p class="card_description">${kittenOneDesc}
//   </p>
// </article>
// </li>`;

//   listKitten.innerHTML = kittenOne;
// }

// if (kittenTwoDesc.includes(descrSearchText)) {
//   const kittenTwo = `<li class="card">
//             <img
//               class="card_img"
//               src= ${kittenTwoImage}
//               alt="sphynx-cat"
//             />
//             <h3 class="card_title">${kittenTwoName}</h3>
//             <h4 class="card_race">${kittenTwoRace}</h4>
//             <p class="card_description">
//             ${kittenTwoDesc}
//             </p>
//           </li>`;

//   listKitten.innerHTML += kittenTwo;
// }

// if (kittenThreeDesc.includes(descrSearchText)) {
//   const kittenThree = `<li class="card">
//             <img
//               class="card_img"
//               src=${kittenThreeImage}
//               alt="maine-coon-cat"
//             />
//             <h3 class="card_title">${kittenThreeName}</h3>
//             <h4 class="card_race">${kittenThreeRace}</h4>
//             <p class="card_description">
//             ${kittenThreeDesc}
//             </p>
//           </li>`;

//   listKitten.innerHTML += kittenThree;
// }
// nota para Nuria: para que se mostraran los 3 gatitos, solo añadí el + delante de cada =


//MOSTRAR U OCULTAR FORMULARIO DE NUEVO GATITO

const newForm = document.querySelector(".js-new-form");
const clicPlus = document.querySelector(".js-plus");

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

clicPlus.addEventListener("click", handleClickNewCatForm);

function handleClickNewCatForm() {
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//  QUE EL BOTÓN AÑADIR AÑADA UN NUEVO GATITO

const addKitten = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");

const inputRace = document.querySelector(".js-input-race");

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  listKitten.innerHTML += renderKitten(valuePhoto, valueDesc, valueName, valueRace);
};

function renderKitten(url, desc, name, race) {
  const HTML = `<li class="card">
<article>
  <img
    class="card_img"
    src=${url}
    alt="siames-cat"
  />
  <h3 class="card_title">${name}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">${desc}
  </p>
</article>
</li>`
  return HTML
};

addKitten.addEventListener("click", addNewKitten);

// SI LOS CAMPOS ESTÁN VACÍOS QUE SALGA UN MENSAJE

const labelMessageError = document.querySelector(".js-label-error");


addKitten.addEventListener("click", (event) => {
  event.preventDefault()
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "Uy, parece que has olvidado algo";
  } else {
    addNewKitten()
  }

});

// NUEVO!!!!
// OCULTAR FORMULARIO SI LE DOY A CANCELAR

const cancelKitten = document.querySelector('.js-btn-cancel');

function cancelNewkitten(event) {
  event.preventDefault()
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value
  const valueDesc = inputDesc.value;

  newForm.classList.add("collapsed");
  inputPhoto.value = '';
  inputPhoto.placeholder = 'URL de la foto';
  inputName.value = '';
  inputName.placeholder = 'Nombre';
  inputRace.value = '';
  inputRace.placeholder = 'Raza';
  inputDesc.value = '';
  inputDesc.placeholder = 'Descripción';
  labelMessageError.innerHTML = ' ';
}

cancelKitten.addEventListener('click', cancelNewkitten);

// FILTRAR POR DESCRIPCIÓN PERO USANDO EL BOTÓN BUSCAR

const input_search_desc = document.querySelector(".js-desc-search");
const btn_search = document.querySelector('.js-btnSearch');


function handleClickSearch(event) {
  event.preventDefault()
  const descrSearchText = input_search_desc.value;
  console.log(descrSearchText)
  listKitten.innerHTML = '';
  if (kittenOneDesc.includes(descrSearchText)) {
    listKitten.innerHTML += kittenOne;
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    listKitten.innerHTML += kittenTwo;
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    listKitten.innerHTML += kittenThree;
  };
};
btn_search.addEventListener('click', handleClickSearch)


// esto último no funciona, no filtra por palabra y me muestra lo que le da la gana.
