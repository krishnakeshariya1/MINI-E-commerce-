// ----------------- State ---------------- //
let products = [];
const URL = "https://fakestoreapi.com/products";

// ------------------ DOM ------------------ //
  const search =document.querySelector("#searchBar");
  const range = document.querySelector("#priceRange");
  const grid = document.querySelector(".grid-Container");
  const loadBtn = document.querySelector(".loadBtn");
  const categories = document.querySelectorAll(".category-Section ul li");
  const cartBox = document.querySelector(".total-Price-Section");
  const rangeLabel = document.querySelector(".range-Label");

  // --------------- API ---------------- //
  async function fetchProducts() {
    try{
      const response = await fetch(URL);

      if(!response.ok) throw new Error("Faild to Load Products")
      products = await response.json();
    }
    catch(error) {
      
    }
  }

