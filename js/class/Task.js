class Task {
    #id;
    #text;
  
    constructor(id,text) { // Only one constructor
      this.#id = id;
      this.#text = text;
    }
  
    get id() { // Getter for ID
      return this.#id;
    }
  
    
  
    get text() { // Getter for text
      return this.#text}
      getText() { // Add this method
        return this.#text;
    }
  }
  export { Task } // Export the Task class
  