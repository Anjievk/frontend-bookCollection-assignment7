function BookInfo(props) {
    return (
        <div className='info-container'>
            <a
                className='bookInfo-link'
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
