import React from "react";
import { useAtom } from "jotai";
import { answersAtom } from "../atoms/mbtiAtom";
import { mbtiCountries, MBTIType } from "../data/countries";

const ResultPage: React.FC = () => {
  const [answers] = useAtom(answersAtom);

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

  const result = calculateMBTI();
  const { country, reason, bestMatch, worstMatch } = mbtiCountries[result];
  const bestMatchData = mbtiCountries[bestMatch];
  const worstMatchData = mbtiCountries[worstMatch];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>당신의 MBTI 결과: {result}</h1>
      <h2>추천 여행지: {country}</h2>
      <p>{reason}</p>

      <h3>잘 맞는 MBTI: {bestMatch}</h3>
      <h4>추천 여행지: {bestMatchData.country}</h4>
      <p>{bestMatchData.reason}</p>

      <h3>안 맞는 MBTI: {worstMatch}</h3>
      <h4>추천 여행지: {worstMatchData.country}</h4>
      <p>{worstMatchData.reason}</p>
    </div>
  );
};

export default ResultPage;
