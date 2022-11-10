import { getReadAllAdoptions } from '../requests.js'
import { switchButtons } from '../dropdown.js'
import { logoutPrincipal, renderCardsPrincipal, toggleButtonAdopt } from '../principal/principal.js'

switchButtons()
logoutPrincipal()
renderCardsPrincipal(await getReadAllAdoptions())
toggleButtonAdopt()





