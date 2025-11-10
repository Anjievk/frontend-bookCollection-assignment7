function Book({ data, onSelect, isSelected, isOnLoan, onViewDetails }) {
    const handleClick = () => {
        if (onSelect) {
            onSelect(data);
        }
    };

    const handleViewDetails = (e) => {
        e.stopPropagation(); // Prevent triggering the parent onClick
        if (onViewDetails) {
            onViewDetails(data);
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
            
            <button 
                className="btn-view-details"
                onClick={handleViewDetails}
            >
                View Details
            </button>
        </div>
    );
}
export default Book;
