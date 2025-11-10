import BookInfo from "./BookInfo";

function Book(props) {
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
                <Tile
                    label={tileLabel}
                    bg={tileBg}
                    onClose={() => setShowTile(false)}
                />
            )}
        </div>
    );
}
function Tile({ label }) {
    function remove(e) {
        if (e.target === e.currentTarget) {
            return;
        }
        if (e.target.tagName !== "SPAN") {
            return;
        }

        e.currentTarget.remove();
    }

    return (
        <div
            style={{ background: background }}
            className='tile'
            onClick={remove}
        >
            <p>{label}</p>
            <span>❌</span>
        </div>
    );
}
export default Book;
