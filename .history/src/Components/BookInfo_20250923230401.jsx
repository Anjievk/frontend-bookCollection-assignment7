function BookInfo({ url }) {
    return (
        <div>
            <a
                className='info-container'
                href={url}
                target='_blank'
            >
                Learn More
            </a>
        </div>
    );
}
export default BookInfo;
