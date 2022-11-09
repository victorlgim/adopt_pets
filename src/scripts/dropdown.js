// CHAMAR AS FUNÇÕES DE DROPDOWN NAS RESPECTIVAS PASTAS DO IMPORT

function switchButtons(){
  const btnMenu = document.querySelector('#menu')
  const btnX = document.querySelector('#closeMenu')
  const divButtons = document.querySelector('.div-btn-hidden')

  btnMenu.addEventListener('click',() => {
      btnMenu.classList.add('hidden')
      btnX.classList.remove('hidden')
      divButtons.classList.remove('hidden')
  })

  btnX.addEventListener('click',() => {
      btnMenu.classList.remove('hidden')
      btnX.classList.add('hidden')
      divButtons.classList.add('hidden')
  })
}

function dropdownMenu() {
    const dropdown = document.querySelector(".menu-three");
    const header = document.querySelector(".header");
    const btnDropdown = document.querySelector(".buttons-dropdown");
    const closeDropdown = document.querySelector(".modal-close-x");
  
    dropdown.addEventListener("click", () => {
      header.style.height = "110px";
      btnDropdown.classList.remove("hidden");
      btnDropdown.style.margin = '10px 0px 0px 0px'
      closeDropdown.classList.remove("hidden");
      dropdown.classList.add("hidden");
    });
  
    closeDropdown.addEventListener("click", () => {
      header.style.height = "60px";
      btnDropdown.classList.add("hidden");
      closeDropdown.classList.add("hidden");
      dropdown.classList.remove("hidden");
    });
  }

// CHAMAR AS FUNÇÕES DE DROPDOWN NAS RESPECTIVAS PASTAS DO IMPORT

  export { dropdownMenu, switchButtons }