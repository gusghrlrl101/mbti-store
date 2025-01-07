import { atom } from "jotai";

// 사용자 답변 저장
export const answersAtom = atom<string[]>([]);

// 현재 질문 번호
export const currentQuestionAtom = atom<number>(0);