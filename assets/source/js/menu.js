function scrollChanger() {
    document.body.classList.toggle('no-scroll')
    document.documentElement.classList.toggle('no-scroll')
}

export default function menu () {
    var screenWidth = window.innerWidth
    const status = document.querySelector('.js-menu-status')
    
    document.querySelector('.js-menu').addEventListener('click', e => {
        if (e.target.closest('li')) {
            status.checked = !status.checked
            if (screenWidth <= 992) scrollChanger()
        }
    })
    
    document.body.addEventListener('click', e => {
        if (e.target.closest('.js-close-menu')) {
            status.checked = false
            if (screenWidth <= 992) scrollChanger()
        }
    })

    document.querySelector('.js-menu-status').onclick = () => {
        if (screenWidth <= 992) scrollChanger()
    }

    window.addEventListener('resize', () => {
        screenWidth = window.innerWidth
            status.checked = false
            document.body.classList.remove('no-scroll')
            document.documentElement.classList.remove('no-scroll')
    })
}
