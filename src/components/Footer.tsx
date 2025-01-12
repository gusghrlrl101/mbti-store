import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MyFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
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
