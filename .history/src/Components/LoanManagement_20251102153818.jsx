import { useState } from "react";

function LoanManagement({ books, loans, onAddLoan, onReturnLoan }) {
    const [borrower, setBorrower] = useState("");
    const [selectedBookId, setSelectedBookId] = useState("");
    const [loanPeriod, setLoanPeriod] = useState(1);

    // Get available books (not on loan)
    const availableBooks = books.filter(
        (book) =>
            !loans.some((loan) => loan.bookId === (book.isbn13 || book.title))
    );

    // Check if all books are loaned
    const allBooksLoaned = availableBooks.length === 0 && books.length > 0;

    // Calculate due date
    const calculateDueDate = (weeks) => {
        const date = new Date();
        date.setDate(date.getDate() + weeks * 7);
        return date.toLocaleDateString();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (borrower.trim() && selectedBookId) {
            const selectedBook = books.find(
                (book) => (book.isbn13 || book.title) === selectedBookId
            );
            if (selectedBook) {
                const dueDate = calculateDueDate(loanPeriod);
                onAddLoan({
                    id: Date.now().toString(),
                    bookId: selectedBookId,
                    borrower: borrower.trim(),
                    loanPeriod: loanPeriod,
                    dueDate: dueDate,
                    loanDate: new Date().toLocaleDateString(),
                });
                setBorrower("");
                setSelectedBookId("");
                setLoanPeriod(1);
            }
        }
    };

    const handleReturnLoan = (loanId) => {
        onReturnLoan(loanId);
    };

    // Get book title from loan
    const getBookTitle = (bookId) => {
        const book = books.find(
            (book) => (book.isbn13 || book.title) === bookId
        );
        return book ? book.title : "Unknown Book";
    };

    return (
        <div className='loan-management'>
            <div className='loan-form-container'>
                {allBooksLoaned ? (
                    <div className='all-books-loaned-message'>
                        <h2>All books are currently on loan</h2>
                        <p>
                            Please wait for books to be returned before creating
                            new loans.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className='loan-form'
                    >
                        <h2>Create Book Loan</h2>
                        <div className='form-control'>
                            <label htmlFor='borrower'>Borrower: </label>
                            <input
                                type='text'
                                id='borrower'
                                name='borrower'
                                placeholder='Borrower name'
                                value={borrower}
                                onChange={(e) => setBorrower(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='book'>Book: </label>
                            <select
                                id='book'
                                name='book'
                                value={selectedBookId}
                                onChange={(e) =>
                                    setSelectedBookId(e.target.value)
                                }
                                required
                            >
                                <option value=''>Select a book</option>
                                {availableBooks.map((book) => (
                                    <option
                                        key={book.isbn13 || book.title}
                                        value={book.isbn13 || book.title}
                                    >
                                        {book.title} by {book.author}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='form-control'>
                            <label htmlFor='loanPeriod'>
                                Loan Period (weeks):{" "}
                            </label>
                            <input
                                type='number'
                                id='loanPeriod'
                                name='loanPeriod'
                                min='1'
                                max='4'
                                value={loanPeriod}
                                onChange={(e) =>
                                    setLoanPeriod(Number(e.target.value))
                                }
                                required
                            />
                        </div>
                        <button
                            className='btn primary'
                            type='submit'
                        >
                            Create Loan
                        </button>
                    </form>
                )}
            </div>

            <div className='loaned-books-list'>
                <h2>Loaned Books</h2>
                {loans.length === 0 ? (
                    <p className='no-loans-message'>
                        No books are currently on loan.
                    </p>
                ) : (
                    <div className='loans-container'>
                        {loans.map((loan) => (
                            <div
                                key={loan.id}
                                className='loan-item'
                            >
                                <div className='loan-info'>
                                    <p className='loan-borrower'>
                                        <strong>Borrower:</strong>{" "}
                                        {loan.borrower}
                                    </p>
                                    <p className='loan-title'>
                                        <strong>Book:</strong>{" "}
                                        {getBookTitle(loan.bookId)}
                                    </p>
                                    <p className='loan-due-date'>
                                        <strong>Due Date:</strong>{" "}
                                        {loan.dueDate}
                                    </p>
                                </div>
                                <button
                                    className='btn-return'
                                    onClick={() => handleReturnLoan(loan.id)}
                                >
                                    Return
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoanManagement;
