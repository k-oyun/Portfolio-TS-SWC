import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import mobile from "../Assets/Image/Png/mobile.png";
import pc from "../Assets/Image/Png/pc.png";
import React from "react";
interface styleType {
  $ismobile?: boolean;
  $ispoweron?: boolean;
  $top?: number;
  $left?: number;
  $size?: number;
  $logocolor?: string;
}

const SkillsContainer = styled.div<styleType>`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: ${(props) => (props.$ismobile ? "90px" : "120px")};
  position: relative;
  align-items: center;
  justify-content: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
`;

const oFFflicker = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.7;
  }
  45% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  65% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }`;
const onFlicker = keyframes`
  0% {
    filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red) drop-shadow(0 0 15px red);
    opacity: 1;
  }
  20% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.7;
  }
  45% {
    opacity: 0.5;
    filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red) drop-shadow(0 0 15px red)
  }
  50% {
    opacity: 0.8;

  }
  65% {
    opacity: 0.6;

  }
  75% {
    opacity: 0.8;

  }
  80% {
    opacity: 0.6;

  }
  95%{
    opacity: 0.9;
  }
  100% {
    filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow) drop-shadow(0 0 15px yellow);
    stroke: yellow;
    opacity: 1;
  }`;
const OffSwitchSvg = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "35px" : "80px")};
  height: ${(props) => (props.$ismobile ? "35px" : "80px")};
  cursor: pointer;
  filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red)
    drop-shadow(0 0 15px red);
  animation: ${oFFflicker} 1.2s infinite;
`;
const OnSwitchSvg = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "35px" : "80px")};
  height: ${(props) => (props.$ismobile ? "35px" : "80px")};
  cursor: pointer;
  filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow)
    drop-shadow(0 0 15px yellow);
  animation: ${onFlicker} 2s ease-in-out forwards;
`;
// ------------------------------------------

const LogoContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "350px" : "500px")};
  height: ${(props) => (props.$ismobile ? "350px" : "500px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  /* background-color: blue; */
`;

const Icon = styled.img<styleType>`
  position: absolute;
  height: ${(props) => `${props.$size}px`};
  top: ${(props) => `${props.$top}px`};
  left: ${(props) => `${props.$left}px`};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 5px ${props.$logocolor}) drop-shadow(0 0 10px ${props.$logocolor}) drop-shadow(0 0 15px ${props.$logocolor})`
      : `grayscale(100%) drop-shadow(0 0 0px ${props.$logocolor})`};
  transition: filter 2s ease-in-out;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const IconTxtContainer = styled.div<styleType>`
  position: absolute;
  top: ${(props) => (props.$ismobile ? "220px" : "300px")};
  text-align: center;
  color: white;
  font-size: ${(props) => (props.$ismobile ? "8px" : "13px")};
  text-shadow: ${(
    props
  ) => `0 0 1px , 0 0 7px ${props.$logocolor}, 0 0 10px ${props.$logocolor},
    0 0 5px ${props.$logocolor}, 0 0 33px ${props.$logocolor}, 0 0 0px ${props.$logocolor}, 0 0 0px ${props.$logocolor}`};
`;

const electricShock = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.8;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0.8;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
`;
const SpeechBubbleContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "200px" : "400px")};
  height: ${(props) => (props.$ismobile ? "40px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => (props.$ismobile ? "200px" : "180px")};
  color: white;
  border-radius: ${(props) => (props.$ismobile ? "5px" : "15px")};
  border: ${(props) =>
    props.$ismobile ? "0.8px solid white" : "2px solid white"};
  font-size: ${(props) => (props.$ismobile ? "17px" : "30px")};
  font-family: "Neon";
  filter: drop-shadow(0 0 5px #f148fb) drop-shadow(0 0 10px #f148fb)
    drop-shadow(0 0 10px #f148fb);
  animation: ${electricShock} 1s infinite;
`;

