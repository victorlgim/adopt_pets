import { renderError } from "./homepage/login.js";
import { renderErrorEmail, verifyStatusOkRegister, resetFormRegister } from "./homepage/register.js";

async function register(body) {
  try {
    const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const button = document.querySelector(".btn-login-modal-a");
    button.innerHTML = `<img src='./src/assets/spinner.png' class='spinner-img'>`;
    if (request.ok) {
      setTimeout(() => {
        verifyStatusOkRegister();
        resetFormRegister();
        button.innerHTML = "Cadastrar";
      }, 2000);
      const data = await request.json();
      return data;
    } else {
      setTimeout(() => {
        renderErrorEmail();
        button.innerHTML = "Cadastrar";
      }, 2000);
    }
  } catch (err) {
    console.log(err);
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
    );
    const button = document.querySelector(".btn-login-modal");
    button.innerHTML = `<img src='./src/assets/spinner.png' class='spinner-img'>`;

    if (request.ok) {
      const response = await request.json();
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", response.user);
      setTimeout(() => {
        window.location.replace("./src/pages/profile.html");
      }, 2000);
    } else {
      setTimeout(() => {
        renderError();
        button.innerHTML = "Entrar";
      }, 2000);
    }
  } catch (err) {
    console.log(err);
  }
}

export { register, login };
