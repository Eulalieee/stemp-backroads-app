import logo from '../images/logo.svg'
import { socialLinks } from '../Data';
import SocailLink from './SocailLink';

const Navbar = () => {
  return (
  <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

     <pagelinks parentClass="nav-links" itemClass="nav-links"/>

        <ul className="nav-icons">
        {socialLinks.map((link)=>{
return <SocailLink key={link.id} {...link} itemClass='nav-icon'/>;

        })}

        </ul>
      </div>
    </nav>
  );
};
export default Navbar;