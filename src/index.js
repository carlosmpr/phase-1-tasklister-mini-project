const taskArray = []



document.addEventListener("DOMContentLoaded", () => {

  function addDropdown () {
    let dropdown = document.createElement('select')
    dropdown.innerHTML = `
    <option value="red">High priority</option>
    <option value="yellow">Medium priority</option>
    <option value="green">Low priority</option>
    `
    dropdown.id = 'dropdown'
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
    let color = document.querySelector('#dropdown').value
    li.style.color = color
    li.className = color
    console.log(li)
    //document.querySelector("#tasks").append(li);
    //sorted append
    sortedAppend(li)
  }

  function sortedAppend(task) {
    switch (task.style.color) {
      case 'red':
        document.querySelector("#tasks").insertAdjacentElement('afterbegin', task)
        break;
      case 'yellow':
        let greenTask = document.querySelector('.green')
        console.log(greenTask)
        if(greenTask) {
          greenTask.insertAdjacentElement('beforebegin', task)
        } else {
          document.querySelector("#tasks").append(task)
        }
        break;
      case 'green':
        document.querySelector("#tasks").append(task)
        break;
      
      default:
        break;
    }

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


