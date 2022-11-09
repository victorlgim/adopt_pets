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

    console.log(body)
    pwd.value = "";
    await register(body);
  });
}

export { registerUsers }