const categorieslist = ["burger", "italien", "asiatique", "français", "tout"];
const regimelist = ["halal", "vegan", "sans gluten"];
const trierlist = ["note"];
let regime = "none";
let trier = "none";
let type = "none";
let firstImage = null;

const validateEvent = () => {
  document
    .querySelector(".button-container")
    .addEventListener("click", function (e) {
      let clicked = e.target.innerHTML.toLowerCase();
      if (categorieslist.includes(clicked)) {
        type = clicked;
      }
      if (regimelist.includes(clicked)) {
        regime = clicked;
      }
      if (trierlist.includes(clicked)) {
        trier = clicked;
      }
      if (clicked == "valider" && type !== "none") {
        loadmenu();
      }
      if (clicked == "valider" && type == "none") {
        alert("Merci de bien vouloir choisir une catégorie.");
      }
    });
};

function loadmenu() {
  for (let i = 0; i < jsondata.length; i++) {
    if (jsondata[i].categories.toLowerCase().includes(type)) {
      const image = document.createElement("img");
      image.setAttribute("draggable", false);
      image.alt = "img";
      if (jsondata[i].thumbnail.includes("streetviewpixels")) {
        image.src = "resources/notavailable.png";
      } else {
        image.src = jsondata[i].thumbnail;
      }
      document.querySelector(".carousel").appendChild(image);
    } else {
      if (type == "tout") {
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
}

function loadrecommandations() {
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
