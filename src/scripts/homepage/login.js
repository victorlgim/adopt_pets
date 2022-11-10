import { login } from "../requests.js";

function entryToLogin() {
  const form = document.querySelector(".form-login");
  const elements = [...form.elements];
  const pwd = document.querySelector(".password-login-modal");

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const body = {};

    elements.forEach(e => {
      if (e.tagName !== "BUTTON" && e.value !== "") {
        body[e.id] = e.value;
      }
    });

    console.log(body);
    pwd.value = "";
    await login(body);
  });
}

function renderError() {
  const span = document.querySelector(".msg-error");
  const button = document.querySelector(".btn-login-modal");
  const inputPassword = document.querySelector(".password-login-modal");

  inputPassword.style.border = "1px solid #C73650";
  span.classList.remove("hidden");
  button.style.margin = "0px";
  span.style.margin = "-20px 0px 0px 0px";
}

function cleanInputPwd() {
  const inputEmail = document.querySelector(".email-login-modal");
  const inputPwd = document.querySelector(".password-login-modal");
  const span = document.querySelector(".msg-error");

  inputEmail.addEventListener("keyup", () => {
    span.classList.add("hidden");
    inputEmail.style.border = "1px solid #b48cf2";
    inputPwd.style.border = "1px solid #b48cf2";
  });

  inputPwd.addEventListener("keyup", () => {
    span.classList.add("hidden");
    inputEmail.style.border = "1px solid #b48cf2";
    inputPwd.style.border = "1px solid #b48cf2";
  });
}

function cleanPwd() {
  const inputPwd = document.querySelector("#password");
  inputPwd.value = "";
}

export { entryToLogin, renderError, cleanInputPwd, cleanPwd };
