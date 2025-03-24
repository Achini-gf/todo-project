
  const BACKEND_ROOT_URL = "http://localhost:3001";
//import { error } from "console";
  import {Todos} from "./class/Todos.js"
  const todos = new Todos(BACKEND_ROOT_URL)
const input = document.querySelector("input"); // Get the input field
  const list = document.querySelector("ul");
  input.disabled = true; // Disable the input field

  const renderTask = (task) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = task.getText()
    list.append(li)

  }
  const getTasks =  () => {
    todos.getTasks().then((tasks) => {
      tasks.forEach(task => {
        renderTask(task)
      })
    
      input.disabled = false
    }). catch ((error)=> {
      alert(error)
    })
  }
     const saveTask = async (task) => {
      try {
        const json = JSON.stringify({description: task})
        const response =  await fetch(BACKEND_ROOT_URL + "/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: json
        })
        const result = await response.json();
        // Create a new Task object using the response from the backend
        return new Task(result.id, result.description);
        return response.json()
      }catch (error) {
        alert("Error saving task:" + error.message)
      }
    }

  input.addEventListener("keydown",(event) => {
    if (event.key === "Enter") {
       event.preventDefault();
       const task = input.value.trim();
       if (task !== "") {
        todos.addTask(task).then((task) => {
          renderTask(task)
          input.value = ""
          input.focus()
        
       })

        
       }     
   }
 })
  getTasks()

  