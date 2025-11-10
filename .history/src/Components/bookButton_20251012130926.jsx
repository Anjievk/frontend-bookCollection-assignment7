import { useEffect, useState } from "react";

function Book({ book, setSelectedBookId, selectedBookId }) {
    const isSelected = selectedBookId.includes(book.id);

    useEffect(() => {
        if (darkMode && selectedBookId === book.id) {
            setDarkMode(false);
        }
    }, [darkMode, selectedBookId, book.id]);

    function handleClick() {
        setSelectedBookId((prevSelected) => {
            if (prevSelected.includes(book.id)) {
                // Deselect - remove from array
                return prevSelected.filter((id) => id !== book.id);
            } else {
                // Select - add to array
                return [...prevSelected, book.id];
            }
        });
    }

    return (
        <div
            className={`book ${darkMode ? "darkMode" : ""} ${
                selectedBookId === book.id ? "selected" : ""
            }`}
            onClick={handleClick}
        >
            <img
                className='book-image'
                src={book.image}
                alt={book.title}
            />

            <p className='author'>By {book.author}</p>

            {/* <div onClick={(e) => e.stopPropagation()}>
                <BookInfo url={props.url} />
            </div> */}
        </div>
    );
}
export default Book;
