import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import mobile from "../Assets/Image/mobile.png";
import pc from "../Assets/Image/pc.png";
import myPic from "../Assets/Image/mabro.jpg";
import tvscreen from "../Assets/Image/tvscreen.png";

interface styleType {
  $ismobile?: boolean;
  $ispoweron?: boolean;
}

const DarkToBright = keyframes`
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
    opacity: 0.8;
    
  }
  80% {
    opacity: 0.6;
    
  }
  95%{
    opacity: 0.9;
  }
  100% {
    
    opacity: 1;
  }
`;
const AboutMeContainer = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: ${(props) => (props.$ismobile ? "90px" : "120px")};
  display: flex;
  align-items: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  animation: ${DarkToBright} 2s ease-in-out forwards;
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
  }
`;
const flickerToYellow = keyframes`
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
  }
`;
const OffSwitchSvg = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "35px" : "50px")};
  height: ${(props) => (props.$ismobile ? "35px" : "50px")};
  cursor: pointer;
  filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red)
    drop-shadow(0 0 15px red);
  animation: ${oFFflicker} 1.2s infinite;
`;

const OnSwitchSvg = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "35px" : "50px")};
  height: ${(props) => (props.$ismobile ? "35px" : "50px")};
  cursor: pointer;
  filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow)
    drop-shadow(0 0 15px yellow);
  animation: ${flickerToYellow} 2s ease-in-out forwards;
`;

const GameScreen = styled.div<styleType>`
  display: flex;
  flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$ismobile ? "300px" : "1000px")};
  height: ${(props) => (props.$ismobile ? "400px" : "500px")};
  background-color: #000;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.$ispoweron
      ? "0 0 30px hsla(120, 100%, 50%, 0.5)"
      : "0 0 30px hsla(0, 100%, 50%, 0.5)"};
  border: ${(props) =>
    props.$ispoweron ? "5px solid #00ff00" : "5px solid red"};
  margin: 30px 0px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s ease, border 0.5s ease;
  margin-bottom: ${(props) => (props.$ismobile ? "50px" : "50px")};
`;

// const Background = styled.div<styleType>`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
//   background-image: ${(props) =>
//     props.$ispoweron ? `url(${tvscreen})` : "none"};
//   background-position: center;
//   background-size: cover;
//   opacity: ${(props) => (props.$ispoweron ? "1" : "0")};
//   transition: opacity 0.5s ease-in-out;
// `;

const ImgContainer = styled.div<styleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  opacity: ${(props) => (props.$ispoweron ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  background-color: black;
`;

const MyImg = styled.img<styleType>`
  /* 원래 사진 비율  */
  /* width: 32px; */
  /* height: 41px; */
  width: ${(props) => (props.$ismobile ? "128px" : "160px")};
  height: ${(props) => (props.$ismobile ? "164px" : "205px")};
`;

const TxtContatiner = styled.div<styleType>`
  display: flex;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.$ismobile ? "100%" : "50%")};
  height: 100%;
  color: white;
  font-size: ${(props) => (props.$ismobile ? "0.6rem" : "1rem")};
  opacity: ${(props) => (props.$ispoweron ? "1" : "0")};
  text-shadow: 0 0 2px #00aa00, 0 0 7px #00aa00, 0 0 17px #00aa00,
    0 0 27px #00aa00, 0 0 37px #00aa00, 0 0 52px #00aa00, 0 0 72px #00aa00;
  transition: opacity 0.5s ease-in-out;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const Button = styled.button<styleType>`
  padding: 15px 30px;
  font-size: 16px;
  background-color: black;
  border: ${(props) =>
    props.$ispoweron ? "2px solid #00ff00" : "2px solid red"};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border: 2px solid blue;
  }

  &:active {
    transform: scale(0.95);
  }
`;

function AboutMe() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [isPowerOn, setIsPowerOn] = useState<boolean>(false);

  const onclickPowerBtn = () => {
    setIsPowerOn((prev) => !prev);
  };
  return (
    <AboutMeContainer $ismobile={isMobile}>
      <GameScreen $ismobile={isMobile} $ispoweron={isPowerOn}>
        {/* <Background $ispoweron={isPowerOn}> */}
        <ImgContainer $ismobile={isMobile} $ispoweron={isPowerOn}>
          <MyImg src={myPic}></MyImg>
        </ImgContainer>
        <TxtContatiner $ismobile={isMobile} $ispoweron={isPowerOn}>
          근육같은 개발자 권오윤
          <br />
          <br />
          상처가 나고 회복하면 커지고 단단해지는 근육처럼,
          <br />
          어려움을 직면하고 해결할 때마다 더 단단해집니다.
          <br />
          <br />
          코드를 작성하는 것에서 멈추지 않고, <br />
          API 호출 수 감소, 코드 효율성 개선을 위해 깊이 고민합니다.
          <br />
          <br />
          이를 위해 공식 문서를 참고하고, <br /> 다양한 라이브러리를 적극
          활용하여 최적의 해결책을 찾는 데 집중합니다.
          <br />
          <br />
          프로젝트 진행 중 놓쳤던 부분들을 분석하고 <br />
          기록하는 습관을 통해 문제점을 공유하고 팀과 협력하여 개선해 나갑니다.
          <br />
          <br />
          함께 성장하고 발전하기 위해 노력하며, <br />
          주변 사람들과 나란히 걷는 것을 중요하게 생각합니다.
        </TxtContatiner>
        {/* </Background> */}
      </GameScreen>

      <ControlPanel>
        <Button $ispoweron={isPowerOn} onClick={onclickPowerBtn}></Button>
      </ControlPanel>

      {/* {isPowerOn ? (
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
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </OnSwitchSvg>
          <Info></Info>
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
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
          />
        </OffSwitchSvg>
      )} */}
    </AboutMeContainer>
  );
}

export default AboutMe;
