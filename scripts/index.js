import "./carousel.js";
import "./utils.js";

let jsondata;
fetch("resources/restaurants.json")
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });
window.onload = () => {
  validateEvent();
  loadrecommandations();
  loadmenu();
};
