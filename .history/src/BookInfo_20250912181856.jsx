function BookInfo(props) {
    return (
        <div className='Info-container'>
            <a
                className='Info-link'
                href={props.BookInfo}
                target='_blank'
            >
                {" "}
                Learn More{" "}
            </a>
        </div>
    );
}
export default BookInfo;
