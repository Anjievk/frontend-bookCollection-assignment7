import BookInfo from "./BookInfo";

function Book(props) {
    return (
        <div className='Book-container'>
            <div className='Book-cover'>
                <img
                    className='Book-cover-image'
                    src={props.cover}
                    alt={props.alt}
                />
            </div>

            <p className='Book-author'>{props.author}</p>
            <Info info={props.BookInfo} />
        </div>
    );
}
export default Book;
