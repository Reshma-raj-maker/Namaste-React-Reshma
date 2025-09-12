import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
              console.log(loginBtn);
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
