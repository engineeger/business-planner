import modal from './modal'
import '../css/main.css'

let modalStatus = false

document.body.addEventListener('click', (e) => {
    modalStatus = !modalStatus
    modal(modalStatus)
})
