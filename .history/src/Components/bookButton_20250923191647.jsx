import { useState } from "react";
import BookInfo from "./BookInfo";

export default function Book({
    cover,
    alt,
    price,
    bookInfo, // URL
    tileLabel = "New",
    tileBg = "#eee",
}) {
    const [showTile, setShowTile] = useState(true);

    return (
        <div className='book'>
            {showTile && (
                <Tile
                    label={tileLabel}
                    bg={tileBg}
                    onClose={() => setShowTile(false)}
                />
            )}

            <img
                className='book-image'
                src={cover}
                alt={alt}
            />
            <p className='price'>{price}</p>
            <BookInfo bookInfo={bookInfo} />
        </div>
    );
}

function Tile({ label, bg, onClose }) {
    return (
        <div
            className='tile'
            style={{ background: bg }}
        >
            <p>{label}</p>
            <button
                type='button'
                className='tile-close'
                aria-label='dismiss'
                onClick={onClose}
            >
                ❌
            </button>
        </div>
    );
}
