import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountries } from "../data/countries";
import { Button, Space, Spin } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { country: countryParam } = useParams<{ country: string }>();
  const [imageLoaded, setImageLoaded] = useState(false);

  const countries = getCountries(i18n.language);
  const countryData = Object.values(countries).find(
    (data) => data.id.toLowerCase() === countryParam?.toLowerCase()
  );

  if (!countryData) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>{t("result.error")}</h1>
        <Button onClick={() => navigate("/")}>{t("result.startTest")}</Button>
      </div>
    );
  }

  const { country, reason, worstMatch, image, flag, id } = countryData;
  const worstMatchData = countries[worstMatch];

  const handleShare = async () => {
    const shareData = {
      title: t("result.correctCountry"),
      text: t("result.share.text", { country, reason }),
      url: `https://mbti.store/#/result/${id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        alert(t("result.share.success"));
      } catch (err) {
        console.log(err);
      }
    } else {
      alert(t("result.share.error"));
    }
  };

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
        <h1>
          {t("result.correctCountry")}: {country} {flag}
        </h1>
        <img
          src={image}
          alt={`${country} image`}
          style={{
            width: "100%",
            maxWidth: "500px",
          }}
          onLoad={() => setImageLoaded(true)}
        />
        <h2>{reason}</h2>

        <h4>
          {t("result.wrongCountry")}: {worstMatchData.country}
        </h4>
        <p>{worstMatchData.reason}</p>

        <Space size="middle">
          <Button type="primary" onClick={handleShare}>
            {t("result.startShare")}
          </Button>
          <Button onClick={() => navigate("/")}>{t("result.startTest")}</Button>
        </Space>
      </div>
    </>
  );
};

export default ResultPage;
