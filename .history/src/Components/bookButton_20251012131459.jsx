import { useEffect, useState } from "react";

function Book({ book, setSelectedBookIds, selectedBookIds }) {
    const [darkMode, setDarkMode] = useState(false);
    const isSelected = selectedBookIds.includes(book.id);

    useEffect(() => {
        if (darkMode && isSelected) {
            setDarkMode(false);
        }
    }, [darkMode, isSelected]);

    function handleClick() {
        setSelectedBookIds((prevSelected) => {
            if (prevSelected.includes(book.id)) {
                // If already selected, remove it (deselect)
                return prevSelected.filter((id) => id !== book.id);
            } else {
                // If not selected, add it (select)
                return [...prevSelected, book.id];
            }
        });

        // Toggle dark mode for visual feedback
        setDarkMode((prevMode) => !prevMode);
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
