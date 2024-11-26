// Función para mostrar el aviso de cookies solo una vez por sesión
function checkCookies() {
    const cookieDialog = document.getElementById("cookieDialog");
    const acceptButton = document.getElementById("acceptCookies");
  
    // Verificamos si el usuario ya aceptó las cookies
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieDialog.showModal();
    }
  
    acceptButton.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieDialog.close();
    });
  }
  
  // Función para crear una nueva tarjeta de producto
  function createProductCard(image, title, description, price) {
    const template = document.getElementById("productCardTemplate");
    const clone = template.content.cloneNode(true);
  
    const card = clone.querySelector(".card");
    card.querySelector(".card-img").src = image;
    card.querySelector(".card-img").alt = title;
    card.querySelector("slot[name='title']").textContent = title;
    card.querySelector("slot[name='description']").textContent = description;
    card.querySelector("slot[name='price']").textContent = price;
  
    return card;
  }
  
  // Crear varias tarjetas con datos aleatorios
  function generateRandomProducts() {
    const productContainer = document.getElementById("productContainer");
  
    const products = [
      { image: "https://img.freepik.com/foto-gratis/composicion-productos-cuidado-personal-natural-laicos-plana_23-2148990019.jpg?t=st=1732612005~exp=1732615605~hmac=bdf0f9c632fec9e252f4d47a76c61c28d5cb49c532e5bd7a905897a7f91eb83b&w=1060", title: "Producto 1", description: "Descripción del producto 1", price: "$10.00" },
      { image: "https://img.freepik.com/foto-gratis/arreglo-publicitario-botellas-base_23-2149511225.jpg?t=st=1732612059~exp=1732615659~hmac=a499f6879a8e4621e00e8060e75500c79352ef2939b240f49edad794a327b0dd&w=1060", title: "Producto 2", description: "Descripción del producto 2", price: "$20.00" },
      { image: "https://img.freepik.com/foto-gratis/productos-belleza-cero-desperdicio_23-2149304152.jpg?t=st=1732612107~exp=1732615707~hmac=00744faab886415c63a181a0ec3332520f56f557fb02cf9b212c8d3690390e8e&w=1060", title: "Producto 3", description: "Descripción del producto 3", price: "$30.00" },
      { image: "https://img.freepik.com/foto-gratis/bodegon-productos-cuidado-piel_23-2149371284.jpg?t=st=1732612116~exp=1732615716~hmac=54e1df3f5c3c0694086cdc4b44ef5217d93da2dd3ae53eac8f9c7bf7a386a0b9&w=1060", title: "Producto 4", description: "Descripción del producto 4", price: "$40.00" },
    ];
  
    products.forEach(product => {
      const card = createProductCard(product.image, product.title, product.description, product.price);
      productContainer.appendChild(card);
    });
  }
  
  // Inicialización
  document.addEventListener("DOMContentLoaded", () => {
    checkCookies();  // Mostrar el aviso de cookies
    generateRandomProducts();  // Crear y mostrar las tarjetas de producto
  });
  