import { useRef, useEffect } from "react";

function Modal({ btnLabel, btnClassName, children, isOpen, onClose }) {
    const modalRef = useRef();

    // Handle modal open/close
    useEffect(() => {
        const dialog = modalRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    // Handle backdrop clicks
    useEffect(() => {
        const dialog = modalRef.current;
        if (!dialog) return;

        const handleClick = (e) => {
            const rect = dialog.getBoundingClientRect();
            if (
                e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom
            ) {
                onClose();
            }
        };

        dialog.addEventListener("click", handleClick);
        return () => dialog.removeEventListener("click", handleClick);
    }, [onClose]);

    return (
        <>
            <button
                className={btnClassName}
                onClick={() => setIsModalOpen(true)}
            >
                {btnLabel}
            </button>
            <dialog
                ref={modalRef}
                style={{ position: "relative" }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        zIndex: 1000,
                    }}
                >
                    ×
                </button>
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </dialog>
        </>
    );
}

export default Modal;
