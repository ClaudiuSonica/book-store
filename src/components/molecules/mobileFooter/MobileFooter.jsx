import "./MobileFooter.scss";
import book1 from "/assets/images/books-stack1.svg";
import book2 from "/assets/images/books-stack2.svg";
import book3 from "/assets/images/books-stack3.svg";
import book4 from "/assets/images/books-stack4.svg";
import instagram from "/assets/images/instagram.svg";
import facebook from "/assets/images/facebook.svg";
import google from "/assets/images/google.svg";
import NavLink from "../../atoms/navLink/NavLink";

const MobileFooter = () => {
  const footerBooks = [book1, book2, book3, book4];
  const footerLinks = ["Contact", "Terms of Use", "Privacy Policy", "FAQ"];

  return (
    <footer className="mobile__footer">
      <div className="footer__books">
        {footerBooks.map((book, index) => (
          <div key={index} className="books__img">
            <img src={book} alt="book" />
          </div>
        ))}
      </div>
      <nav className="footer__nav">
        <ul className="nav__list">
          {footerLinks.map((link, index) => (
            <li key={index} className="nav__item">
              <NavLink link={link} />
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          <img src={instagram} alt="instagram" />
          <img src={google} alt="google" />
          <img src={facebook} alt="facebook" />
        </div>
      </nav>
    </footer>
  );
};

export default MobileFooter;
