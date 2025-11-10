import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ book, handleAddBook, onDelete, onUpdate }) {
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
                    addBook={onUpdate}
                    book={book}
                />
            </Modal>
            <button
                className='btn-delete'
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default NewButton;

//newbutton file
