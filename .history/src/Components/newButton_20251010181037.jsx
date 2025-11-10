import { useState } from "react";
import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ onAddBook }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log("Opening modal");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal");
        setIsModalOpen(false);
    };

    const handleAddBook = (newBook) => {
        console.log("Adding book:", newBook);
        if (onAddBook) {
            onAddBook(newBook);
        }
        closeModal();
    };

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
