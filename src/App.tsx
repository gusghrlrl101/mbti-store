import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivatePolicy";

const App: React.FC = () => {
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
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
