import { useState, useEffect } from "react";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";
import Footer from "./Components/footer";
import Filter from "./Components/Filter/filter";
import LoanManagement from "./Components/LoanManagement";
import BookDetails from "./Components/BookDetails";
import data from "../data/books.json";

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
    const [selectedBookIds, setSelectedBookIds] = useState(null);
    const [filterAuthor, setFilterAuthor] = useState("");
    const [viewMode, setViewMode] = useState("books"); // "books" or "loans"
    const [bookDetailsView, setBookDetailsView] = useState(null); // null or book object

    // Load loans from localStorage
    const [loans, setLoans] = useState(() => {
        try {
            const savedLoans = localStorage.getItem("loans");
            return savedLoans ? JSON.parse(savedLoans) : [];
        } catch (error) {
            console.error("Error loading loans from localStorage:", error);
            return [];
        }
    });

    // Save books to localStorage whenever books state changes
    useEffect(() => {
        try {
            localStorage.setItem("books", JSON.stringify(books));
        } catch (error) {
            console.error("Error saving books to localStorage:", error);
        }
    }, [books]);

    // Save loans to localStorage whenever loans state changes
    useEffect(() => {
        try {
            localStorage.setItem("loans", JSON.stringify(loans));
        } catch (error) {
            console.error("Error saving loans to localStorage:", error);
        }
    }, [loans]);

    function getBooks(bookData) {
        const isSelected =
            selectedBookIds &&
            (selectedBookIds.isbn13 || selectedBookIds.title) ===
                (bookData.isbn13 || bookData.title);
        const isOnLoan = loans.some(
            (loan) => loan.bookId === (bookData.isbn13 || bookData.title)
        );
        return (
            <Book
                key={bookData.isbn13 || bookData.title}
                data={bookData}
                onSelect={handleBookSelection}
                isSelected={isSelected}
                isOnLoan={isOnLoan}
                onViewDetails={handleViewDetails}
            />
        );
    }

    function handleViewDetails(book) {
        setBookDetailsView(book);
    }

    function handleCloseDetails() {
        setBookDetailsView(null);
    }

    function handleBookSelection(book) {
        // If clicking the same book that's already selected, unselect it
        if (
            selectedBookIds &&
            (selectedBookIds.isbn13 || selectedBookIds.title) ===
                (book.isbn13 || book.title)
        ) {
            setSelectedBookIds(null);
        } else {
            // Otherwise, select the clicked book
            setSelectedBookIds(book);
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
        setSelectedBookIds(updatedBook);
    }

    function handleDeleteBook() {
        if (selectedBookIds) {
            const bookId = selectedBookIds.isbn13 || selectedBookIds.title;
            setBooks((prevBooks) =>
                prevBooks.filter(
                    (book) => (book.isbn13 || book.title) !== bookId
                )
            );
            // Also remove any loans for this book
            setLoans((prevLoans) =>
                prevLoans.filter((loan) => loan.bookId !== bookId)
            );
            setSelectedBookIds(null);
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

    function handleAddLoan(newLoan) {
        setLoans((prevLoans) => [...prevLoans, newLoan]);
    }

    function handleReturnLoan(loanId) {
        setLoans((prevLoans) => prevLoans.filter((loan) => loan.id !== loanId));
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
                {viewMode === "books" ? (
                    <>
                        {bookDetailsView ? (
                            <BookDetails 
                                book={bookDetailsView} 
                                onClose={handleCloseDetails}
                            />
                        ) : (
                            <>
                                <Filter
                                    authors={authors}
                                    onFilterChange={setFilterAuthor}
                                    currentFilter={filterAuthor}
                                />
                                <div className='view-switcher'>
                                    <button
                                        className={`view-switch-btn ${
                                            viewMode === "books" ? "active" : ""
                                        }`}
                                        onClick={() => setViewMode("books")}
                                    >
                                        Book Listing
                                    </button>
                                    <button
                                        className={`view-switch-btn ${
                                            viewMode === "loans" ? "active" : ""
                                        }`}
                                        onClick={() => setViewMode("loans")}
                                    >
                                        Loan Management
                                    </button>
                                </div>
                                <div className='app-content'>
                                    <div className='add-col'>
                                        <NewButton
                                            onAddBook={handleAddBook}
                                            update={handleUpdateBook}
                                            onDelete={handleDeleteBook}
                                            book={selectedBookIds}
                                        />
                                    </div>{" "}
                                    {filteredBooks.map((book) => getBooks(book))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <div className='view-switcher'>
                            <button
                                className={`view-switch-btn ${
                                    viewMode === "books" ? "active" : ""
                                }`}
                                onClick={() => setViewMode("books")}
                            >
                                Book Listing
                            </button>
                            <button
                                className={`view-switch-btn ${
                                    viewMode === "loans" ? "active" : ""
                                }`}
                                onClick={() => setViewMode("loans")}
                            >
                                Loan Management
                            </button>
                        </div>
                        <div className='loan-management-container'>
                            <LoanManagement
                                books={books}
                                loans={loans}
                                onAddLoan={handleAddLoan}
                                onReturnLoan={handleReturnLoan}
                            />
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
}
