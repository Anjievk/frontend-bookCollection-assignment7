import { nanoid } from "nanoid";

function AddForm({ addBook, book }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const newBook = {
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
        addBook(bookData);
        e.target.reset();

        // Close modal
        const modal = document.querySelector("dialog[open]");
        if (modal) {
            modal.close();
        }
    };

    return (
        <div className='form-container'>
            <h2> {book ? "Edit book" : "Add book"} </h2>
            <form onSubmit={handleSubmit}>
                <h2>ADD BOOK</h2>
                <div className='form-control'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Book title'
                        defaultValue={book?.title}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author: </label>
                    <input
                        type='text'
                        name='author'
                        placeholder='Author'
                        defaultValue={book?.author}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publisher'>Publisher: </label>
                    <input
                        type='text'
                        name='publisher'
                        placeholder='Publisher'
                        defaultValue={book?.publisher}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='year'>Publication Year: </label>
                    <input
                        type='number'
                        name='year'
                        defaultValue={book?.year}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='language'>Language: </label>
                    <input
                        type='text'
                        name='language'
                        placeholder='Language'
                        defaultValue={book?.language}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pages'>Pages: </label>
                    <input
                        type='number'
                        name='pages'
                        defaultValue={book?.pages}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='image'>Book url: </label>
                    <input
                        type='url'
                        name='image'
                        defaultValue={book?.image}
                    />
                </div>

                <button
                    className='btn primary'
                    type='submit'
                >
                    {book ? "Update" : "Save"}
                </button>
            </form>

            <img
                src='https://st3.depositphotos.com/9461386/35794/v/450/depositphotos_357945126-stock-illustration-planet-space-retro-game-design.jpg'
                alt='form-img-assist'
            />
        </div>
    );
}

export default AddForm;
