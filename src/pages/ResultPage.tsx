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

  const handleShare = async () => {
    const shareData = {
      title: "MBTI 여행 추천",
      text: `내 MBTI는 ${result}! 추천 여행지는 ${country}입니다. 이유: ${reason}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        alert("공유되었습니다!");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("공유 기능이 지원되지 않는 환경입니다.");
    }
  };

  const result = calculateMBTI();
  const { country, reason, worstMatch } = mbtiCountries[result];
  const worstMatchData = mbtiCountries[worstMatch];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>나에게 맞는 여행지: {country}</h1>
      <h2>{reason}</h2>
      <h4>안 맞는 여행지: {worstMatchData.country}</h4>
      <p>{worstMatchData.reason}</p>

      <button onClick={handleShare}>공유하기</button>
    </div>
  );
};

export default ResultPage;
