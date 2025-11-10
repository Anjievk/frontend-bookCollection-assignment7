function BookInfo({ url }) {
    return (
        <div>
            <a
                className='info-container'
                href={url}
                target='_blank'
                rel='noopener noreferrer'
            >
                Learn More
            </a>
        </div>
    );
}
export default BookInfo;
