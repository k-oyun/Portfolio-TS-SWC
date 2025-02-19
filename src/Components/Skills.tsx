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
  width: 100%;
  height: 100vh;
  padding-top: ${(props) => (props.$ismobile ? "90px" : "120px")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-image: ${(props) =>
    props.$ismobile ? `url(${mobile})` : `url(${pc})`};
  background-size: cover;
  background-position: center;
`;

const LogoContainer = styled.div<styleType>`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: ${(props) => (props.$ismobile ? "column" : "row")}; */
`;
const HTML = styled.img<styleType>`
  height: ${(props) => (props.$ismobile ? "15px" : "200px")};
  filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red)
    drop-shadow(0 0 15px red);
`;

const CSS = styled.img<styleType>`
  height: ${(props) => (props.$ismobile ? "15px" : "200px")};
  filter: drop-shadow(0 0 5px blue) drop-shadow(0 0 10px blue)
    drop-shadow(0 0 15px blue);
`;
const JS = styled.img<styleType>`
  height: ${(props) => (props.$ismobile ? "15px" : "190px")};
  filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow)
    drop-shadow(0 0 15px yellow);
`;

const TS = styled.img<styleType>`
  height: ${(props) => (props.$ismobile ? "15px" : "190px")};
  filter: drop-shadow(0 0 5px blue) drop-shadow(0 0 10px blue)
    drop-shadow(0 0 15px blue);
`;

const RQ = styled.img<styleType>`
  height: ${(props) => (props.$ismobile ? "15px" : "190px")};
  filter: drop-shadow(0 0 5px pink) drop-shadow(0 0 10px pink)
    drop-shadow(0 0 15px pink);
`;

const Styled = styled.img<styleType>`
  height: ${(props) => (props.$ismobile ? "15px" : "190px")};
  filter: drop-shadow(0 0 5px white) drop-shadow(0 0 10px pink)
    drop-shadow(0 0 15px yellow);
`;

const Xcode = styled.img<styleType>`
  width: ${(props) => (props.$ismobile ? "15px" : "230px")};
  height: ${(props) => (props.$ismobile ? "15px" : "240px")};
  filter: drop-shadow(0 0 5px white) drop-shadow(0 0 10px blue)
    drop-shadow(0 0 15px blue);
`;

function Skills() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <SkillsContainer $ismobile={isMobile}>
      <LogoContainer $ismobile={isMobile}>
        <HTML $ismobile={isMobile} src="src/Assets/Image/html.png"></HTML>
        <CSS $ismobile={isMobile} src="src/Assets/Image/css.png"></CSS>
        <JS $ismobile={isMobile} src="src/Assets/Image/js.png"></JS>
        <TS $ismobile={isMobile} src="src/Assets/Image/ts.png"></TS>
        <RQ $ismobile={isMobile} src="src/Assets/Image/reactquery.png"></RQ>
        <Styled $ismobile={isMobile} src="src/Assets/Image/styled.png"></Styled>
        <Xcode $ismobile={isMobile} src="src/Assets/Image/xcode.png"></Xcode>
      </LogoContainer>
    </SkillsContainer>
  );
}

export default Skills;
