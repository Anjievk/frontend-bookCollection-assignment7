import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ books, setBooks, selectedBookIds }) {
    function deleteBook() {
        if (selectedBookIds.length > 0) {
            const newBooks = books.filter(
                (book) => !selectedBookIds.includes(book.id)
            );
            setBooks(newBooks);
        }
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
            <button className='btn-edit'>Edit</button>
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
