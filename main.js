const menu = document.querySelector(".menu-container")
const closeBtn = document.querySelector(".close-btn")
const openBtn = document.querySelector(".open-btn")


openBtn.addEventListener("click", ()=> {
    menu.classList.add("show")
})
closeBtn.addEventListener("click", ()=> {
    menu.classList.remove("show")
})

// ============ header shadow ============

const showShadow = ()=> {
    const header = document.getElementById("header")

    if (window.scrollY > 50) {
        header.classList.add("show-shadow")
    } else {
        header.classList.remove("show-shadow")
    }
}

window.addEventListener("scroll", showShadow)