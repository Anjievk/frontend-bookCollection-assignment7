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
            {items.map((item) => (
                <div
                    className='item'
                    key={item.id}
                >
                    <p>Book name: {item.title}</p>
                    <button onClick={() => DeleteItem(item.id)}>Remove</button>
                </div>
            ))}
            <AddForm add={addItem} />
        </div>
    );
}
