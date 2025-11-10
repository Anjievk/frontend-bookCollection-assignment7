function Book({ book, setSelectedBookIds, selectedBookIds }) {
    const handleClick = () => {
        if (setSelectedBookIds) {
            setSelectedBookIds(data);
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

            <p className='book-author'>Author: {data.author}</p>
        </div>
    );
}
export default Book;
