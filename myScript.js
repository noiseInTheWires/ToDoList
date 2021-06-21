let maxItemsPerPage = 3;
let currentItemsOnLastPage = 3;
let currentPage = 1;
let lastPage = 1;

function add() {
  let inside = document.getElementById("input").value;
  const node = document.createTextNode(inside);
  const newDiv = document.createElement("div");
  newDiv.className = "content";
  const todoList = document.getElementById("child");

  if (inside.trim()) {
    todoList.appendChild(newDiv);
    addJob(newDiv, node);
    addEdit(newDiv);
    addDelete(newDiv);
  } else {
    alert("You can't leave input empty");
  }

  document.getElementById("input").value = "";
}

//creates new job
function addJob(parentDIV, inputTXT) {
  let newJob = document.createElement("span");
  newJob.className = "job";
  newJob.id = "target";
  newJob.appendChild(inputTXT);
  parentDIV.appendChild(newJob);
}

//creates new edit button
function addEdit(parentDIV) {
  const newEdit = document.createElement("span");
  newEdit.appendChild(document.createTextNode("edit"));
  newEdit.className = "edit";
  newEdit.id = "ss";
  newEdit.addEventListener("click", handlerEdit);
  parentDIV.appendChild(newEdit);
}

//creates new delete button
function addDelete(parentDIV) {
  const newDelete = document.createElement("span");
  newDelete.appendChild(document.createTextNode("Delete"));
  newDelete.className = "delete";
  newDelete.addEventListener("click", handlerDelete);
  parentDIV.appendChild(newDelete);
}

// checks if user wants to edit existing job or save the already
// edited one and acts accordingly
function handlerEdit() {
  if (this.innerHTML === "edit") {
    let existingTxt = this.parentElement.querySelector("#target").innerHTML;
    this.parentElement.querySelector("#target").remove();
    let newInput = document.createElement("input");
    newInput.className = "job";
    newInput.id = "target";
    newInput.value = existingTxt;
    this.parentElement.insertBefore(newInput, this.parentElement.childNodes[0]);
    this.innerHTML = "save";
  } else {
    let newTxt = this.parentElement.querySelector("#target").value;
    if (newTxt.trim()) {
      this.parentElement.querySelector("#target").remove();
      let newJob = document.createElement("span");
      newJob.className = "job";
      newJob.id = "target";
      newJob.appendChild(document.createTextNode(newTxt));
      this.parentElement.insertBefore(newJob, this.parentElement.childNodes[0]);
      this.innerHTML = "edit";
    } else {
      this.parentElement.remove();
    }
  }
}

//deletes job
function handlerDelete() {
  this.parentElement.remove();
}

//checks if enter was pressed
function enter(event) {
  let x = event.keyCode;
  if (x === 13) {
    add();
  }
}

function empty() {
  const elements = document.getElementsByClassName("content");
  while (elements.length > 0) elements[0].remove();
}
