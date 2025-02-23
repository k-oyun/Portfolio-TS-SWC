import { forwardRef, useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import mobile from "../Assets/Image/Png/mobile.png";
import pc from "../Assets/Image/Png/pc.png";
import mindBook from "../Assets/Image/Png/mind_book.png";
import waither from "../Assets/Image/Png/waither.png";
import defloy from "../Assets/Image/Png/defloy.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

interface styleType {
  $ismobile?: boolean;
  $image?: string;
  $ismousehover?: boolean;
  $ismodalon?: boolean;
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
  /* opacity: ${(props) => (props.$ismousehover ? 0.9 : 0)}; */
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

const ContentTxt = styled.span<styleType>`
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
  cursor: pointer;
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

const Modal = styled.div<styleType>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: black;
  z-index: 1;
  top: 0;
  padding-bottom: 30px;
  font-family: "Neon";
  color: white;
  overflow-y: auto;
  visibility: ${(props) => (props.$ismodalon ? "visible" : "hidden")};
  opacity: ${(props) => (props.$ismodalon ? "1" : "0")};
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
`;

const ModalScreen = styled.div<styleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$ismobile ? "290px" : "650px")};
  height: ${(props) => (props.$ismobile ? "550px" : "325px")};
  background-position: center;
  margin-top: 100px;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0 0 15px white;
  border: ${(props) =>
    props.$ismobile ? "2px solid white" : "5px solid white"};
  transition: box-shadow 0.5s ease-in-out, border 0.5s ease;
`;

const ModalTxtContainer = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 30px;
`;

const ModalCloseBtnAnimation = keyframes`
    0% {
      transform: rotate(0deg);
      filter: brightness(1);
    }
    25% {
      transform: rotate(-15deg);
      filter: brightness(1.5);
    }
    50% {
      transform: rotate(15deg);
      filter: brightness(0.6);
    }
    75% {
      transform: rotate(-15deg);
      filter: brightness(1.5);
    }
    100% {
      transform: rotate(0deg);
      filter: brightness(1); 
  }`;

const ModalCloseBtn = styled.button`
  position: absolute;
  /* background-color: red; */
  font-size: 50px;
  font-family: "Neon";
  color: white;
  background-color: transparent;
  border: none;
  z-index: 100;
  cursor: pointer;
  right: 30px;
  top: 100px;
  text-shadow: 0 0 1px, 0 0 7px red, 0 0 10px red, 0 0 5px red, 0 0 33px red,
    0 0 0px red, 0 0 0px red;
  animation: ${ModalCloseBtnAnimation} 1s ease-in-out infinite;
`;

const ModalMainTitle = styled.span<styleType>`
  font-size: 30px;
  margin: 20px 0px;
  text-shadow: 0 0 1px, 0 0 7px #00ff00, 0 0 10px #00ff00, 0 0 5px #00ff00,
    0 0 33px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00;
`;
const ModalContent = styled.span<styleType>`
  text-shadow: 0 0 1px, 0 0 7px #f148fb, 0 0 10px #f148fb, 0 0 5px #f148fb,
    0 0 33px #f148fb, 0 0 0px #f148fb, 0 0 0px #f148fb;
`;

