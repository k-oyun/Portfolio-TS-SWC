import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import SkillsTest from "../Components/SkillsTest";
import AboutMeTest from "../Components/AboutMeTest";
import { useRef } from "react";
import Projects from "../Components/Projects";
import ProjectsTest from "../Components/ProjectsTest";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* 짙은 남색 */
  /* background-color: #141827; */
  /* 밝은 남색 */
  /* background-color: #11264f; */
  /* 검정 배경 */
  background-color: black;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Component = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
`;

function King() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const ScrollMove = (componentRef: React.RefObject<HTMLDivElement | null>) => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
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
      {/* <AboutMeTest ref={aboutMeRef} />
      <SkillsTest ref={skillsRef} />
      <ProjectsTest ref={projectsRef} /> */}

      <Component>
        <AboutMeTest ref={aboutMeRef} />
      </Component>
      <Component>
        <SkillsTest ref={skillsRef} />
      </Component>
      <Component>
        <ProjectsTest ref={projectsRef} />
      </Component>

      {/* <AboutMe  /> */}
      {/* <Skills /> */}
      {/* <Projects ref={projectsRef} /> */}
    </MainContainer>
  );
}

export default King;
