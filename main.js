const menu = document.querySelector(".menu-container")
const closeBtn = document.querySelector(".close-btn")
const openBtn = document.querySelector(".open-btn")


openBtn.addEventListener("click", ()=> {
    menu.classList.add("show")
})
closeBtn.addEventListener("click", ()=> {
    menu.classList.remove("show")
})