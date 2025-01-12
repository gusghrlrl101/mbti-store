import { krCountries } from "./countries/countries.kr";
import { enCountries } from "./countries/countries.en";
import { esCountries } from "./countries/countries.es";
import { zhCountries } from "./countries/countries.zh";
import { jpCountries } from "./countries/countries.jp";
import { frCountries } from "./countries/countries.fr";
import { deCountries } from "./countries/countries.de";
import { hiCountries } from "./countries/countries.hi";
import { arCountries } from "./countries/countries.ar";
import { ptCountries } from "./countries/countries.pt";
import { ruCountries } from "./countries/countries.ru";

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
    case "kr":
      return krCountries;
    case "en":
      return enCountries;
    case "es":
      return esCountries;
    case "zh":
      return zhCountries;
    case "jp":
      return jpCountries;
    case "fr":
      return frCountries;
    case "de":
      return deCountries;
    case "hi":
      return hiCountries;
    case "ar":
      return arCountries;
    case "pt":
      return ptCountries;
    case "ru":
      return ruCountries;
    default:
      return enCountries;
  }
};
