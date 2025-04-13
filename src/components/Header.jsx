import { useState } from "react";
import { TbChristmasTreeFilled } from "react-icons/tb";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { name: "Profile", path: "/profile" },
    { name: "Skill", path: "/skill" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 시멘틱 태그 활용 */}
      <header id="header">
        <div id="logo" style={{ fontSize: "32px" }}>
          <Link to="/">
            <TbChristmasTreeFilled />
          </Link>
        </div>
        <div>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
