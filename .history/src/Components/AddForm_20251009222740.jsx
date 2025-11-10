import { useState } from "react";

function AddForm({ onAddBook, onClose }) {
    // state to store form data
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: "", // This will store the image URL
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

        const newBook = {
            title: formData.title,
            author: formData.author,
            image: formData.image,
        };

        onAddBook(newBook);

        setFormData({
            title: "",
            author: "",
            image: "",
        });

        if (onClose) {
            onClose();
        }
    };
    // handle input change
    return (
        <div className='form-container'>
            <form
                onSubmit={handleSubmit}
                className='add-form'
            >
                <h2>ADD BOOK</h2>
                <div className='form-control'>
                    <label htmlFor='title'>Title: </label>
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
                    <label htmlFor='author'>Author: </label>
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
                        required
                    />
                </div>

                <button className='btn primary'>Save</button>
                <button
                    type='button'
                    className='btn secondary'
                    onClick={onClose}
                >
                    Cancel
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
