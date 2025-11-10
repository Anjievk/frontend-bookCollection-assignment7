import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ book, onDelete, onAddBook, update }) {
    return (
        <div>
            <Modal
                btnLabel='New'
                btnClassName='btn-new'
            >
                <AddForm addBook={onAddBook} />
            </Modal>

            <Modal
                btnLabel='Edit'
                btnClassName='btn-edit'
            >
                <BookForm
                    book={book}
                    add={update}
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
