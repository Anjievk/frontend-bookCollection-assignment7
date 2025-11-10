import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ books, setBooks, selectedBookIds, update }) {
    function deleteBook() {
        const newBooks = books.filter(
            (book) => !selectedBookIds.includes(book.id)
        );
        setBooks(newBooks);
    }

    function handleAddBook(newBook) {
        setBooks([...books, newBook]);
    }

    return (
        <div>
            <Modal
                btnLabel='New'
                btnClassName='btn-new'
            >
                <AddForm addBook={handleAddBook} />
            </Modal>
            <Modal
                btnLabel='Edit'
                btnClassName='btn-edit'
            >
                <AddForm
                    add={update}
                    books={books}
                />
            </Modal>
            <button
                className='btn-delete'
                onClick={deleteBook}
                disabled={!selectedBookIds}
            >
                Delete
            </button>
        </div>
    );
}

export default NewButton;

//newbutton file
