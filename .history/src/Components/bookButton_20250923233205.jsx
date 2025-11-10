import BookInfo from "./BookInfo";

export default function Book({
    id,
    cover,
    title,
    price,
    url,
    selected,
    onSelect,
    onRemove,
}) {
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
                src={cover}
                alt={title}
            />
            <p className='price'>{price}</p>

            <div onClick={(e) => e.stopPropagation()}>
                <BookInfo url={url} />
            </div>
        </div>
    );
}
