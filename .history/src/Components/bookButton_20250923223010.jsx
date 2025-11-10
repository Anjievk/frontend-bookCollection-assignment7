import BookInfo from "./BookInfo";

function Book(props) {
    // const [showTile, setShowTile] = useState(true);
    return (
        <div className='book'>
            {showTile && (
                <Tile
                    label='New'
                    onClose={() => setShowTile(false)}
                />
            )}
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
function Tile({ label, onClose }) {
    return (
        <div className='tile'>
            <p>{label}</p>
            <span
                role='button'
                aria-label='dismiss'
                onClick={onClose}
            >
                ❌
            </span>
        </div>
    );
}
export default Book;
