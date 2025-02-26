import { forwardRef, useState } from "react";
import { styled } from "styled-components";
import mobile from "../Assets/Image/Png/mobile.png";
import pc from "../Assets/Image/Png/pc.png";
import mindBook from "../Assets/Image/Png/mindBookPc.png";
import waither from "../Assets/Image/Png/waitherPc.png";
import defloy from "../Assets/Image/Png/defloyPc.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

interface styleType {
  $ismobile?: boolean;
  $image?: string;
  $ismousehover?: boolean;
}
const ProjectsContainer = styled.div<styleType>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
`;

const GameScreenContainer = styled.div<styleType>`
  width: 1400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  transform-style: preserve-3d;
  margin-top: 50px;
`;

const GameScreen = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$ismobile ? "290px" : "1200px")};
  height: ${(props) => (props.$ismobile ? "550px" : "600px")};
  background-image: ${(props) => `url(${props.$image})`};
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0 0 15px white;
  border: ${(props) =>
    props.$ismobile ? "2px solid white" : "5px solid white"};
  overflow: hidden;
  transition: box-shadow 0.5s ease-in-out, border 0.5s ease;
`;

const ProjectCard = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "290px" : "1200px")};
  height: ${(props) => (props.$ismobile ? "550px" : "600px")};
  background-color: black;
  font-family: "Neon";
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: ${(props) => (props.$ismobile ? "20px" : "25px")};
  padding-left: ${(props) => (props.$ismobile ? "30px" : "50px")};
  opacity: ${(props) => (props.$ismousehover ? 0.9 : 0)};
  transition: opacity 1s ease-in-out;
  color: white;
`;

const ProjectTitle = styled.span<styleType>`
  padding-bottom: ${(props) => (props.$ismobile ? "4px" : "30px")};
  font-size: ${(props) => (props.$ismobile ? "20px" : "40px")};
  text-shadow: 0 0 1px, 0 0 7px #00ff00, 0 0 10px #00ff00, 0 0 5px #00ff00,
    0 0 33px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00;
`;

const SubTitle = styled.span<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "50px" : "40px")};
  font-size: ${(props) => (props.$ismobile ? "15px" : "30px")};
  text-shadow: 0 0 1px, 0 0 7px #00ff00, 0 0 10px #00ff00, 0 0 5px #00ff00,
    0 0 33px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00;
`;

const Content = styled.span<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "15px" : "30px")};
  font-size: ${(props) => (props.$ismobile ? "10px" : "20px")};
  text-shadow: 0 0 1px, 0 0 7px #f148fb, 0 0 10px #f148fb, 0 0 5px #f148fb,
    0 0 33px #f148fb, 0 0 0px #f148fb, 0 0 0px #f148fb;
  white-space: pre-wrap;
  line-height: 20px;
`;

const DetailTxt = styled.span<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "80px" : "80px")};
  padding-left: ${(props) => (props.$ismobile ? "220px" : "0px")};
  font-size: ${(props) => (props.$ismobile ? "15px" : "25px")};
  text-shadow: 0 0 1px, 0 0 7px red, 0 0 10px red, 0 0 5px red, 0 0 33px red,
    0 0 0px red, 0 0 0px red;
`;

const PreviousBtn = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "30px" : "50px")};
  height: ${(props) => (props.$ismobile ? "30px" : "50px")};
  stroke-width: 2;
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-right: 8px;
  cursor: pointer;
  filter: drop-shadow(0 0 1px white) drop-shadow(0 0 8px white)
    drop-shadow(0 0 1px white);
  &:hover {
    transform: scale(1.1);
  }
`;
const NextBtn = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "30px" : "50px")};
  height: ${(props) => (props.$ismobile ? "30px" : "50px")};
  fill: none;
  stroke-width: 2;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-left: 8px;
  cursor: pointer;
  filter: drop-shadow(0 0 1px white) drop-shadow(0 0 8px white)
    drop-shadow(0 0 1px white);
  &:hover {
    transform: scale(1.1);
  }
`;

