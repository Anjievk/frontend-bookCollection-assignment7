function Info(props) {
    return (
        <div className='Info-container'>
            <a
                className='Info-link'
                href={props.info}
                target='_blank'
            >
                {" "}
                Learn More{" "}
            </a>
        </div>
    );
}
export default Info;
