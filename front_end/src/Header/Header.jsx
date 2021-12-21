import React, { useState } from "react";
import classNames from "classnames";
import "./header.sass";
import { Link } from "react-router-dom";
import menu from "../images/header/menu.svg";
import close from "../images/header/close.svg";

const menu_list = [
  { text: "Home", link: "/" },
  { text: "Team", link: "/team" },
  { text: "News", link: "/news" },
  { text: "Contact", link: "/contact" }
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(true);

  const closeMenu = (e) => {
    const tag = e.target.tagName;

    if (tag !== "A" && tag !== "IMG") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="header">
      <div className="navigation">
        <div className="menu">
          {menu_list.map((item, index) => (
            <Link key={item.link} to={item.link} className="item">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="mobile_navigation">
        <div className="menu_icon" onClick={() => showMenu()}>
          <img src={menu} alt="menu" />
        </div>
        <div
          className={classNames({ menu_list: true, active: open })}
          onClick={(e) => closeMenu(e)}
        >
          <div className="menu_close">
            <img src={close} alt="close" />
          </div>
          {menu_list.map((item, index) => (
            <Link to={item.link} className="item">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
