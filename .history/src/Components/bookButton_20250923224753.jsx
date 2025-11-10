import BookInfo from "./BookInfo";

function Book(props) {
    function remove(e) {
        if (e.target.tagName !== "SPAN") {
            return; // only trigger when ❌ is clicked
        }
        e.currentTarget.remove(); // remove the whole <div class="book">
    }
    return (
        <div
            className='book'
            onClick={remove}
        >
            <img
                className='book-image'
                src={props.cover}
                alt={props.alt}
            />

            <p className='price'>{props.price}</p>
            <BookInfo BookInfo={props.BookInfo} />
            <span>❌</span>
        </div>
    );
}
export default Book;
