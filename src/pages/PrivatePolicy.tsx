import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>개인정보처리방침</h1>
      <p>
        해당 서비스는 사용자의 개인정보를 중요하게 생각하며, Google AdSense를
        통해 제공되는 광고와 관련하여 최소한의 정보를 처리합니다.
      </p>
      <h2>1. 수집하는 개인정보 항목</h2>
      <p>
        해당 서비스는 자체적으로 개인정보를 수집하지 않으며, Google AdSense를
        통해 아래의 정보가 자동으로 수집될 수 있습니다:
      </p>
      <ul>
        <li>IP 주소</li>
        <li>쿠키 정보</li>
        <li>페이지 방문 및 클릭 이벤트 정보</li>
      </ul>
      <h2>2. 개인정보 처리 목적</h2>
      <p>
        수집된 정보는 Google AdSense를 통해 맞춤형 광고를 제공하고, 사용자
        경험을 개선하며, 트래픽 분석 및 통계 생성을 위해 사용됩니다.
      </p>
      <h2>3. Google AdSense와의 협력</h2>
      <p>
        Google AdSense는 광고 제공 과정에서 쿠키를 통해 사용자 데이터를 처리할
        수 있습니다. Google의 개인정보처리방침은{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          여기
        </a>
        에서 확인하실 수 있습니다.
      </p>
      <h2>4. 사용자의 선택</h2>
      <p>
        사용자는 브라우저 설정을 통해 쿠키를 비활성화하거나 데이터 수집을 거부할
        수 있습니다. 자세한 방법은 브라우저 도움말을 참조하세요.
      </p>
      <h2>5. 문의</h2>
      <p>
        본 개인정보처리방침에 대한 문의는 아래 이메일로 연락주시기 바랍니다:
      </p>
      <ul>
        <li>이메일: gusghrlrl101@gmail.com</li>
      </ul>
      <p>본 방침은 2025년 1월 8일부터 적용됩니다.</p>
    </div>
  );
};

export default PrivacyPolicy;
