

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function grabTask(e) {
    e.preventDefault()
    let inputVal = document.querySelector('#new-task-description')
    addTask(inputVal.value)
    inputVal.value = ''
  }
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', grabTask)
});