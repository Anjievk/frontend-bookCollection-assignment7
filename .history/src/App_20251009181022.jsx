import { useState } from "react";
import initialBooks from "../data/books.json"; // ← rename the import
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";
import AddBook from "./Components/addBook";

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

    const removeBook = (id) => {
        setItems((prev) => prev.filter((b) => (b.isbn13 ?? b.id) !== id));
        setSelectedIds((prev) => {
            if (!prev.has(id)) return prev;
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    };

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

                    {items.map((b) => (
                        <Book
                            key='b.isbn13'
                            id='b.isbn13'
                            cover={b.image}
                            title={b.title}
                            price={b.price}
                            url={b.url}
                            selected={selectedIds.has(b.isbn13)}
                            onSelect={() => toggleSelect(b.isbn13)}
                            onRemove={() => removeBook(b.isbn13)}
                        />
                    ))}

                    <AddBook />
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, Set G, 2025</p>
            </footer>
        </div>
    );
}
