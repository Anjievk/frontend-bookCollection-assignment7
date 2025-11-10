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
                        <NewButton
                            books={books}
                            setBooks={setBooks}
                            selectedBookId={selectedBookId}
                        />
                    </div>{" "}
                    {books.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            setSelectedBookId={setSelectedBookId}
                            selectedBookId={selectedBookId}
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
