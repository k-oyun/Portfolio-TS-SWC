import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ProjectDetail,
  useProjectDetailData,
} from "../Datas/useProjectDetailData";

export const useProjectDetail = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const projectsDetail: ProjectDetail[] = useProjectDetailData(isMobile);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [selectedProjectDetailImg, setSelectedProjectDetailImg] =
    useState<number>(0);

  const beforeProjectDetailImg = () => {
    setSelectedProjectDetailImg(
      (prev) =>
        (prev - 1 + projectsDetail[selectedProject].image.length) %
        projectsDetail[selectedProject].image.length
    );
  };
  const nextProjectDetailImg = () => {
    setSelectedProjectDetailImg(
      (prev) => (prev + 1) % projectsDetail[selectedProject].image.length
    );
  };
  const onClickDetail = () => {
    setSelectedProjectDetailImg(0);
    setIsModalOn(true);
  };

  return {
    projectsDetail,
    isModalOn,
    selectedProject,
    selectedProjectDetailImg,
    setSelectedProject,
    beforeProjectDetailImg,
    nextProjectDetailImg,
    onClickDetail,
    setIsModalOn,
  };
};