const Projects = forwardRef<HTMLDivElement, any>((props, ref) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const onMouseScreenEnter = () => {
    setIsMouseHover(true);
    console.log(isMouseHover);
  };
  const onMouseScreenLeave = () => {
    setIsMouseHover(false);
    console.log(isMouseHover);
  };

  const onClickDetail = () => {
    setSelectedProject(currentProject);
    setIsModalOn(true);
    console.log(isModalOn);
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

  const projectsDetail = [
    {
      part: [],
      task: [
        "ㆍ Splash Screen, 아이콘 설정 등 앱 초기 환경 설정",
        "ㆍ react-native-modal을 이용하여 모달 구현",
        "ㆍ react-native-keyboard-aware-scroll-view를 이용하여 키보드가 입력 칸을 가리는 경우 스크롤이 가능하도록 구현",
        "ㆍ react-navigation을 이용하여 화면 전환 기능 구현",
        "ㆍ gorhom/bottom-sheet, react-native-picker/picker를 이용하여 시간을 선택할 수 있는 바텀 시트 구현",
        "ㆍ 사용자 설정 토글 구현",
        "ㆍ react-native-community/slider를 이용하여 사용자 민감도 조절이 가능한 슬라이딩 바 구현",
        "ㆍ react-native-seoul/kakao-login을 이용하여 카카오 로그인 구현",
        "ㆍ 카카오 맵 API를 이용하여 위치 검색 기능 구현",
        "ㆍ react-native-background-fetch, react-native-geolocation을 이용하여 위치를 15분마다 전송하도록 구현",
        "ㆍ react-query를 이용하여 API 호출 수 감소 및 API 호출 효율성 항샹",
        "ㆍ API 호출 코드 모듈화를 통한 코드 단순화",
        "ㆍ react-native-camera-roll, react-native-view-shot을 이용하여 하루 날씨 이슈가 정리된 화면을 갤러리에 저장할 수 있는 기능 구현",
        "ㆍ react-native의 RefreshControl을 이용하여 아래로 드래그 시 새로고침되도록 기능 구현",
        "ㆍ 서버로부터 전달 받은 데이터를 적절히 처리하는 정제 함수 모듈화",
        "ㆍ react-query를 통한 데이터 캐싱 기능 구현, API 호출 수 감소 및 효율성 개선 ",
        "ㆍ 화면 구현, API 연결",
      ],
      trouble: [
        "ㆍ JavaScript fetch함수를 이용한 API 호출 시 화면이 렌더링되는 모든 경우에 API 호출 발생",
        "ㆍ react-query를 이용하여 수신한 데이터를 10분동안 캐싱하도록 구현",
        "ㆍ API 호출 수 감소 및 효율성 개선",
        "ㆍ background 기능 구현 도중  background-fetch 정상 작동 여부 확인이 불가능한 문제 발생",
        "ㆍ appstate를 이용하여 background-fetch 3가지 상태를 확인",
        "ㆍ react-query를 이용한 api 호출 과정에서 데이터 전송이 끝나지 않은 상태에서 화면이 렌더링 되는 문제 발생",
        "ㆍ 데이터가 준비될 때까지 컴포넌트 렌더링을 중지시키는 useSuspenseQuery훅 이용",
        "ㆍ react-native-camera-roll을 이용하여 사진 저장 기능 구현 도중 null 값이 prop으로 전달되어 발생하는 NSNumber 에러 발생",
        "ㆍ 해당 prop에 null값이 전달되지 않도록 보장하여 NSNumber 에러가 발생하지 않도록 내장 함수 수정",
      ],
      feeling: [],
      link: "https://github.com/k-oyun/Waither-FE",
    },
    {
      part: [],
      task: ["파일 업로드 기능 구현", "헤더 구현", "드롭다운 기능 구현"],
      trouble: [],
      feeling: [],
      link: "https://github.com/k-oyun/Deploy-Surfing",
    },
    {
      part: [],
      task: ["각 데이터 정제함수 구현", "", ""],
      trouble: [],
      feeling: [],
      link: "https://github.com/k-oyun/MindBook-FE",
    },
  ];

  return (
    <>
      {selectedProject !== null ? (
        <Modal $ismodalon={isModalOn}>
          <ModalScreen />
          <ModalCloseBtn
            onClick={() => {
              setIsModalOn(false);
            }}
          >
            x
          </ModalCloseBtn>
          <ModalTxtContainer>
            <ModalMainTitle>Part</ModalMainTitle>
            {projectsDetail[selectedProject].part.map((part, partIndex) => (
              <ModalContent key={partIndex}>{part}</ModalContent>
            ))}
            <ModalMainTitle>What did I do</ModalMainTitle>
            {projectsDetail[selectedProject].task.map((task, taskIndex) => (
              <ModalContent key={taskIndex}>{task}</ModalContent>
            ))}

            <ModalMainTitle>Trouble Shooting</ModalMainTitle>
            {projectsDetail[selectedProject].trouble.map(
              (trouble, troubleIndex) => (
                <ModalContent key={troubleIndex}>{trouble}</ModalContent>
              )
            )}
            <ModalMainTitle>What did I feel</ModalMainTitle>
            {projectsDetail[selectedProject].feeling.map(
              (feeling, feelingIndex) => (
                <ModalContent key={feelingIndex}>{feeling}</ModalContent>
              )
            )}
            <ModalMainTitle>Link</ModalMainTitle>
            <ModalContent
              onClick={() => window.open(projectsDetail[selectedProject].link)}
            >
              ㆍ {projectsDetail[selectedProject].link}
            </ModalContent>
          </ModalTxtContainer>
        </Modal>
      ) : null}
      <ProjectsContainer ref={ref} $ismodalon={isModalOn}>
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
              <ContentTxt $ismobile={isMobile}>{project.introduce}</ContentTxt>
              <SubTitle $ismobile={isMobile}>Period</SubTitle>
              <ContentTxt $ismobile={isMobile}>{project.period}</ContentTxt>
              <SubTitle $ismobile={isMobile}>Tech</SubTitle>
              <ContentTxt $ismobile={isMobile}>{project.tech}</ContentTxt>
              <DetailTxt $ismobile={isMobile} onClick={onClickDetail}>
                Detail
              </DetailTxt>
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
    </>
  );
});

export default Projects;
