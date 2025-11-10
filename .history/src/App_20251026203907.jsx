import { useState, useEffect } from "react";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";
import Footer from "./Components/footer";

export default function App() {
    // Load books from localStorage or use default data
    const [books, setBooks] = useState(() => {
        try {
            const savedBooks = localStorage.getItem("books");
            return savedBooks ? JSON.parse(savedBooks) : data;
        } catch (error) {
            console.error("Error loading books from localStorage:", error);
            return data;
        }
    });
    const [selectedBook, setSelectedBook] = useState(null);
    const [filterAuthor, setFilterAuthor] = useState("");

    // Save books to localStorage whenever books state changes
    useEffect(() => {
        try {
            localStorage.setItem("books", JSON.stringify(books));
        } catch (error) {
            console.error("Error saving books to localStorage:", error);
        }
    }, [books]);

    function getBooks(bookData) {
        const isSelected =
            selectedBook &&
            (selectedBook.isbn13 || selectedBook.title) ===
                (bookData.isbn13 || bookData.title);
        return (
            <Book
                key={bookData.isbn13 || bookData.title}
                data={bookData}
                onSelect={handleBookSelection}
                isSelected={isSelected}
            />
        );
    }

    function handleBookSelection(book) {
        // If clicking the same book that's already selected, unselect it
        if (
            selectedBook &&
            (selectedBook.isbn13 || selectedBook.title) ===
                (book.isbn13 || book.title)
        ) {
            setSelectedBook(null);
        } else {
            // Otherwise, select the clicked book
            setSelectedBook(book);
        }
    }

    function handleUpdateBook(updatedBook) {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                (book.isbn13 || book.title) ===
                (updatedBook.isbn13 || updatedBook.title)
                    ? updatedBook
                    : book
            )
        );
        setSelectedBook(updatedBook);
    }

    function handleDeleteBook() {
        if (selectedBook) {
            setBooks((prevBooks) =>
                prevBooks.filter(
                    (book) =>
                        (book.isbn13 || book.title) !==
                        (selectedBook.isbn13 || selectedBook.title)
                )
            );
            setSelectedBook(null);
        } else {
            alert("Please select a book to delete");
        }
    }

    function handleAddBook(newBook) {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    }

    // Function to clear localStorage (useful for debugging)
    function clearStorage() {
        localStorage.removeItem("books");
        setBooks(data);
    }

    const authors = [...new Set(books.map((book) => book.author))];

    // Filter books based on selected author
    const filteredBooks = filterAuthor
        ? books.filter((book) => book.author === filterAuthor)
        : books;

    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    <Filter
                        authors={authors}
                        onFilterChange={setFilterAuthor}
                        currentFilter={filterAuthor}
                    />
                    <div className='add-col'>
                        <NewButton
                            books={books}
                            setBooks={setBooks}
                            selectedBookIds={selectedBookIds}
                        />
                    </div>{" "}
                    {books.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            setSelectedBookIds={setSelectedBookIds}
                            selectedBookIds={selectedBookIds}
                        />
                    ))}
                </div>
            </main>
            {/* Moved footer to components */}
            <Footer />
        </div>
    );
}
