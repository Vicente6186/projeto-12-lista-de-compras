const form = document.querySelector('form')
const ul = document.querySelector('ul')
const alertSuccess = document.querySelector('.alert-success')
const alertDanger = document.querySelector('.alert-danger')


// Listener que cria o item da lista quando o formulário é enviado
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    createItem()
})

// Cria o item da lista e exibe o alerta de criado
function createItem() {
    const li = createLi(form['new-item'].value)
    ul.appendChild(li)
    ul.removeAttribute('hidden')
    showAlert('success')
    form['new-item'].value = ''
}

// Remove o item da lista e exibe o alerta de deletado
function deleteItem(event) {
    event.target.parentElement.remove()
    showAlert('danger')
    if(!ul.hasChildNodes()) ul.setAttribute('hidden', true)
}

// Cria o item da lista
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

// Exibe e oculta os alertas
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