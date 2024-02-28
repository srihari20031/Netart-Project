import { FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


// this component contains the footer of the webpage
const Footer = () => {
  return (
    <div className="footer">
      <div className="phone">
        <FaPhoneAlt className="icons" />
        <p>Toll free 1800 200 1234</p>
      </div>
      <div className="facebook">
        <FaFacebook className="icons" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div className="website">
        <TbWorld className="icons"/>
        www.crigroups.com
      </div>
    </div>
  );
};

export default Footer;
