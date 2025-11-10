function Book({ book, setSelectedBookIds, selectedBookIds }) {
    const handleClick = () => {
        if (setSelectedBookIds) {
            setSelectedBookIds(data);
        }
    };

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
