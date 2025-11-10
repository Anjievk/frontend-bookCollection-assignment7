import React, { useState } from "react";
import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton({ onAddBook }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // this function for opening the pop-up
    const openModal = () => {
        setIsModalOpen(true);
        const dialog = document.querySelector("#my-dialog");
        if (dialog) {
            dialog.showModal();
        }
    };

    // this function for closing the pop-up
    const closeModal = () => {
        setIsModalOpen(false);
        const dialog = document.querySelector("#my-dialog");
        if (dialog) {
            dialog.close();
        }
    };

    const handleAddBook = (newBook) => {
        onAddBook(newBook);
        closeModal();
    };

    return (
        <div>
            <Modal
                btnLabel='New'
                btnClassName='btn-new'
                onclick={openModal}
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                <AddForm />
            </Modal>
            <button className='btn-edit'>Edit</button>
            <button className='btn-delete'>Delete</button>
        </div>
    );
}

export default NewButton;

//newbutton file
