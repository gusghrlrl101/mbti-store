import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import MyFooter from "./components/Footer";
import PrivacyPolicy from "./pages/PrivatePolicy";
import i18n from "./i18n";

const App: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("title");
  }, [i18n.language]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Flex 컨테이너를 세로 방향으로 설정
        minHeight: "100vh", // 화면 높이를 채움
      }}
    >
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result/:country" element={<ResultPage />} />
        </Routes>
      </main>
      <MyFooter />
    </div>
  );
};

export default App;
