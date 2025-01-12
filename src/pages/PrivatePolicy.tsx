import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{t("privatePolicy.title")}</h1>
      <p>{t("privatePolicy.intro")}</p>

      <h2>{t("privatePolicy.sections.0.title")}</h2>
      <p>{t("privatePolicy.sections.0.content")}</p>
      <ul>
        <li>{t("privatePolicy.sections.0.list.0")}</li>
        <li>{t("privatePolicy.sections.0.list.1")}</li>
        <li>{t("privatePolicy.sections.0.list.2")}</li>
      </ul>
      <h2>{t("privatePolicy.sections.1.title")}</h2>
      <p>{t("privatePolicy.sections.1.content")}</p>
      <h2>{t("privatePolicy.sections.2.title")}</h2>
      <p>
        {t("privatePolicy.sections.2.content")}{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("privatePolicy.sections.2.here")}
        </a>
        {t("privatePolicy.sections.2.content2")}
      </p>
      <h2>{t("privatePolicy.sections.3.title")}</h2>
      <p>{t("privatePolicy.sections.3.content")}</p>
      <h2>{t("privatePolicy.sections.4.title")}</h2>
      <p>{t("privatePolicy.sections.4.content")}</p>
      <ul>
        <li>gusghrlrl101@gmail.com</li>
      </ul>

      <p>{t("privatePolicy.footer")}</p>
    </div>
  );
};

export default PrivacyPolicy;
