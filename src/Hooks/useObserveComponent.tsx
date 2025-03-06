import { useEffect, useState } from "react";

export const useObserveComponent = (
  aboutMeRef: React.RefObject<HTMLDivElement | null>,
  skillsRef: React.RefObject<HTMLDivElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>
) => {
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

  return { currentComponent };
};
