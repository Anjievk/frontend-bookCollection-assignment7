import React, { useState } from "react";
import BookInfo from "./BookInfo";
import NewButton from "./NewButton";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <header className='app-header'>
                <h1>Book Catalog</h1>
            </header>

            <main className='app-main'>
                <div className='content'>
                    <NewButton />
                    <BookInfo />
                    <BookInfo />
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, 2025</p>
            </footer>
        </div>
    );
}

export default App;
