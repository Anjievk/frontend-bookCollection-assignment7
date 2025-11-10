import React, { useState } from "react";
import books from "../data/books.json";
import NewButton from "./newButton";
import Book from "./bookButton";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    <NewButton />
                    {books.map((b) => (
                        <Book
                            key={b.isbn13}
                            cover={b.image}
                            title={b.title}
                            price={b.price} // ✅ use price instead of author
                            info={b.url}
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
