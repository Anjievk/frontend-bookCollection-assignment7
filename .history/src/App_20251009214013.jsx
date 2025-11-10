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

    const addBook = (newBookData) => {
        const newBook = {
            ...newBookData,
            isbn13: `custom-${Date.now()}`, // Generate a unique ID
            cover: newBookData.cover,
            title: newBookData.title,
            url: newBookData.url,
        };
        setItems((prevItems) => [...prevItems, newBook]);
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
                            key={b.isbn13}
                            id={b.isbn13}
                            cover={b.image}
                            title={b.title}
                            author={b.author}
                            price={b.price}
                            url={b.url}
                            selected={selectedIds.has(b.isbn13)}
                            onSelect={() => toggleSelect(b.isbn13)}
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
