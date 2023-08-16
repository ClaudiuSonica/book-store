import "./Footer.scss";
import NavLink from "../../atoms/navLink/NavLink";
import instagram from "/assets/images/instagram.svg";
import facebook from "/assets/images/facebook.svg";
import google from "/assets/images/google.svg";

const Footer = () => {

  const navItems = ["Privacy Policy", "Terms of use", "Sales and refunds", "Legal"];
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="nav__links">
          {navItems.map(navItem => (
            <NavLink key={navItem} link={navItem} />
          ))}
        </div>
        <div className="footer__socials">
          <img src={instagram} alt="instagram" />
          <img src={google} alt="google" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </div>
  )
}

export default Footer;