/* menu */
let header = document.querySelector("header")
let logo = document.querySelector("#menu_logo")
let menu = document.querySelector("#menu")

window.addEventListener("scroll", function(){
    header.classList.toggle("below",this.window.scrollY > 150)
    logo.classList.toggle("below",this.window.scrollY > 150)
    menu.classList.toggle("below",this.window.scrollY > 150)
})

