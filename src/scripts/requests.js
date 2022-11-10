import { renderError } from "./homepage/login.js"
import {
  renderErrorEmail,
  verifyStatusOkRegister,
  resetFormRegister,
  toastVerifyRegister,
} from "./homepage/register.js"

async function register(body) {
  try {
    const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const button = document.querySelector(".btn-login-modal-a")
    button.innerHTML = `<img src='./src/assets/spinner.png' class='spinner-img'>`
    if (request.ok) {
      setTimeout(() => {
        toastVerifyRegister()
      }, 3000)
      setTimeout(() => {
        verifyStatusOkRegister()
        resetFormRegister()
        button.innerHTML = "Cadastrar"
      }, 5000)
      const data = await request.json()
      return data
    } else {
      setTimeout(() => {
        renderErrorEmail()
        button.innerHTML = "Cadastrar"
      }, 3000)
    }
  } catch (err) {
    console.log(err)
  }
}

async function login(body) {
  try {
    const request = await fetch(
      `https://m2-api-adot-pet.herokuapp.com/session/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
    const button = document.querySelector(".btn-login-modal")
    button.innerHTML = `<img src='./src/assets/spinner.png' class='spinner-img'>`

    if (request.ok) {
      const response = await request.json();
      console.log(response.user)
      console.log(response.token)
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setTimeout(() => {
        window.location.replace("./src/pages/profile.html")
      }, 2000)
    } else {
      setTimeout(() => {
        renderError()
        button.innerHTML = "Entrar"
      }, 2000)
    }
  } catch (err) {
    console.log(err)
  }
}

const baseURL = "https://m2-api-adot-pet.herokuapp.com"

async function getApiUserInformations() {
  const token = localStorage.getItem("token")

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(`${baseURL}/users/profile`, options)
    if (!responseJson.ok) {
      const response = await responseJson.json()
      console.log(response.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getApiProfileUpdate(body) {
  const token = localStorage.getItem("token")

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }
  try {
    const responseJson = await fetch(`${baseURL}/users/profile`, options)
    if (!responseJson.ok) {
      const response = await responseJson.json()
      console.log(response.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getApiDeleteUser(body) {
  const token = localStorage.getItem("token")

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(`${baseURL}/users/profile`, options)
    if (!responseJson.ok) {
      const response = await responseJson.json()
      console.log(response.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getApiUserPets() {
  const token = localStorage.getItem("token")

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(`${baseURL}/pets/my_pets`, options)
    if (!responseJson.ok) {
      const response = await responseJson.json()
      console.log(response.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getReadAllAdoptions() {
  const token = localStorage.getItem("token")

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const responseJson = await fetch(`${baseURL}/adoptions`, options)
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getReadAdoptionsById(id) {
  const token = localStorage.getItem("token")

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(`${baseURL}/adoptions/${id}`, options)
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getReadMyAdoptions() {
  const token = localStorage.getItem("token")

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(
      `${baseURL}/adoptions/myAdoptions`,
      options
    )
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function patchUpdateAdoptionById(id, body) {
  const token = localStorage.getItem("token")

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }
  try {
    const responseJson = await fetch(
      `${baseURL}/adoptions/update/${id}`,
      options
    )
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function deleteAdoptionById(id) {
  const token = localStorage.getItem("token")

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(
      `${baseURL}/adoptions/delete/${id}`,
      options
    )
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getApiRegisterPet(body) {
  const token = localStorage.getItem("token")

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }
  try {
    const responseJson = await fetch(`${baseURL}/pets`, options)
    if (!responseJson.ok) {
      const response = await responseJson.json()
      console.log(response.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

async function getApiUpdatePet(body, id) {
  const token = localStorage.getItem("token")

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }
  try {
    const responseJson = await fetch(`${baseURL}/pets/${id}`, options)
    if (!responseJson.ok) {
      const response = await responseJson.json()
      console.log(response.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

export {
  register,
  login,
  getApiUserInformations,
  getApiUserPets,
  getReadAllAdoptions,
  getReadAdoptionsById,
  getReadMyAdoptions,
  patchUpdateAdoptionById,
  deleteAdoptionById,
  getApiProfileUpdate,
  getApiDeleteUser,
  getApiRegisterPet,
  getApiUpdatePet,
}
