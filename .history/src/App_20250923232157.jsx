import React, { useState } from "react";
import books from "../data/books.json";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";

function App() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(initialBooks); // keep books in state
    const [selectedId, setSelectedId] = useState(null); // which book is selected
    const removeBook = (id) => {
        setBooks((prev) => prev.filter((b) => (b.isbn13 ?? b.id) !== id));
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
                    {books.map((b) => (
                        <Book
                            key={b.isbn13}
                            cover={b.image}
                            title={b.title}
                            price={b.price}
                            url={b.url}
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
