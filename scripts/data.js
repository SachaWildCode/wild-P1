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
const url = "http://127.0.0.1:3000/resources/restaurants.json";

let jsondata;
fetch(url)
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });

window.onload = () => {
  for (let i = 0; i < jsondata.length; i++) {
    const e = document.createElement("img");
    if (jsondata[i].thumbnail.includes("streetviewpixels")) {
      e.src = "resources/notavailable.jpg";
    } else {
      e.src = jsondata[i].thumbnail;
    }
    document.querySelector(".carousel").appendChild(e);
  }
};
