import { useState } from "react";
import React, { useRef, useEffect } from "react";
import "../style/Profile.css";
import mido045 from "../assets/mido045.png";

function Profile() {
  return (
    <>
      <p className="title">Profile</p>
      <div className="profileContainer">
        <div className="profileBox">
          <h2> 안녕하세요. 저는 개발자 </h2>
          <div>
            <h1 className="nameBox"> 최윤진 </h1>
            <h1 className="nameBox"> 입니다. </h1>
          </div>
          <p>
            {" "}
            사용자에게 제일 먼저 다가가는 프론트엔드 부분에서 문제를 감각적으로
            캐치하고, 구조적으로 설계하여 더욱 편리한 웹 사이트를 제작하기 위해
            Bootstrap, React, GSAP 등 다양한 프레임워크와 라이브러리를 공부하며
            노력하고 있습니다.{" "}
          </p>
        </div>
        <div className="photoBox">
          <img src={mido045} alt="이미지테스트" />
        </div>
      </div>
      <div>
        <p> About Me </p>
      </div>
    </>
  );
}

export default Profile;
