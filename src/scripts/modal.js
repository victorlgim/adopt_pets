// NÃO CHAMEM AS FUNÇÕES CRIADAS DO MODAL NO ESCOPO GLOBAL
// AO CRIAREM, EXPORTEM PARA A PASTA IMPORTS DA RESPECTIVA PÁGINA QUE ESTÃO TRABALHANDO

function toggleOpenModalHomePage() {
   const closeModalRegister = document.querySelector('.close-top-modal-a')
   const openModalRegister = document.querySelector('.btn-login-header')
   const openModalTwoRegister = document.querySelector('.btn-login-dropdown')
   const register = document.querySelector('.modal-container-a')

   closeModalRegister.addEventListener('click', () => {
     register.classList.add('hidden')
   })

   openModalRegister.addEventListener('click', () => {
     register.classList.remove('hidden')
   })

   openModalTwoRegister.addEventListener('click', () => {
    register.classList.remove('hidden')
  })

  const closeModalLogin = document.querySelector('.close-top-modal')
  const openModalLogin = document.querySelector('.btn-register-header')
  const openModalTwoLogin = document.querySelector('.btn-register-dropdown')
  const login = document.querySelector('.modal-container')

  closeModalLogin.addEventListener('click', () => {
    login.classList.add('hidden')
  })

  openModalLogin.addEventListener('click', () => {
    login.classList.remove('hidden')
  })

  openModalTwoLogin.addEventListener('click', () => {
   login.classList.remove('hidden')
 })
}

export { toggleOpenModalHomePage }