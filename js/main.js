"use strict";

/*
const newForm = document.querySelector('.js-new-form');

newForm.classList.remove ('collapsed');
*/

const listKitten = document.querySelector(".js-list");

const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneDesc =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenOneRace = "Siamés";

const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoDesc =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenTwoRace = "Sphynx";

const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeDesc =
  " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenThreeRace = "Maine Coon";

// listKitten.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector(".js_in_search_desc");
const descrSearchText = input_search_desc.value;

if (kittenOneDesc.includes(descrSearchText)) {
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

  listKitten.innerHTML = kittenOne;
}

if (kittenTwoDesc.includes(descrSearchText)) {
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

  listKitten.innerHTML = kittenTwo;
}

if (kittenThreeDesc.includes(descrSearchText)) {
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

  listKitten.innerHTML = kittenThree;
}

//

const addKitten = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMessageError = document.querySelector(".js-label-error");
const inputRace = document.querySelector(".js-input-race");

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const valueRace = inputRace.value;

addKitten.addEventListener("click", () => {
  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "Uy, parece que has olvidado algo";
  }
});

const newForm = document.querySelector(".js-new-form");

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

const clicPlus = document.querySelector(".js-plus");

clicPlus.addEventListener("click", handleClickNewCatForm);

function handleClickNewCatForm() {
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

addKitten.addEventListener("click", addNewKitten);

function addNewKitten(event) {
  event.preventDefault();
  listKitten.innerHTML += renderKitten(valuePhoto, valueDesc, valueName, valueRace);
}

function renderKitten(url, desc, name, race) {
  `<li class="card">
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
}

// uy has olvidad algo, falla algo. 
// acabar listado de crear un nuevo gatito. 
