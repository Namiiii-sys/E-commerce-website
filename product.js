const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const apiUrl = `https://fakestoreapi.com/products/${productId}`;

async function fetchProductDetails() {
  try {
    const response = await fetch(apiUrl);
    const product = await response.json();

    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = `
      <div class="product-card-detail">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
          <h2>${product.title}</h2>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
          <p>${product.description}</p>
          <button id="buy-now" class="btn">Buy Now</button>
        </div>
      </div>
    `;

    const buyNowButton = document.getElementById("buy-now");
    buyNowButton.addEventListener("click", showThankYouModal);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

function showThankYouModal() {
  const modal = document.getElementById("buy-modal");
  modal.style.display = "flex";

const closeModalButton = document.getElementById("close-modal");
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

fetchProductDetails();
