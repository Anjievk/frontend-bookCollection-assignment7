import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton() {
    function openModal(e) {
        const dialog = document.querySelector("#my-dialog");
        dialog.show();
    }

    // this function for closing the pop-up
    function closeModal(e) {
        const dialog = document.querySelector("#my-dialog");
        dialog.close();
    }
    return (
        <div>
            <Modal
                btnLabel='New'
                btnClassName='btn-new'
            >
                <AddForm />
            </Modal>
        </div>
    );
}

export default NewButton;

//newbutton file
