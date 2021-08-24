const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')
let todosConversion = Array.from(todosContainer.children)

const getMarkdowDOM = inputValue => `
 <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
  </li>`
const addTasksHTML = task => {
  const tasksValue = task.target.add.value.trim().toLowerCase()
  if (tasksValue.length) {
    todosContainer.innerHTML += getMarkdowDOM(tasksValue)
  }
}
const removeTodo = (event) => {
  const taskValue = event.target
  if (Array.from(taskValue.classList).includes('delete')) {
    console.log(taskValue.parentElement.remove());
  }
}
const filterTodo = (event) => {
  const inputValue = event.target.value.trim().toLowerCase()
  showHiddenTodo(inputValue)
  showDFlexTodo(inputValue)
}
const showHiddenTodo = text => {
  todosConversion.filter(children =>
    !children.textContent.includes(text)).forEach(li => {
    li.classList.remove('d-flex')
    li.classList.add('hidden')
  })
}
const showDFlexTodo = text => {
  todosConversion.filter(children =>
    children.textContent.includes(text)).forEach(li => {
    li.classList.remove('hidden')
    li.classList.add('d-flex')
  })
}
formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  addTasksHTML(event)
  event.target.reset()
})
todosContainer.addEventListener('click', removeTodo)
inputSearchTodo.addEventListener('input', filterTodo)