import { useState } from "react";
import { nanoid } from "nanoid";

function AddForm({ onAddBook, closeModal }) {
    // state to store form data
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: "", // This will store the image URL
        url: "",
    });

        const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
        };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
                const data = new FormData(e.target);

        const newBook = {
            title: formData.title,
            author: formData.author,
            image: formData.image,
            url: formData.url,
        };

        console.log("New Book Data:", newBook);

        if (onAddBook) {
            onAddBook(newBook);
        } else {
            console.error("onAddBook is not defined");
        }

        setFormData({
            title: "",
            author: "",
            image: "",
            url: "",
        });

        if (onClose) {
            onClose();
        } else {
            console.error("onClose is not defined");
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
