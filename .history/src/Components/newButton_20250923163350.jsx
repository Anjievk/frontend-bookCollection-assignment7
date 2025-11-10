import Modal from "./Modal";
import AddForm from "./AddForm";

function NewButton() {
    return <button className='btn-new'>New</button>;
    <div>
        <Modal
            btnLabel='New'
            btnClassName='btn primary'
        >
            <ProductForm />
        </Modal>
    </div>;
}

export default NewButton;

//newbutton file
