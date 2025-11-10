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
            onClick={remove}
        >
            <span className='remove-btn'>X</span>
            <img
                className='book-image'
                src={props.cover}
                alt={props.alt}
            />

            <p className='price'>{props.price}</p>
            <BookInfo url={props.url} />
        </div>
    );
}
export default Book;
