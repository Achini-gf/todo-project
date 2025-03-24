
import { Task } from "./Task.js";

class Todos {
  #backend_url = "";
  #tasks = [];

  constructor(url) {
    this.#backend_url = url;
  }

 
  getTasks() {
    return fetch(this.#backend_url)
      .then((response) => response.json())
      .then((data) => data.map((task) => new Task(task.id, task.description)));
  }

  removeTask = (id) => {
    return new Promise(async (resolve, reject) => {
        fetch(this.#backend_url + "/delete/" + id, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((json) => {
            this.#removeFromArray(id);
            resolve(json.id)
        }, (error) => {
            reject(error)
            })
            })
        };

  #readJson = (taskAsJson) => {
    taskAsJson.forEach((node) => {
      const task = new Task(node.id, node.description);
      this.#tasks.push(task);
    });
  };

  #addToArray = (id, text) => {
    const task = new Task(id, text);
    this.#tasks.push(task);
    return task;
  };
  #removeFromArray = (id) => {
    const arrayWithoutRemoved = this.#tasks.filter((task) => task.id !== id);
    this.#tasks = arrayWithoutRemoved;
  }

  addTask = (text) => {
    return new Promise(async (resolve, reject) => {
      const json = JSON.stringify({ description: text });
      fetch(this.#backend_url + "/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      })
        .then((response) => response.json())
        .then(
          (json) => {
            resolve(this.#addToArray(json.id, text));
          },
          (error) => {
            reject(error);
          }
        );
   
      })
    }
  };




export { Todos };
