import { forwardRef } from "react";
import { styled } from "styled-components";
import mobile from "../Assets/Image/Png/mobile.png";
import pc from "../Assets/Image/Png/pc.png";

interface styleType {
  $ismobile?: boolean;
  $ispoweron?: boolean;
}
const SkillsContainer = styled.div<styleType>`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  justify-content: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
`;
const Projects = forwardRef<HTMLDivElement, any>((props, ref) => {
  return <SkillsContainer ref={ref}></SkillsContainer>;
});

export default Projects;
