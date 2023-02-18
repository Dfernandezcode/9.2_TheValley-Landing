import "./Footer.css";

const year = new Date().getFullYear()

const Footer = (props) => {
    return (
        <div className="footer-link">Copyright {year}</div>
    );
}

export default Footer;