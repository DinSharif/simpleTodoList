function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
      var todoList = document.getElementById("todoList");

      var li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
      `;

      todoList.appendChild(li);

      taskInput.value = "";
    }
  }

  function removeTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  } 