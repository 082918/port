import { useState } from "react";
import { TbChristmasTreeFilled } from "react-icons/tb";
import "../style/Header.css";

function Header() {
  const menu = ["Profile", "Skill", "Portfolio", "Contact"];
  return (
    <>
      {/* 시멘틱 태그 활용 */}
      <header id="header">
        <div id="logo" style={{ fontSize: "32px" }}>
          <TbChristmasTreeFilled />
        </div>
        <div>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
