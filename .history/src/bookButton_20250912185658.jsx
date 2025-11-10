import BookInfo from "./BookInfo";

function Book(props) {
    return (
        <div className='BookContainer'>
            <div className='Book-cover'>
                <img
                    className='Book-cover-image'
                    src={props.cover}
                    alt={props.alt}
                />
            </div>

            <p className='Book-author'>{props.author}</p>
            <BookInfo BookInfo={props.BookInfo} />
        </div>
    );
}
export default Book;
