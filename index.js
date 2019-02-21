
  const createTaskForm = document.querySelector("#create-task-form")
  const tasks = document.querySelector("#tasks")
  const input = document.querySelector('#new-task-description')
  const mainContent = document.querySelector('#main-content')

  const newButton = document.createElement('input')
  newButton.value = 'New List'
  newButton.type = "button"
  createTaskForm.append(newButton)




// addEventListener for new task
form.addEventListener('click', newList)
  createTaskForm.addEventListener('submit', showNewTask)

  function showNewTask(event){
    event.preventDefault();

    const text = input.value
    const li = document.createElement('li');
    li.innerText = text;

    const button = document.createElement('button');
    button.type = "button";
    button.textContent = "Delete"
    button.id = 'delete-btn'
    button.addEventListener('click', deleteButton)

    li.append(button)
    tasks.append(li)
    input.value = ""
    // other way
    // tasks.innerHTML = `<li>${newTask}</li>`
  }
// end of function


function deleteButton(event){
  // debugger
   const remove = event.target.parentNode.remove()
}


function newList(event){
  const div = document.createElement('div')
  div.id = "new-list"
  const header = document.createElement('h2')
  header.innerText = "My New Todos"
  const ul = document.createElement('ul')
  ul.id = "tasks-2"

  const form = document.createElement('form')
  form.id = "new-tasks-form"
  const input = document.createElement('input')
  const input2 = document.createElement('input')

  input2.type = "text"
  input2.value = ""
  input2.id = "task-description"
  input2.placeholder = "description"
  input.value = "New Task"
  input.type = "submit"

  form.append(input, input2)
  div.append(form)



  div.append(header, ul)
  mainContent.append(div)

};
