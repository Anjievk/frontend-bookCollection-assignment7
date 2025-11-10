import { useRef } from "react";

function Modal({ btnLabel, btnClassName, children }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    return (
        <>
            <button
                className={btnClassName}
                onClick={handleClick}
                isOpen={isModalOpen}
                onClose={closeModal}
            >
                {btnLabel}
            </button>
            <dialog ref={modalRef}>{children}</dialog>
        </>
    );
}

export default Modal;
