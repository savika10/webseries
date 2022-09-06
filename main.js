class WebSeries {
  constructor(title, director, stars, streaminPlatform) {
    this.title = title;
    this.director = director;
    this.stars = stars;
    this.streaminPlatform = streaminPlatform;
  }
}

/*function check() {
  document.getElementByTagName("form").value =
    document.getElementById("addedMaterial").value;
}*/
/*val = window.navigator;
console.log(val);
const form = document.querySelector(".Myform");
const formInput = document.querySelector(".card");
//load all events

//load all event listeners
function loadEventListener() {
  //add input form vent
  form.addEventListener("button", addTask);
}

//add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  //create li element
  const li = document.createElement("li");
  //add class
  li.className = "collection-item";
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element for delete icon
  const link = document.createElement("a");
  //add class , secondary-content because we have to put it in right
  link.className = "delete-item secondary-content";
  //make a x mark icon in html with following class!!!!//
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append link to li
  li.appendChild(link);

  //append li to ul
  formInput.appendChild(li);
  e.preventDefault();
}
loadEventListener();
*/
