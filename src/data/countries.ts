import { krCountries } from "./countries/countries.kr";
import { enCountries } from "./countries/countries.en";

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


export const getCountries = (lang: string): Record<MBTIType, CountryData> => {
  switch (lang) {
    case "en":
      return enCountries;
    case "kr":
      return krCountries;
    default:
      return enCountries;
  }
};
