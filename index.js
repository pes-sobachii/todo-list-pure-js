const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.input-block__input')
const todoSubmit = document.querySelector('.input-block__submit')

todoSubmit.addEventListener('click', submitHandler)

function submitHandler(e) {
   e.preventDefault()
   const todoListItem = document.createElement('div')
   todoListItem.classList.add('todo-list__item')
   todoListItem.innerHTML=`
   <li class="todo-list__item-text">${todoInput.value}</li>
   <button class="todo-list__item-delete-button todo-button">d</button>
   <button class="todo-list__item-complete-button todo-button">c</button>`
   todoList.append(todoListItem)
   todoInput.value = ''
}