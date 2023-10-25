document.addEventListener("DOMContentLoaded", function () { 
    const productlist = document.getElementById("productsList"); 
    const products = [
        { name: "Sony WF-C700N", price: "Rs 7,499", image:"earbuds.jpg" },
        { name: "Sony WH-CH520", price: "Rs 5,290", image: "headphone.jpg" },
        { name: "Sony WI-C100", price: "Rs 1,487", image: "neckband.jpg" },
        { name: "Sony Alpha ILCE-6400L", price: "Rs77,990", image: "camera.webp" },
        { name: "Sony Dualsense Edge  Controllerr", price: "Rs15,199", image: "controller.jpg" },
        { name: "Sony Bravia 108 cm", price: "Rs48,440", image: "TV.jpg" },
        { name: "Sony MDR-ZX110A", price: "Rs799", image: "wired.webp" },
        { name: "Sony Srs-Xb13 Speaker", price: "Rs2,987", image: "speaker.jpg" },
    ];

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product";
       
        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;
       
        const nameElement = document.createElement("h3");
        nameElement.textContent = product.name;
       
        const priceElement = document.createElement("p");
        priceElement.textContent = product.price;
       
        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
       
        productsList.appendChild(productElement);
        });
       
        const scrollToProductsLink = document.getElementById("scrollToProducts");
        const featuredProducts = document.getElementById("featuredProducts");
       
        scrollToProductsLink.addEventListener("click", function (event) {
        event.preventDefault();
       
        featuredProducts.scrollIntoView({ behavior: "smooth" });
        });
        });