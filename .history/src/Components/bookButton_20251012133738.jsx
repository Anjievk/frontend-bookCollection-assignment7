import { useEffect, useState } from "react";

function Book({ book, setSelectedBookIds, selectedBookIds }) {
    const isSelected = selectedBookIds.includes(book.id);

    function handleClick() {
        setSelectedBookIds((prevSelected) => {
            if (prevSelected.includes(book.id)) {
                return [];
            } else {
                return [book.id];
            }
        });
    }

    return (
        <div
            className={`book ${isSelected ? "selected" : ""}`}
            onClick={handleClick}
        >
            <img
                className='book-image'
                src={book.image}
                alt={book.title}
            />

            <p className='author'>By {book.author}</p>
        </div>
    );
}
export default Book;
