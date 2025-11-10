import { useState, useEffect } from "react";

function BookDetails({ book, onClose }) {
    const [similarBooks, setSimilarBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSimilarBooks = async () => {
            if (!book) return;

            setLoading(true);
            setError(null);

            try {
                // Try searching by author first, then by title, then by publisher
                let searchQuery = book.author || book.title || book.publisher || "programming";
                
                // Clean up the search query
                searchQuery = searchQuery.trim().split(" ")[0]; // Use first word for better results
                
                const response = await fetch(
                    `https://api.itbook.store/1.0/search/${encodeURIComponent(searchQuery)}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch similar books");
                }

                const data = await response.json();
                
                // Filter out the current book if it has an ISBN match
                let books = data.books || [];
                
                // Limit to 6 similar books
                if (books.length > 6) {
                    books = books.slice(0, 6);
                }
                
                setSimilarBooks(books);
            } catch (err) {
                console.error("Error fetching similar books:", err);
                setError("Failed to load similar books");
            } finally {
                setLoading(false);
            }
        };

        fetchSimilarBooks();
    }, [book]);

    if (!book) return null;

    return (
        <div className="book-details-container">
            <div className="book-details-header">
                <h2>Book Details</h2>
                <button className="btn-close-details" onClick={onClose}>
                    ✕ Close
                </button>
            </div>
            
            <div className="book-details-content">
                <div className="book-details-main">
                    <div className="book-details-image">
                        <img
                            src={book.image}
                            alt={book.title}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                            }}
                        />
                    </div>
                    
                    <div className="book-details-info">
                        <h3>{book.title}</h3>
                        <div className="book-details-fields">
                            {book.author && (
                                <div className="detail-field">
                                    <strong>Author:</strong> {book.author}
                                </div>
                            )}
                            {book.publisher && (
                                <div className="detail-field">
                                    <strong>Publisher:</strong> {book.publisher}
                                </div>
                            )}
                            {book.year && (
                                <div className="detail-field">
                                    <strong>Publication Year:</strong> {book.year}
                                </div>
                            )}
                            {book.pages && (
                                <div className="detail-field">
                                    <strong>Pages:</strong> {book.pages}
                                </div>
                            )}
                            {book.language && (
                                <div className="detail-field">
                                    <strong>Language:</strong> {book.language}
                                </div>
                            )}
                            {book.isbn13 && (
                                <div className="detail-field">
                                    <strong>ISBN-13:</strong> {book.isbn13}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="similar-books-section">
                    <h3>Similar Books</h3>
                    {loading && (
                        <div className="loading-message">Loading similar books...</div>
                    )}
                    {error && (
                        <div className="error-message">{error}</div>
                    )}
                    {!loading && !error && similarBooks.length === 0 && (
                        <div className="no-results-message">No similar books found</div>
                    )}
                    {!loading && !error && similarBooks.length > 0 && (
                        <div className="similar-books-grid">
                            {similarBooks.map((similarBook) => (
                                <div key={similarBook.isbn13} className="similar-book-card">
                                    <img
                                        src={similarBook.image}
                                        alt={similarBook.title}
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/150x200?text=No+Image";
                                        }}
                                    />
                                    <div className="similar-book-info">
                                        <h4>{similarBook.title}</h4>
                                        <p>{similarBook.subtitle || ""}</p>
                                        <p className="similar-book-price">{similarBook.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

