//document.addEventListener("DOMContentLoaded", function() {
  const input = document.querySelector("input"); // Get the input field
  const list = document.querySelector("ul");
  input.addEventListener("keydown",(event) => {
    if (event.key === "Enter") {
       event.preventDefault();
       const task = input.value.trim();
       if (task !== "") {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.textContent = task;
          list.appendChild(li);
          input.value = "";
       }
   }
 });

  //const BACKEND_ROOT_URL = "http://localhost:3001"; // Replace with your actual backend URL
  //taskInput.disabled = true; // Disable the input field

  // Function to enable input (example: after fetching tasks from backend)
/* const enableInput = () => {
      taskInput.disabled = false;
  };*/

 // const renderTasks = (task) => {
      //const li = document.createElement("li");
      //li.classList.add("list-group-item");
     /* li.textContent = task;
      taskList.appendChild(li);
  };*/

  /*taskInput.addEventListener("keypress", function(event) { // Corrected event listener
    if (event.key === "Enter") {
      if (taskInput.value.trim() !== "") {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.textContent = taskInput.value;
          taskList.appendChild(li);
          taskInput.value = ""; // Clear input after adding
      }
  }
  });*/
  
  // Function to fetch tasks from backend
 /* const getTasks = async () => {
      try {
         
          const response = await fetch(BACKEND_ROOT_URL);
          const tasks = await response.json(); // Parse JSON response
          taskList.innerHTML = "";
          tasks.forEach(taskObj => {
              renderTasks(taskObj.description); // Assuming JSON object has "task" key
          });
          taskInput.disabled = false; // Enable input after fetching tasks
         // enableInput(); // Enable input after fetching tasks
      } catch (error) {
          console.error("Error fetching tasks:", error);
          taskInput.disabled = false; // Ensure input is enabled even if fetch fails
      
      }
  };
    // Function to add new task to backend
    const addTask = async (task) => {
      try {
          const response = await fetch(BACKEND_ROOT_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ description: task }) // "description" matches DB column
          });

          if (!response.ok) {
              throw new Error("Failed to add task");
          }

          getTasks(); // Refresh task list after adding
      } catch (error) {
          console.error("Error adding task:", error);
      }
  };
  const saveTask = (task) => {
      return fetch(BACKEND_ROOT_URL + '/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: task })
      });
    };


  taskInput.addEventListener("keydown", async function(event) {
   if (event.key === "Enter") {
      event.preventDefault();
      const task = taskInput.value.trim();
      if (task !== "") {
          saveTask(task)
          .then(response => {
            if (!response.ok) throw new Error('Save failed');
            return response.json();
          })
          .then(task => {
            renderTasks(task.description);
            taskInput.value = "";
          })
          .catch(error => console.error('Error:', error)); 

      }
  }
});
  
      getTasks(); // Fetch tasks when the page loads
});*/
