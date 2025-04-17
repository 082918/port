import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { PiStarThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import "../style/Testitem.css";

function Testitem() {
  const boxRo = useRef([]);
  // useRef : 돔 요소나 변수 값을 기억하고 싶을 때 쓰는 훅
  // boxro 의 현재 상태 (current)는 null

  // 변수 안에 DOM 요소를 참조할 준비
  // 나중에 ref = {boxRo}로 연결되면, boxRo.current 실행시 div DOM 이 들어감

  useEffect(() => {
    boxRo.current.forEach((el, i) => {
      gsap.to(el, {
        rotation: 360,
        duration: 1,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    });
  }, []);
  // useEffect 사용해서 페이지가 렌더링 되고 난 후 별 요소가 자동으로 360도 회전 할 수 있도록 함

  const rotate = (index) => {
    gsap.to(boxRo.current[index], {
      rotation: "+=360",
      duration: 1,
      ease: "power1.inOut",
    });
  };

  // gsap.to() : 현재 상태에서 목표 상태로 애니메이션 시킴
  // rotation : 현재 각도에서 N 각도 더 돌려
  // duration : N초 동안 회전
  // ease : power1.inout 자연스럽게 시작하고 부드럽게 끝나는 곡선
  // overwrite : 새 애니메이션이 기존 애니메이션을 중단하고 덮어쓸지 설정하는 옵션 (auto, true, false 존재)
  // boxRo의 현재 상태에서 목표 상태(rotation, duration 상대로 애니메이션 시킴)

  const links = ["/Profile", "/Skill", "/Portfolio", "/Contact"];
  const links2 = ["/Page", "/Page", "/Page", "/Page"];

  return (
    <>
      <div className="itemBox">
        {links2.map((path, i) => (
          <Link to={path} key={i}>
            <PiStarThin
              className="starIcon"
              ref={(el) => (boxRo.current[i] = el)}
              onMouseEnter={() => rotate(i)}
            />
          </Link>
        ))}
      </div>
      {/* onMouseEnter : 마우스를 올리기만 해도 실행 */}
      {/* links 리스트를 반복문으로 활용하여 각 경로마다 별 요소가 생성됨 */}
    </>
  );
}

export default Testitem;
