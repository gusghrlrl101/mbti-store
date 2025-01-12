import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionAtom } from "../atoms/mbtiAtom";
import { questions } from "../data/questions";
import { mbtiCountries, MBTIType } from "../data/countries";
import { useNavigate } from "react-router-dom";
import { shuffle } from "../utils";
import { Button } from "antd";

const TestPage: React.FC = () => {
  const [randomQuestions] = useState(() => shuffle(questions)); // 질문 섞기
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useAtom(currentQuestionAtom);
  const [answers, setAnswers] = useAtom(answersAtom);
  const navigate = useNavigate();

  const calculateMBTI = (): MBTIType => {
    const counts: { [key: string]: number } = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    answers.forEach((type) => {
      if (counts[type] !== undefined) {
        counts[type] += 1;
      }
    });

    return ((counts.E > counts.I ? "E" : "I") +
      (counts.S > counts.N ? "S" : "N") +
      (counts.T > counts.F ? "T" : "F") +
      (counts.J > counts.P ? "J" : "P")) as MBTIType;
  };

  const handleAnswer = (type: string) => {
    setAnswers((prev) => [...prev, type]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const mbti = calculateMBTI();
      const country = mbtiCountries[mbti];
      navigate(`/result/${country.id}`);
    }
  };

  useEffect(() => {
    console.log("Updated answers:", answers);
  }, [answers]);

  const currentQuestion = randomQuestions[currentQuestionIndex];
  const randomOptions = shuffle(currentQuestion.options); // 보기 순서를 섞기

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>
        {currentQuestionIndex + 1}. {currentQuestion.question}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {randomOptions.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option.type)}
            style={{ width: "100%" }}
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
