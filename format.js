// ===== menu button ======//

const openbtn = document.getElementById("menu-button")
const menu = document.getElementById("all-menu")
const closebtn = document.getElementById("cross")


openbtn.addEventListener('click', () => {
    menu.classList.remove('max-sm:hidden')
    closebtn.classList.remove('hidden')
    openbtn.classList.add('hidden')   
})

closebtn.addEventListener('click', () => {
    menu.classList.add('max-sm:hidden')
    closebtn.classList.add('hidden')
    openbtn.classList.remove('hidden') 
})



const mobilemenu = document.getElementById('mobile-menu');

mobilemenu.addEventListener('click', (event) => {
    if (event.target.tagname === 'a') {
        
        mobilemenu.classList.add('hidden');
    }
});




