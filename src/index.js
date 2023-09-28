document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //get references to the task form and list
  const taskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")

  //event listener for form submission
  taskForm.addEventListener("submit", (event) => {
    //prevent the default form submission behaviour
    event.preventDefault();

    //get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value
    //check if a task decription was provided
    if (taskDescription){
      //create a new list item for the task and set its inner HTML to the task description
      const taskItem = document.createElement("li")
      taskItem.innerHTML = taskDescription
      //append the task item to the task list
      taskList.appendChild(taskItem)
    }
  })
});
