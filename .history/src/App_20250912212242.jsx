import React, { useState } from "react";
import NewButton from "./NewButton";
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
                    <Book
                        cover='https://itbook.store/img/books/1001667919733.png'
                        alt='Internet of Things'
                        author='by HackSpace Team'
                        info='https://itbook.store/books/1001667919733'
                    />

                    <Book
                        cover='https://itbook.store/img/books/1001635431011.png'
                        alt='50 Best 3D Prints'
                        author='by HackSpace Team'
                        BookInfo='https://itbook.store/books/1001635431011'
                    />
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, 2025</p>
            </footer>
        </div>
    );
}

export default App;
