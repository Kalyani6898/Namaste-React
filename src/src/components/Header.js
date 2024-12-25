import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Header = () => {
  let loginBtn = useState("Login");
  let [loginButon, setLoginBtn] = loginBtn;
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between shadow-sm bg-pink-200 m-2 mb-2">
      <img className="w-32" src={LOGO_URL}></img>
      <div className="flex items-center">
        <ul className="flex p-4 m-5">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">Online Statue : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">{loggedInUser}</li>
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
