import { krQuestions } from "./questions/questions.kr";
import { enQuestions } from "./questions/questions.en";

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
    case "en":
      return enQuestions;
    case "kr":
      return krQuestions;
    default:
      return enQuestions;
  }
};
