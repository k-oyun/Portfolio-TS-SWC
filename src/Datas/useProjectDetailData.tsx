import mindBookLogin from "/mindBookLogin.png";
import mindBookList from "/mindBookList.png";
import mindBookMain from "/mindBookMain.png";
import mindBookReport from "/mindBookReport.png";
import mindBookWriteReport from "/mindBookWriteReport.png";
import mindBookModal1 from "/mindBookModal1.png";
import mindBookModal2 from "/mindBookModal2.png";
import waitherMorning from "/waitherMorning.png";
import waitherNight from "/waitherNight.png";
import waitherLogin from "/waitherLogin.png";
import waitherReport from "/waitherReport.png";
import waitherSurvey1 from "/waitherSurvey1.png";
import waitherSurvey2 from "/waitherSurvey2.png";
import waitherSetting from "/waitherSetting.png";
import waitherSettingPicker from "/waitherSettingPicker.png";
import waitherWindSetting from "/waitherWindSetting.png";
import deployLogin from "/deployLogin.png";
import deployHome from "/deployHome.png";
import deployMain from "/deployMain.png";
import deployMyPage from "/deployMyPage.png";
import deployAddApp from "/deployAddApp.png";
import deploRegister1 from "/deployRegister1.png";
import deployRegister2 from "/deployRegister2.png";
import deployEmailVerify from "/deployEmailVerify.png";
import deployResetPassword from "/deployResetPassword.png";
import portfolioProject1 from "/portfolioProject1.png";
import portfolioProject2 from "/portfolioProject2.png";
import portfolioModal from "/portfolioModal.png";
import portfolioPc from "/portfolioPc.png";

