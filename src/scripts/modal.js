// NÃO CHAMEM AS FUNÇÕES CRIADAS DO MODAL NO ESCOPO GLOBAL
// AO CRIAREM, EXPORTEM PARA A PASTA IMPORTS DA RESPECTIVA PÁGINA QUE ESTÃO TRABALHANDO

function toggleOpenModalHomePage() {
  const closeModalRegister = document.querySelector(".close-top-modal-a")
  const openModalRegister = document.querySelector(".btn-login-header")
  const openModalTwoRegister = document.querySelector(".btn-login-dropdown")
  const register = document.querySelector(".modal-container-a")

  closeModalRegister.addEventListener("click", () => {
    register.classList.add("hidden")
  })

  openModalRegister.addEventListener("click", () => {
    register.classList.remove("hidden")
  })

  openModalTwoRegister.addEventListener("click", () => {
    register.classList.remove("hidden")
  })

  const closeModalLogin = document.querySelector(".close-top-modal")
  const openModalLogin = document.querySelector(".btn-register-header")
  const openModalTwoLogin = document.querySelector(".btn-register-dropdown")
  const login = document.querySelector(".modal-container")

  closeModalLogin.addEventListener("click", () => {
    login.classList.add("hidden")
  })

  openModalLogin.addEventListener("click", () => {
    login.classList.remove("hidden")
  })

  openModalTwoLogin.addEventListener("click", () => {
    login.classList.remove("hidden")
  })
}

function toggleBetweenDiretoryModal() {
  const toggleRegister = document.querySelector(".ancora-modal-login-a")
  const toggleLogin = document.querySelector(".ancora-modal-login")
  const login = document.querySelector(".modal-container")
  const register = document.querySelector(".modal-container-a")
  const formRegister = document.querySelector(".form-login-a")
  const formLogin = document.querySelector(".form-login")
  const span = document.querySelector(".msg-error-email")
  const inputEmail = document.querySelector(".password-login-modal-a")
  const inputPwd = document.querySelector(".password-login-modal")
  const spanTwo = document.querySelector(".msg-error")

  toggleRegister.addEventListener("click", () => {
    register.classList.add("hidden")
    login.classList.remove("hidden")
    formRegister.reset()
    span.classList.add("hidden")
    inputEmail.style.border = "1px solid #b48cf2"
  })

  toggleLogin.addEventListener("click", () => {
    login.classList.add("hidden")
    register.classList.remove("hidden")
    formLogin.reset()
    spanTwo.classList.add("hidden")
    inputPwd.style.border = "1px solid #b48cf2"
  })
}

export { toggleOpenModalHomePage, toggleBetweenDiretoryModal }
