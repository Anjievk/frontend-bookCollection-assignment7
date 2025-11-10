import { useEffect, useRef } from "react";

function Modal({ btnLabel, btnClassName, children, isOpen, onClose }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    useEffect(() => {
        if (modalRef.current) {
            if (isOpen) {
                modalRef.current.showModal();
            } else {
                modalRef.current.close();
            }
        }
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) {
            onClose();
        }
    };
    return (
        <>
            <button
                className={btnClassName}
                onClick={handleClick}
            >
                {btnLabel}
            </button>
            <dialog
                ref={modalRef}
                onClick={handleBackdropClick}
            >
                {children}
            </dialog>
        </>
    );
}

export default Modal;
