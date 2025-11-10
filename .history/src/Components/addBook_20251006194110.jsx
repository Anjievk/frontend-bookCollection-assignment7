import { useState } from "react";
import { nanoid } from "nanoid";

export default function addBook() {
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

            {players.map((item, index) => (
                <div
                    className='item'
                    key={index}
                >
                    <p>Player's name: {item.name}</p>
                    <p>Awards: {item.awards}</p>
                    <button onClick={() => DeleteItem(item.id)}>Remove</button>
                </div>
            ))}
            <Form add={addItem} />
        </div>
    );
}

function Form({ add }) {
    const [item, setItems] = useState({ name: "", awards: "" });

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        add({
            name: data.get("name"),
            awards: data.get("awards"),
            id: nanoid(),
        });
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Player's name: </label>
                <input
                    type='text'
                    name='name'
                    required
                />
            </p>
            <p>
                <label>Awards: </label>
                <input
                    type='number'
                    name='awards'
                    required
                />
            </p>
            <button type='submit'>Save</button>
        </form>
    );
}
