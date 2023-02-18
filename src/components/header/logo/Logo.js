import "./Logo.css";
import logo from "./thevalley.png";

const Logo = () => {
    return (
        <img className="header-logo" src={logo} alt="The Valley"/>
    );
}

export default Logo;