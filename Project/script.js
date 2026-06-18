const books = [
    { title: "The Alchemist", author: "Paulo Coelho", price: 299, category: "Fiction", description: "Dream story", image: "images/alchemist.jpeg" },
    { title: "Atomic Habits", author: "James Clear", price: 499, category: "Self Help", description: "Habits guide", image: "images/atomic.jpeg" },
    { title: "Clean Code", author: "Robert Martin", price: 599, category: "Programming", description: "Coding best practices", image: "images/cleancode.jpeg" },
    { title: "CLRS", author: "Cormen", price: 899, category: "CS", description: "Algorithms book", image: "images/clrs.jpeg" },
    { title: "Ikigai", author: "Garcia", price: 350, category: "Self Help", description: "Life purpose", image: "images/Ikigai.jpeg" },
    { title: "Rich Dad Poor Dad", author: "Kiyosaki", price: 399, category: "Finance", description: "Money mindset", image: "images/richdad.jpeg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (el) el.innerText = cart.length;
}

function addToCart(i) {
    cart.push(books[i]);
    saveCart();
    alert("Added to cart");
}

function showDetails(i) {
    let b = books[i];

    document.getElementById("modalTitle").innerText = b.title;
    document.getElementById("modalAuthor").innerText = b.author;
    document.getElementById("modalPrice").innerText = b.price;
    document.getElementById("modalCategory").innerText = b.category;
    document.getElementById("modalDesc").innerText = b.description;
    document.getElementById("modalImage").src = b.image;

    new bootstrap.Modal(document.getElementById("bookModal")).show();
}

function displayBooks(list) {
    let container = document.getElementById("book-container");
    container.innerHTML = "";

    list.forEach((b, i) => {
        container.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card p-2">
                <img src="${b.image}" class="img-fluid">
                <h5>${b.title}</h5>
                <p>₹${b.price}</p>

                <button class="btn btn-primary btn-sm" onclick="showDetails(${i})">View</button>
                <button class="btn btn-success btn-sm" onclick="addToCart(${i})">Add</button>
            </div>
        </div>`;
    });
}

document.getElementById("search")?.addEventListener("input", function () {
    let val = this.value.toLowerCase();

    let filtered = books.filter(b =>
        b.title.toLowerCase().includes(val) ||
        b.author.toLowerCase().includes(val) ||
        b.category.toLowerCase().includes(val)
    );

    displayBooks(filtered);
});

document.getElementById("contact-link")?.addEventListener("click", function (e) {
    e.preventDefault();
    new bootstrap.Modal(document.getElementById("contactModal")).show();
});

displayBooks(books);
updateCartCount();