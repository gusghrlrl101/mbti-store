import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Spin } from "antd";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionAtom } from "../atoms/mbtiAtom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [, setAnswers] = useAtom(answersAtom);
  const [, setCurrentQuestionIndex] = useAtom(currentQuestionAtom);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
  }, [setAnswers]);

  return (
    <>
      {!imageLoaded && (
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        />
      )}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          display: imageLoaded ? "block" : "none",
        }}
      >
        <h1>나에게 맞는 여행지 테스트</h1>
        <Space size="middle" direction="vertical">
          <img
            src="banner.jpg"
            alt="mbti test"
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
            onLoad={() => setImageLoaded(true)}
          />
          <Button type="primary" onClick={() => navigate("/test")}>
            테스트 시작하기
          </Button>
        </Space>
      </div>
    </>
  );
};

export default HomePage;
