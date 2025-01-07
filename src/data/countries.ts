export type MBTIType = "ISTJ" | "ISFJ" | "INFJ" | "INTJ" | "ISTP" | "ISFP" | "INFP" | "INTP" |
  "ESTP" | "ESFP" | "ENFP" | "ENTP" | "ESTJ" | "ESFJ" | "ENFJ" | "ENTJ";

export interface CountryData {
  country: string;
  reason: string;
  bestMatch: MBTIType;
  worstMatch: MBTIType;
}

export const mbtiCountries: Record<MBTIType, CountryData> = {
  ISTJ: {
    country: "독일",
    reason: "체계적이고 질서를 중시하는 성격에 잘 맞는 여행지입니다.",
    bestMatch: "ESFP",
    worstMatch: "ENFP",
  },
  ISFJ: {
    country: "스위스",
    reason: "조용하고 평화로운 환경을 제공하는 완벽한 장소입니다.",
    bestMatch: "ENTP",
    worstMatch: "ESTP",
  },
  INFJ: {
    country: "아이슬란드",
    reason: "고요하고 독창적인 풍경이 내면의 성찰을 돕습니다.",
    bestMatch: "ENFP",
    worstMatch: "ESTP",
  },
  INTJ: {
    country: "일본",
    reason: "효율적이고 계획적인 문화가 큰 영감을 줄 것입니다.",
    bestMatch: "ENFP",
    worstMatch: "ESFP",
  },
  ISTP: {
    country: "호주",
    reason: "자유롭고 실용적인 모험을 즐기기에 완벽한 장소입니다.",
    bestMatch: "ESTJ",
    worstMatch: "INFJ",
  },
  ISFP: {
    country: "이탈리아",
    reason: "예술과 낭만적인 분위기를 만끽할 수 있습니다.",
    bestMatch: "ESFP",
    worstMatch: "ENTJ",
  },
  INFP: {
    country: "프랑스",
    reason: "이상주의자에게 어울리는 낭만과 문화가 가득합니다.",
    bestMatch: "ENFP",
    worstMatch: "ISTJ",
  },
  INTP: {
    country: "스웨덴",
    reason: "혁신적이고 고요한 환경에서 아이디어를 탐구할 수 있습니다.",
    bestMatch: "ENTP",
    worstMatch: "ESFJ",
  },
  ESTP: {
    country: "브라질",
    reason: "활기차고 에너지 넘치는 축제와 활동이 가득합니다.",
    bestMatch: "ESFP",
    worstMatch: "INFJ",
  },
  ESFP: {
    country: "스페인",
    reason: "열정적인 문화와 다채로운 경험을 제공합니다.",
    bestMatch: "ISFP",
    worstMatch: "INTJ",
  },
  ENFP: {
    country: "태국",
    reason: "다양하고 색다른 모험을 즐길 수 있는 여행지입니다.",
    bestMatch: "INFJ",
    worstMatch: "ISTJ",
  },
  ENTP: {
    country: "홍콩",
    reason: "빠른 변화와 혁신을 체험할 수 있는 장소입니다.",
    bestMatch: "INTP",
    worstMatch: "ISFJ",
  },
  ESTJ: {
    country: "미국",
    reason: "실용성과 목표 지향적인 다양한 기회를 제공합니다.",
    bestMatch: "ISTP",
    worstMatch: "INFP",
  },
  ESFJ: {
    country: "한국",
    reason: "따뜻한 환대와 활기찬 문화를 즐길 수 있습니다.",
    bestMatch: "ISFJ",
    worstMatch: "INTP",
  },
  ENFJ: {
    country: "인도",
    reason: "다채로운 문화와 영적인 경험을 제공합니다.",
    bestMatch: "INFP",
    worstMatch: "ISTP",
  },
  ENTJ: {
    country: "싱가포르",
    reason: "효율적이고 현대적인 환경이 잘 어울립니다.",
    bestMatch: "INTP",
    worstMatch: "ISFP",
  },
};