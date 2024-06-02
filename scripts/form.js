const products = [
    {
        id: "",
        name: "Chosse a product ...",
    },
    {
        id: "fc-1888",
        name: "Flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        avgRating: 5.0
    }
];

function displayProducts(products, container) {
    container.innerHTML = ""; 
    products.forEach(product => {
        const opt = document.createElement("option");
        opt.textContent = product.name;
        opt.value = product.id;
        container.appendChild(opt);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".products_container");
    displayProducts(products, container);

});
document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;



const ratingRadios = document.querySelectorAll("input[name='rating']");
ratingRadios.forEach((radio) => {
    radio.addEventListener("click", function() {
        // Clear all filled classes
        document.querySelectorAll(".star").forEach(star => {
            star.classList.remove("filled");
        });
        ratingRadios.forEach(radio => {
            radio.classList.remove("filled");
        });

        // Add filled class to the clicked radio button and its stars
        const value = this.value;
        this.classList.add("filled");
        document.querySelectorAll(`label[for='star${value}'] .star`).forEach(star => {
            star.classList.add("filled");
        });
    });
});

// LocalStorage review count logic for review.html
const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            localStorage.setItem('formSubmitted', 'true');
        });
    }

    if (window.location.pathname.includes('review.html')) {
        const formSubmitted = localStorage.getItem('formSubmitted');
        if (formSubmitted === 'true') {
            let reviewCount = localStorage.getItem('reviewCount') || 0;
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);
            localStorage.removeItem('formSubmitted');

            const reviewCountElement = document.createElement('p');
            reviewCountElement.textContent = `You have completed ${reviewCount} reviews.`;
            document.querySelector('main').appendChild(reviewCountElement);
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        // Temporalmente, restablecer el contador de reseñas a 0
        localStorage.setItem('reviewCount', 0);
        console.log('Review count reset to 0');
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Obtiene la fecha actual y la formatea para el campo de fecha
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        const yyyy = today.getFullYear();
        const minDate = yyyy + '-' + mm + '-' + dd;

        // Establece la fecha mínima en el campo de fecha
        document.getElementById("installation-date").setAttribute("max", minDate);
    });