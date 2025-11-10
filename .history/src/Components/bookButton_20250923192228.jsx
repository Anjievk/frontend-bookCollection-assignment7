import BookInfo from "./BookInfo";

function Book(props) {
    const [showTile, setShowTile] = useState(true);
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
    const handleClick = (e) => {
        if (e.target.tagName === "SPAN") onClose(); // only when X is clicked
    };

    return (
        <div
            className='tile'
            onClick={handleClick}
        >
            <p>{label}</p>
            <span
                role='button'
                aria-label='dismiss'
            >
                ❌
            </span>
        </div>
    );
}
export default Book;
