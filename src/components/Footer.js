import { socialLinks } from "../Data";
import PageLinks from "./PageLinks";
import SocailLink from "./SocailLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='section footer'>
<PageLinks parentClass="footer-links" itemClass="footer-links"/>
     

      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const {id} = link;
          return <SocailLink key={id} {...link} itemClass='footer-icon'/>
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id="date"> {currentYear} </span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;