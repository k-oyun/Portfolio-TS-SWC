import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import SkillsTest from "../Components/SkillsTest";
import AboutMeTest from "../Components/AboutMeTest";
import { useRef } from "react";
import Projects from "../Components/\bProjects";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* 짙은 남색 */
  /* background-color: #141827; */
  /* 밝은 남색 */
  /* background-color: #11264f; */
  /* 검정 배경 */
  background-color: black;
  scroll-snap-type: y mandatory;
`;
function King() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const ScrollMove = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth", // 부드럽게 스크롤
        block: "start", // 시작 부분으로 스크롤
      });
    }
  };

  return (
    <MainContainer>
      <Header
        onAboutMeClick={() => ScrollMove(aboutMeRef)}
        onSkillsClick={() => ScrollMove(skillsRef)}
        onProjectsClick={() => ScrollMove(projectsRef)}
      />
      <AboutMeTest ref={aboutMeRef} />
      <SkillsTest ref={skillsRef} />
      <Projects ref={projectsRef} />
      {/* <AboutMe /> */}
      {/* <Skills /> */}
    </MainContainer>
  );
}

export default King;
