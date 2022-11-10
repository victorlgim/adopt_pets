import {
  logoutEvent,
  updateUserInformationsEvent,
  deleteUserEvent,
  registerPetEvent,
  readToAdoptPets,
  verifyRenderStatus,
} from "../profile/profile.js";

logoutEvent();
verifyRenderStatus();
updateUserInformationsEvent();
deleteUserEvent();
registerPetEvent();
readToAdoptPets();

const token = localStorage.getItem("token");

if (token == null) {
  window.location.replace("../../index.html");
}
