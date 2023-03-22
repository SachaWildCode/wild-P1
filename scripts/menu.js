const categorieslist = [
  "burger",
  "pizza",
  "chinois",
  "japonais",
  "thaï",
  "français",
];
const regimelist = ["halal", "vegan", "sans gluten"];
const trierlist = ["note"];
window.onload = () => {
  clickevent();
};
const clickevent = () => {
  let regime = "none";
  let trier = "none";
  let categorie = "none";
  document
    .querySelector(".button-container")
    .addEventListener("click", function (e) {
      let clicked = e.target.innerHTML.toLowerCase();
      if (categorieslist.includes(clicked)) {
        console.log(clicked);
        categorie = clicked;
      }
      if (regimelist.includes(clicked)) {
        console.log(clicked);
        regime = clicked;
      }
      if (trierlist.includes(clicked)) {
        console.log(clicked);
        trier = clicked;
      }
      if (clicked == "valider" && categorie !== "none") {
        console.log(
          `Categories : ${categorie}, Régime : ${regime}, Trier par : ${trier}`
        );
      }
      if (clicked == "valider" && categorie == "none") {
        alert("Merci de bien vouloir choisir une catégorie.");
      }
    });
};
