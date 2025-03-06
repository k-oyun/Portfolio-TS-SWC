import { forwardRef, useEffect } from "react";
import { keyframes, styled } from "styled-components";
import mobile from "/mobile.png";
import pc from "/pc.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useProjectMousePosition } from "../Hooks/useProjectMousePosition";
import { useProjectScreenSwap } from "../Hooks/useProjectSwap";
import { useProjectDetail } from "../Hooks/useProjectDetailSwap";
import { Project, useProjectData } from "../Datas/useProjectData";

interface styleType {
  $ismobile?: boolean;
  $image?: string;
  $detailimage?: string;
  $ismouseenter?: boolean;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: ${(props) => (props.$ismobile ? "20px" : "1.4rem")};
  padding-left: ${(props) => (props.$ismobile ? "30px" : "3.1rem")};
  opacity: ${(props) => (props.$ismouseenter ? 0.9 : 0)};
  transition: opacity 1s ease-in-out;
  color: white;
`;

const ProjectTitle = styled.span<styleType>`
  padding-bottom: ${(props) => (props.$ismobile ? "4px" : "1.8rem")};
  font-size: ${(props) => (props.$ismobile ? "20px" : "40px")};
  text-shadow: 0 0 1px, 0 0 7px blue, 0 0 10px blue, 0 0 5px blue, 0 0 33px blue,
    0 0 0px blue, 0 0 0px blue;
`;

const SubTitle = styled.span<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "50px" : "2.5rem")};
  font-size: ${(props) => (props.$ismobile ? "15px" : "1.86rem")};
  text-shadow: 0 0 1px, 0 0 7px #00ff00, 0 0 10px #00ff00, 0 0 5px #00ff00,
    0 0 33px #00ff00, 0 0 0px #00ff00, 0 0 0px #00ff00;
`;

const ContentTxt = styled.span<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "15px" : "1.87rem")};
  font-size: ${(props) => (props.$ismobile ? "10px" : "1.25rem")};
  text-shadow: 0 0 1px, 0 0 7px #f148fb, 0 0 10px #f148fb, 0 0 5px #f148fb,
    0 0 33px #f148fb, 0 0 0px #f148fb, 0 0 0px #f148fb;
  white-space: pre-wrap;
  line-height: 20px;
`;

const DetailTxt = styled.span<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "40px" : "2.15rem")};
  padding-left: ${(props) => (props.$ismobile ? "220px" : "0px")};
  font-size: ${(props) => (props.$ismobile ? "15px" : "1.56rem")};
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
  overflow-y: auto;
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
        ? "200px"
        : "500px"
      : props.$ismobile
      ? "400px"
      : "800px"};

  height: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "320px"
        : "620px"
      : props.$ismobile
      ? "140px"
      : "365px"};
`;

const ModalScreen = styled.div<styleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "300px;"
        : "300px"
      : props.$ismobile
      ? "250px"
      : "650px"};

  height: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? "315px"
        : "615px"
      : props.$ismobile
      ? "140px"
      : "365px"};
  background-image: ${(props) => `url(${props.$detailimage})`};
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  box-shadow: ${(props) => (props.$isselectedWaither ? "" : "0 0 15px white")};
  border: ${(props) =>
    props.$isselectedWaither
      ? props.$ismobile
        ? ""
        : ""
      : props.$ismobile
      ? "2px solid white"
      : "5px solid white"};
  transition: box-shadow 0.5s ease-in-out, border 0.5s ease;
`;

const ModalTxtContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "250px" : "1000px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: ${(props) => (props.$ismobile ? " 0px" : "50px")};
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
  font-size: ${(props) => (props.$ismobile ? "8px" : "1rem")};
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
    props.$ismouseenter
      ? " drop-shadow(0 0 5px red) drop-shadow(0 0 10px red)drop-shadow(0 0 10px red)"
      : " drop-shadow(0 0 5px #f148fb) drop-shadow(0 0 10px #f148fb) drop-shadow(0 0 10px #f148fb)"};
  animation: ${electricShock} 1s infinite;
`;

const Projects = forwardRef<HTMLDivElement, any>((_, ref) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const { isMouseEnter, onMouseScreenEnter, onMouseScreenLeave } =
    useProjectMousePosition();
  const { currentProject, beforeProject, nextProject } = useProjectScreenSwap();
  const {
    projectsDetail,
    isModalOn,
    selectedProject,
    selectedProjectDetailImg,
    setSelectedProject,
    beforeProjectDetailImg,
    nextProjectDetailImg,
    onClickDetail,
    setIsModalOn,
  } = useProjectDetail();
  const project: Project[] = useProjectData(isMobile);

  useEffect(() => {
    setSelectedProject(currentProject);
  }, [currentProject]);
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
                onClick={beforeProjectDetailImg}
              >
                <path d="M15.75 19.5 8.25 12l7.5-7.5" />
              </PreviousBtn>
              <ModalScreen
                $ismobile={isMobile}
                $detailimage={
                  projectsDetail[selectedProject].image[
                    selectedProjectDetailImg
                  ]
                }
                $isselectedWaither={selectedProject === 0}
              />
              <NextBtn
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                $ismobile={isMobile}
                onClick={nextProjectDetailImg}
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
                What did I Learn
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
            onClick={beforeProject}
            $ismobile={isMobile}
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </PreviousBtn>
          <ProjectScreen
            $ismobile={isMobile}
            $image={project[currentProject].image}
            key={project[currentProject].id}
            onMouseEnter={onMouseScreenEnter}
            onMouseLeave={onMouseScreenLeave}
          >
            <ProjectCard $ismouseenter={isMouseEnter} $ismobile={isMobile}>
              <ProjectTitle $ismobile={isMobile}>
                {project[currentProject].title}
              </ProjectTitle>
              <SubTitle $ismobile={isMobile}>Project Introduce</SubTitle>
              <ContentTxt $ismobile={isMobile}>
                {project[currentProject].introduce}
              </ContentTxt>
              <SubTitle $ismobile={isMobile}>Period</SubTitle>
              <ContentTxt $ismobile={isMobile}>
                {project[currentProject].period}
              </ContentTxt>
              <SubTitle $ismobile={isMobile}>Tech</SubTitle>
              <ContentTxt $ismobile={isMobile}>
                {project[currentProject].tech}
              </ContentTxt>
              <DetailTxt $ismobile={isMobile} onClick={onClickDetail}>
                Detail
              </DetailTxt>
            </ProjectCard>
          </ProjectScreen>
          <NextBtn
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={nextProject}
            $ismobile={isMobile}
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </NextBtn>
        </ProjectScreenContainer>
        <SpeechBubbleContainer
          $ismobile={isMobile}
          $ismouseenter={isMouseEnter}
        >
          {isMouseEnter
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
