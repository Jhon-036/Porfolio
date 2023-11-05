/* menu */
const nav = document.querySelector("#menu_item")
const open = document.querySelector("#btn_open")
const close = document.querySelector("#btn_close")

open.addEventListener("click", () => {
    nav.classList.add("visible")
})

close.addEventListener("click", () => {
    nav.classList.remove("visible")
})