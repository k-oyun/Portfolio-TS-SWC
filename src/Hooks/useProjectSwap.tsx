import { useState } from "react";
import { Project, useProjectData } from "../Datas/useProjectData";
import { useMediaQuery } from "react-responsive";

type ProjectScreenSwap = {
  currentProject: number;
  beforeProject: () => void;
  nextProject: () => void;
};

export const useProjectScreenSwap = (): ProjectScreenSwap => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const [currentProject, setCurrentProject] = useState<number>(0);
  const projects: Project[] = useProjectData(isMobile);

  const beforeProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return { currentProject, beforeProject, nextProject };
};
