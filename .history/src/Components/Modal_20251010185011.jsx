import { useEffect, useRef } from "react";

function Modal({ btnLabel, btnClassName, children }) {
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

    return (
        <>
            <button
                className={btnClassName}
                onClick={handleClick}
            >
                {btnLabel}
            </button>
            <dialog ref={modalRef}>
                <div>{React.cloneElement(children, { closeModal })}</div>
            </dialog>
        </>
    );
}

export default Modal;
