

const buttonProfile = document.querySelector(".button-profile")
const buttonLogout = document.querySelector(".button-logout")


buttonProfile.addEventListener("click", ()=>{
    setTimeout(()=>{
        window.location.assign(`${window.location.origin}/src/pages/profile.html`)
    },1000)
})

buttonLogout.addEventListener("click", ()=>{
    setTimeout(()=>{
        window.location.assign(`${window.location.origin}/index.html`)
    },1000)
})