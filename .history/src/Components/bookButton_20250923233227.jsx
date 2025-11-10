import BookInfo from "./BookInfo";

function Book(props) {
    function remove(e) {
        if (e.target.tagName !== "SPAN") {
            return;
        }
        e.currentTarget.remove();
    }
    return (
        <div
            className={`book ${selected ? "book--selected" : ""}`}
            onClick={onSelect}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect();
                }
            }}
            aria-pressed={selected}
            aria-label={`Select ${title}`}
        >
            {/* Remove button – don’t let it bubble and toggle selection */}
            <span
                className='remove-btn'
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}
            >
                ×
            </span>
            <img
                className='book-image'
                src={props.cover}
                alt={props.alt}
            />

            <p className='price'>{props.price}</p>

            {/* Clicking the link shouldn’t toggle selection */}
            <div onClick={(e) => e.stopPropagation()}>
                <BookInfo url={props.url} />
            </div>
        </div>
    );
}
export default Book;
