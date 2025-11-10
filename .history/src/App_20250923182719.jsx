import React, { useState } from "react";
import books from "../data/books.json";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";

function App() {
    const [count, setCount] = useState(0);
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
                    <div
                        style={{ background: background }}
                        className='tile'
                        onClick={remove}
                    >
                        <p>{label}</p>
                        <span>❌</span>
                    </div>
                    {books.map((b) => (
                        <Book
                            key={b.isbn13}
                            cover={b.image}
                            title={b.title}
                            price={b.price}
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