export type ProjectDetail = {
  image: string[];
  part: string[];
  task: string[];
  trouble: string[];
  feeling: string[];
  link: string;
};
export const useProjectDetailData = (isMobile: boolean): ProjectDetail[] => {
  const projectsDetail = [
    {
      image: [
        waitherMorning,
        waitherNight,
        waitherLogin,
        waitherReport,
        waitherSurvey1,
        waitherSurvey2,
        waitherSetting,
        waitherSettingPicker,
        waitherWindSetting,
      ],
      part: [
        "[ 프론트엔드, 디자인 ]",
        "ㆍ Splash Screen, 아이콘 설정 등 앱 초기 환경 설정",
        isMobile
          ? "ㆍ 회원가입, 로그인, 비밀번호 재설정, 직장 지역 / 알림 / 사용자 데이터 / \n    메인화면 날씨 정보 설정화면, 메인화면, 레포트 화면 구현 및 API 연동"
          : "ㆍ 회원가입, 로그인, 비밀번호 재설정, 직장 지역 / 알림 / 사용자 데이터 / 메인화면 날씨 정보 설정, 메인, 레포트 화면 구현 및 API 연동",
        "ㆍ 바람세기 설정, 개인정보 설정 API 연동",
        "ㆍ 레포트 화면, 사용자 설정 화면 디자인",
        "ㆍ 카카오 로그인 구현",
        "ㆍ 카카오 MAP API를 이용한 주소 검색 구현",
        "ㆍ 서버로부터 전달받은 데이터를 처리하는 정제 함수 모듈화를 통한 코드 단순화",
        "ㆍ API 호출 코드 모듈화를 통한 코드 단순화",
        "ㆍ react-query를 통한 데이터 캐싱, API 호출 수 5배 감소 및 효율성 향상",
        "ㆍ 특정 기능 구현 시 IOS 플랫폼의 제약 사항에 맞춰 권한 설정",
      ],
      task: [
        "ㆍ react-native-modal을 이용하여 모달 구현",
        isMobile
          ? "ㆍ react-native-keyboard-aware-scroll-view를 이용하여 키보드가 입력 칸을 \n    가리는 경우 스크롤이 가능하도록 구현"
          : "ㆍ react-native-keyboard-aware-scroll-view를 이용하여 키보드가 입력 칸을 가리는 경우 스크롤이 가능하도록 구현",
        "ㆍ react-navigation을 이용하여 화면 전환 기능 구현",
        isMobile
          ? "ㆍ gorhom/bottom-sheet, react-native-picker/picker를 이용하여 \n    시간을 선택할 수 있는 바텀 시트 구현"
          : "ㆍ gorhom/bottom-sheet, react-native-picker/picker를 이용하여 시간을 선택할 수 있는 바텀 시트 구현",
        "ㆍ 사용자 설정 토글 구현",
        isMobile
          ? "ㆍ react-native-community/slider를 이용하여 사용자 민감도 조절이\n    가능한 슬라이딩 바 구현"
          : "ㆍ react-native-community/slider를 이용하여 사용자 민감도 조절이 가능한 슬라이딩 바 구현",
        "ㆍ react-native-seoul/kakao-login을 이용하여 카카오 로그인 구현",

        isMobile
          ? "ㆍ react-native-background-fetch, react-native-geolocation을 이용하여\n    위치를 15분마다 전송하도록 구현"
          : "ㆍ react-native-background-fetch, react-native-geolocation을 이용하여 위치를 15분마다 전송하도록 구현",
        isMobile
          ? "ㆍ react-native-camera-roll, react-native-view-shot을 이용하여 하루 날씨 \n    이슈가 정리된 화면을 갤러리에 저장할 수 있는 기능 구현"
          : "ㆍ react-native-camera-roll, react-native-view-shot을 이용하여 하루 날씨 이슈가 정리된 화면을 갤러리에 저장할 수 있는 기능 구현",
        isMobile
          ? "ㆍ react-native의 RefreshControl을 이용하여 화면 드래그를 통한 \n    새로고침 기능 구현"
          : "ㆍ react-native의 RefreshControl을 이용하여 화면 드래그를 통한 새로고침 기능 구현",
      ],
      trouble: [
        isMobile
          ? "ㆍ JavaScript fetch 함수를 이용한 API 호출 시 컴포넌트가 렌더링 되는\n    모든 경우에 API 호출 발생"
          : "ㆍ JavaScript fetch 함수를 이용한 API 호출 시 컴포넌트가 렌더링 되는 모든 경우에 API 호출 발생",
        "  ㆍ react-query를 이용하여 수신한 데이터를 10분 동안 캐싱하도록 구현",
        "  ㆍ API 호출 수 감소 및 효율성 개선",
        "\n",
        isMobile
          ? "ㆍ background 기능 구현 도중  background-fetch 작동 여부\n    확인이 불가능한 문제 발생"
          : "ㆍ background 기능 구현 도중  background-fetch 작동 여부 확인이 불가능한 문제 발생",
        "  ㆍ appstate를 이용하여 background-fetch 3가지 상태를 확인",
        "\n",
        isMobile
          ? "ㆍ react-query를 이용한 api 호출 과정에서 데이터 로드가 끝나지 않은\n    상태에서 컴포넌트가 렌더링 되는 문제 발생"
          : "ㆍ react-query를 이용한 api 호출 과정에서 데이터 로드가 끝나지 않은 상태에서 컴포넌트가 렌더링 되는 문제 발생",

        "   ㆍ useSuspenseQuery 훅을 사용해 데이터 로드 전까지 컴포넌트 렌더링 제어",

        "\n",
        isMobile
          ? "ㆍ react-native-camera-roll을 이용하여 사진 저장 기능 구현 도중 null 값이\n    prop으로 전달되어 발생하는 NSNumber 에러 발생"
          : "ㆍ react-native-camera-roll을 이용하여 사진 저장 기능 구현 도중 null 값이 prop으로 전달되어 발생하는 NSNumber 에러 발생",
        isMobile
          ? "   ㆍ 해당 prop에 null 값이 전달되지 않도록 보장하여\n       NSNumber 에러가 발생하지 않도록 내장 함수 수정"
          : "   ㆍ 해당 prop에 null 값이 전달되지 않도록 보장하여 NSNumber 에러가 발생하지 않도록 내장 함수 수정",
      ],
      feeling: [
        isMobile
          ? "ㆍ 일정 관리의 실패와 팀원 간 의견 차이로 프론트엔드 팀원이 이탈하게\n    되었습니다. 하지만 남은 부분을 주도적으로 구현하며 책임감을 가지고 프로젝\n    트를 끝까지 마무리했습니다. 이 과정에서 많은 것을 배울 수 있었습니다."
          : "ㆍ 일정 관리의 실패와 팀원 간 의견 차이로 프론트엔드 팀원이 이탈하게 되었습니다. 하지만 남은 부분을 주도적으로 구현하며 책임감을 가지고 \n    프로젝트를 끝까지 마무리했습니다. 이 과정에서 많은 것을 배울 수 있었습니다.",
        isMobile
          ? "   ㆍ 자기 주도적인 태도와 책임감을 강화할 수 있었고, 의사소통의 중요성을 배\n       웠습니다."
          : "   ㆍ 자기 주도적인 태도와 책임감을 강화할 수 있었고, 의사소통의 중요성을 배웠습니다.",
        isMobile
          ? "   ㆍ 팀워크에서 서로 존중하고 배려하는 태도가 협업의 성공에 중요한 역할을 \n       한다는 것을 깨달았습니다. "
          : "   ㆍ 팀워크에서 서로 존중하고 배려하는 태도가 협업의 성공에 중요한 역할을 한다는 것을 깨달았습니다. ",
        isMobile
          ? "   ㆍ 타인이 작성한 코드를 분석하고 이해한 후 유지보수하는 능력을 키울 수 \n       있었습니다. "
          : "   ㆍ 타인이 작성한 코드를 분석하고 이해한 후 유지보수하는 능력을 키울 수 있었습니다. ",
        isMobile
          ? "   ㆍ 일정 관리를 보다 체계적으로 수행해야 하며, 작업별 소요 시간을 예측하고\n       계획을 세분화하는 것이 프로젝트의 효율성과 성공률을 높이는 데 필수적이\n       라는 점을 배우게 되었습니다. "
          : "   ㆍ 일정 관리를 보다 체계적으로 수행해야 하며, 작업별 소요 시간을 예측하고 계획을 세분화하는 것이 \n       프로젝트의 효율성과 성공률을 높이는 데 필수적이라는 점을 배우게 되었습니다. ",

        "\n",
        isMobile
          ? "ㆍ 카카오 로그인 및 이미지 갤러리 저장과 같은 기능을 구현하며, OS의 요구 사\n    항에 맞춰 구현하는 과정에서 많은 시행착오와 학습이 필요했습니다. 플랫폼별 \n    제약 사항을 고려하여 구현하는 데 어려움을 겪었지만, OS의 세부적인 부분까\n    지 신중하게 접근하는 것이 중요하다는 것을 깨달았습니다."
          : "ㆍ 카카오 로그인 및 이미지 갤러리 저장과 같은 기능을 구현하며, iOS의 요구 사항에 맞춰 구현하는 과정에서 많은 시행착오와 학습이 필요했습니다.\n    iOS 제약 사항을 고려하여 구현하는 데 어려움을 겪었고, 특히 권한 설정이 제대로 되지 않아 기능이 정상적으로 작동하지 않고 에러가 발생했습니다.\n    이 과정에서 Xcode를 활용하여 각각의 기능에 필요한 권한을 정확하게 설정하는 방법을 배우게 되었습니다.",
      ],
      link: "https://github.com/k-oyun/Waither-FE",
    },
    {
      image: [
        deployLogin,
        deploRegister1,
        deployRegister2,
        deployEmailVerify,
        deployHome,
        deployMain,
        deployMyPage,
        deployAddApp,
        deployResetPassword,
      ],
      part: [
        "[ 프론트엔드, 디자인 ]",
        "ㆍ 페이지 디자인 및 구현",
        "ㆍ 회원가입, 로그인, 마이페이지 API 연동 ",
      ],
      task: [
        "ㆍ 파일 업로드 기능 구현",
        "ㆍ Header, Footer 컴포넌트 구현",
        "ㆍ 이메일 인증, 비밀번호 재설정 모달 구현",
        "ㆍ 비밀번호, 토큰 등 민감한 정보 보기/숨기기 기능 구현",
        "ㆍ react-router-dom을 이용하여 SPA 내부에서 페이지 이동이 가능하도록 구현",
      ],
      trouble: [""],
      feeling: [""],
      link: "https://github.com/k-oyun/Deploy-Surfing",
    },
    {
      image: [
        mindBookLogin,
        mindBookMain,
        mindBookList,
        mindBookReport,
        mindBookWriteReport,
        mindBookModal1,
        mindBookModal2,
      ],
      part: [
        "[ 프론트엔드, 기획 ]",
        isMobile
          ? "ㆍ 메인, 전체 책장, 도서 검색, 도서 추가, 도서 독후감 작성 페이지 구현 및 API\n    연동"
          : "ㆍ 메인, 전체 책장, 도서 검색, 도서 추가, 도서 독후감 작성 페이지 구현 및 API 연동",
      ],
      task: ["ㆍ 데이터 정제 함수 구현", "ㆍ 도서 추가 시 상태 모달 구현", ""],
      trouble: [
        "ㆍ API 연동 중 서버에서의 CORS 에러 발생으로 인한 요청 차단",
        isMobile
          ? "   ㆍ Server측에 Access-Control-Allow-Origin 헤더 리스트에 프론트엔드 \n       개발 서버 URL을 추가하여 해결"
          : "   ㆍ Server측에 Access-Control-Allow-Origin 헤더 리스트에 프론트엔드 개발 서버 URL을 추가하여 해결",
      ],
      feeling: [
        isMobile
          ? "ㆍ 데드라인이 짧은 해커톤이었기에 빠른 의사소통과 효과적인 협업을 중요시했\n    습니다. 하지만 배포 직전 예상치 못한 문제가 발생해 긴장감이 고조되며 팀원\n    간의 갈등이 일어났습니다. 팀원들에게 하나씩 점검하자고 이야기하며 분위기\n    를 안정시켰고, 각 팀원의 강점을 고려해 역할을 분배하여 정상적으로 작동했\n    던 부분과 비교하며 문제 원인을 좁혀갔습니다. 무사히 데드라인 내에 배포할\n    수 있었습니다."
          : "ㆍ 데드라인이 짧은 해커톤이었기에 빠른 의사소통과 효과적인 협업을 중요시했습니다. 하지만 배포 직전 예상치 못한 문제가 발생해 긴장감이 고조되며 팀원 간의\n    갈등이 일어났습니다. 팀원들에게 하나씩 점검하자고 이야기하며 분위기를 안정시켰고, 각 팀원의 강점을 고려해 역할을 분배하여 정상적으로 작동했던 부분과\n    비교하며 문제 원인을 좁혀갔습니다. 무사히 데드라인 내에 배포할 수 있었습니다.",
        isMobile
          ? "   ㆍ 위기 상황에서의 침착함과 팀을 안정시킬 수 있는 리더십을 배웠습니다. "
          : "   ㆍ 위기 상황에서의 침착함과 팀을 안정시킬 수 있는 리더십을 배웠습니다. ",
        isMobile
          ? "   ㆍ 완벽한 협업을 목표로 하더라도 갈등은 불가피하며\n       그 갈등을 해결하는 과정이 곧 팀워크임을 배웠습니다. "
          : "   ㆍ 완벽한 협업을 목표로 하더라도 갈등은 불가피하며, 그 갈등을 해결하는 과정이 곧 팀워크임을 배웠습니다. ",
      ],
      link: "https://github.com/k-oyun/MindBook-FE",
    },
    {
      image: [
        portfolioPc,
        portfolioProject1,
        portfolioProject2,
        portfolioModal,
      ],
      part: ["[ 프론트엔드, 기획, 디자인 ]", "ㆍ 페이지 디자인 및 구현"],
      task: [
        "ㆍ keyframes를 이용하여 애니메이션 구현",
        "ㆍ useMediaQuery를 이용하여 반응형 웹 구현",
        "ㆍ scroll-snap 속성을 이용하여 원페이지 스크롤 구현",
        isMobile
          ? "ㆍ IntersectionObserver API를 이용하여 현재 보고 있는 컴포넌트를 실시간으\n    로 감지하고, 헤더 UI에 동적으로 적용"
          : "ㆍ IntersectionObserver API를 이용하여 현재 보고 있는 컴포넌트를 실시간으로 감지하고, 헤더 UI에 동적으로 적용",
        isMobile
          ? "   ㆍ useEffect를 이용하여  observe()를 설정하고, 컴포넌트 언마운트 시\n       unobserve()를 호출하여 메모리 누수 방지"
          : "   ㆍ useEffect를 이용하여  observe()를 설정하고, 컴포넌트 언마운트 시 unobserve()를 호출하여 메모리 누수 방지",
        "ㆍ Aws S3 CloudFront 정적 웹 배포",
        isMobile
          ? "   ㆍ CDN을 활용하여 이미지 응답 시간을 약 12배 단축시키고,\n       전체 콘텐츠 전송 성능 최적화"
          : "   ㆍ CDN을 활용하여 이미지 응답 시간을 약 12배 단축시키고, 전체 콘텐츠 전송 성능 최적화",
        "ㆍ 커스텀 훅 구현 및 모듈화",
        "   ㆍ 컴포넌트 내부 로직 분리로 가독성 향상",
        "   ㆍ 상태 관리 모듈화로 유지보수성 향상",
      ],
      trouble: [],
      feeling: [
        isMobile
          ? "ㆍ 처음으로 반응형 웹 프로젝트를 진행하며 새로운 기술을 익히고 적용하는\n    과정에서 자신감을 얻었습니다.\n    더 도전적인 프로젝트에도 유연하게 적응할 수 있다는 확신이 생겼습니다."
          : "ㆍ 처음으로 반응형 웹 프로젝트를 진행하며 새로운 기술을 익히고 적용하는 과정에서 자신감을 얻었습니다.\n    더 도전적인 프로젝트에도 유연하게 적응할 수 있다는 확신이 생겼습니다.",
        "\n",
        isMobile
          ? "ㆍ 이전 프로젝트에서 동적 타입으로 인해 런타임 에러가 발생했고, 에러 원인을\n    파악하는 데 있어 효율성이 떨어진다고 느꼈습니다. 이를 개선하기 위해 초기 \n    구현 단계부터 TypeScript를 적용해 정적 타입을 사용했고, 컴파일 단계에서\n    오류를 확인하고 수정할 수 있었습니다. "
          : "ㆍ 이전 프로젝트에서 동적 타입으로 인해 런타임 에러가 발생했고, 에러 원인을 파악하는 데 있어 효율성이 떨어진다고 느꼈습니다.\n    이를 개선하기 위해 초기 구현 단계부터 TypeScript를 적용해 정적 타입을 사용했고, 컴파일 단계에서 오류를 확인하고 수정할 수 있었습니다. ",
        isMobile
          ? "   ㆍ 코드의 안전성과 유지보수성이 향상되는 것을 체감할 수 있었습니다."
          : "   ㆍ 코드의 안전성과 유지보수성이 향상되는 것을 체감할 수 있었습니다.",
        isMobile
          ? "   ㆍ 오류 분석이 효율적으로 이루어져 생산성이 증가함을 경험할 수 있었습니다."
          : "   ㆍ 오류 분석이 효율적으로 이루어져 생산성이 증가함을 경험할 수 있었습니다.",
      ],
      link: "https://github.com/k-oyun/Portfolio-TS-SWC",
    },
  ];

  return projectsDetail;
};
