import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ onAddBook }) {
    function deleteBook() {
        if (selectedBookId) {
            const newBooks = books.filter((b) => b.id !== selectedBookId);
            setBooks([...newBooks]);
        }
    }

    function addBook(newBook) {
        setBooks([...books, newBook]);
    }

    return (
        <div>
            <Modal
                btnLabel='New'
                btnClassName='btn-new'
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <AddForm
                    onAddBook={handleAddBook}
                    onClose={closeModal}
                />
            </Modal>
            <button className='btn-edit'>Edit</button>
            <button className='btn-delete'>Delete</button>
        </div>
    );
}

export default NewButton;

//newbutton file
