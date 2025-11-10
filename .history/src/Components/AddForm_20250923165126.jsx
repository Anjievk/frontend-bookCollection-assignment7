function AddForm() {
    return (
        <div className='form-container'>
            <h2>Add new book</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='username'>Username: </label>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                    />
                </div>

                <button className='btn primary'>Save</button>
            </form>
        </div>
    );
}

export default AddForm;
