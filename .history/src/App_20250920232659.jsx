import React, { useState } from "react";
import books from "../data/books.json";
import NewButton from "./newButton";
import Book from "./bookButton";

function App() {
    const [count, setCount] = useState(0);
    const books = [
        {
            name: "Chihiro",
            image: "https://hips.hearstapps.com/hmg-prod/images/studio-ghibli-hayao-miyazaki-spirited-away-1591392729.jpg?crop=0.675xw:1.00xh;0.205xw,0&resize=1200:*",
            price: "49.99",
        },
        {
            name: "Noface",
            image: "https://static.wikia.nocookie.net/studio-ghibli/images/9/9d/No-Face_infobox.png/revision/latest/smart/width/250/height/250?cb=20200908135515",
            price: "99.99",
        },
        {
            name: "Totoro",
            image: "https://m.media-amazon.com/images/I/81OhlwkEb+L._UF1000,1000_QL80_.jpg",
            price: "29.99",
        },
        {
            name: "Ponyo",
            image: "https://upload.wikimedia.org/wikipedia/en/5/51/Ponyo.png",
            price: "19.99",
        },
    ];

    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    <NewButton />
                    <Main>{books.map(books)}</Main>
                </div>
            </main>

            <footer>
                <p>&copy; Angie Duong, Set G, 2025</p>
            </footer>
        </div>
    );
}

export default App;
