// Extract the category from the query string
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const apiUrl = `https://fakestoreapi.com/products/category/${category}`;

const categoryTitle = document.getElementById("category-title");
categoryTitle.textContent = `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const products = await response.json();

    const productsContainer = document.getElementById("products");

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <a href="product.html?id=${product.id}" class="btn">Buy Now</a>
      `;

      productsContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
