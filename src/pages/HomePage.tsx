import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionAtom } from "../atoms/mbtiAtom";
import Image from "../components/Image";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [, setAnswers] = useAtom(answersAtom);
  const [, setCurrentQuestionIndex] = useAtom(currentQuestionAtom);
  useEffect(() => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
  }, [setAnswers]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>나에게 맞는 여행지 테스트</h1>
      <Space size="middle" direction="vertical">
        <Image src="banner.jpg" alt="mbti test" />
        <Button type="primary" onClick={() => navigate("/test")}>
          테스트 시작하기
        </Button>
      </Space>
    </div>
  );
};

export default HomePage;
