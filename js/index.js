const form = document.querySelector('form')
const ul = document.querySelector('ul')
const alertSuccess = document.querySelector('.alert-success')
const alertDanger = document.querySelector('.alert-danger')


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    createItem(form['new-item'].value)
    form['new-item'].value = ''
})

function createItem(value) {
    const li = createLi(value)
    ul.appendChild(li)
    ul.removeAttribute('hidden')
    showAlert('success')
}

function deleteItem(event) {
    event.target.parentElement.remove()
    showAlert('danger')
    if(!ul.hasChildNodes()) ul.setAttribute('hidden', true)
}

function showAlert(type) {
    switch(type){
        case 'success':
        alertDanger.setAttribute('hidden', true)
        alertSuccess.removeAttribute('hidden')
        break
        case 'danger':
        alertSuccess.setAttribute('hidden', true)
        alertDanger.removeAttribute('hidden')
        break
    }
}

function createLi(value) {
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('class', 'checkbox')

    const span = document.createElement('span')
    span.textContent = value

    const img = document.createElement('img')
    img.setAttribute('src', 'assets/icons/trash.svg')
    img.setAttribute('alt', 'Ícone de deletar')
    img.addEventListener('click', deleteItem)

    const li = document.createElement('li')
    li.append(input, span, img)

    return li
}