import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";

interface styleType {
  $ismobile: boolean;
  $isaboutme?: boolean;
  $isskills?: boolean;
  $isprojects?: boolean;
  $iscontact?: boolean;
}

interface HeaderProps {
  onAboutMeClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  currentComponent: string;
}
const HeaderNav = styled.nav<styleType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  height: ${(props) => (props.$ismobile ? "70px" : "100px")};
  list-style: none;
  background-color: transparent;
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const brokenNeon = keyframes`
  0% { text-shadow: none; opacity: 0.8; }
  15% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 1; }
  30% { text-shadow: none; opacity: 0.6; }
  45% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 0.9; }
  60% { text-shadow: none; opacity: 0.5; }
  75% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 1; }
  90% { text-shadow: none; opacity: 0.7; }
  100% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 1; }
`;

const fiXedNeon = keyframes`
  0% { text-shadow: none; opacity: 0.8; }
  10% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 1; }
  20% { text-shadow: none; opacity: 0.6; }
  30% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 0.9; }
  40% { text-shadow: none; opacity: 0.5; }
  50% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 1; }
  60% { text-shadow: none; opacity: 0.6; }
  70% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 0.9; }
  80% { text-shadow: none; opacity: 0.5; }
  90% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00; opacity: 0.7; }
  100% { text-shadow: 0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 
    0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00;  opacity: 1; }
`;

const HeaderList = styled.li<styleType>`
  padding-left: ${(props) => (props.$ismobile ? "21px" : "50px")};
  padding-right: ${(props) => (props.$ismobile ? "25px" : "50px")};
  font-size: ${(props) => (props.$ismobile ? "16px" : "26px")};
  color: #fff;
  font-family: "Neon";
  white-space: nowrap;
  text-align: center;
  text-shadow: ${(props) =>
    props.$isaboutme
      ? "0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00"
      : props.$isskills
      ? "0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00"
      : props.$isprojects
      ? "0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00"
      : props.$iscontact
      ? "0 0 5px #00aa00, 0 0 10px #00aa00, 0 0 20px #00aa00, 0 0 30px #00aa00, 0 0 40px #00aa00, 0 0 55px #00aa00, 0 0 75px #00aa00"
      : " 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080; "};
  cursor: pointer;
  &:hover {
    animation: ${brokenNeon} 1.2s ease-in-out,
      ${fiXedNeon} 1.2s ease-in-out 1.2s forwards;
    transform: scale(1.05);
  }
  transition: transform 0.2s ease-in-out;
`;

const Header: React.FC<HeaderProps> = ({
  onAboutMeClick,
  onSkillsClick,
  onProjectsClick,
  currentComponent,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [headerState, setHeaderState] = useState({
    isAboutMe: true,
    isSkills: false,
    isProjects: false,
  });

  useEffect(() => {
    if (currentComponent === "AboutMe") {
      setHeaderState({ isAboutMe: true, isSkills: false, isProjects: false });
    } else if (currentComponent === "Skills") {
      setHeaderState({ isAboutMe: false, isSkills: true, isProjects: false });
    } else if (currentComponent === "Projects") {
      setHeaderState({ isAboutMe: false, isSkills: false, isProjects: true });
    }
  }, [currentComponent]);

  // const onclickAboutMe = () => {
  //   setHeaderState((prev) => ({
  //     ...prev,
  //     isAboutMe: !prev.isAboutMe,
  //     isSkills: false,
  //     isProjects: false,
  //   }));
  // };

  // const onclickSkills = () => {
  //   setHeaderState((prev) => ({
  //     ...prev,
  //     isSkills: !prev.isSkills,
  //     isAboutMe: false,
  //     isProjects: false,
  //   }));
  // };

  // const onclickProjects = () => {
  //   setHeaderState((prev) => ({
  //     ...prev,
  //     isProjects: !prev.isProjects,
  //     isAboutMe: false,
  //     isSkills: false,
  //   }));
  // };

  //=========================================================

  //=========================================================

  return (
    <HeaderNav $ismobile={isMobile}>
      <HeaderList
        $ismobile={isMobile}
        $isaboutme={headerState.isAboutMe}
        onClick={() => {
          onAboutMeClick();
        }}
      >
        About Me
      </HeaderList>
      <HeaderList
        $ismobile={isMobile}
        $isskills={headerState.isSkills}
        onClick={() => {
          onSkillsClick();
        }}
      >
        Skills
      </HeaderList>
      <HeaderList
        $ismobile={isMobile}
        $isprojects={headerState.isProjects}
        onClick={() => {
          onProjectsClick();
        }}
      >
        Projects
      </HeaderList>
    </HeaderNav>
  );
};

export default Header;
