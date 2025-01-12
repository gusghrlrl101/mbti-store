export type MBTIType = "ISTJ" | "ISFJ" | "INFJ" | "INTJ" | "ISTP" | "ISFP" | "INFP" | "INTP" |
  "ESTP" | "ESFP" | "ENFP" | "ENTP" | "ESTJ" | "ESFJ" | "ENFJ" | "ENTJ";

export interface CountryData {
  id: string;
  country: string;
  reason: string;
  flag: string;
  image: string;
  bestMatch: MBTIType;
  worstMatch: MBTIType;
}

export const mbtiCountries: Record<MBTIType, CountryData> = {
  ISTJ: {
    id: "germany",
    country: "독일",
    reason: "체계적이고 질서를 중시하는 성격에 잘 맞는 여행지입니다.",
    flag: "🇩🇪",
    image: "/result/germany.jpg",
    bestMatch: "ESFP",
    worstMatch: "ENFP",
  },
  ISFJ: {
    id: "switzerland",
    country: "스위스",
    reason: "조용하고 평화로운 환경을 제공하는 완벽한 장소입니다.",
    flag: "🇨🇭",
    image: "/result/switzerland.jpg",
    bestMatch: "ENTP",
    worstMatch: "ESTP",
  },
  INFJ: {
    id: "iceland",
    country: "아이슬란드",
    reason: "고요하고 독창적인 풍경이 내면의 성찰을 돕습니다.",
    flag: "🇮🇸",
    image: "/result/iceland.jpg",
    bestMatch: "ENFP",
    worstMatch: "ESTP",
  },
  INTJ: {
    id: "japan",
    country: "일본",
    reason: "효율적이고 계획적인 문화가 큰 영감을 줄 것입니다.",
    flag: "🇯🇵",
    image: "/result/japan.jpg",
    bestMatch: "ENFP",
    worstMatch: "ESFP",
  },
  ISTP: {
    id: "australia",
    country: "호주",
    reason: "자유롭고 실용적인 모험을 즐기기에 완벽한 장소입니다.",
    flag: "🇦🇺",
    image: "/result/australia.jpg",
    bestMatch: "ESTJ",
    worstMatch: "INFJ",
  },
  ISFP: {
    id: "italy",
    country: "이탈리아",
    reason: "예술과 낭만적인 분위기를 만끽할 수 있습니다.",
    flag: "🇮🇹",
    image: "/result/italy.jpg",
    bestMatch: "ESFP",
    worstMatch: "ENTJ",
  },
  INFP: {
    id: "france",
    country: "프랑스",
    reason: "이상주의자에게 어울리는 낭만과 문화가 가득합니다.",
    flag: "🇫🇷",
    image: "/result/france.jpg",
    bestMatch: "ENFP",
    worstMatch: "ISTJ",
  },
  INTP: {
    id: "sweden",
    country: "스웨덴",
    reason: "혁신적이고 고요한 환경에서 아이디어를 탐구할 수 있습니다.",
    flag: "🇸🇪",
    image: "/result/sweden.jpg",
    bestMatch: "ENTP",
    worstMatch: "ESFJ",
  },
  ESTP: {
    id: "brazil",
    country: "브라질",
    reason: "활기차고 에너지 넘치는 축제와 활동이 가득합니다.",
    flag: "🇧🇷",
    image: "/result/brazil.jpg",
    bestMatch: "ESFP",
    worstMatch: "INFJ",
  },
  ESFP: {
    id: "spain",
    country: "스페인",
    reason: "열정적인 문화와 다채로운 경험을 제공합니다.",
    flag: "🇪🇸",
    image: "/result/spain.jpg",
    bestMatch: "ISFP",
    worstMatch: "INTJ",
  },
  ENFP: {
    id: "thailand",
    country: "태국",
    reason: "다양하고 색다른 모험을 즐길 수 있는 여행지입니다.",
    flag: "🇹🇭",
    image: "/result/thailand.jpg",
    bestMatch: "INFJ",
    worstMatch: "ISTJ",
  },
  ENTP: {
    id: "china",
    country: "중국",
    reason: "빠른 변화와 혁신을 체험할 수 있는 장소입니다.",
    flag: "🇨🇳",
    image: "/result/china.jpg",
    bestMatch: "INTP",
    worstMatch: "ISFJ",
  },
  ESTJ: {
    id: "usa",
    country: "미국",
    reason: "실용성과 목표 지향적인 다양한 기회를 제공합니다.",
    flag: "🇺🇸",
    image: "/result/usa.jpg",
    bestMatch: "ISTP",
    worstMatch: "INFP",
  },
  ESFJ: {
    id: "korea",
    country: "한국",
    reason: "따뜻한 환대와 활기찬 문화를 즐길 수 있습니다.",
    flag: "🇰🇷",
    image: "/result/korea.jpg",
    bestMatch: "ISFJ",
    worstMatch: "INTP",
  },
  ENFJ: {
    id: "india",
    country: "인도",
    reason: "다채로운 문화와 영적인 경험을 제공합니다.",
    flag: "🇮🇳",
    image: "/result/india.jpg",
    bestMatch: "INFP",
    worstMatch: "ISTP",
  },
  ENTJ: {
    id: "singapore",
    country: "싱가포르",
    reason: "효율적이고 현대적인 환경이 잘 어울립니다.",
    flag: "🇸🇬",
    image: "/result/singapore.jpg",
    bestMatch: "INTP",
    worstMatch: "ISFP",
  },
};