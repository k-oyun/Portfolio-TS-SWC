import styled from "styled-components";
import Header from "../Components/Header";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import SkillsTest from "../Components/SkillsTest";
import AboutMeTest from "../Components/AboutMeTest";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* 짙은 남색 */
  /* background-color: #141827; */
  /* 밝은 남색 */
  /* background-color: #11264f; */
  /* 검정 배경 */
  background-color: black;
  scroll-snap-type: y mandatory;
`;
function King() {
  return (
    <MainContainer>
      <Header />
      {/* <AboutMe /> */}
      <AboutMeTest />
      {/* <Skills /> */}
      {/* <SkillsTest /> */}
    </MainContainer>
  );
}

export default King;
