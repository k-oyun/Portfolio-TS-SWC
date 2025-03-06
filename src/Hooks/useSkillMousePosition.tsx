import { useState } from "react";

export const useSkillMousePosition = (isPowerOn: boolean) => {
  const [explainMsg, setExplainMsg] = useState<any>(null);
  const onmouseleaveSvg = () => {
    setExplainMsg(null);
  };
  const onclickOrMouseenterSvg = (event: React.MouseEvent<SVGElement>) => {
    const skillType = event.currentTarget.getAttribute("data-skill");
    if (isPowerOn) {
      if (skillType === "html") {
        setExplainMsg(
          <>
            구조적인 웹 페이지 구축 <br />
            요소의 배치 제어 및 UI 최적화
          </>
        );
      }
      if (skillType === "css") {
        setExplainMsg(
          <>
            Flexbox, Position을 통한 요소 배치 최적화
            <br />
            keyframe을 활용한 애니메이션, 반응형 웹 구현
          </>
        );
      }
      if (skillType === "js") {
        setExplainMsg(
          <>
            Fetch를 통한 비동기 통신
            <br />
            json형태 데이터 가공 및 활용
          </>
        );
      }
      if (skillType === "ts") {
        setExplainMsg(
          <>
            타입 명시를 통한 에러 방지
            <br /> 가독성 향상
          </>
        );
      }
      if (skillType === "react") {
        setExplainMsg(
          <>
            함수형 컴포넌트 지향
            <br />
            Hook을 통한 라이플사이클 관리
            <br /> react/react-native를 이용한 웹/앱 개발
            <br /> 다양한 라이브러리 활용
          </>
        );
      }
      if (skillType === "reactquery") {
        setExplainMsg(
          <>
            서버 상태 관리 간소화
            <br /> 캐싱을 통한 성능 향상을 위해 react-query 사용
          </>
        );
      }
      if (skillType === "styled") {
        setExplainMsg(
          <>
            css-in-js 구현
            <br /> Props를 통한 조건부 스타일링
            <br /> 태그가 아닌 JSX 형식을 통한 가독성 향상을 위해
            styled-component 사용
          </>
        );
      }
      if (skillType === "xcode") {
        setExplainMsg(
          <>
            라이브러리를 위한 IOS 권한 설정
            <br /> 기능 구현을 위한 IOS 권한 설정 및 환경 구성을 위해 Xcode 사용
          </>
        );
      }
    }
  };
  return { explainMsg, setExplainMsg, onmouseleaveSvg, onclickOrMouseenterSvg };
};
