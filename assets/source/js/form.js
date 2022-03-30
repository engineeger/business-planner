export default function form() {
    const forms = [...document.querySelectorAll('.js-form')]

    if (!forms.length) return false

    forms.forEach(form => {
        const callback = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('A child node has been added or removed.')
                } else if (mutation.type === 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.')
                }
            }
        }
        const observer = new MutationObserver(callback)
        observer.observe(
            form,
            {
                attributes: true,
                childList: true,
                subtree: true
            }
        )

        form.onsubmit = (e) => {
            e.preventDefault();
            window.history.back();
        }
    })
}
