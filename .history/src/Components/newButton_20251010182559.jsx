import React, { useState } from "react";
import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ onAddBook }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // this function for opening the pop-up
    const openModal = () => {
        setIsModalOpen(true);
    };

    // this function for closing the pop-up
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddBook = (newBook) => {
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

//newbutton file
