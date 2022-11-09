

function logoutPrincipal () {
    const logout = document.querySelector('.button-logout')
    const profile = document.querySelector('.button-profile')

    logout.addEventListener('click', () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        window.location.replace('../../index.html')
    })

    profile.addEventListener('click', () => {
        window.location.replace('./profile.html')
    })
}

export { logoutPrincipal }