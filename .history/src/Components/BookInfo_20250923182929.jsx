function BookInfo(props) {
    return (
        <div>
            <a
                className='info-container'
                href={props.url}
                target='_blank'
            >
                {" "}
                Learn More{" "}
            </a>
        </div>
    );
}
export default BookInfo;
