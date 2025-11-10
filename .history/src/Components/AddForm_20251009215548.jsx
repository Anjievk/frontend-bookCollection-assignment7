import { useState } from "react";

function AddForm({ onAddBook, onClose }) {
    // state to store form data
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publisher: "",
        publicationYear: "",
        language: "",
        pages: "",
        price: "",
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

        const newBook = {
            title: formData.title,
            author: formData.author,
            publisher: formData.publisher,
            year: formData.publicationYear,
            language: formData.language,
            pages: parseInt(formData.pages) || 0,
            price: formData.price || "$0.00",
            url: formData.url || "#",
            image:
                formData.image ||
                "https://via.placeholder.com/150x200?text=No+Cover",
        };

        onAddBook(newBook);

        setFormData({
            title: "",
            author: "",
            publisher: "",
            publicationYear: "",
            language: "",
            pages: "",
            price: "",
            image: "",
            url: "",
        });

        if (onClose) {
            onClose();
        }
    };
    // handle input change
    return (
        <div className='form-container'>
            <form>
                <h2>ADD BOOK</h2>
                <div className='form-control'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author: </label>
                    <input
                        type='text'
                        name='author'
                        placeholder='Author'
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
                    <label htmlFor='url'>Url: </label>
                    <input
                        type='text'
                        name='url'
                    />
                </div>

                <button className='btn primary'>Save</button>
            </form>

            <img
                src='https://st3.depositphotos.com/9461386/35794/v/450/depositphotos_357945126-stock-illustration-planet-space-retro-game-design.jpg'
                alt='form-img-assist'
            />
        </div>
    );
}

export default AddForm;
