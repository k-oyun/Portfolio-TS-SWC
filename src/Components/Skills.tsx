import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import mobile from "../Assets/Image/mobile.png";
import pc from "../Assets/Image/pc.png";
interface styleType {
  $ismobile?: boolean;
}
const SkillsContainer = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: ${(props) => (props.$ismobile ? "90px" : "120px")};
  display: flex;
  align-items: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
`;

function Skills() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <SkillsContainer $ismobile={isMobile}></SkillsContainer>;
}

export default Skills;
