import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddBook() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        setItems([...items, item]);
    }

    function DeleteItem(id) {
        const newItems = items.filter((item) => item.id !== id);
        setItems([...newItems]);
    }
    return (
        <div className='winners'>
            <h2>List of Ballon d'Or Winners</h2>

            {items.map((item, index) => (
                <div
                    className='item'
                    key={index}
                >
                    <p>Player's name: {item.name}</p>
                    <p>Awards: {item.awards}</p>
                    <button onClick={() => DeleteItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}
