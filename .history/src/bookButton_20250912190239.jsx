import BookInfo from "./BookInfo";

function Book(props) {
    return (
        <div className='Book'>
            <img
                className='Book-image'
                src={props.cover}
                alt={props.alt}
            />

            <p className='author'>{props.author}</p>
            <BookInfo BookInfo={props.BookInfo} />
        </div>
    );
}
export default Book;
