import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p className='copyright'>© Angie Duong, Set G, {currentYear}</p>
            </div>
        </footer>
    );
};

export default Footer;
