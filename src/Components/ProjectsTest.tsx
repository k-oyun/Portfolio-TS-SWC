import { forwardRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import mobile from "../Assets/Image/Png/mobile.png";
import pc from "../Assets/Image/Png/pc.png";
import mindBookPc from "../Assets/Image/Png/mindBookPc.png";
import mindBookMobile from "../Assets/Image/Png/mindBookMobile.png";
import mindBookLogin from "../Assets/Image/Png/mindBookLogin.png";
import mindBookList from "../Assets/Image/Png/mindBookList.png";
import mindBookMain from "../Assets/Image/Png/mindBookMain.png";
import mindBookReport from "../Assets/Image/Png/mindBookReport.png";
import mindBookWriteReport from "../Assets/Image/Png/mindBookWriteReport.png";
import mindBookModal1 from "../Assets/Image/Png/mindBookModal1.png";
import mindBookModal2 from "../Assets/Image/Png/mindBookModal2.png";
import waitherPc from "../Assets/Image/Png/waitherPc.png";
import waitherMobile from "../Assets/Image/Png/waitherMobile.png";
import waitherMorning from "../Assets/Image/Png/waitherMorning.png";
import waitherNight from "../Assets/Image/Png/waitherNight.png";
import waitherLogin from "../Assets/Image/Png/waitherLogin.png";
import waitherReport from "../Assets/Image/Png/waitherReport.png";
import waitherSurvey1 from "../Assets/Image/Png/waitherSurvey1.png";
import waitherSurvey2 from "../Assets/Image/Png/waitherSurvey2.png";
import waitherSetting from "../Assets/Image/Png/waitherSetting.png";
import waitherSettingPicker from "../Assets/Image/Png/waitherSettingPicker.png";
import waitherWindSetting from "../Assets/Image/Png/waitherWindSetting.png";
import deployPc from "../Assets/Image/Png/deployPc.png";
import deployMobile from "../Assets/Image/Png/deployMobile.png";
import deployLogin from "../Assets/Image/Png/deployLogin.png";
import deployHome from "../Assets/Image/Png/deployHome.png";
import deployMain from "../Assets/Image/Png/deployMain.png";
import deployMyPage from "../Assets/Image/Png/deployMyPage.png";
import deployAddApp from "../Assets/Image/Png/deployAddApp.png";
import deploRegister1 from "../Assets/Image/Png/deployRegister1.png";
import deployRegister2 from "../Assets/Image/Png/deployRegister2.png";
import deployEmailVerify from "../Assets/Image/Png/deployEmailVerify.png";
import deployResetPassword from "../Assets/Image/Png/deployResetPassword.png";
import portfolioPc from "../Assets/Image/Png/portfolioPc.png";
import portfolioMobile from "../Assets/Image/Png/portfolioMobile.png";
import portfolioProject1 from "../Assets/Image/Png/portfolioProject1.png";
import portfolioProject2 from "../Assets/Image/Png/portfolioProject2.png";
import portfolioModal from "../Assets/Image/Png/portfolioModal.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

interface styleType {
  $ismobile?: boolean;
  $image?: string;
  $detailimage?: string;
  $ismousehover?: boolean;
  $ismodalon?: boolean;
  $isselectedWaither?: boolean;
}

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

const DetailTxtAnimation = keyframes`
0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }`;

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
const ProjectsContainer = styled.div<styleType>`
  display: flex;
  flex-direction: column;
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

const ProjectScreenContainer = styled.div<styleType>`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  transform-style: preserve-3d;
  margin-top: 50px;
`;

const ProjectScreen = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$ismobile ? "290px" : "1200px")};
  height: ${(props) => (props.$ismobile ? "510px" : "570px")};
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
  width: ${(props) => (props.$ismobile ? "290px" : "100%")};
  height: ${(props) => (props.$ismobile ? "550px" : "600px")};
  background-color: black;
  /* font-family: "Neon"; */
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
  /* text-shadow: 0 0 1px, 0 0 7px #00ff00, 0 0 10px #00ff00, 0 0 5px #00ff00,
    0 0 33px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00; */
  text-shadow: 0 0 1px, 0 0 7px blue, 0 0 10px blue, 0 0 5px blue, 0 0 33px blue,
    0 0 0px blue, 0 0 0px blue;
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
  padding-top: ${(props) => (props.$ismobile ? "50px" : "50px")};
  padding-left: ${(props) => (props.$ismobile ? "220px" : "0px")};
  font-size: ${(props) => (props.$ismobile ? "15px" : "25px")};
  text-shadow: 0 0 1px, 0 0 7px red, 0 0 10px red, 0 0 5px red, 0 0 33px red,
    0 0 0px red, 0 0 0px red;
  cursor: pointer;
  animation: ${DetailTxtAnimation} 1s ease-in-out infinite;
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

const ModalContainer = styled.div<styleType>`
  display: ${(props) => (props.$ismodalon ? "flex" : "none")};
  visibility: ${(props) => (props.$ismodalon ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* 전체 모달에서 스크롤 가능 */
  /* background-color: red; */
  z-index: 300;
  padding: 20px;
`;

const Modal = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "100%" : "100%")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: black;
  z-index: 100;
  top: 0;
  padding-bottom: 30px;
  /* font-family: "Neon"; */
  color: white;
  overflow-y: auto;
  visibility: ${(props) => (props.$ismodalon ? "visible" : "hidden")};
  opacity: ${(props) => (props.$ismodalon ? "1" : "0")};
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
`;

const ModalScreenContainer = styled.div<styleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "200px" // $isselectedWaither가 true이고 모바일일 때의 width
        : "500px" // $isselectedWaither가 true이고 컴퓨터일 때의 width
      : props.$ismobile
      ? "400px" // $isselectedWaither가 false이고 모바일일 때의 width
      : "800px"}; // $isselectedWaither가 false이고 컴퓨터일 때의 width

  height: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "320px" // $isselectedWaither가 true이고 모바일일 때의 height
        : "620px" // $isselectedWaither가 true이고 컴퓨터일 때의 height
      : props.$ismobile
      ? "140px" // $isselectedWaither가 false이고 모바일일 때의 height
      : "365px"}; // $isselectedWaither가 false이고 컴퓨터일 때의 height
`;

const ModalScreen = styled.div<styleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "300px;" // $isselectedWaither가 true이고 모바일일 때의 width
        : "300px" // $isselectedWaither가 true이고 컴퓨터일 때의 width
      : props.$ismobile
      ? "250px" // $isselectedWaither가 false이고 모바일일 때의 width !!!!
      : "650px"}; // $isselectedWaither가 false이고 컴퓨터일 때의 width!!!!

  height: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "315px" // $isselectedWaither가 true이고 모바일일 때의 height
        : "615px" // $isselectedWaither가 true이고 컴퓨터일 때의 height
      : props.$ismobile
      ? "140px" // $isselectedWaither가 false이고 모바일일 때의 height !!!!
      : "365px"}; // $isselectedWaither가 false이고 컴퓨터일 때의 height !!!!!
  background-image: ${(props) => `url(${props.$detailimage})`};
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  box-shadow: ${(props) => (props.$isselectedWaither ? "" : "0 0 15px white")};
  border: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "" // $isselectedWaither가 true이고 모바일일 때의 border
        : "" // $isselectedWaither가true이고 컴퓨터일 때의 border
      : props.$ismobile
      ? "2px solid white" // $isselectedWaither가 false이고 모바일일 때의 border
      : "5px solid white"}; // $isselectedWaither가 false이고 컴퓨터일 때의 border
  transition: box-shadow 0.5s ease-in-out, border 0.5s ease;
`;

const ModalTxtContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "250px" : "950px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
`;

const ModalCloseBtn = styled.button<styleType>`
  position: absolute;
  font-size: ${(props) => (props.$ismobile ? "30px" : "50px")};
  font-family: "Neon";
  color: white;
  background-color: transparent;
  border: none;
  z-index: 100;
  cursor: pointer;
  right: ${(props) => (props.$ismobile ? "5px" : "30px")};
  top: ${(props) => (props.$ismobile ? "10px" : "30px")};
  text-shadow: 0 0 1px, 0 0 7px red, 0 0 10px red, 0 0 5px red, 0 0 33px red,
    0 0 0px red, 0 0 0px red;
  animation: ${ModalCloseBtnAnimation} 1s ease-in-out infinite;
`;

const ModalMainTitle = styled.span<styleType>`
  font-size: ${(props) => (props.$ismobile ? "15px" : "30px")};
  margin: ${(props) => (props.$ismobile ? "10px 0" : "20px 0")};
  text-shadow: 0 0 1px, 0 0 7px #00ff00, 0 0 10px #00ff00, 0 0 5px #00ff00,
    0 0 33px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00;
`;
const ModalContent = styled.span<styleType>`
  font-size: ${(props) => (props.$ismobile ? "8px" : "16px")};
  text-shadow: 0 0 1px, 0 0 7px #f148fb, 0 0 10px #f148fb, 0 0 5px #f148fb,
    0 0 33px #f148fb, 0 0 0px #f148fb, 0 0 0px #f148fb;
  white-space: pre-wrap;
  line-height: ${(props) => (props.$ismobile ? "13px" : " 30px")};
`;

const ModalLinkContent = styled.span<styleType>`
  font-size: ${(props) => (props.$ismobile ? "8px" : "16px")};
  text-shadow: 0 0 1px, 0 0 7px red, 0 0 10px red, 0 0 5px red, 0 0 33px red,
    0 0 0px red, 0 0 0px red;
  cursor: pointer;
  animation: ${electricShock} 1s infinite;
`;

const SpeechBubbleContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "210px" : "400px")};
  height: ${(props) => (props.$ismobile ? "20px" : "10px")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${(props) => (props.$ismobile ? "17px" : "27px")};
  margin-top: ${(props) => (props.$ismobile ? "0px" : "30px")};
  margin-bottom: ${(props) => (props.$ismobile ? "15px" : "0px")};

  font-family: "Neon";
  filter: ${(props) =>
    props.$ismousehover
      ? " drop-shadow(0 0 5px red) drop-shadow(0 0 10px red)drop-shadow(0 0 10px red)"
      : " drop-shadow(0 0 5px #f148fb) drop-shadow(0 0 10px #f148fb) drop-shadow(0 0 10px #f148fb)"};
  animation: ${electricShock} 1s infinite;
`;

const Projects = forwardRef<HTMLDivElement, any>((props, ref) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [selectedProjectImg, setSelectedProjectImg] = useState<number>(0);

  const onMouseScreenEnter = () => {
    setIsMouseHover(true);
  };
  const onMouseScreenLeave = () => {
    setIsMouseHover(false);
  };

  const onClickDetail = () => {
    setSelectedProject(currentProject);
    setSelectedProjectImg(0);
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
        ? "React Native\nJavaScript, TypeScript\nReact-Query, Recoil, Styled-Components"
        : "React Native, JavaScript, TypeScript, React-Query, Recoil, Styled-Components",
      image: isMobile ? waitherMobile : waitherPc,
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
      image: isMobile ? deployMobile : deployPc,
    },
    {
      id: 3,
      title: "MindBook",
      introduce: isMobile
        ? "우울감, 무기력함, 불안감, 의욕 상실을 겪는\n현대인들을 위해 자기 치유와\n자존감 회복을 목적으로 제공된 웹 서비스"
        : "우울감, 무기력함, 불안감, 의욕 상실을 겪는 현대인들을 위해 자기 치유와 자존감 회복을 목적으로 제공된 웹 서비스",
      period: "2024.07 ~ 2024.08",
      tech: isMobile ? "HTML\nCSS\nJavaScript" : "HTML, CSS, JavaScript",
      image: isMobile ? mindBookMobile : mindBookPc,
    },
    {
      id: 4,
      title: "Portfolio",
      introduce: "프로젝트 및 프로필 소개를 위한 포트폴리오",

      period: "2025.02 ~ 2025.02",
      tech: isMobile
        ? "React\nJavaScript, TypeScript\nStyled-Components"
        : "React, JavaScript, TypeScript, Styled-Components",
      image: isMobile ? portfolioMobile : portfolioPc,
    },
  ];

  const beforeProjectScreen = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const nextProjectScreen = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const project = projects[currentProject];

  const projectsDetail = [
    {
      image: [
        waitherMorning,
        waitherNight,
        waitherLogin,
        waitherReport,
        waitherSurvey1,
        waitherSurvey2,
        waitherSetting,
        waitherSettingPicker,
        waitherWindSetting,
      ],
      part: [
        "[ 프론트엔드, 디자인 ]",
        "ㆍ Splash Screen, 아이콘 설정 등 앱 초기 환경 설정",
        isMobile
          ? "ㆍ 회원가입, 로그인, 비밀번호 재설정, 직장 지역 / 알림 / 사용자 데이터 / \n    메인화면 날씨 정보 설정화면, 메인화면, 레포트 화면 구현 및 API 연결"
          : "ㆍ 회원가입, 로그인, 비밀번호 재설정, 직장 지역 / 알림 / 사용자 데이터 / 메인화면 날씨 정보 설정, 메인, 레포트 화면 구현 및 API 연결",
        "ㆍ 바람세기 설정, 개인정보 설정 API 연결",
        "ㆍ 레포트 화면, 사용자 설정 화면 디자인",
        "ㆍ 카카오 로그인 구현",
        "ㆍ 카카오 MAP API를 이용한 주소 검색 구현",
        "ㆍ 서버로부터 전달받은 데이터를 적절히 처리하는 정제 함수 모듈화",
        "ㆍ API 호출 코드 모듈화를 통한 코드 단순화",
        "ㆍ react-query를 통한 데이터 캐싱, API 호출 수 감소 및 효율성 향상",
      ],
      task: [
        "ㆍ react-native-modal을 이용하여 모달 구현",
        isMobile
          ? "ㆍ react-native-keyboard-aware-scroll-view를 이용하여 키보드가 입력 칸을 \n    가리는 경우 스크롤이 가능하도록 구현"
          : "ㆍ react-native-keyboard-aware-scroll-view를 이용하여 키보드가 입력 칸을 가리는 경우 스크롤이 가능하도록 구현",
        "ㆍ react-navigation을 이용하여 화면 전환 기능 구현",
        isMobile
          ? "ㆍ gorhom/bottom-sheet, react-native-picker/picker를 이용하여 \n    시간을 선택할 수 있는 바텀 시트 구현"
          : "ㆍ gorhom/bottom-sheet, react-native-picker/picker를 이용하여 시간을 선택할 수 있는 바텀 시트 구현",
        "ㆍ 사용자 설정 토글 구현",
        isMobile
          ? "ㆍ react-native-community/slider를 이용하여 사용자 민감도 조절이\n    가능한 슬라이딩 바 구현"
          : "ㆍ react-native-community/slider를 이용하여 사용자 민감도 조절이 가능한 슬라이딩 바 구현",
        "ㆍ react-native-seoul/kakao-login을 이용하여 카카오 로그인 구현",
        "ㆍ 카카오 맵 API를 이용하여 위치 검색 기능 구현",
        isMobile
          ? "ㆍ react-native-background-fetch, react-native-geolocation을 이용하여\n    위치를 15분마다 전송하도록 구현"
          : "ㆍ react-native-background-fetch, react-native-geolocation을 이용하여 위치를 15분마다 전송하도록 구현",
        isMobile
          ? "ㆍ react-native-camera-roll, react-native-view-shot을 이용하여 하루 날씨 \n    이슈가 정리된 화면을 갤러리에 저장할 수 있는 기능 구현"
          : "ㆍ react-native-camera-roll, react-native-view-shot을 이용하여 하루 날씨 이슈가 정리된 화면을 갤러리에 저장할 수 있는 기능 구현",
        isMobile
          ? "ㆍ react-native의 RefreshControl을 이용하여 화면 드래그를 통한 \n    새로고침 기능 구현"
          : "ㆍ react-native의 RefreshControl을 이용하여 화면 드래그를 통한 새로고침 기능 구현",
      ],
      trouble: [
        isMobile
          ? "ㆍ JavaScript fetch 함수를 이용한 API 호출 시 컴포넌트가 렌더링 되는\n    모든 경우에 API 호출 발생"
          : "ㆍ JavaScript fetch 함수를 이용한 API 호출 시 컴포넌트가 렌더링 되는 모든 경우에 API 호출 발생",
        "  ㆍ react-query를 이용하여 수신한 데이터를 10분 동안 캐싱하도록 구현",
        "  ㆍ API 호출 수 감소 및 효율성 개선",
        "\n",
        isMobile
          ? "ㆍ background 기능 구현 도중  background-fetch 작동 여부\n    확인이 불가능한 문제 발생"
          : "ㆍ background 기능 구현 도중  background-fetch 작동 여부 확인이 불가능한 문제 발생",
        "  ㆍ appstate를 이용하여 background-fetch 3가지 상태를 확인",
        "\n",
        isMobile
          ? "ㆍ react-query를 이용한 api 호출 과정에서 데이터 로드가 끝나지 않은\n    상태에서 컴포넌트가 렌더링 되는 문제 발생"
          : "ㆍ react-query를 이용한 api 호출 과정에서 데이터 로드가 끝나지 않은 상태에서 컴포넌트가 렌더링 되는 문제 발생",

        "   ㆍ useSuspenseQuery 훅을 사용해 데이터 로드 전까지 컴포넌트 렌더링 제어",

        "\n",
        isMobile
          ? "ㆍ react-native-camera-roll을 이용하여 사진 저장 기능 구현 도중 null 값이\n    prop으로 전달되어 발생하는 NSNumber 에러 발생"
          : "ㆍ react-native-camera-roll을 이용하여 사진 저장 기능 구현 도중 null 값이 prop으로 전달되어 발생하는 NSNumber 에러 발생",
        isMobile
          ? "   ㆍ 해당 prop에 null 값이 전달되지 않도록 보장하여\n       NSNumber 에러가 발생하지 않도록 내장 함수 수정"
          : "   ㆍ 해당 prop에 null 값이 전달되지 않도록 보장하여 NSNumber 에러가 발생하지 않도록 내장 함수 수정",
      ],
      feeling: [
        isMobile
          ? "ㆍ 오래 알고 지냈던 친구들과 진행했던 프로젝트였기에 갈등 없이 프로젝트를 끝\n    낼 수 있다고 생각했습니다. 프로젝트 진행 도중 팀원 간 의견 차이로 갈등이 생\n    기기 시작했고, 프로젝트가 중단되었습니다. 정이 많았던 프로젝트였기에 끝까\n    지 구현하고 싶어 남아있는 부분들을 구현했습니다.  힘들었지만 의사소통과 \n    팀원 간의 존중 및 배려가 중요하다고  한 번 더 배워갈 수 있었던 프로젝트\n    였습니다."
          : "ㆍ 오래 알고 지냈던 친구들과 진행했던 프로젝트였기에 갈등 없이 프로젝트를 끝낼 수 있다고 생각했습니다. \n    프로젝트 진행 도중 팀원 간 의견 차이로 갈등이 생기기 시작했고, 프로젝트가 중단되었습니다.\n    정이 많았던 프로젝트였기에 끝까지 구현하고 싶어 남아있는 부분들을 구현했습니다.\n    힘들었지만 의사소통과 팀원 간의 존중 및 배려가 중요하다고 한 번 더 배워갈 수 있었던 프로젝트였습니다.",
        "\n",
        isMobile
          ? "ㆍ 카카오 로그인 및 이미지 갤러리 저장과 같은 기능을 구현하며, OS의 요구 사\n    항에 맞춰 구현하는 과정에서 많은 시행착오와 학습이 필요했습니다. 플랫폼별 \n    제약 사항을 고려하여 구현하는 데 어려움을 겪었지만, OS의 세부적인 부분까\n    지 신중하게 접근하는 것이 중요하다는 것을 깨달았습니다."
          : "ㆍ 카카오 로그인 및 이미지 갤러리 저장과 같은 기능을 구현하며, OS의 요구 사항에 맞춰 구현하는 과정에서 많은 시행착오와 학습이 필요했습니다.\n    플랫폼별 제약 사항을 고려하여 구현하는 데 어려움을 겪었지만, OS의 세부적인 부분까지 신중하게 접근하는 것이 중요하다는 것을 깨달았습니다.",
      ],
      link: "https://github.com/k-oyun/Waither-FE",
    },
    {
      image: [
        deployLogin,
        deploRegister1,
        deployRegister2,
        deployEmailVerify,
        deployHome,
        deployMain,
        deployMyPage,
        deployAddApp,

        deployResetPassword,
      ],
      part: [
        "[ 프론트엔드, 디자인 ]",
        "ㆍ 각 페이지 구현 및 API 연결",
        "ㆍ 카카오 로그인 구현",
        "ㆍ 토큰 암호화 및 복호화",
      ],
      task: [
        "ㆍ 파일 업로드 기능 구현",
        "ㆍ Header 구현",
        "ㆍ Footer 구현",
        "ㆍ 이메일 인증, 비밀번호 재설정 모달 구현",
        "ㆍ 비밀번호, 토큰 등 민감한 정보 보기/숨기기 기능 구현",
        "ㆍ react-router-dom을 이용하여 SPA 내부에서 페이지 이동이 가능하도록 구현",
      ],
      trouble: [""],
      feeling: [""],
      link: "https://github.com/k-oyun/Deploy-Surfing",
    },
    {
      image: [
        mindBookLogin,
        mindBookMain,
        mindBookList,
        mindBookReport,
        mindBookWriteReport,
        mindBookModal1,
        mindBookModal2,
      ],
      part: [
        "[ 프론트엔드, 기획 ]",
        "ㆍ 메인, 전체 책장, 도서 검색, 도서 추가, 도서 독후감 작성 페이지 구현 및 API 연결",
      ],
      task: ["ㆍ 데이터 정제함수 구현", "ㆍ 도서 추가 시 상태 모달 구현", ""],
      trouble: [
        "ㆍ API 연결 중 서버에서의 CORS 에러 발생으로 인한 요청 차단",
        isMobile
          ? "   ㆍ Server측에 Access-Control-Allow-Origin 헤더 리스트에 프론트엔드 \n       개발 서버 URL을 추가하여 해결"
          : "   ㆍ Server측에 Access-Control-Allow-Origin 헤더 리스트에 프론트엔드 개발 서버 URL을 추가하여 해결",
      ],
      feeling: [
        isMobile
          ? "ㆍ 데드라인이 짧았던 해커톤 프로젝트였기에 빠른 의사소통과 효과적인 협업이\n    중요했습니다. 구현 과정에서 서버 측 문제를 신속하게 공유하며 해결해 나갔\n    음에도 불구하고 마감 1시간 전, 배포 과정에서 문제가 발생했습니다. 조급해진\n    팀원들 사이에 긴장감이 감돌았고, 날이 선 말들이 오가며 분위기가 얼어붙었\n    습니다. 마감이 끝난 후, 적막 속에서 서로를 위로하며 프로젝트를 마무리할 수\n    있었습니다. 이 프로젝트를 통해, 완벽한 협업을 목표로 하더라도 갈등은 피할\n    수 없다는 것, 그리고 진행 과정에서 감정이 요동치는 것은 자연스러운 일이지\n    만, 어떻게 해결하느냐가 바로 팀워크라는 것을 배웠습니다."
          : "ㆍ 데드라인이 짧았던 해커톤 프로젝트였기에 빠른 의사소통과 효과적인 협업이 중요했습니다. 구현 과정에서 서버 측 문제를 신속하게 공유하며 해결해\n    나갔음에도 불구하고 마감 1시간 전, 배포 과정에서 문제가 발생했습니다. 조급해진 팀원들 사이에 긴장감이 감돌았고, 날이 선 말들이 오가며 분위기가\n    얼어붙었습니다. 마감이 끝난 후, 적막 속에서 서로를 위로하며 프로젝트를 마무리할 수 있었습니다. 이 프로젝트를 통해, 완벽한 협업을 목표로 하더라\n    도 갈등은 피할 수 없다는 것, 그리고 진행 과정에서 감정이 요동치는 것은 자연스러운 일이지만, 어떻게 해결하느냐가 바로 팀워크라는 것을 배웠습니\n    다.",
      ],
      link: "https://github.com/k-oyun/MindBook-FE",
    },
    {
      image: [
        portfolioPc,
        portfolioProject1,
        portfolioProject2,
        portfolioModal,
      ],
      part: ["[ 프론트엔드, 기획, 디자인 ]", "ㆍ 각 페이지 디자인 및 구현"],
      task: [
        "ㆍ keyframes을 이용하여 애니메이션 구현",
        "ㆍ useMediaQuery를 이용하여 반응형 웹 구현",
        "ㆍ scroll-snap 속성을 이용하여 원페이지 스크롤 구현",
        isMobile
          ? "ㆍ IntersectionObserver API를 이용하여 현재 보고 있는 컴포넌트를 실시간으\n    로 감지하고, Header에 전달하여 네비게이션 UI에 동적으로 적용"
          : "ㆍ IntersectionObserver API를 이용하여 현재 보고 있는 컴포넌트를 실시간으로 감지하고, Header에 전달하여 네비게이션 UI에 동적으로 적용",
        "   ㆍ useEffect를 이용하여  observe()를 설정하고, 컴포넌트 언마운트 시\n       unobserve()를 호출하여 메모리 누수 방지",
      ],
      trouble: [],
      feeling: [
        isMobile
          ? "ㆍ 첫 반응형 웹 구현이라 걱정했지만, 예상보다 수월하게 완성할 수 있었습니다. \n    새로운 기술을 익히고 적용하는 과정에서 자신감을 얻었고, 앞으로 더 도전적\n    인 프로젝트에도 능숙하게 적응할 수 있다는 확신이 생겼습니다."
          : "ㆍ 첫 반응형 웹 구현이라 걱정했지만, 예상보다 수월하게 완성할 수 있었습니다. 새로운 기술을 익히고 적용하는 과정에서 자신감을 얻었고, 앞으로 더 도\n    전적인 프로젝트에도 능숙하게 적응할 수 있다는 확신이 생겼습니다.",
        isMobile
          ? "ㆍ 초기 구현 단계부터 TypeScript를 적용하며 이전 사용 방식의 문제점을 인지\n    할 수 있었습니다. 올바른 방법으로 TypeScript를 활용하고, 에러를 직면하고 \n    해결하는 과정을 거치면서 더욱 익숙해졌으며, 효율성과 유용함을 직접 체감할 \n    수 있었습니다."
          : "ㆍ 초기 구현 단계부터 TypeScript를 적용하며 이전 사용 방식의 문제점을 인지할 수 있었습니다. 올바른 방법으로 TypeScript를 활용하고, 에러를 해결하\n    는 과정을 거치면서 더욱 익숙해졌으며, 효율성과 유용함을 직접 체감할 수 있었습니다.",
      ],
      link: "https://github.com/k-oyun/Portfolio-TS-SWC",
    },
  ];
  const beforeProjectImg = () => {
    setSelectedProjectImg(
      (prev) =>
        (prev - 1 + projectsDetail[selectedProject].image.length) %
        projectsDetail[selectedProject].image.length
    );
    console.log(selectedProjectImg);
  };
  const nextProjectImg = () => {
    setSelectedProjectImg(
      (prev) => (prev + 1) % projectsDetail[selectedProject].image.length
    );
  };

  return (
    <>
      {selectedProject !== null ? (
        <ModalContainer $ismodalon={isModalOn} $ismobile={isMobile}>
          <Modal $ismodalon={isModalOn} $ismobile={isMobile}>
            <ModalScreenContainer
              $ismobile={isMobile}
              $isselectedWaither={selectedProject === 0}
            >
              <PreviousBtn
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                $ismobile={isMobile}
                onClick={beforeProjectImg}
              >
                <path d="M15.75 19.5 8.25 12l7.5-7.5" />
              </PreviousBtn>
              <ModalScreen
                $ismobile={isMobile}
                $detailimage={
                  projectsDetail[selectedProject].image[selectedProjectImg]
                }
                $isselectedWaither={selectedProject === 0}
              />
              {/* ))} */}
              <NextBtn
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                $ismobile={isMobile}
                onClick={nextProjectImg}
              >
                <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </NextBtn>
            </ModalScreenContainer>

            <ModalCloseBtn
              $ismobile={isMobile}
              onClick={() => {
                setIsModalOn(false);
              }}
            >
              x
            </ModalCloseBtn>
            <ModalTxtContainer $ismobile={isMobile}>
              <ModalMainTitle $ismobile={isMobile}>Part</ModalMainTitle>
              {projectsDetail[selectedProject].part.map((part, partIndex) => (
                <ModalContent key={partIndex} $ismobile={isMobile}>
                  {part}
                </ModalContent>
              ))}
              <ModalMainTitle $ismobile={isMobile}>
                What did I Implement
              </ModalMainTitle>
              {projectsDetail[selectedProject].task.map((task, taskIndex) => (
                <ModalContent key={taskIndex} $ismobile={isMobile}>
                  {task}
                </ModalContent>
              ))}

              <ModalMainTitle $ismobile={isMobile}>
                Trouble Shooting
              </ModalMainTitle>
              {projectsDetail[selectedProject].trouble.map(
                (trouble, troubleIndex) => (
                  <ModalContent key={troubleIndex} $ismobile={isMobile}>
                    {trouble}
                  </ModalContent>
                )
              )}
              <ModalMainTitle $ismobile={isMobile}>
                What did I feel
              </ModalMainTitle>
              {projectsDetail[selectedProject].feeling.map(
                (feeling, feelingIndex) => (
                  <ModalContent key={feelingIndex} $ismobile={isMobile}>
                    {feeling}
                  </ModalContent>
                )
              )}
              <ModalMainTitle $ismobile={isMobile}>Link</ModalMainTitle>
              <ModalLinkContent
                $ismobile={isMobile}
                onClick={() =>
                  window.open(projectsDetail[selectedProject].link)
                }
              >
                ㆍ {projectsDetail[selectedProject].link}
              </ModalLinkContent>
            </ModalTxtContainer>
          </Modal>
        </ModalContainer>
      ) : null}

      <ProjectsContainer ref={ref} $ismodalon={isModalOn}>
        <ProjectScreenContainer>
          <PreviousBtn
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={beforeProjectScreen}
            $ismobile={isMobile}
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </PreviousBtn>
          <ProjectScreen
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
          </ProjectScreen>
          <NextBtn
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={nextProjectScreen}
            $ismobile={isMobile}
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </NextBtn>
        </ProjectScreenContainer>
        <SpeechBubbleContainer
          $ismobile={isMobile}
          $ismousehover={isMouseHover}
        >
          {isMouseHover
            ? isMobile
              ? "Touch Detail"
              : "Click Detail"
            : isMobile
            ? "Touch The Screen"
            : "Put Your Mouse On The Screen"}
        </SpeechBubbleContainer>
      </ProjectsContainer>
    </>
  );
});

export default Projects;
