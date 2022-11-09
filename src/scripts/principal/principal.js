
function renderCardsPrincipal(list){
    const ul = document.querySelector('.list-animals')

    const li = document.createElement('li')
    const img = document.createElement('img')
    const divInformation = document.createElement('div')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')
    const divBtn = document.createElement('div')
    const btnAdopt = document.createElement('button')

    li.classList.add('card-animals')
    img.classList.add('img-card')
    img.src = list.avatar_url

    divInformation.classList.add('information-animals')
    h2.innerText = list.name
    span.innerText = list.species

    divBtn.classList.add('div-btn-adopt')
    btnAdopt.classList.add('btn-adopt')

    divBtn.appendChild(btnAdopt)
    divInformation.append(h2,span)
    
    li.append(img,divInformation,divBtn)
    ul.appendChild(li)
}
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

export { logoutPrincipal,renderCardsPrincipal }