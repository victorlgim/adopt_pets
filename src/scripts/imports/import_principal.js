import { switchButtons } from "../dropdown.js";
import {
  logoutPrincipal,
  validateRenderPrincipal,
  toggleButtonAdopt,
} from "../principal/principal.js";

switchButtons();
logoutPrincipal();
validateRenderPrincipal();
setTimeout(() => {
  toggleButtonAdopt();
}, 1000);

const token = localStorage.getItem("token");

if (token == null) {
  window.location.replace("../../index.html");
}
