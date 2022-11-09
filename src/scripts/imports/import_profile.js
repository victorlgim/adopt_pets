// chave localstorage user-login

import { getApiUserInformations, getApiUserPets } from "../requests.js"

function openModal(child) {
  if (child) {
    const divModalBackground = document.createElement("div")
    const sectionModalContainer = document.createElement("section")
    const divButtonCloseContainer = document.createElement("div")
    const buttonModalClose = document.createElement("button")
    const imgX = document.createElement("img")
    const divChild = document.createElement("div")
    const divBrandBox = document.createElement("div")

    divModalBackground.classList = "modal-bg-container"
    divModalBackground.id = "modal"

    sectionModalContainer.classList = "modal-container"
    divButtonCloseContainer.classList = "button-close-container"
    divChild.classList = "modal-container-content"
    divBrandBox.classList = "purple-box"

    imgX.src = "../assets/xFigma.svg"
    imgX.id = "img-close-modal"

    buttonModalClose.id = "button-close-modal"

    buttonModalClose.appendChild(imgX)
    divButtonCloseContainer.appendChild(buttonModalClose)
    divChild.append(child)
    sectionModalContainer.append(divButtonCloseContainer, divChild, divBrandBox)
    divModalBackground.appendChild(sectionModalContainer)

    const main = document.querySelector("main")
    main.appendChild(divModalBackground)

    divModalBackground.addEventListener("mousedown", (event) => {
      if (
        event.target.className == "modal-bg-container" ||
        event.target.id == "img-close-modal" ||
        event.target.id == "button-close-modal"
      ) {
        divModalBackground.remove()
      }
    })
  }
}

const token = localStorage.getItem("user-login")
const initPerfil = await getApiUserInformations()
const initUserPets = await getApiUserPets()

// apaga do local storage e redireciona pra pagina principal
function logoutEvent() {
  const button = document.querySelector("#logout")
  button.addEventListener("click", () => {
    localStorage.removeItem("user-login")
    window.location.replace("../../index.html")
  })
}

//recebe informações do usuario, zera a ul e renderiza
async function renderUserInformations(perfil) {
  if (perfil) {
    const imgAvatar = document.querySelector("#avatar")
    imgAvatar.onerror = () => (imgAvatar.src = "../assets/no-image.png")

    const spanName = document.querySelector("#name")
    const spanEmail = document.querySelector("#email")

    imgAvatar.src = perfil.avatar_url
    imgAvatar.alt = perfil.name

    spanName.innerText = perfil.name

    spanEmail.innerText = perfil.email
  }
}

//recebe lista de pets, zera a ul e renderiza
function renderUserPets(pets) {
  const ulPetsList = document.querySelector("#petsList")
  ulPetsList.innerHTML = ""

  if (pets.length != 0) {
    pets.forEach((pet) => {
      const li = document.createElement("li")
      const img = document.createElement("img")
      const div = document.createElement("div")
      const p = document.createElement("p")
      const span = document.createElement("span")
      const spanName = document.createElement("span")
      const p2 = document.createElement("p")
      const span2 = document.createElement("span")
      const spanSpecies = document.createElement("span")
      const p3 = document.createElement("p")
      const span3 = document.createElement("span")
      const spanAdoption = document.createElement("span")
      const buttonUpdate = document.createElement("button")

      li.classList = "card"
      span.classList = "color-brand-1"
      spanName.classList = "color-black"
      span2.classList = "color-brand-1"
      spanSpecies.classList = "color-black"
      span3.classList = "color-brand-1"
      spanAdoption.classList = "color-black"
      buttonUpdate.classList = "button button-user button-brand"

      img.src = pets.avatar_url
      img.onerror = () => (img.src = "../assets/no-image.png")

      span.innerText = "Nome: "
      span2.innerText = "Espécie: "
      span3.innerText = "Adotável: "

      spanName.innerText = pet.name
      spanSpecies.innerText = pet.species
      if (pet.available_for_adoption) {
        spanAdoption.innerText = "Sim"
      } else {
        spanAdoption.innerText = "Não"
      }
      buttonUpdate.innerText = "Atualizar"

      p.append(span, spanName)
      p2.append(span2, spanSpecies)
      p3.append(span3, spanAdoption)
      div.append(p, p2, p3, buttonUpdate)
      li.append(img, div)

      ulPetsList.appendChild(li)
    })
  }
}

async function updateUserInformationsEvent() {
  const buttonUpdate = document.querySelector("#updateUser")
  buttonUpdate.addEventListener("click", () => {
    const pTitle = document.createElement("p")
    const form = document.createElement("form")
    const inputName = document.createElement("input")
  })
}

logoutEvent()
renderUserInformations(initPerfil)
renderUserPets(initUserPets)
