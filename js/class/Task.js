class Task {
    #id;
    #text;
  
    constructor(id,text) { // Only one constructor
      this.#id = id;
      this.#text = text;
    }
  
    getId() { // Getter for ID
      return this.#id;
    }
  
      
    getText() { // Add this method
        return this.#text;
    }
  }
  export { Task } // Export the Task class
  