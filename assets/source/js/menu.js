function scrollChanger() {
    document.body.classList.toggle('no-scroll')
    document.documentElement.classList.toggle('no-scroll')
}

export default function menu () {
    document.querySelector('.js-menu').addEventListener('click', e => {
        if (e.target.closest('li')) {
            const status = document.querySelector('.js-menu-status')
            status.checked = !status.checked
            scrollChanger()
        }
    })

    document.querySelector('.js-menu-status').onclick = () => {
        scrollChanger()
    }

    window.addEventListener('resize', () => {
        const status = document.querySelector('.js-menu-status')
        if(status.checked) {
            status.checked = !status.checked
            scrollChanger()
        }
    })
}
