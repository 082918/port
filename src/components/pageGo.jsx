import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PageGo() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".test",
      {
        scale: 0.5,
        opacity: 0.2,
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".test",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="sijak" style={{ height: "500px" }}></div>
      <div
        className="test"
        style={{
          height: "100vh",
          fontSize: "3rem",
          textAlign: "center",
          transition: "all 0.3s ease-out",
        }}
      >
        할 수 있는 것을 하자, 웹 개발자 최윤진입니다.
      </div>
    </>
  );
}

export default PageGo;
