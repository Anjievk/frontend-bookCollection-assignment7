function AddForm() {
    return (
        <div className='form-container'>
            <h2>Add Book</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
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
