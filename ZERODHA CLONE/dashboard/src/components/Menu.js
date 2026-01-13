import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Menu.css"; 

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0); // 1, 2 , 3, 4, 5 each time gets updated on handleMenuClick on onClick on the dashboard navitems
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); 
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); // it just togelling the isProfileDropdownOpen state on onClick function
  };

  // menuClass, activeMenuClass is just to highlight the menu item used as style in the className, if slected just color the nav item using the variable activeMenuClass
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div id="menu-con" className="menu-container">
      <Link id="logo" style={{ textDecoration: "none" }}
            to="/"
            onClick={() => handleMenuClick(0)}
            >
              <img id="logo-img" src="logo.png" style={{ width: "45px" }} />
      </Link>

      <div className="menus" id="menus">
        <ul id="menu-ul">
          <li id="dashboard-li">
            <Link id="dashboard" style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p id="Dashboard-p" className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li id="orders-li">
            <Link id="orders" style={{ textDecoration: "none" }} 
            to="/orders" 
            onClick={() => handleMenuClick(1)}
            >
              <p id="Orders-p" className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li id="holdings-li">
            <Link id="holdings" style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p id="Holdings-p" className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li id="positions-li">
            <Link id="positions" style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p id="Positions-p" className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li id="funds-li">
            <Link id="funds" style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p id="Funds-p" className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li id="apps-li">
            <Link id="apps" style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p id="Apps-p" className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
