const sideMenu = document.querySelector("aside")
const menuButton = document.querySelector("#menu-btn")
const closeButton = document.querySelector("#close-btn")


menuFunction = () => {
    sideMenu.style.display = 'block'
}

closeBtnFunction = () => {
    sideMenu.style.display = 'none'
}

menuButton.addEventListener('click', menuFunction)

closeButton.addEventListener('click', closeBtnFunction)