import { useState } from "react";
import initialBooks from "../data/books.json"; // ← rename the import
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";

export default function App() {
    const [items, setItems] = useState(initialBooks);
    const [selectedIds, setSelectedIds] = useState(() => new Set());

    const toggleSelect = (id) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    function addBook(items) {
        setItems([...items, items]);
    }

    function DeleteBook(id) {
        const newPlayers = players.filter((player) => player.id !== id);
        setItems([...newPlayers]);
    }

    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    <div className='add-col'>
                        <NewButton className='add' />
                    </div>
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, Set G, 2025</p>
            </footer>
        </div>
    );
}
