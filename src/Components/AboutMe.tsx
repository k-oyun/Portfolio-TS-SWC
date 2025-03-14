import { forwardRef } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import mobile from "/mobile.png";
import pc from "/pc.png";
import myPic from "/mabro.jpg";
import musclesmall from "/muslcesmall.png";

interface styleType {
  $ismobile?: boolean;
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
  }`;
const AboutMeContainer = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  animation: ${DarkToBright} 2s ease-in-out forwards;
`;

const BannerContainer = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.$ismobile ? "220px" : "500px")};
  height: ${(props) => (props.$ismobile ? "250px" : "320px")};
  transition: opacity 0.5s ease-in-out;
  margin-top: ${(props) => (props.$ismobile ? "100px" : "120px")};
`;

const muscleManShaking = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg); 
  }
  50% {
    transform: rotate(-20deg); 
  }
  75% {
    transform: rotate(20deg); 
  }
  100% {
    transform: rotate(0deg); 
  }
`;

const MuscleImg = styled.img<styleType>`
  width: ${(props) => (props.$ismobile ? "95px" : "190px")};
  filter: drop-shadow(0 0 1px yellow) drop-shadow(0 0 5px yellow)
    drop-shadow(0 0 7px yellow);
  animation: ${muscleManShaking} 1s ease-in-out infinite;
  padding-top: 30px;
`;

const BannerImgContainer = styled.div<styleType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.$ismobile ? "200px" : "400px")};
  height: ${(props) => (props.$ismobile ? "100px" : "235px")};
  margin-top: ${(props) => (props.$ismobile ? "30px" : "0px")};
`;

const MyImg = styled.img<styleType>`
  width: ${(props) => (props.$ismobile ? "64px" : "128px")};
  height: ${(props) => (props.$ismobile ? "82px" : "164px")};
  margin-top: ${(props) => (props.$ismobile ? "20px" : "0px")};
  border-radius: 15px;
  filter: drop-shadow(0 0 5px grey) drop-shadow(0 0 5px grey)
    drop-shadow(0 0 5px grey);
`;
const TxtContatiner = styled.div<styleType>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => (props.$ismobile ? "300px" : "600px")};
  height: 370px;
  color: white;
  font-size: ${(props) => (props.$ismobile ? "0.6rem" : "1rem")};
  line-height: ${(props) => (props.$ismobile ? "15px" : "20px")};
  text-shadow: 0 0 2px #00aa00, 0 0 7px #00aa00, 0 0 5px #00aa00,
    0 0 1px #00aa00, 0 0 1px #00aa00, 0 0 5px #00aa00, 0 0 2px #00aa00;
  /* text-shadow: 0 0 2px #00aa00, 0 0 7px #00aa00, 0 0 17px #00aa00,
    0 0 27px #00aa00, 0 0 10px #00aa00, 0 0 52px #00aa00, 0 0 72px #00aa00; */
  transition: opacity 0.5s ease-in-out;
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
  width: ${(props) => (props.$ismobile ? "210px" : "430px")};
  height: ${(props) => (props.$ismobile ? "40px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: ${(props) => (props.$ismobile ? "5px" : "15px")};
  border: ${(props) =>
    props.$ismobile ? "0.8px solid white" : "2px solid white"};
  font-size: ${(props) => (props.$ismobile ? "13px" : "27px")};
  font-family: "Neon";
  filter: drop-shadow(0 0 5px #f148fb) drop-shadow(0 0 10px #f148fb)
    drop-shadow(0 0 10px #f148fb);
  animation: ${electricShock} 1s infinite;
`;
const AboutMe = forwardRef<HTMLDivElement, any>((_, ref) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <AboutMeContainer ref={ref} $ismobile={isMobile}>
      <BannerContainer $ismobile={isMobile}>
        <SpeechBubbleContainer $ismobile={isMobile}>
          Welcome to Oyun's Portfolio
        </SpeechBubbleContainer>
        <BannerImgContainer $ismobile={isMobile}>
          <MyImg src={myPic} $ismobile={isMobile} />
          <MuscleImg src={musclesmall} $ismobile={isMobile}></MuscleImg>
        </BannerImgContainer>
      </BannerContainer>
      <TxtContatiner $ismobile={isMobile}>
        근육같은 개발자 권오윤
        <br />
        <br />
        상처가 나고 회복하면 커지고 단단해지는 근육처럼,
        <br />
        어려움을 직면하고 해결할 때마다 더 단단해집니다.
        <br />
        <br />
        코드를 작성하는 것에서 멈추지 않고, <br />
        API 호출 수 감소, 효율성 개선을 위해 깊이 고민합니다.
        <br />
        <br />
        다양한 라이브러리를 적극 활용하여 최적의 해결책을 찾는 데 집중합니다.
        <br />
        <br />
        프로젝트 진행 중 놓쳤던 부분들을 분석하고 <br />
        기록하는 습관을 길러, 문제점을 공유하고 팀과 협력하여 개선해 나갑니다.
        <br />
        <br />
        팀워크를 최우선으로 생각하며, 함께 성장하고 발전할 수 있도록 <br />
        팀원들과 발맞춰 나아가는 것을 중요하게 여깁니다.
      </TxtContatiner>
    </AboutMeContainer>
  );
});

export default AboutMe;
