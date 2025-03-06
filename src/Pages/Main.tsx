import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import { useEffect, useRef, useState } from "react";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

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

  const ScrollMove = (componentRef: React.RefObject<HTMLDivElement | null>) => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [currentComponent, setCurrentComponent] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutMeRef.current) {
              setCurrentComponent("AboutMe");
            } else if (entry.target === skillsRef.current) {
              setCurrentComponent("Skills");
            } else if (entry.target === projectsRef.current) {
              setCurrentComponent("Projects");
            }
          } else {
            if (
              entry.target === aboutMeRef.current &&
              currentComponent === "AboutMe"
            ) {
              setCurrentComponent("");
            } else if (
              entry.target === skillsRef.current &&
              currentComponent === "Skills"
            ) {
              setCurrentComponent("");
            } else if (
              entry.target === projectsRef.current &&
              currentComponent === "Projects"
            ) {
              setCurrentComponent("");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, [currentComponent]);

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
