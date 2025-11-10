import { useEffect, useState } from "react";

function Book({ book, setSelectedBookId, selectedBookId }) {
    const [darkMode, setDarkMode] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (darkMode && selectedBookId === book.id) {
            setDarkMode(false);
        }
    }, [darkMode, selectedBookId, book.id]);

    function handleClick() {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            setSelectedBookId(newMode ? book.id : null);
            return newMode;
        });
        setIsSelected((prev) => !prev);
        // If you still need to track selected IDs in parent, you'd need to modify this
        if (!isSelected) {
            setSelectedBookId(book.id);
        } else {
            setSelectedBookId(null);
        }
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
