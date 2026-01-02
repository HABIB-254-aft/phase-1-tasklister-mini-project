document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.querySelector('#create-task-form');
  
  // Add event listener to form
  form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();
    
    // Gather data from the form using the name attribute
    const taskDescription = event.target.elements['new-task-description'].value;
    
    // Create and call buildToDo function
    buildToDo(taskDescription);
    
    // Clear the form input after adding task
    event.target.elements['new-task-description'].value = '';
  });
  
  // Function to build and append todo item
  function buildToDo(task) {
    // Create a new li element
    const li = document.createElement('li');
    
    // Add the task as the textContent
    li.textContent = task;
    
    // Select the task list (id="tasks")
    const taskList = document.querySelector('#tasks');
    
    // Append the li element to the task list
    taskList.appendChild(li);
  }
});
