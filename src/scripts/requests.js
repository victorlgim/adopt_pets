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
    if (request.ok) {
      verifyStatusOkRegister();
      resetFormRegister() 
      const data = await request.json();
      return data
    } else {
      renderErrorEmail();
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

    if (request.ok) {
      const response = await request.json();
      localStorage.setItem("token", response.token);
      localStorage.setItem('user', response.user)
      window.location.replace('./src/pages/profile.html')
    } else {
      renderError();
    }
  } catch (err) {
    console.log(err);
  }
}

export { register, login };
