import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import mobile from "../Assets/Image/mobile.png";
import pc from "../Assets/Image/pc.png";
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
  display: flex;
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
  width: ${(props) => (props.$ismobile ? "350px" : "650px")};
  height: ${(props) => (props.$ismobile ? "350px" : "650px")};
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
  border-radius: 50%;
  position: relative;
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
`;

function Skills() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const icons = [
    {
      src: "src/Assets/Image//ts.png",
      size: isMobile ? 40 : 100,
      color: "#2D79C7",
    },
    {
      src: "src/Assets/Image/js.png",
      size: isMobile ? 40 : 100,
      color: "#FED600",
    },
    {
      src: "src/Assets/Image/css.png",
      size: isMobile ? 42 : 110,
      color: "#009BE5",
    },
    {
      src: "src/Assets/Image/html.png",
      size: isMobile ? 40 : 110,
      color: "#E93E2F",
    },
    {
      src: "src/Assets/Image/react.png",
      size: isMobile ? 40 : 110,
      color: "#0081a3",
    },
    {
      src: "src/Assets/Image/styled.png",
      size: isMobile ? 40 : 100,
      color: "#DB7093",
    },
    {
      src: "src/Assets/Image/xcode.png",
      size: isMobile ? 50 : 130,
      color: "#18A8ED",
    },
    {
      src: "src/Assets/Image/reactquery.png",
      size: isMobile ? 40 : 120,
      color: "#FF4154",
    },
  ];
  const [isPowerOn, setIsPowerOn] = useState<boolean>(false);
  const LogoContainerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ center: 0, radius: 200 });
  const onclickPowerBtn = () => {
    setIsPowerOn((prev) => !prev);
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

  return (
    <SkillsContainer $ismobile={isMobile}>
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
            <Icon
              key={index}
              src={icon.src}
              $top={top}
              $left={left}
              $size={icon.size}
              $logocolor={icon.color}
              $ispoweron={isPowerOn}
            />
          );
        })}
      </LogoContainer>
    </SkillsContainer>
  );
}

export default Skills;
