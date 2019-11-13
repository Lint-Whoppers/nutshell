

// THis will be a function that allows me to create new dom elements for my portion of the UserMainPage

const taskEntryManager = {
    makeTaskEntryComponent() {
return `
<fieldset>
<div id="toDo-container" class="header">
  <h2>ToDo List</h2>
  <input type="text" id="myInput" placeholder="ToDo">
  <span onclick="newElement()" class="addBtn">Add</span>
</div>

<ul id="myUL">
  <li>Hit the gym</li>
  <li class="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
</ul>
</fieldset>
   `
  },
}

export default taskEntryManager;