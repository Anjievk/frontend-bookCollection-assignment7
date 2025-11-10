import BookInfo from "./BookInfo";

function Book(props) {
    const [showTile, setShowTile] = useState(true);

    const handleTileClick = (e) => {
        if (e.target.tagName === "SPAN") {
            setShowTile(false); // hide instead of removing DOM
        }
    };

    return (
        <div className='book'>
            <img
                className='book-image'
                src={props.cover}
                alt={props.alt}
            />

            <p className='price'>{props.price}</p>
            <BookInfo BookInfo={props.BookInfo} />

            {showTile && (
                <div
                    className='tile'
                    style={{ background: tileBg }}
                    onClick={handleTileClick}
                >
                    <p>{tileLabel}</p>
                    <span
                        role='button'
                        aria-label='dismiss'
                    >
                        ❌
                    </span>
                </div>
            )}
        </div>
    );
}
export default Book;
