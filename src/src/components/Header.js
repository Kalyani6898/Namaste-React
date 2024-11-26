import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  let loginBtn = useState("Login");
  let [loginButon, setLoginBtn] = loginBtn;
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginButon === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
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
