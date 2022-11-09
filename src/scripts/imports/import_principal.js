import{getPetsAdopt} from '../requests.js'
import { switchButtons } from '../dropdown.js'
import { logoutPrincipal,renderCardsPrincipal } from '../principal/principal.js'
console.log( await getPetsAdopt())
switchButtons()
logoutPrincipal()




