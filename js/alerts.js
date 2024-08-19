const alertClose = document.querySelectorAll('.alert-close')

alertClose.forEach(element => {
    element.addEventListener('click', ()=> element.parentElement.setAttribute('hidden', true))
})