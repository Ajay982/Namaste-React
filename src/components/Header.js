import { CDN_lOGO } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-image"
          src={CDN_lOGO}
          alt="a chef with forks and pizza"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="authBtn"
            onClick={() => {
              btnName === "LogIn" ? setbtnName("LogOut") : setbtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
