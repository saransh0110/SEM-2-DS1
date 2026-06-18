const books = [

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        category: "Fiction",
        description: "A magical story about following your dreams.",
        image: "images/alchemist.jpeg"
    },

    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 499,
        category: "Self Help",
        description: "A practical guide to building good habits and breaking bad ones.",
        image: "images/atomic.jpeg"
    },

    {
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 599,
        category: "Programming",
        description: "A handbook of agile software craftsmanship.",
        image: "images/cleancode.jpeg"
    },

    {
        title: "CLRS",
        author: "Thomas H. Cormen",
        price: 899,
        category: "Computer Science",
        description: "Introduction to Algorithms, one of the most popular algorithm books.",
        image: "images/clrs.jpeg"
    },

    {
        title: "Ikigai",
        author: "Hector Garcia & Francesc Miralles",
        price: 350,
        category: "Self Help",
        description: "Discover the Japanese secret to a long and happy life.",
        image: "images/Ikigai.jpeg"
    },

    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 399,
        category: "Finance",
        description: "Learn the basics of money and financial freedom.",
        image: "images/richdad.jpeg"
    }

];


const container = document.getElementById("book-container");

function displayBooks(bookList) {

    container.innerHTML = "";

    bookList.forEach((book, index) => {

        container.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                <img src="${book.image}"
                     class="card-img-top"
                     alt="${book.title}">

                <div class="card-body">

                    <h5 class="card-title">
                        ${book.title}
                    </h5>

                    <p class="card-text">
                        ${book.author}
                    </p>

                    <p>
                        <strong>₹${book.price}</strong>
                    </p>

                    <button class="btn btn-primary"
                            onclick="showDetails(${index})">

                        View Details

                    </button>

                </div>

            </div>

        </div>

        `;
    });

}


displayBooks(books);


function showDetails(index) {

    document.getElementById("modalTitle").innerText =
        books[index].title;

    document.getElementById("modalAuthor").innerText =
        books[index].author;

    document.getElementById("modalPrice").innerText =
        books[index].price;

    document.getElementById("modalCategory").innerText =
        books[index].category;

    document.getElementById("modalDesc").innerText =
        books[index].description;

    document.getElementById("modalImage").src =
        books[index].image;

    const modal = new bootstrap.Modal(
        document.getElementById("bookModal")
    );

    modal.show();
}


// Search functionality

document.getElementById("search").addEventListener("keyup", function () {

    const searchText = this.value.toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchText)
    );

    displayBooks(filteredBooks);

});