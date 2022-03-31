import IMask from 'imask'

export default function form() {
    const tels = document.querySelectorAll('.js-tel')

    tels.forEach(tel => {
        IMask(
            tel,
            { mask: '+{7} (000) 000-00-00' }
        )
    })

    const inputs = document.querySelectorAll('input')
    const textareas = document.querySelectorAll('textarea')
    const fields = [...inputs, ...textareas]

    fields.forEach(field => {
        field.onkeyup = e => {
            const parent = e.target.closest('.input_box')
            const status = parent.querySelector('.input_img')
            const length = e.target.type === 'tel' ? 18 : 3

            status.classList.add('show')
            e.target.value.length < length ? parent.classList.add('invalid') : parent.classList.remove('invalid')
            status.src = `./assets/source/img/${e.target.value.length < length ? 'no' : 'yes'}.png`
        }
    })

    document.body.addEventListener('click', e => {
        if (e.target.closest('.js-submit')) {
            const parent = e.target.closest('.js-submit')
            const form = parent.closest('.js-form')
            const invalids = form.querySelectorAll('.invalid')
            const shows = form.querySelectorAll('.show')
            const inputs = form.querySelectorAll('input')
            const textareas = form.querySelectorAll('textarea')
            const fields = [...inputs, ...textareas]

            if (!invalids.length && shows.length === fields.length) {
                let formData = new FormData()

                fields.forEach(field => {
                    formData.append(field.name, field.value)
                })

                fetch('./ajaxSend.php', {
                    method: 'POST',
                    body: formData
                }).then((res) => {
                    console.log(res)
                    if (res.ok) {
                        const modalForm = document.querySelector('.js-modal.open[data-modal="formSend"]')
                        const modalOk = document.querySelector('.js-modal[data-modal="sendOk"]')
                        if (modalForm) modalForm.classList.remove('open')
                        modalOk.classList.add('open')
                    } else {
                        throw new Error()
                    }
                }).catch(() => {
                    throw new Error()
                })
            }

            form.onsubmit = event => event.preventDefault()
        }
    })
}
