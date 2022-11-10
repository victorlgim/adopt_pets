import { dropdownMenu } from "../dropdown.js";
import {
  toggleOpenModalHomePage,
  toggleBetweenDiretoryModal,
} from "../modal.js";
import { registerUsers } from "../homepage/register.js";
import { entryToLogin, cleanInputPwd, cleanPwd } from "../homepage/login.js";
import { cleanInputEmail } from "../homepage/register.js";

dropdownMenu();
toggleOpenModalHomePage();
registerUsers();
toggleBetweenDiretoryModal();
entryToLogin();
cleanInputPwd();
cleanPwd();
cleanInputEmail();
