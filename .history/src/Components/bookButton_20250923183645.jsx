import BookInfo from "./BookInfo";

function Book(props) {
    function remove(e) {
        if (e.target === e.currentTarget) {
            return;
        }
        if (e.target.tagName !== "SPAN") {
            return;
        }

        e.currentTarget.remove();

        return (
            <div className='book'>
                <img
                    className='book-image'
                    src={props.cover}
                    alt={props.alt}
                />

                <p className='price'>{props.price}</p>
                <BookInfo BookInfo={props.BookInfo} />
                <div
                    style={{ background: background }}
                    className='tile'
                    onClick={remove}
                >
                    <p>{label}</p>
                    <span>❌</span>
                </div>
            </div>
        );
    }
}
export default Book;
