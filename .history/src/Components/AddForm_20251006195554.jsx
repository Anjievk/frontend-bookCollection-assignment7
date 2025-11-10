import { useState } from "react";
import { nanoid } from "nanoid";

function AddForm(add) {
    const [item, setItems] = useState({ title: "", author: "", url: "" });

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        add({
            title: data.get("title"),
            author: data.get("author"),
            url: data.get("url"),
            id: nanoid(),
        });
        e.target.reset();
    }
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
                    <label htmlFor='url'>url: </label>
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
