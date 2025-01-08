import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionAtom } from "../atoms/mbtiAtom";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { shuffle } from "../utils";

const TestPage: React.FC = () => {
  const [randomQuestions] = useState(() => shuffle(questions)); // 질문 섞기
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useAtom(currentQuestionAtom);
  const [answers, setAnswers] = useAtom(answersAtom);
  const navigate = useNavigate();

  const handleAnswer = (type: string) => {
    setAnswers((prev) => [...prev, type]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  useEffect(() => {
    console.log("Updated answers:", answers);
  }, [answers]);

  const currentQuestion = randomQuestions[currentQuestionIndex];
  const randomOptions = shuffle(currentQuestion.options); // 보기 순서를 섞기

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{currentQuestion.question}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {randomOptions.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.type)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
