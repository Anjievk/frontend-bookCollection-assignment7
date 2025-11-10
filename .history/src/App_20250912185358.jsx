import React, { useState } from "react";
import NewButton from "./NewButton";
import Book from "./bookButton";

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
                    <Book
                        cover='https://itbook.store/img/books/1001667919733.png'
                        alt='Cloud Native DevOps with Kubernetes'
                        author='by HackSpace Team'
                        info='https://itbook.store/books/1001667919733'
                    />

                    <Book
                        cover='https://itbook.store/img/books/1001635431011.png'
                        alt='NGINX Cookbook'
                        author='by HackSpace Team'
                        info='https://itbook.store/books/9781837630516'
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
