function AddForm({ addBook, book }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const bookData = {
            // Changed from newBook to bookData
            id: nanoid(),
            title: data.get("title"),
            author: data.get("author"),
            publisher: data.get("publisher"),
            year: data.get("year"),
            language: data.get("language"),
            pages: data.get("pages"),
            image: data.get("image"),
            url: "#",
        };

        // Add additional properties for new books
        if (!book) {
            bookData.url = "#";
            bookData.isbn13 = nanoid();
            bookData.selected = false;
        } else {
            // For editing, preserve the original book's properties
            bookData.isbn13 = book.isbn13;
            bookData.url = book.url;
            bookData.selected = book.selected;
        }

        console.log("Calling add function with:", bookData);
        addBook(bookData); // Changed from 'add' to 'addBook'
        e.target.reset();

        // Close modal
        const modal = document.querySelector("dialog[open]");
        if (modal) {
            modal.close();
        }
    };

    // ... rest of the component
}
