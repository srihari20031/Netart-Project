import Logo from "../assets/images/logo.png";


// this is the component that displays the logo of the company
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo"/>
    </div>
  );
};

export default Header;
