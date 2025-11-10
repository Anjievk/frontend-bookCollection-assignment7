import React, { useState } from "react";
import initialBooks from "../data/books.json";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";

function App() {
    const [items, setItems] = useState(initialBooks);
    const [selectedId, setSelectedId] = useState(null);

    const removeBook = (id) => {
        setItems((prev) => prev.filter((b) => (b.isbn13 ?? b.id) !== id));
        setSelectedId((prev) => (prev === id ? null : prev));
    };

    const toggleSelect = (id) => {
        setSelectedId((prev) => (prev === id ? null : id));
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
                            cover={b.image}
                            title={b.title}
                            price={b.price}
                            url={b.url}
                            selected={selectedId === b.isbn13}
                            onSelect={() => toggleSelect(b.isbn13)}
                            onRemove={() => removeBook(b.isbn13)}
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

export default App;
