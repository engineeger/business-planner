export default function modal() {
    function scrollChanger() {
        document.body.classList.toggle('no-scroll')
        document.documentElement.classList.toggle('no-scroll')
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.js-open-modal')) {
            const parent = e.target.closest('.js-open-modal')
            const modal = document.querySelector(`[data-modal="${parent.dataset.target}"]`)
            modal.classList.add('open')
            scrollChanger()
        }

        if (e.target.closest('.js-modal-close')) {
            const parent = e.target.closest('.js-modal-close').closest('.js-modal')
            const modal = parent.closest('.js-modal')
            modal.classList.remove('open')
            scrollChanger()
        }
    })
}
