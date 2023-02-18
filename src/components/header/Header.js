import "./Header.css";
import Links from "./link/Link";
import Logo from "./logo/Logo";

const linkArray1 = [
  { name: "Facebook", url: "https://www.facebook.com/" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
  },

  { name: "Twitter", url: "https://www.instagram.com/" },
];

const linkArray2 = [
    {name: "Docu React", url: "https://reactjs.org/docs/create-a-new-react-app.html#create-react-app"},
    {styleMod: "header__link-register", name: "Ir a The Valley", url: "https://thevalley.es/"}
]

const Header = () => {
  return (
    <div className="header">
      <div className="header__link-container">
        {linkArray1.map((link) => (
          <Links styleMod={link.styleMod} name={link.name} url={link.url}></Links>
        ))}
      </div>
      <Logo></Logo>
      <div className="header__link-container">
      {linkArray2.map((link) => (
          <Links styleMod={link.styleMod} name={link.name} url={link.url}></Links>
        ))}
      </div>
    </div>
  );
};

export default Header;
