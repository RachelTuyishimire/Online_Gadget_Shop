function generateProductCards(data) {
    const productContainer = document.getElementById("gadgets");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>ADD TO CART</button>
              </div>
          `;
      productContainer.appendChild(card);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const returnedData = data.products.slice(0, 10);
        generateProductCards(returnedData);
    });
}
fetchProducts()
// let availableGadgets = document.getElementById('gadgets')
// const getGadgets = ()=>{
//     return fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(response=>response)
//     .catch(error=>error.message)
// };


// const displayGadgets = async()=>{
//     const gadgets = await getGadgets();
//     console.log(gadgets.gadgets);
//     gadgets.gadgets.map(item =>{
//         let div = document.createElement('div');
//         div.className = 'accessories';
//         let img = document.createElement('img');
//         let name = document.createElement('h2');
        

//         img.src = item.images;
//         name.innerHTML = item.name;
//         div.appendChild(img);
//         div.appendChild(name);
//         availableGadgets.appendChild(div);

//     })
// }
// displayGadgets();

