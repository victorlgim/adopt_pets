// CHAMAR AS FUNÇÕES DE DROPDOWN NAS RESPECTIVAS PASTAS DO IMPORT

function dropdownMenu() {
    const dropdown = document.querySelector(".menu-three");
    const header = document.querySelector(".header");
    const btnDropdown = document.querySelector(".buttons-dropdown");
    const dropdownLogin = document.querySelector(".btn-login-dropdown");
    const dropdownRegister = document.querySelector(".btn-register-dropdown");
    const closeDropdown = document.querySelector(".modal-close-x");
  
    dropdown.addEventListener("click", () => {
        console.log('aa')
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

  export { dropdownMenu }