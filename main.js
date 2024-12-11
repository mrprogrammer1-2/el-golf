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

// ===============

function navigateservices(serveId) {
    window.location.href = `services.html#${serveId}`
}
function navigatedevices(devId) {
    window.location.href = `devices.html#${devId}`
}

document.addEventListener("DOMContentLoaded", ()=> {
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'instant',
                block: 'start'
            })
        }
    }
})