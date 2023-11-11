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

const form = document.getElementById("form")

form.addEventListener('submit', function (e) {
    e.preventDefault() //no recarga pagina al enviar

    const input = this.elements
    const dataForm = {
        nombre: input.name.value,
        correo: input.email.value,
        mensaje: input.message.value
    }

    const URL = 'https://formsubmit.co/ajax/'
    const email = 'jhondavid1816r@gmail.com'

    fetch(URL + email, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dataForm)
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector('.message--success').classList.remove('hidden')
            form.reset() 

            setTimeout(() => {
                document.querySelector('.message--success').classList.add('hidden')
            }, 3000)
        })
        .catch(error => {
            document.querySelector('.message--errors').classList.remove('hidden')
            setTimeout(() => {
                document.querySelector('.message--error').classList.add('hidden')
            }, 3000)
        })
})