function SkillsBeta() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const icons = [
    {
      src: "src/Assets/Image/Png/ts.png",
      size: isMobile ? 40 : 90,
      color: "#2D79C7",
      text: (
        <>
          타입 명시를 통한 에러 방지 <br />
          가독성 향상
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/js.png",
      size: isMobile ? 40 : 90,
      color: "#FED600",
      text: (
        <>
          Fetch를 통한 비동기 통신 <br />
          json형태 데이터 가공 및 활용
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/css.png",
      size: isMobile ? 42 : 100,
      color: "#009BE5",
      text: (
        <>
          Flexbox, Position을 통한 요소 배치 최적화 <br />
          keyframe을 활용한 애니메이션, 반응형 웹 구현
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/html.png",
      size: isMobile ? 40 : 100,
      color: "#E93E2F",
      text: (
        <>
          구조적인 웹 페이지를 구축 <br />
          요소의 배치를 제어 및 UI 최적화
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/react.png",
      size: isMobile ? 40 : 100,
      color: "#0081a3",
      text: (
        <>
          함수형 컴포넌트 지향 <br />
          Hook을 통한 라이플사이클 관리 <br />
          react, react-native를 이용한 웹,앱 개발 <br />
          다양한 라이브러리 활용
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/styled.png",
      size: isMobile ? 40 : 90,
      color: "#DB7093",
      text: (
        <>
          css-in-js
          <br />
          Props를 통한 조건부 스타일링
          <br />
          태그 없이 JSX 형식을 통한 가독성 향상
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/xcode.png",
      size: isMobile ? 50 : 110,
      color: "#18A8ED",
      text: (
        <>
          라이브러리를 위한 IOS 권한 설정 <br />
          기능 구현을 위한 IOS 권한 설정 및 환경 구성
        </>
      ),
    },
    {
      src: "src/Assets/Image/Png/reactquery.png",
      size: isMobile ? 40 : 100,
      color: "#FF4154",
      text: (
        <>
          서버 상태 관리 간소화 <br />
          캐싱을 이용한 성능 향상 <br />
          react-query 사용
        </>
      ),
    },
  ];
  const [isPowerOn, setIsPowerOn] = useState<boolean>(false);
  const LogoContainerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ center: 0, radius: 200 });
  const onclickPowerBtn = () => {
    setIsPowerOn((prev) => !prev);
    setActiveIcon(null);
  };
  const startingAngle = Math.PI / 8;
  useEffect(() => {
    if (LogoContainerRef.current) {
      const height = LogoContainerRef.current.clientHeight;
      const radius = height * 0.4; // 원의 반지름
      const center = height / 2; // 중심 좌표 (컨테이너 크기의 절반)
      setDimensions({ center: center, radius: radius });
    }
  }, [isMobile]);

  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const onclickIcon = (index: number) => {
    if (activeIcon === index) {
      setActiveIcon(null);
    } else {
      setActiveIcon(index);
    }
  };

  return (
    <SkillsContainer $ismobile={isMobile}>
      <SpeechBubbleContainer $ismobile={isMobile}>
        {isPowerOn ? "Click Logo Icon" : "Click Electric Icon"}
      </SpeechBubbleContainer>

      <LogoContainer
        $ismobile={isMobile}
        $ispoweron={isPowerOn}
        ref={LogoContainerRef}
      >
        {isPowerOn ? (
          <>
            <OnSwitchSvg
              xmlns="http://www.w3.org/2000/svg"
              fill="blacks"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              onClick={onclickPowerBtn}
              $ismobile={isMobile}
              $ispoweron={isPowerOn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </OnSwitchSvg>
          </>
        ) : (
          <OffSwitchSvg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="red"
            onClick={onclickPowerBtn}
            $ismobile={isMobile}
            $ispoweron={isPowerOn}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
            />
          </OffSwitchSvg>
        )}
        {icons.map((icon, index) => {
          const angle =
            startingAngle + index * (360 / icons.length) * (Math.PI / 180);
          const top = isMobile
            ? dimensions.center -
              dimensions.radius * Math.sin(angle) -
              icon.size / 2
            : dimensions.center -
              dimensions.radius * Math.sin(angle) -
              icon.size / 2 +
              10; // Y축 계산
          const left = isMobile
            ? dimensions.center +
              dimensions.radius * Math.cos(angle) -
              icon.size / 2
            : dimensions.center +
              dimensions.radius * Math.cos(angle) -
              icon.size / 2; // X축 계산
          return (
            <React.Fragment key={index}>
              <Icon
                src={icon.src}
                $top={top}
                $left={left}
                $size={icon.size}
                $logocolor={icon.color}
                $ispoweron={isPowerOn}
                onClick={() => onclickIcon(index)}
              />
              <IconTxtContainer
                $ispoweron={isPowerOn}
                $ismobile={isMobile}
                $logocolor={icon.color}
              >
                {activeIcon === index && isPowerOn ? icon.text : ""}
              </IconTxtContainer>
            </React.Fragment>
          );
        })}
      </LogoContainer>
    </SkillsContainer>
  );
}

export default SkillsBeta;
