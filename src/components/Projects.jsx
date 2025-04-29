import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../style/Project.css";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  // 프로젝트 소개 박스가 닫혀있는, false 로 기본값 설정 중
  const [activeIndex, setActiveIndex] = useState(null);
  // 내가 열기 위해 클릭한 슬라이드가 몇 번째인지 기억하는 스테이트

  const projects = [
    { title: "Sroup", content: "설명입니다." },
    { title: "TinkOn", content: "설명입니다." },
    { title: "DEVSIGN Web site", content: "설명입니다." },
    { title: "Sroup", content: "설명입니다." },
    { title: "TinkOn", content: "설명입니다." },
    { title: "DEVSIGN Web site", content: "설명입니다." },
  ];

  const clickProject = (index) => {
    setIsOpen(!isOpen);
    setActiveIndex(index);
  };

  return (
    <>
      <p>Projects</p>
      <div>
        <div>
          <h2> project 1 </h2>
          <div className="projectBox">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={20}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
            >
              {/* Swiper 설정  
                Autoplay : 자동재생 모듈로 요소가 자동으로 재생(돌아갈 수 있게) 됨 
                slidesPerView : 한 화면 안에 동시에 보여줄 슬라이드(SwiperSlide) 개수 설정 하는 옵션 
                - auto 로 설정한 건 슬라이드의 width 사이즈를 보고 자동으로 몇 개 보이게 설정함
                spaceBetween : 슬라이드 사이 여백 (gap 같은?)
                loop : 자동으로 다시 처음 슬라이드로 이어서 연결해주는 옵션
                speed : 한 슬라이드 넘어가는데 걸리는 시간 3000 = 3초
                autoplay 설정 
                - delay : 슬라이드 넘어가기 전까지 기다리는 시간
                - disableOnInteraction : 사용자가 슬라이드를 터치하거나 드래그해도 autoplay 설정은 멈추지 않음
              */}

              {projects.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="slideItem"
                  onClick={() => clickProject(index)}
                >
                  {project.title}
                </SwiperSlide>
                // projects 에 들어가 있는 변수 개수 만큼 슬라이드 하나 씩 생성
                // 클릭 시 (onClick --> handleSlideClick 함수 실행)
              ))}
            </Swiper>
            <div
              className="infoBox"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {activeIndex !== null && (
                <>
                  <h3>{projects[activeIndex].title}</h3>
                  <p>{projects[activeIndex].content}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
