import { useState } from "react";

function AddForm({ onAddBook, onClose }) {
    // state to store form data
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: "", // This will store the image URL
        url: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Form data:", formData);

        if (!formData.title || !formData.author || !formData.image) {
            console.log("❌ Missing required fields");
            alert("Please fill in Title, Author, and Image URL");
            return; // ← STOPS here if fields are missing
        }

        const newBook = {
            title: formData.title,
            author: formData.author,
            image: formData.image,
            url: formData.url,
        };

        console.log("New Book Data:", newBook);

        if (onAddBook) {
            console.log("✅ Calling onAddBook");
            onAddBook(newBook); // ← ADDS the book to state
        } else {
            console.log("❌ onAddBook is undefined!");
        }

        // Reset form
        setFormData({
            title: "",
            author: "",
            image: "",
            url: "",
        });

        // Close the modal - THIS IS WHERE ONCLOSE IS CALLED! ↓
        if (onClose) {
            console.log("✅ Closing modal");
            onClose(); // ← THIS CLOSES THE MODAL AFTER SUCCESSFUL SUBMISSION
        } else {
            console.log("❌ onClose is undefined!");
        }
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h2>ADD BOOK</h2>
                <div className='form-control'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Book title'
                        onChange={handleChange}
                        value={formData.title}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author: </label>
                    <input
                        type='text'
                        name='author'
                        placeholder='Author'
                        onChange={handleChange}
                        value={formData.author}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publisher'>Publisher: </label>
                    <input
                        type='text'
                        name='publisher'
                        placeholder='Publisher'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publication-year'>Publication Year: </label>
                    <input
                        type='number'
                        name='publication-year'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='language'>Language: </label>
                    <input
                        type='text'
                        name='language'
                        placeholder='Language'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pages'>Pages: </label>
                    <input
                        type='number'
                        name='page'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='image'>Book url: </label>
                    <input
                        type='url'
                        name='image'
                        onChange={handleChange}
                        value={formData.image}
                    />
                </div>

                {/* Buttons */}
                <button
                    className='btn primary'
                    type='submit'
                >
                    Save
                </button>
            </form>

            <img
                src='https://st3.depositphotos.com/9461386/35794/v/450/depositphotos_357945126-stock-illustration-planet-space-retro-game-design.jpg'
                alt='form-img-assist'
            />
        </div>
    );
}

export default AddForm;
