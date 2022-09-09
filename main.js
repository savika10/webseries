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

const array = [
  new WebSeries("x1", "y1", "z1", "s1"),
  new WebSeries("x2", "y2", "z2", "s2"),
  new WebSeries("x3", "y3", "z3", "s3"),
  new WebSeries("x4", "y4", "z4", "s4"),
  new WebSeries("x5", "y5", "z5", "s5"),
  new WebSeries("x6", "y6", "z6", "s6"),
];
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

for (var value of array) {
  console.log(
    value.title,
    value.director,
    value.stars,
    value.streamingPlatform
  );
}
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
  const ui = new UI();
  ui.addWebSeriesToList(value);
  //clear fields
  ui.clearFields();
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
  });
/*form.addEventListener(
  "submit",
  function debugEventStoppages({
    methods = ["stopPropagation", "stopImmediatePropagation", "preventDefault"],
    type = "log",
    should = () => true,
  } = {}) {
    methods.forEach((method) => {
      const original = Event.prototype[method];
      Event.prototype[method] = function () {
        // Test if we need do log/break for this particular event
        if (should(this)) {
          if (type == "break") {
            debugger;
          } else {
            // Log which method was called, the event type,
            // the event itself and a stacktrace to figure out what happened
            console.log(
              method,
              this.type,
              this,
              (() => {
                try {
                  throw new Error();
                } catch (e) {
                  return e;
                }
              })()
            );
          }
        }
        return original.apply(this, arguments);
      };
    });
  }
);
//document.addEventListener("submit", console.log, true);
/*document.addEventListener(
  "submit",
  function (event) {
    console.log(
      event.type, // The type of the event
      event.target, // The target of the event
      event, // The event itself
      (() => {
        try {
          throw new Error();
        } catch (e) {
          return e;
        }
      })() // A stacktrace to figure out what triggered the event
    );
  },
  true
);
/*document.addEventListener(
  "submit",
  function () {
    debugger;
  },
  true
);
document.addEventListener("submit", console.log, true);
*/

/*class UI extends WebSeries {
  //constructor() {}
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
    const title = document.getElementById("title").value,
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
