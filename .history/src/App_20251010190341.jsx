import { useState } from "react";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";

export default function App() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    <div className='add-col'>
                        <NewButton adddBook={addBook} />
                    </div>

                    {items.map((b) => (
                        <Book
                            key={b.isbn13}
                            id={b.isbn13}
                            title={b.title}
                            author={b.author}
                            image={b.image}
                            url={b.url}
                            selected={b.selected}
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
