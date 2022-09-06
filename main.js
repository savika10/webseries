//using ES5

class WebSeries {
  constructor(title, director, stars, streamingPlatform) {
    this.title = title;
    this.director = director;
    this.stars = stars;
    this.streamingPlatform = streamingPlatform;
  }
}

class UI {
  constructor() {}
  addWebSeriesToList(WebSeries) {
    console.log(WebSeries);
    const list = document.getElementById("Web-Series-list");
    //create
    const row = document.createElement("tr");
    console.log(row);

    //insert
    row.innerHTML = `<td>${WebSeries.title}</td>
    <td>${WebSeries.director}</td>
    <td>${WebSeries.stars}</td>
    <td>${WebSeries.streamingPlatform}</td>
    <td><a href="#" class="delete"></a></td>`;

    list.appendChild(row);
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("director").value = "";
    document.getElementById("stars").value = "";
    document.getElementById("streamingPlatform").value = "none";
  }
}

document
  .getElementById("Web-series-form")
  .addEventListener("submit", function (e) {
    const tile = document.getElementById("title").value,
      director = document.getElementById("director").value,
      stars = document.getElementById("stars").value,
      streamingPlatform = document.getElementById("streamingPlatform").value;
    const WebSeries = new WebSeries(title, director, stars, streamingPlatform);
    const ui = new UI();

    ui.addWebSeriesToList(WebSeries);
    e.preventDefault();
    //clear fields
    ui.clearFields();
  });

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
