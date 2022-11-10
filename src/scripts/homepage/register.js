import { register } from "../requests.js";

async function registerUsers() {
  const form = document.querySelector(".form-login-a");
  const elements = [...form.elements];
  const pwd = document.querySelector("#password");

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
    await register(body);
  });
}

function resetFormRegister() {
  const form = document.querySelector(".form-login-a");
  form.reset();
}

function renderErrorEmail() {
  const span = document.querySelector(".msg-error-email");
  const inputEmail = document.querySelector(".password-login-modal-a");

  inputEmail.style.border = "1px solid #C73650";
  span.classList.remove("hidden");
}

function cleanInputEmail() {
  const inputEmail = document.querySelector(".password-login-modal-a");
  const span = document.querySelector(".msg-error-email");

  inputEmail.addEventListener("keyup", () => {
    span.classList.add("hidden");
    inputEmail.style.border = "1px solid #b48cf2";
  });
}

function verifyStatusOkRegister() {
  const modalRegister = document.querySelector(".modal-container-a");
  const modalLogin = document.querySelector(".modal-container");

  modalRegister.classList.add("hidden");
  modalLogin.classList.remove("hidden");
}

function toastVerifyRegister() {
  const modal = document.querySelector(".modal-container-verify");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 4000);
}

export {
  registerUsers,
  renderErrorEmail,
  cleanInputEmail,
  verifyStatusOkRegister,
  resetFormRegister,
  toastVerifyRegister,
};
