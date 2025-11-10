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

    function addBook(book) {
        setItems((prev) => [...prev, book]);
    }

    function DeleteBook(id) {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    {/* Let NewButton call addBook(book) when a new book is created */}
                    <NewButton onAdd={addBook} />

                    <ul className='book-list'>
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className='book-row'
                            >
                                <Book
                                    book={item}
                                    selected={selectedIds.has(item.id)}
                                    onToggle={() => toggleSelect(item.id)}
                                />
                                <button onClick={() => deleteBook(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, Set G, 2025</p>
            </footer>
        </div>
    );
}
