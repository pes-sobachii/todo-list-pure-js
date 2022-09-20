const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('.input-block__input')
const todoSubmit = document.querySelector('.input-block__submit')
const filterButtons = document.querySelectorAll('.filter-button')
const filterBlock = document.querySelector('.filter')

todoSubmit.addEventListener('click', submitHandler)
todoList.addEventListener('click', todoButtonHandler)
//filterButtons.forEach((item) => {
//   item.addEventListener('click', filterHandler)
//})
filterBlock.addEventListener('click', filterHandler)

function filterHandler(e){
   e.preventDefault()
   const targetClasses = e.target.classList
   if (targetClasses.contains('filter__completed')){
      todoFiltration('completed')
   } else if (targetClasses.contains('filter__uncompleted')){
      todoFiltration('uncompleted')
   } else {
      todoFiltration()
   }
}

function todoFiltration(criteria) {
   const todoItems = document.querySelectorAll('.todo-list__item')
   todoItems.forEach(element => {
         if (criteria === 'completed' && !element.classList.contains(`completed`)){
            element.style.display = 'none'
         } else if(criteria === 'uncompleted' && element.classList.contains(`completed`)){
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
   <button class="todo-list__item-delete-button todo-button">d</button>
   <button class="todo-list__item-complete-button todo-button">c</button>`
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