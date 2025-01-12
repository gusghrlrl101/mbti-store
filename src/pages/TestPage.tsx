import React, { useState } from "react";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionAtom } from "../atoms/mbtiAtom";
import { getQuestions } from "../data/questions";
import { getCountries, MBTIType } from "../data/countries";
import { useNavigate } from "react-router-dom";
import { shuffle } from "../utils";
import { Button } from "antd";
import i18n from "../i18n";

const TestPage: React.FC = () => {
  const questions = getQuestions(i18n.language);
  console.log("marvin", i18n.language, questions);
  const [randomQuestions] = useState(() => shuffle(questions));
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
      const countries = getCountries(i18n.language);
      const country = countries[mbti];
      navigate(`/result/${country.id}`);
    }
  };

  const currentQuestion = randomQuestions[currentQuestionIndex];
  const randomOptions = shuffle(currentQuestion.options);

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
