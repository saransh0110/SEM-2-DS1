const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 499,
        category: "Self Help",
        description: "Tiny changes, remarkable results.",
        image: "images/atomic.jpg"
    },

    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 399,
        category: "Finance",
        description: "Learn money management.",
        image: "images/richdad.jpg"
    },

    {
        title: "Clean Code",
        author: "Robert C Martin",
        price: 699,
        category: "Programming",
        description: "Guide to writing clean code.",
        image: "images/cleancode.jpg"
    },

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 350,
        category: "Fiction",
        description: "Follow your dreams.",
        image: "images/alchemist.jpg"
    },

    {
        title: "Ikigai",
        author: "Hector Garcia",
        price: 420,
        category: "Self Help",
        description: "Japanese secret to long life.",
        image: "images/ikigai.jpg"
    },

    {
        title: "Introduction to Algorithms",
        author: "Thomas H Cormen",
        price: 999,
        category: "Programming",
        description: "Popular algorithms book.",
        image: "images/clrs.jpg"
    }
];

const container = document.getElementById("book-container");

function displayBooks(bookList) {

    container.innerHTML = "";

    for (let i = 0; i < bookList.length; i++) {

        container.innerHTML += `
        <div class="col-md-4 mb-4">

            <div class="card h-100">

                <img src="${bookList[i].image}" class="card-img-top">

                <div class="card-body">

                    <h5>${bookList[i].title}</h5>

                    <p>${bookList[i].author}</p>

                    <h6>₹${bookList[i].price}</h6>

                    <button
                        class="btn btn-primary"
                        onclick="showModal('${bookList[i].title}')">
                        View Details
                    </button>

                </div>

            </div>

        </div>
        `;
    }
}

function showModal(title) {

    let selectedBook = null;

    for (let i = 0; i < books.length; i++) {

        if (books[i].title === title) {
            selectedBook = books[i];
            break;
        }
    }

    if (selectedBook) {

        document.getElementById("modalTitle").innerText =
            selectedBook.title;

        document.getElementById("modalAuthor").innerText =
            selectedBook.author;

        document.getElementById("modalPrice").innerText =
            selectedBook.price;

        document.getElementById("modalCategory").innerText =
            selectedBook.category;

        document.getElementById("modalDesc").innerText =
            selectedBook.description;

        let modal = new bootstrap.Modal(
            document.getElementById("bookModal")
        );

        modal.show();
    }
}

displayBooks(books);

document.getElementById("search")
.addEventListener("keyup", function () {

    let searchText = this.value.toLowerCase();

    let filteredBooks = books.filter(function (book) {

        return book.title
            .toLowerCase()
            .includes(searchText);

    });

    displayBooks(filteredBooks);

});