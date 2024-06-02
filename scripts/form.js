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
    container.innerHTML = ""; // Clear any existing options
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

    const fullYear = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastmodified");

    // Use date object
    const today = new Date();

    fullYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
    lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
        "en-US", {
            dateStyle: "full"
        }
    ).format(today)}</span>`;
});

// Rating logic
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
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes('review.html')) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        const reviewCountElement = document.createElement('p');
        reviewCountElement.textContent = `You have completed ${reviewCount} reviews.`;
        document.querySelector('main').appendChild(reviewCountElement);
    }
});