
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
  
    //////// Creating item
    const li = document.createElement('li');
  
    // Task content
    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = () => toggleComplete(li);
    li.appendChild(span);
  
    
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('task-buttons');
  
    //// Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(span);
    buttonContainer.appendChild(editButton);
  
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(li);
    buttonContainer.appendChild(deleteButton);
  
    // //Append button 
    li.appendChild(buttonContainer);
  
    // Add to the task list
    document.getElementById('task-list').appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  }
  
  // Mark a task as completed
  function toggleComplete(taskItem) {
    taskItem.classList.toggle('completed');
  }
  
  // Editing the li
  function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskSpan.textContent = newTaskText.trim();
    }
  }
  
  // Delete the li
  function deleteTask(taskItem) {
    taskItem.remove();
  }
  