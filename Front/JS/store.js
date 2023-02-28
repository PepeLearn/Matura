const filter = [];
// document.getElementById("pants").addEventListener("click", function(){ addToFilter("pants");});
function deleteSelection() { // izbrise vse elemente v collection containerju
  var container = document.getElementById("collection");
  container.replaceChildren(" ");
}
function addToFilter(string) { //pushe not v array string, ce ze obstaja ga da ven.
  if (!filter.includes(string))
  {
    filter.push(string);
    return true;
  }
  filter.splice(filter.indexOf(string), 1);
  deleteSelection();
}

fetch("http://127.0.0.1/matura/Backend/database/database.php?getProductCatalog=true")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#collection");
    let out = "";
    var i = 0;
    for (let product of products) {
      console.log((products[i].Category === "Pants"));
      if (!(products[i].Category === "Pants")) {
        out += `
  <a href="Item.html" class="product_serial">
    <div id="product_div_img">
      <img id="product_img" src="../Slike/Items/item1.png" alt="">
    </div>
      <div id="products_desc">${products[i].Name}</div>
      <div id="products_price">${products[i].Price}€</div>
  </a>
    `;
      }
      i++;
    }
    placeholder.innerHTML = out;
  });
