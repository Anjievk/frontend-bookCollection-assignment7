import { useState } from "react";
import initialBooks from "../data/books.json"; // ← rename the import
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";

export default function App() {
    //Add selected property to all books
    const [items, setItems] = useState(() =>
        initialBooks.map((book) => ({ ...book, selected: false }))
    );
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
            image: newBookData.image,
            title: newBookData.title,
            author: newBookData.author,
            selected: false,
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
                        <NewButton onAddBook={addBook} />
                    </div>

                    {items.map((b) => (
                        <Book
                            key={b.isbn13}
                            id={b.isbn13}
                            title={b.title}
                            author={b.author}
                            price={b.price}
                            image={b.url}
                            selected={selectedIds.has(b.isbn13)}
                            onSelect={() => toggleSelect(b.isbn13)}
                        />
                    ))}
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, Set G, 2025</p>
            </footer>
        </div>
    );
}
