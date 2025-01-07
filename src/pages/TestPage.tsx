import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionAtom } from "../atoms/mbtiAtom";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

const TestPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionAtom);
  const [answers, setAnswers] = useAtom(answersAtom);
  const navigate = useNavigate();

  const handleAnswer = (type: string) => {
    setAnswers((prev) => [...prev, type]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  useEffect(() => {
    console.log("Updated answers:", answers);
  }, [answers]);

  const question = questions[currentQuestion];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.type)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
