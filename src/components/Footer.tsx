import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <p style={{ margin: 0 }}>
        제작자: <strong>gusghrlrl101@gmail.com</strong>
      </p>
      <p style={{ margin: "5px 0" }}>
        <Link
          to="/privacy-policy"
          style={{ textDecoration: "none", color: "#007bff" }}
        >
          개인정보방침
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
