import { krQuestions } from "./questions/questions.kr";
import { enQuestions } from "./questions/questions.en";
import { esQuestions } from "./questions/questions.es";
import { zhQuestions } from "./questions/questions.zh";
import { jpQuestions } from "./questions/questions.jp";
import { frQuestions } from "./questions/questions.fr";
import { deQuestions } from "./questions/questions.de";
import { hiQuestions } from "./questions/questions.hi";
import { arQuestions } from "./questions/questions.ar";
import { ptQuestions } from "./questions/questions.pt";
import { ruQuestions } from "./questions/questions.ru";

export interface Option {
  text: string;
  type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
}

export interface QuestionData {
  id: number;
  question: string;
  options: Option[];
}

export const getQuestions = (lang: string): QuestionData[] => {
  switch (lang) {
    case "kr":
      return krQuestions;
    case "en":
      return enQuestions;
    case "es":
      return esQuestions;
    case "zh":
      return zhQuestions;
    case "jp":
      return jpQuestions;
    case "fr":
      return frQuestions;
    case "de":
      return deQuestions;
    case "hi":
      return hiQuestions;
    case "ar":
      return arQuestions;
    case "pt":
      return ptQuestions;
    case "ru":
      return ruQuestions;
    default:
      return enQuestions;
  }
};
