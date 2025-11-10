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
                                <Book 
            cover="book1.png"
            alt="Cloud Native DevOps with Kubernetes" 
            author="by Justin Domingus, John Arundel"
            info="https://itbook.store/books/9781098116828"/>

            <Book 
            cover="book2.png"
            alt="NGINX Cookbook" 
            author="by Derek DeJonghe" 
            info="https://itbook.store/books/9781098126247"/>
          </div>
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, 2025</p>
            </footer>
        </div>
    );
}

export default App;
