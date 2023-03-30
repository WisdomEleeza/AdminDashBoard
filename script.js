const sideMenu = document.querySelector("aside")
const menuButton = document.querySelector("#menu-btn")
const closeButton = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")

//show sideBar
menuButtonFunction = () => {
    sideMenu.style.display = 'block'
}

menuButton.addEventListener('click', menuButtonFunction)

//close sideBar
closeBtnFunction = () => {
    sideMenu.style.display = 'none'
}

closeButton.addEventListener('click', closeBtnFunction)


//change Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active') 
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
    // themeToggler.querySelector('span').classList.toggle('active')
})

//fill orders in the table
Orders.forEach(order => {
    
})