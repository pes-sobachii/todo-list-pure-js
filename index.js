const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.input-block__input')
const todoSubmit = document.querySelector('.input-block__submit')
const filterBlock = document.querySelector('.filter')

todoSubmit.addEventListener('click', submitHandler)
todoList.addEventListener('click', todoButtonHandler)
filterBlock.addEventListener('click', filterHandler)

function filterHandler(e){
   e.preventDefault()
   const list = e.target.classList
   const todoItems = document.querySelectorAll('.todo-list__item')
   todoItems.forEach(element => {
         if (list[0] === 'filter__completed' && !element.classList.contains(`completed`)){
            element.style.display = 'none'
         } else if(list[0] === 'filter__uncompleted' && element.classList.contains(`completed`)){
            element.style.display = 'none'
         } else {
            element.style.display = 'flex'
         }
      });
}

function submitHandler(e) {
   e.preventDefault()
   const todoListItem = document.createElement('div')
   todoListItem.classList.add('todo-list__item')
   todoListItem.innerHTML=`
   <li class="todo-list__item-text">${todoInput.value}</li>
   <button class="todo-list__item-delete-button todo-button"><i class="fa fa-trash"></i></button>
   <button class="todo-list__item-complete-button todo-button"><i class="fa fa-check"></i></button>`
   todoList.append(todoListItem)
   todoInput.value = ''
}

function todoButtonHandler(e) {
   const item = e.target
   if (item.classList.contains('todo-list__item-delete-button')) {
      item.parentElement.classList.add('disappear')
      item.parentElement.addEventListener('transitionend', () => (item.parentElement.remove()))
   }else if(item.classList.contains('todo-list__item-complete-button')){
      item.parentElement.classList.toggle('completed')
   }
}