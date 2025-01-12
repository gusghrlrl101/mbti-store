import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      title: "Travel Destination MBTI",
      description: "Find perfect travel destination for you!",
      home: {
        title: "Find your ideal travel destination",
        startTest: "Start Test",
      },
      result: {
        correctCountry: "Your ideal travel destination",
        wrongCountry: "Least suitable travel destination",
        startShare: "Share",
        startTest: "Start Test",
        error: "Incorrect result page.",
        share: {
          title: "Your ideal travel destination",
          text: "Your ideal travel destination is {{country}}.\nReason: {{reason}}",
          success: "Shared successfully!",
          error: "Sharing is not supported in this environment.",
        },
      },
      privatePolicy: {
        title: "Privacy Policy",
        intro: "This service values your privacy and processes minimal information related to advertisements provided through Google AdSense.",
        sections: [
          {
            title: "1. Personal Information Collected",
            content:
              "This service does not directly collect personal information. However, the following information may be automatically collected through Google AdSense:",
            list: ["IP Address", "Cookie Information", "Page visits and click events"],
          },
          {
            title: "2. Purpose of Processing Personal Information",
            content:
              "The collected information is used to provide personalized advertisements through Google AdSense, improve user experience, and generate traffic analysis and statistics.",
          },
          {
            title: "3. Collaboration with Google AdSense",
            content:
              "Google AdSense may process user data through cookies during the advertisement delivery process. Google's privacy policy can be reviewed",
            here: "here",
            content2: ".",
          },
          {
            title: "4. User Choices",
            content:
              "Users can disable cookies or refuse data collection through browser settings. Please refer to your browser's help section for detailed instructions.",
          },
          {
            title: "5. Contact",
            content:
              "For inquiries regarding this privacy policy, please contact us at the email address below:",
          },
        ],
        footer: "This policy is effective as of January 8, 2025.",
      },
      footer: {
        creator: "Creator",
        privacyPolicy: "Privacy Policy",
      },
    },
  },
  kr: {
    translation: {
      title: "여행지 MBTI",
      description: "나에게 알맞는 여행지를 확인해보세요!",
      home: {
        title: "나에게 맞는 여행지 테스트",
        startTest: "테스트 시작하기",
      },
      result: {
        correctCountry: "나에게 맞는 여행지",
        wrongCountry: "안 맞는 여행지",
        startShare: "공유하기",
        startTest: "테스트 시작하기",
        error: "잘못된 결과 페이지입니다.",
        share: {
          text: "나에게 맞는 여행지는 {{country}}입니다.\n이유: {{reason}}",
          success: "공유되었습니다!",
          error: "공유 기능이 지원되지 않는 환경입니다.",
        },
      },
      privatePolicy: {
        title: "개인정보처리방침",
        intro: "해당 서비스는 사용자의 개인정보를 중요하게 생각하며, Google AdSense를 통해 제공되는 광고와 관련하여 최소한의 정보를 처리합니다.",
        sections: [
          {
            title: "1. 수집하는 개인정보 항목",
            content:
              "해당 서비스는 자체적으로 개인정보를 수집하지 않으며, Google AdSense를 통해 아래의 정보가 자동으로 수집될 수 있습니다:",
            list: ["IP 주소", "쿠키 정보", "페이지 방문 및 클릭 이벤트 정보"],
          },
          {
            title: "2. 개인정보 처리 목적",
            content:
              "수집된 정보는 Google AdSense를 통해 맞춤형 광고를 제공하고, 사용자 경험을 개선하며, 트래픽 분석 및 통계 생성을 위해 사용됩니다.",
          },
          {
            title: "3. Google AdSense와의 협력",
            content:
              "Google AdSense는 광고 제공 과정에서 쿠키를 통해 사용자 데이터를 처리할 수 있습니다. Google의 개인정보처리방침은",
            here: "여기",
            content2: "에서 확인하실 수 있습니다.",
          },
          {
            title: "4. 사용자의 선택",
            content:
              "사용자는 브라우저 설정을 통해 쿠키를 비활성화하거나 데이터 수집을 거부할 수 있습니다. 자세한 방법은 브라우저 도움말을 참조하세요.",
          },
          {
            title: "5. 문의",
            content:
              "본 개인정보처리방침에 대한 문의는 아래 이메일로 연락주시기 바랍니다:",
          },
        ],
        footer: "본 방침은 2025년 1월 8일부터 적용됩니다.",
      },
      footer: {
        creator: "제작자",
        privacyPolicy: "개인정보방침",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // 언어 감지 플러그인
  .use(initReactI18next) // React와 통합
  .init({
    resources,
    fallbackLng: "en", // 기본 언어
    interpolation: {
      escapeValue: false, // React 자동 escaping
    },
  });

export default i18n;