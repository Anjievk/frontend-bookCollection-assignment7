function Book({ book, setSelectedBookIds, selectedBookIds }) {
    const handleClick = () => {
        if (setSelectedBookIds) {
            setSelectedBookIds(book);
        }
    };

    return (
        <div
            className={`book ${selectedBookIds ? "selected" : ""}`}
            onClick={handleClick}
        >
            <img
                className='book-image'
                src={book.image}
                alt={book.title}
            />

            <p className='book-author'>Author: {book.author}</p>
        </div>
    );
}
export default Book;
