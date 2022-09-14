//using ES6

class WebSeries {
  constructor(title, director, stars, streamingPlatform) {
    this.title = title;
    this.director = director;
    this.stars = stars;
    this.streamingPlatform = streamingPlatform;
  }
  get title() {
    return this._title.toUpperCase();
  }
  get director() {
    return this._director;
  }
  get stars() {
    return this._stars;
  }
  get streamingPlatform() {
    return this._streamingPlatform;
  }
  set title(newTitle) {
    if (newTitle == "") {
      throw "Title cannot be empty";
    }
    this._title = newTitle;
  }
  set director(newDirector) {
    if (newDirector == "") {
      throw "Director cannot be empty";
    }
    this._director = newDirector;
  }
  set stars(newStars) {
    if (newStars == "") {
      throw "stars cannot be empty";
    }
    this._stars = newStars;
  }
  set streamingPlatform(newStreamingPlatform) {
    if (newStreamingPlatform == "none") {
      throw "Streaming Platform cannot be empty";
    }
    this._streamingPlatform = newStreamingPlatform;
  }
}

class UI {
  //constructor() {}
  addWebSeriesToList(WebSeries) {
    console.log(WebSeries);
    const list = document.getElementById("Web-Series-list");
    //create
    const span = document.createElement("span");
    console.log(span);
    span.className = "card";
    //insert
    span.innerHTML = `<h2>${WebSeries.title}</h2>
    <p>${WebSeries.director}</p>
    <p>${WebSeries.stars}</p>
    <p>${WebSeries.streamingPlatform}</p>
    <button><a href="#" class="delete">DELETE</a></button>`;

    list.appendChild(span);
  }
  deleteList(target) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (target.className === "delete") {
          target.parentElement.parentElement.remove();
        }
        resolve();
      }, 5000);
    });
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("director").value = "";
    document.getElementById("stars").value = "";
    document.getElementById("streamingPlatform").value = "none";
  }
}

let count = 0;
function formsubmit(e) {
  e.preventDefault();
  const title = document.getElementById("title").value,
    director = document.getElementById("director").value,
    stars = document.getElementById("stars").value,
    streamingPlatform = document.getElementById("streamingPlatform").value;
  const value = new WebSeries(title, director, stars, streamingPlatform);
  console.log(
    value.title,
    value.director,
    value.stars,
    value.streamingPlatform
  );
  count++;

  const ui = new UI();
  if (count <= 6) {
    ui.addWebSeriesToList(value);
  }
  //clear fields
  ui.clearFields();

  console.log(count);
}

var form = document.querySelector("form");
form.addEventListener("submit", formsubmit);

document
  .getElementById("Web-Series-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const ui = new UI();
    ui.deleteList(e.target);
    //alert
    count--;
  });
