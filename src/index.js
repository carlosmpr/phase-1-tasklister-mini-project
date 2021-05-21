document.addEventListener("DOMContentLoaded", () => {

  function addDropdown () {
    let dropdown = document.createElement('select')
    dropdown.innerHTML = `
    <option value="red">High priority</option>
    <option value="yellow">Mediun</option>
    <option value="green">Low</option>
  
`

let textBox = document.querySelector('#new-task-description')
textBox.insertAdjacentElement('afterend', dropdown)


  }
  // your code here
  function addTask(task) {
    let li = document.createElement("li");
    li.textContent = task;
    let done = document.createElement("button");
    done.textContent = "done"
    done.addEventListener('click', ()=> li.remove())
    li.append(done);
    document.querySelector("#tasks").append(li);
  }

  function grabTask(e) {
    e.preventDefault();
    let inputVal = document.querySelector("#new-task-description");
    addTask(inputVal.value);
    inputVal.value = "";
  }
  let form = document.querySelector("#create-task-form");
  addDropdown()
  form.addEventListener("submit", grabTask);
});


