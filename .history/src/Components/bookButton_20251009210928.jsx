import BookInfo from "./BookInfo";

function Book(props) {
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
                src={props.cover}
                alt={props.alt}
            />

            <p className='price'>{props.price}</p>

            <div onClick={(e) => e.stopPropagation()}>
                <BookInfo url={props.url} />
            </div>
        </div>
    );
}
export default Book;
