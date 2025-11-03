function Book({ data, onSelect, isSelected, isOnLoan }) {
    const handleClick = () => {
        if (onSelect) {
            onSelect(data);
        }
    };

    return (
        <div
            className={`book ${isSelected ? "selected" : ""} ${isOnLoan ? "on-loan" : ""}`}
            onClick={handleClick}
        >
            {isOnLoan && (
                <div className="loan-badge">ON LOAN</div>
            )}
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
