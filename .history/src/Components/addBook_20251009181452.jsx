import { useState } from "react";
import { nanoid } from "nanoid";
import AddForm from "./AddForm";

export default function AddBook() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }

    function DeleteItem(id) {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }
    return (
        <div className='winners'>
            <h2>List of Ballon d'Or Winners</h2>

            {items.map((item) => (
                <div
                    className='item'
                    key={item.id}
                >
                    <p>Player's name: {item.name}</p>
                    <p>Awards: {item.awards}</p>
                    <button onClick={() => DeleteItem(item.id)}>Remove</button>
                </div>
            ))}
            <AddForm add={addItem} />
        </div>
    );
}
