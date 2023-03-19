//Data from here
/*const url = "http://127.0.0.1:3000/restaurants.json";
const json = fetch(url)
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log(
        json[i].uuid + json[i].fulladdr + json[i].name + json[i].categories
      );
    }
    return json;
});
*/

let jsondata;
fetch("resources/restaurants.json")
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });

let firstImage = null;

function loadimages() {
  for (let i = 0; i < jsondata.length; i++) {
    if (jsondata[i].rating >= 4.6) {
      const image = document.createElement("img");
      image.setAttribute("draggable", false);
      image.alt = "img";
      if (jsondata[i].thumbnail.includes("streetviewpixels")) {
        image.src = "resources/notavailable.png";
      } else {
        image.src = jsondata[i].thumbnail;
      }
      document.querySelector(".carousel").appendChild(image);
    }
  }
}

window.onload = () => {
  loadimages();
};
