import { useState } from "react";

function AddForm({ onAddBook, onClose }) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: "",
        url: "",
        price: "",
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
        console.log("✅ Save button clicked - Form submitted");

        const newBook = {
            title: formData.title,
            author: formData.author,
            image: formData.image,
            url: formData.url,
            price: formData.price,
        };

        console.log("New Book Data:", newBook);

        if (onAddBook) {
            onAddBook(newBook);
        } else {
            console.log("❌ onAddBook is undefined!");
        }

        // Reset form
        setFormData({
            title: "",
            author: "",
            image: "",
            url: "",
            price: "",
        });

        if (onClose) {
            console.log("✅ Calling onClose from Save");
            onClose();
        } else {
            console.log("❌ onClose is undefined!");
        }
    };

    const handleCancel = () => {
        console.log("✅ Cancel button clicked");
        if (onClose) {
            console.log("✅ Calling onClose from Cancel");
            onClose();
        } else {
            console.log("❌ onClose is undefined!");
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h2>ADD BOOK</h2>
                <div className='form-control'>
                    <label htmlFor='title'>Title: *</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Book title'
                        onChange={handleChange}
                        value={formData.title}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author: *</label>
                    <input
                        type='text'
                        name='author'
                        placeholder='Author'
                        onChange={handleChange}
                        value={formData.author}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='price'>Price: </label>
                    <input
                        type='text'
                        name='price'
                        placeholder='$19.99'
                        onChange={handleChange}
                        value={formData.price}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='image'>Cover Image URL: *</label>
                    <input
                        type='url'
                        name='image'
                        placeholder='https://example.com/image.jpg'
                        onChange={handleChange}
                        value={formData.image}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='url'>Book URL: </label>
                    <input
                        type='url'
                        name='url'
                        placeholder='https://example.com/book'
                        onChange={handleChange}
                        value={formData.url}
                    />
                </div>

                {/* Buttons */}
                <div
                    style={{ display: "flex", gap: "10px", marginTop: "20px" }}
                >
                    <button
                        className='btn primary'
                        type='submit'
                    >
                        Save
                    </button>
                    <button
                        type='button'
                        className='btn secondary'
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>

            <img
                src='https://st3.depositphotos.com/9461386/35794/v/450/depositphotos_357945126-stock-illustration-planet-space-retro-game-design.jpg'
                alt='form-img-assist'
            />
        </div>
    );
}

export default AddForm;
