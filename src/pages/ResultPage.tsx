import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mbtiCountries } from "../data/countries";
import { Button, Space } from "antd";
import Image from "../components/Image";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { country: countryParam } = useParams<{ country: string }>();

  // 해당 국가 정보 가져오기
  const countryData = Object.values(mbtiCountries).find(
    (data) => data.id.toLowerCase() === countryParam?.toLowerCase()
  );

  if (!countryData) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>잘못된 결과 페이지입니다.</h1>
        <Button onClick={() => navigate("/")}>테스트하기</Button>
      </div>
    );
  }

  const { country, reason, worstMatch, image, flag } = countryData;
  console.log(image);
  const worstMatchData = mbtiCountries[worstMatch];

  const handleShare = async () => {
    const shareData = {
      title: "나에게 맞는 여행지",
      text: `나에게 맞는 여행지는 ${country}입니다.\n이유: ${reason}`,
      url: `https://mbti.store/result/${countryParam}`,
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

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>
        나에게 맞는 여행지: {country} {flag}
      </h1>
      <Image src={image} alt={`${country} image`} />
      <h2>{reason}</h2>

      <h4>안 맞는 여행지: {worstMatchData.country}</h4>
      <p>{worstMatchData.reason}</p>

      <Space size="middle">
        <Button type="primary" onClick={handleShare}>
          공유하기
        </Button>
        <Button onClick={() => navigate("/")}>테스트하기</Button>
      </Space>
    </div>
  );
};

export default ResultPage;
