function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((collection) => {
        const returnedProduct = collection.products.slice(3, 9);
        generateProductCards(returnedProduct);
      });
  }

function generateProductCards(collection) {
    const productContainer = document.getElementById("gadgets");
    for (const product of collection) {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.name}" />
        <h2>${product.title}</h2>
        <div class='productPrice'>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
      productContainer.appendChild(card);
    }
  }
  
  fetchProducts();