import { useState } from "react";
import NewButton from "./Components/newButton";
import Book from "./Components/bookButton";
import Footer from "./Components/footer";
import Filter from "./Components/Filter/filter";

function App() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingBook, setEditingBook] = useState(null);
    const [filterCriteria, setFilterCriteria] = useState({
        publisher: "",
        language: "",
    });

    // Load books from local storage on component mount
    useEffect(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            const parsedBooks = JSON.parse(storedBooks);
            setBooks(parsedBooks);
            setFilteredBooks(parsedBooks);
        }
    }, []);

    // Save books to local storage whenever books change
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
        applyFilters(books, filterCriteria);
    }, [books]);

    // Apply filters when filter criteria change
    useEffect(() => {
        applyFilters(books, filterCriteria);
    }, [filterCriteria]);

    const applyFilters = (booksToFilter, criteria) => {
        let filtered = booksToFilter;

        if (criteria.publisher) {
            filtered = filtered.filter((book) =>
                book.publisher
                    .toLowerCase()
                    .includes(criteria.publisher.toLowerCase())
            );
        }

        if (criteria.language) {
            filtered = filtered.filter((book) =>
                book.language
                    .toLowerCase()
                    .includes(criteria.language.toLowerCase())
            );
        }

        setFilteredBooks(filtered);
    };

    const addBook = (newBook) => {
        const bookWithId = {
            ...newBook,
            id: Date.now().toString(),
        };
        setBooks([...books, bookWithId]);
        setShowModal(false);
    };

    const updateBook = (updatedBook) => {
        setBooks(
            books.map((book) =>
                book.id === updatedBook.id ? updatedBook : book
            )
        );
        setEditingBook(null);
        setShowModal(false);
    };

    const deleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const handleEdit = (book) => {
        setEditingBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingBook(null);
    };
    return (
        <div>
            <header className='app-header'>
                <h1>✨ BOOK CATALOG ✨</h1>
            </header>

            <main>
                <div className='app-content'>
                    <Filter
                        filterCriteria={filterCriteria}
                        setFilterCriteria={setFilterCriteria}
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
