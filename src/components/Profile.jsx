import { useState } from "react";
import React, { useRef, useEffect } from "react";
import "../style/Profile.css";

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
          <p> 사용자가 제일 먼저 접하는 프론트엔드. </p>
        </div>
        <div className="photoBox"> </div>
      </div>
      <div> 테스트 박스 </div>
    </>
  );
}

export default Profile;
