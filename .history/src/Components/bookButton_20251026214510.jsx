function Book({ data, onSelect, isSelected }) {
    const handleClick = () => {
        if (onSelect) {
            onSelect(data);
        }
    };

    return (
        <div
            className={`book ${isSelected ? "selected" : ""}`}
            onClick={handleClick}
        >
            <img
                className='book-image'
                src={data.image}
                alt={data.title}
            />

            <p className='author'>Author: {data.author}</p>
        </div>
    );
}
export default Book;
