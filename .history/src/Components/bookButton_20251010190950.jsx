import { useState } from "react";

function Book({ book, setSelectedBookId, selectedBookId }) {
    const [darkMode, setDarkMode] = useState(false);

    if (darkMode && selectedBookId === book.id) {
        setDarkMode(false);
    }

    function handleClick() {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            setSelectedBookId(newMode ? book.id : null);
            return newMode;
        });
    }

    return (
        <div
            className={`book ${darkMode ? "dark-mode" : ""}`}
            onClick={handleClick}
        >
            <img
                className='book-image'
                src={props.image}
                alt={props.alt}
            />

            <p className='author'>By {props.author}</p>

            {/* <div onClick={(e) => e.stopPropagation()}>
                <BookInfo url={props.url} />
            </div> */}
        </div>
    );
}
export default Book;
