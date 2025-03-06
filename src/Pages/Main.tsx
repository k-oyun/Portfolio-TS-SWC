import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import { useRef } from "react";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import { useObserveComponent } from "../Hooks/useObserveComponent";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

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
  const { currentComponent } = useObserveComponent(
    aboutMeRef,
    skillsRef,
    projectsRef
  );
  const ScrollMove = (componentRef: React.RefObject<HTMLDivElement | null>) => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <MainContainer>
      <Header
        onAboutMeClick={() => ScrollMove(aboutMeRef)}
        onSkillsClick={() => ScrollMove(skillsRef)}
        onProjectsClick={() => ScrollMove(projectsRef)}
        currentComponent={currentComponent}
      />
      <Component>
        <AboutMe ref={aboutMeRef} />
      </Component>
      <Component>
        <Skills ref={skillsRef} />
      </Component>
      <Component>
        <Projects ref={projectsRef} />
      </Component>
    </MainContainer>
  );
}

export default King;
