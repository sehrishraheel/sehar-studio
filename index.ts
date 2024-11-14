// Change Background Color Functionality
document.getElementById('changeColorBtn')?.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f0f8ff';
    alert("Background color changed!");
  });
  
  // Inspirational Quote Change Functionality
  const quotes = [
    '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"Believe you can and you’re halfway there." - Theodore Roosevelt'
  ];
  
  let currentQuoteIndex = 0;
  const quoteElement = document.getElementById('quote');
  
  setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    if (quoteElement) {
      quoteElement.textContent = quotes[currentQuoteIndex];
    }
  }, 5000);
  
  // Define an array of products
const products = [
    {
      name: "velvet",
      price: "RS5000",
      image: "/1.jpg"
    },
    {
      name: "micro velvet",
      price: "RS4000",
      image: "/2.jpg"
    },
    {
      name: "winter",
      price: "RS6700",
      image: "/3.jpg"
    },
    {
      name: "new arrival",
      price: "RS4450",
      image: "/4.jpg"
    }
  ];
  
  // Function to render products
  const renderProducts = () => {
    const productSection = document.getElementById("product-section");
  
    if (productSection) {
      products.forEach(product => {
        // Create product element
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
  
        // Add product image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
  
        // Add product name
        const name = document.createElement("h3");
        name.textContent = product.name;
  
        // Add product price
        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = product.price;
  
        // Append all elements to product div
        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
  
        // Append product to product section
        productSection.appendChild(productDiv);
      });
    }
  };
  
  // Call the function to render products on page load
  window.onload = renderProducts;
  