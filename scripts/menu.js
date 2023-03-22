const categorieslist = ["burger", "italien", "asiatique", "français", "tout"];
const trierlist = ["note"];
let trier = "none";
let type = "none";
let jsondata2;
fetch("resources/restaurants.json")
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata2 = json;
  });

const validatemenu = () => {
  document
    .querySelector(".button-container")
    .addEventListener("click", function (e) {
      let clicked = e.target.innerHTML.toLowerCase();
      if (categorieslist.includes(clicked)) {
        type = clicked;
      }
      if (trierlist.includes(clicked)) {
        trier = clicked;
      }
      if (clicked == "valider" && type !== "none") {
        loadmenu(type);
      }
      if (clicked == "valider" && type == "none") {
        alert("Merci de bien vouloir choisir une catégorie.");
      }
    });
};

function loadmenu(type) {
  const restoToDelete = document.getElementById("container-restaurants");
  if (restoToDelete) {
    restoToDelete.remove();
  }
  let filteredrestaurants = jsondata2.filter(
    (restaurant) => restaurant.categories.toLowerCase() === type
  );
  const restoToAdd = document.createElement("div");
  restoToAdd.id = "container-restaurants";
  if (type == "tout") {
    for (let i = 0; i < jsondata2.length; i++) {
      const Restoimage = document.createElement("img");
      Restoimage.setAttribute("draggable", false);
      Restoimage.alt = "img";
      if (jsondata2[i].thumbnail.includes("streetviewpixels")) {
        Restoimage.src = "resources/notavailable.png";
      } else {
        Restoimage.src = jsondata2[i].thumbnail;
      }
      restoToAdd.appendChild(Restoimage);
      document.querySelector(".carousel").appendChild(restoToAdd);
    }
  } else {
    for (let i = 0; i < filteredrestaurants.length; i++) {
      if (filteredrestaurants[i].categories.toLowerCase().includes(type)) {
        const Restoimage = document.createElement("img");
        Restoimage.setAttribute("draggable", false);
        Restoimage.alt = "img";
        if (filteredrestaurants[i].thumbnail.includes("streetviewpixels")) {
          Restoimage.src = "resources/notavailable.png";
        } else {
          Restoimage.src = filteredrestaurants[i].thumbnail;
        }
        restoToAdd.appendChild(Restoimage);
        document.querySelector(".carousel").appendChild(restoToAdd);
      }
    }
  }
}
window.onload = () => {
  validatemenu();
};
