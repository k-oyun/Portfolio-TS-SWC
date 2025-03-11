import { motion } from "framer-motion";
import { forwardRef, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import mobile from "/mobile.png";
import pc from "/pc.png";
import { useSkillMousePosition } from "../Hooks/useSkillMousePosition";
import {
  CssPath,
  HtmlPath,
  JsPath,
  OffSwitchPath,
  OnSwitchPath,
  ReactPath,
  ReactQueryPath,
  StyledCompPath,
  TsPath,
  XcodePath,
} from "../Assets/Svgs/SvgPath";
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

const oFFflicker = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.7;
  }
  45% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  65% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }`;
const onFlicker = keyframes`
  0% {
    filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red) drop-shadow(0 0 15px red);
    opacity: 1;
  }
  20% {
    opacity: 0.4;
  }
  35% {
    opacity: 0.7;
  }
  45% {
    opacity: 0.5;
    filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red) drop-shadow(0 0 15px red)
  }
  50% {
    opacity: 0.8;

  }
  65% {
    opacity: 0.6;

  }
  75% {
    opacity: 0.8;

  }
  80% {
    opacity: 0.6;

  }
  95%{
    opacity: 0.9;
  }
  100% {
    filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow) drop-shadow(0 0 15px yellow);
    stroke: yellow;
    opacity: 1;
  }`;
const OffSwitchSvg = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "35px" : "80px")};
  height: ${(props) => (props.$ismobile ? "35px" : "80px")};
  cursor: pointer;
  filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px red)
    drop-shadow(0 0 15px red);
  animation: ${oFFflicker} 1.2s infinite;
`;
const OnSwitchSvg = styled(motion.svg)<styleType>`
  width: ${(props) => (props.$ismobile ? "35px" : "80px")};
  height: ${(props) => (props.$ismobile ? "35px" : "80px")};
  cursor: pointer;
  filter: drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow)
    drop-shadow(0 0 15px yellow);
  animation: ${onFlicker} 2s ease-in-out forwards;
`;

const LogoContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "380px" : "1500px")};
  height: ${(props) => (props.$ismobile ? "500px" : "700px")};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: ${(props) => (props.$ismobile ? "100px" : "130px")};
`;

const IconContainer = styled.div<styleType>`
  display: flex;
  flex-wrap: ${(props) => (props.$ismobile ? "wrap" : "none")};
  flex-direction: ${(props) => (props.$ismobile ? "row" : "row")};
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.$ismobile ? "200px" : "1300px")};
  height: ${(props) => (props.$ismobile ? "100px" : "180px")};
  margin-top: ${(props) => (props.$ismobile ? "80px" : "100px")};
  margin-bottom: ${(props) => (props.$ismobile ? "0px" : "50px")};
