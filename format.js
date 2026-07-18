// ===== menu button ======//

const openbtn = document.getElementById("menu-button")
const menu = document.getElementById("all-menu")
const closebtn = document.getElementById("cross")
const openbar = document.getElementById('openmenubtn')


openbtn.addEventListener('click', () => {
    menu.classList.remove('max-sm:hidden')
    closebtn.classList.remove('hidden')
    openbtn.classList.add('hidden')
    openbar.classList.remove('hidden')   
})

closebtn.addEventListener('click', () => {
    menu.classList.add('max-sm:hidden')
    closebtn.classList.add('hidden')
    openbtn.classList.remove('hidden') 
    openbar.classList.add('hidden')
})


const menulinks = menu.querySelectorAll('a')

menulinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('max-sm:hidden');
        openbtn.classList.remove('hidden');
        openbar.classList.add('hidden')
    })
})


// ====== search ======= //


let search = document.getElementById("searchbtn");
let search_property = document.getElementById("search-items");
let enterbtn = document.getElementById("enter")
let backbtn = document.getElementById("back")
let nav = document.getElementById('navigation')


search.addEventListener('click', () => {

    search.classList.add('hidden')
    search_property.classList.remove('hidden')
    backbtn.classList.remove('hidden')
    openbtn.classList.add('hidden')
})

enterbtn.addEventListener('click', () => {

    search.classList.remove('hidden')
    search_property.classList.add('hidden')
    backbtn.classList.add('hidden')
    openbtn.classList.remove('hidden')
})

backbtn.addEventListener('click', () => {

    search.classList.remove('hidden')
    search_property.classList.add('hidden')
    backbtn.classList.add('hidden')
    openbtn.classList.remove('hidden')
})






