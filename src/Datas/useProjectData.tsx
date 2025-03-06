import waitherPc from "/waitherPc.png";
import waitherMobile from "/waitherMobile.png";
import mindBookPc from "/mindBookPc.png";
import mindBookMobile from "/mindBookMobile.png";
import deployPc from "/deployPc.png";
import deployMobile from "/deployMobile.png";
import portfolioPc from "/portfolioPc.png";
import portfolioMobile from "/portfolioMobile.png";

export type Project = {
  id: number;
  title: string;
  introduce: string;
  period: string;
  tech: string;
  image: string;
};
export const useProjectData = (isMobile: boolean): Project[] => {
  const projects = [
    {
      id: 1,
      title: "Waither",
      introduce: isMobile
        ? "Weather + Waiter의 합성어\n사용자의 설정을 바탕으로 맞춤형 날씨 정보와\n알림을 제공하는 앱 서비스"
        : "Weather + Waiter의 합성어로, 사용자의 설정을 바탕으로 맞춤형 날씨 정보와 알림을 제공하는 앱 서비스",
      period: "2024.03 ~ 2024.12",
      tech: isMobile
        ? "React Native\nJavaScript, TypeScript\nReact-Query, Recoil, Styled-Components"
        : "React Native, JavaScript, TypeScript, React-Query, Recoil, Styled-Components",
      image: isMobile ? waitherMobile : waitherPc,
    },
    {
      id: 2,
      title: "Defloy Surfing",
      introduce: "Github, AWS, Docker를 활용한 CI/CD 자동 구축 서비스",
      period: "2024.03 ~ ing",
      tech: isMobile
        ? "React\nJavaScript, TypeScript\nStyled-Components"
        : "React, JavaScript, TypeScript, Styled-Components",
      image: isMobile ? deployMobile : deployPc,
    },
    {
      id: 3,
      title: "MindBook",
      introduce: isMobile
        ? "우울감, 무기력함, 불안감, 의욕 상실을 겪는\n현대인들을 위해 자기 치유와\n자존감 회복을 목적으로 제공된 웹 서비스"
        : "우울감, 무기력함, 불안감, 의욕 상실을 겪는 현대인들을 위해 자기 치유와 자존감 회복을 목적으로 제공된 웹 서비스",
      period: "2024.07 ~ 2024.08",
      tech: isMobile ? "HTML\nCSS\nJavaScript" : "HTML, CSS, JavaScript",
      image: isMobile ? mindBookMobile : mindBookPc,
    },
    {
      id: 4,
      title: "Portfolio",
      introduce: "프로젝트 및 프로필 소개를 위한 포트폴리오",

      period: "2025.02 ~ 2025.02",
      tech: isMobile
        ? "React\nJavaScript, TypeScript\nStyled-Components"
        : "React, JavaScript, TypeScript, Styled-Components",
      image: isMobile ? portfolioMobile : portfolioPc,
    },
  ];

  return projects;
};
