import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Testitem2() {
  gsap.registerPlugin(ScrollTrigger);
  // GSAP ScrollTrigger 플러그인을 사용해서 스크롤을 이용한 애니메이션 활용 가능
  // gsap 플러그인에 scrolltrigger 을 등록하여 작동할 수 있도록 하기

  useEffect(() => {
    gsap.to(".box", {
      backgroundColor: "#ffdbe1",
      scrollTrigger: {
        trigger: ".box", // 스크롤 애니메이션 대상
        start: "top 20%", // 요소의 위쪽이 뷰포트 80% 지점에 도달했을 때 애니메이션 시작
        end: "bottom 80%", // 요소의 위쪽이 뷰포트 30% 지점에 도달했을 때 애니메이션 종료
        scrub: true, // 스크롤 위치에 따라 실시간으로 애니메이션 진행
      },
    });
  }, []);

  // useEffect : 컴포넌트가 렌더링 된 후 어떤 "일"을 하게 하고 싶을 때 사용하는 훅
  // 클래스 이름이 box 인 요소를 잡아서 애니메이션 실행할 수 있도록
  // backgroundColor : crimson

  return (
    <>
      <div
        className="box"
        style={{
          height: "80vh",
          width: "100vh",
          background: "#7d061a",
        }}
      >
        스크롤하면서 색이 진해져요!
      </div>

      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default Testitem2;
