import { Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../i18n";

const { Option } = Select;

const MyFooter: React.FC = () => {
  const { t } = useTranslation();

  const languages = [
    { code: "kr", label: "🇰🇷 한국어" }, // 한국어
    { code: "en", label: "🇺🇸 English" }, // 영어
    { code: "es", label: "🇪🇸 Español" }, // 스페인어
    { code: "zh", label: "🇨🇳 中文" }, // 중국어(간체)
    { code: "jp", label: "🇯🇵 日本語" }, // 일본어
    { code: "fr", label: "🇫🇷 Français" }, // 프랑스어
    { code: "de", label: "🇩🇪 Deutsch" }, // 독일어
    { code: "hi", label: "🇮🇳 हिन्दी" }, // 힌디어
    { code: "ar", label: "🇸🇦 العربية" }, // 아랍어
    { code: "pt", label: "🇵🇹 Portugal" }, // 포르투갈어
    { code: "ru", label: "🇷🇺 Россия" }, // 러시아어
  ];

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Select
        defaultValue={i18n.language}
        style={{ width: 150 }}
        onChange={(value) => i18n.changeLanguage(value)}
      >
        {languages.map((lang) => (
          <Option key={lang.code} value={lang.code}>
            {lang.label}
          </Option>
        ))}
      </Select>
      <p style={{ margin: 0 }}>
        {t("footer.creator")}: <strong>gusghrlrl101@gmail.com</strong>
      </p>
      <p style={{ margin: "5px 0" }}>
        <Link
          to="/privacy-policy"
          style={{ textDecoration: "none", color: "#007bff" }}
        >
          {t("footer.privacyPolicy")}
        </Link>
      </p>
    </footer>
  );
};

export default MyFooter;
