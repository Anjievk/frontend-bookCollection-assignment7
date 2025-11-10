import { useState } from "react";
import { nanoid } from "nanoid";

export default function addBook() {
    const [items, setItems] = useState([]);

    function addPlayer(player) {
        setItems([...items, item]);
    }

    function Deleteitem(id) {
        const newPlayers = players.filter((player) => player.id !== id);
        setItems([...newItems]);
    }
    return (
        <div className='winners'>
            <h2>List of Ballon d'Or Winners</h2>

            {players.map((player, index) => (
                <div
                    className='player'
                    key={index}
                >
                    <p>Player's name: {player.name}</p>
                    <p>Awards: {player.awards}</p>
                    <button onClick={() => DeletePlayer(player.id)}>
                        Remove
                    </button>
                </div>
            ))}
            <Form add={addPlayer} />
        </div>
    );
}

function Form({ add }) {
    const [player, setItemss] = useState({ name: "", awards: "" });

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
