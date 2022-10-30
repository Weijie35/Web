const btns = document.querySelectorAll('.faq-toggle')

btns.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
