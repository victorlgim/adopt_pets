// CHAMAR AS FUNÇÕES DE DROPDOWN NAS RESPECTIVAS PASTAS DO IMPORT

import {
  initPerfil,
  initUserPets,
  logoutEvent,
  renderUserInformations,
  renderUserPets,
  updateUserInformationsEvent,
  deleteUserEvent,
  registerPetEvent,
  readToAdoptPets
} from "../profile/profile.js"

logoutEvent()
renderUserInformations(initPerfil)
renderUserPets(initUserPets)
updateUserInformationsEvent()
deleteUserEvent()
registerPetEvent()
readToAdoptPets()
