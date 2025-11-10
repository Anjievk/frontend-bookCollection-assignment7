import { useState } from "react";

function Book({ book, setSelectedBookId, selectedBookId }) {
    const [darkMode, setDarkMode] = useState(false);

    if {darkMode && selectedBookId === book.id} {
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
            className={`book ${props.selected ? "book--selected" : ""}`}
            onClick={props.onSelect}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    props.onSelect();
                }
            }}
            aria-pressed={props.selected}
            aria-label={`Select ${props.title}`}
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
