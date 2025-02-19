import styled from "styled-components";
import Header from "../Components/Header";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* 짙은 남색 */
  /* background-color: #141827; */
  /* 밝은 남색 */
  /* background-color: #11264f; */
  /* 검정 배경 */
  background-color: black;
`;
function King() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

export default King;
