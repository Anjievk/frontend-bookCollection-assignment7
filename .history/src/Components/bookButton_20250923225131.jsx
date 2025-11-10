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
            className='book'
            onClick={remove}
        >
            <span className='remove-btn'>X</span>
            <img
                className='book-image'
                src={props.cover}
                alt={props.alt}
            />

            <p className='price'>{props.price}</p>
            <BookInfo BookInfo={props.BookInfo} />
        </div>
    );
}
export default Book;
