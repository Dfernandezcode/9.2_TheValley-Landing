import "./Link.css";



const Link = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={ props.styleMod ? "header__link-links " + props.styleMod : "header__link-links"} href={props.url}>{props.name}</a>
    );
}

export default Link;