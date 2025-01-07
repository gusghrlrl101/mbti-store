import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>MBTI 여행 성향 테스트</h1>
      <button onClick={() => navigate("/test")}>테스트 시작하기</button>
    </div>
  );
};

export default HomePage;