`;

const HTMLSvg = styled.svg<styleType>`
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  fill: none;
  stroke-width: "1.3";
  stroke-linecap: "round";
  stroke-linejoin: "round";
  stroke-miterlimit: "10";
  width: ${(props) => (props.$ismobile ? "40px" : "190px")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #E93E2F) drop-shadow(0 0 5px #E93E2F) drop-shadow(0 0 5px #E93E2F)`
      : `grayscale(100%) drop-shadow(0 0 0px #E93E2F)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
const CssSvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "44px" : "220px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #009BE5) drop-shadow(0 0 5px #009BE5) drop-shadow(0 0 5px #009BE5)`
      : `grayscale(100%) drop-shadow(0 0 0px #009BE5)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
const JsSvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "40px" : "200px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #FED600) drop-shadow(0 0 5px #FED600) drop-shadow(0 0 5px #FED600)`
      : `grayscale(100%) drop-shadow(0 0 0px #FED600)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
const TsSvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "40px" : "200px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #2D79C7) drop-shadow(0 0 5px #2D79C7) drop-shadow(0 0 5px #2D79C7)`
      : `grayscale(100%) drop-shadow(0 0 0px #2D79C7)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
const ReactSvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "46px" : "230px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #0BCEFF) drop-shadow(0 0 5px #0BCEFF) drop-shadow(0 0 5px #0BCEFF)`
      : `grayscale(100%) drop-shadow(0 0 0px #0BCEFF)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
const ReactQuerySvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "40px" : "200px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #FF4154) drop-shadow(0 0 5px #FF4154) drop-shadow(0 0 5px #FF4154)`
      : `grayscale(100%) drop-shadow(0 0 0px #FF4154)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
const StyledCompSvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "54px" : "250px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #DB7093) drop-shadow(0 0 5px #DB7093) drop-shadow(0 0 5px #DB7093)`
      : `grayscale(100%) drop-shadow(0 0 0px #DB7093)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;

const XcodeSvg = styled.svg<styleType>`
  width: ${(props) => (props.$ismobile ? "38px" : "190px")};
  fill: none;
  stroke: ${(props) => (props.$ispoweron ? "white" : "grey")};
  cursor: ${(props) => (props.$ispoweron ? "pointer" : "default")};
  filter: ${(props) =>
    props.$ispoweron
      ? `grayscale(0%) drop-shadow(0 0 1px #18A8ED) drop-shadow(0 0 5px #18A8ED) drop-shadow(0 0 5px #18A8ED)`
      : `grayscale(100%)`};
  transition: transform 0.2s ease-in-out, stroke 2s ease-in-out,
    filter 2s ease-in-out;
  &:hover {
    ${({ $ispoweron }) => $ispoweron && `transform: scale(1.1);`}
  }
`;
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
const SpeechBubbleContainer = styled.div<styleType>`
  width: ${(props) => (props.$ismobile ? "210px" : "450px")};
  height: ${(props) => (props.$ismobile ? "40px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: ${(props) => (props.$ismobile ? "5px" : "15px")};
  border: ${(props) =>
    props.$ismobile ? "0.8px solid white" : "2px solid white"};
  font-size: ${(props) => (props.$ismobile ? "17px" : "30px")};
  font-family: "Neon";
  filter: drop-shadow(0 0 5px #f148fb) drop-shadow(0 0 10px #f148fb)
    drop-shadow(0 0 10px #f148fb);
  animation: ${electricShock} 1s infinite;
`;
const IconTxtContainer = styled.p<styleType>`
  text-align: center;
  color: white;
  height: 20px;
  padding-top: ${(props) => (props.$ismobile ? "80px" : "0px")};
  padding-bottom: ${(props) => (props.$ismobile ? "120px" : "70px")};
  font-size: ${(props) => (props.$ismobile ? "10px" : "20px")};
  white-space: nowrap;
  /* text-shadow: 0 0 1px, 0 0 7px #00ffff, 0 0 10px #00ffff, 0 0 5px #00ffff,
    0 0 33px #00ffff, 0 0 0px #00ffff, 0 0 0px #00ffff; */
  text-shadow: 0 0 1px, 0 0 1px #00ffff, 0 0 2px #00ffff, 0 0 1px #00ffff,
    0 0 10px #00ffff, 0 0 0px #00ffff, 0 0 0px #00ffff;
`;

const Skills = forwardRef<HTMLDivElement, any>((_, ref) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [isPowerOn, setIsPowerOn] = useState<boolean>(false);
  const LogoContainerRef = useRef<HTMLDivElement | null>(null);
  const onclickPowerBtn = () => {
    setIsPowerOn((prev) => !prev);
    setExplainMsg(null);
  };
  const { explainMsg, setExplainMsg, onmouseleaveSvg, onclickOrMouseenterSvg } =
    useSkillMousePosition(isPowerOn);

  return (
    <SkillsContainer ref={ref} $ismobile={isMobile}>
      <LogoContainer
        $ismobile={isMobile}
        $ispoweron={isPowerOn}
        ref={LogoContainerRef}
      >
        <SpeechBubbleContainer $ismobile={isMobile}>
          {isPowerOn
            ? isMobile
              ? "Touch Logo Icon"
              : "Put Your Mouse on The Logo"
            : isMobile
            ? "Touch Electric Icon"
            : "Click Electric Icon"}
        </SpeechBubbleContainer>
        <IconContainer $ismobile={isMobile}>
          <HTMLSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"html"}
          >
            <path d={HtmlPath} />
          </HTMLSvg>
          <CssSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"css"}
          >
            <path d={CssPath} />
          </CssSvg>
          <JsSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"js"}
          >
            <path d={JsPath} />
          </JsSvg>
          <TsSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"ts"}
          >
            <path d={TsPath} />
          </TsSvg>
          <ReactSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"react"}
          >
            <path d={ReactPath} />
          </ReactSvg>
          <ReactQuerySvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"reactquery"}
          >
            <path d={ReactQueryPath} />
          </ReactQuerySvg>
          <StyledCompSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"styled"}
          >
            <path d={StyledCompPath} />
          </StyledCompSvg>
          <XcodeSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            $ispoweron={isPowerOn}
            $ismobile={isMobile}
            onClick={onclickOrMouseenterSvg}
            onMouseEnter={onclickOrMouseenterSvg}
            onMouseLeave={onmouseleaveSvg}
            data-skill={"xcode"}
          >
            <path d={XcodePath} />
          </XcodeSvg>
        </IconContainer>
        <IconTxtContainer $ismobile={isMobile}>{explainMsg}</IconTxtContainer>
        {isPowerOn ? (
          <>
            <OnSwitchSvg
              xmlns="http://www.w3.org/2000/svg"
              fill="blacks"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              onClick={onclickPowerBtn}
              $ismobile={isMobile}
              $ispoweron={isPowerOn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={OnSwitchPath}
              />
            </OnSwitchSvg>
          </>
        ) : (
          <OffSwitchSvg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="red"
            onClick={onclickPowerBtn}
            $ismobile={isMobile}
            $ispoweron={isPowerOn}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={OffSwitchPath}
            />
          </OffSwitchSvg>
        )}
      </LogoContainer>
    </SkillsContainer>
  );
});

export default Skills;
