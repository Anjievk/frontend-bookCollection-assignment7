function BookInfo(props) {
    return (
        <div className='info-container'>
            <a
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