const Projects = forwardRef<HTMLDivElement, any>((props, ref) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  const onMouseScreenEnter = () => {
    setIsMouseHover(true);
    console.log(isMouseHover);
  };
  const onMouseScreenLeave = () => {
    setIsMouseHover(false);
    console.log(isMouseHover);
  };

  const projects = [
    {
      id: 1,
      title: "Waither",
      introduce: isMobile
        ? "Weather + Waiter의 합성어\n사용자의 설정을 바탕으로 맞춤형 날씨 정보와\n알림을 제공하는 앱 서비스"
        : "Weather + Waiter의 합성어로, 사용자의 설정을 바탕으로 맞춤형 날씨 정보와 알림을 제공하는 앱 서비스",
      period: "2024.03 ~ 2024.12",
      tech: isMobile
        ? "React Navite\nJavaScript, TypeScript\nReact-Query, Recoil, Styled-Components"
        : "React Navite, JavaScript, TypeScript, React-Query, Recoil, Styled-Components",
      image: waither,
    },
    {
      id: 2,
      title: "Defloy Surfing",
      introduce: isMobile
        ? "Github, AWS, Docker 토큰을 활용해\n배포 환경을 자동으로 구축하여 개발자에게\n편리한 배포 과정을 제공하는 웹 서비스"
        : "Github, AWS, Docker 토큰을 활용해 배포 환경을 자동으로 구축하여 개발자에게 편리한 배포 과정을 제공하는 웹 서비스",
      period: "2024.03 ~ ing",
      tech: isMobile
        ? "React\nJavaScript, TypeScript\nStyled-Components"
        : "React, JavaScript, TypeScript, Styled-Components",
      image: defloy,
    },
    {
      id: 3,
      title: "MindBook",
      introduce: isMobile
        ? "우울감, 무기력함, 불안감, 의욕 상실을 겪는\n현대인들을 위해 자기 치유와\n자존감 회복을 목적으로 제공된 웹서비스"
        : "우울감, 무기력함, 불안감, 의욕 상실을 겪는 현대인들을 위해 자기 치유와 자존감 회복을 목적으로 제공된 웹서비스",
      period: "2024.07 ~ 2024.08",
      tech: isMobile ? "HTML\nCSS\nJavaScript" : "HTML, CSS, JavaScript",
      image: mindBook,
    },
  ];

  const beforeGameScreen = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const nextGameScreen = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  const project = projects[currentProject];

  return (
    <ProjectsContainer ref={ref}>
      <GameScreenContainer>
        <PreviousBtn
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={beforeGameScreen}
          $ismobile={isMobile}
        >
          <path d="M15.75 19.5 8.25 12l7.5-7.5" />
        </PreviousBtn>
        <GameScreen
          $ismobile={isMobile}
          $image={project.image}
          key={project.id}
          onMouseEnter={onMouseScreenEnter}
          onMouseLeave={onMouseScreenLeave}
        >
          <ProjectCard $ismousehover={isMouseHover} $ismobile={isMobile}>
            <ProjectTitle $ismobile={isMobile}>{project.title}</ProjectTitle>
            <SubTitle $ismobile={isMobile}>Project Introduce</SubTitle>
            <Content $ismobile={isMobile}>{project.introduce}</Content>
            <SubTitle $ismobile={isMobile}>Period</SubTitle>
            <Content $ismobile={isMobile}>{project.period}</Content>
            <SubTitle $ismobile={isMobile}>Tech</SubTitle>
            <Content $ismobile={isMobile}>{project.tech}</Content>
            <DetailTxt $ismobile={isMobile}>Detail</DetailTxt>
          </ProjectCard>
        </GameScreen>
        <NextBtn
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={nextGameScreen}
          $ismobile={isMobile}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </NextBtn>
      </GameScreenContainer>
    </ProjectsContainer>
  );
});

export default Projects;
