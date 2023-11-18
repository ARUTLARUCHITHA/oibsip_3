let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = {
      text: taskText,
      completed: false,
      timestamp: new Date().toLocaleString() // Include timestamp
    };

    tasks.push(newTask);
    taskInput.value = '';
    displayTasks();
  }
}

function displayTasks() {
  const pendingTasksList = document.getElementById('pendingTasks');
  const completedTasksList = document.getElementById('completedTasks');
  
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function() {
      tasks[index].completed = this.checked;
      displayTasks();
    });

    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      tasks.splice(index, 1);
      displayTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    if (task.completed) {
      li.classList.add('completed');
      completedTasksList.appendChild(li);
    } else {
      pendingTasksList.appendChild(li);
    }
  });
}

displayTasks();