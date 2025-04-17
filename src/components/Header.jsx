import { useState } from "react";
import { TbChristmasTreeFilled } from "react-icons/tb";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { name: "Profile" },
    { name: "Skill" },
    { name: "Projects" },
    { name: "Contact" },
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
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
