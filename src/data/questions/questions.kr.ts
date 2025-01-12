import { QuestionData } from "../questions";

export const krQuestions: QuestionData[] = [
  {
    id: 1,
    question: "공항에서 기다리는 시간이 주어진다면?",
    options: [
      { text: "새로운 사람들과 대화를 시도한다.", type: "E" },
      { text: "주변 사람과 가볍게 인사한다.", type: "E" },
      { text: "책이나 영화를 보며 혼자 있는 시간을 즐긴다.", type: "I" },
      { text: "조용히 휴식하며 다음 계획을 정리한다.", type: "I" },
    ],
  },
  {
    id: 2,
    question: "여행 일정을 세울 때 어떤 스타일인가요?",
    options: [
      { text: "모든 시간을 구체적으로 계획한다.", type: "S" },
      { text: "필요한 것만 체크리스트로 준비한다.", type: "S" },
      { text: "대략적인 방향만 잡고 즉흥적으로 한다.", type: "N" },
      { text: "무계획으로 자유롭게 탐험한다.", type: "N" },
    ],
  },
  {
    id: 3,
    question: "결정을 내릴 때 무엇을 고려하나요?",
    options: [
      { text: "논리와 사실에 기반하여 판단한다.", type: "T" },
      { text: "효율성을 최우선으로 생각한다.", type: "T" },
      { text: "사람들의 감정을 우선 고려한다.", type: "F" },
      { text: "다른 사람들의 의견을 중요하게 여긴다.", type: "F" },
    ],
  },
  {
    id: 4,
    question: "스트레스를 받을 때 여행지에서 어떻게 대처하나요?",
    options: [
      { text: "현지의 활기찬 장소에서 사람들과 어울린다.", type: "E" },
      { text: "조용한 곳에서 혼자만의 시간을 보낸다.", type: "I" },
      { text: "문제를 분석하며 해결책을 찾는다.", type: "T" },
      { text: "감정을 공유하며 동행자와 대화를 나눈다.", type: "F" },
    ],
  },
  {
    id: 5,
    question: "새로운 여행지에서 음식을 고를 때?",
    options: [
      { text: "리뷰를 찾아보고 검증된 메뉴를 고른다.", type: "S" },
      { text: "가장 인기 있는 메뉴를 선택한다.", type: "S" },
      { text: "메뉴판에 처음 보는 독특한 음식을 시도한다.", type: "N" },
      { text: "감각에 끌리는 대로 새로운 음식을 주문한다.", type: "N" },
    ],
  },
  {
    id: 6,
    question: "여행 동행자와 갈등이 생긴다면?",
    options: [
      { text: "논리적으로 상황을 설명하며 해결하려 한다.", type: "T" },
      { text: "현실적인 대안을 제시한다.", type: "T" },
      { text: "동행자의 기분을 먼저 살핀다.", type: "F" },
      { text: "감정적으로 공감하며 갈등을 풀어간다.", type: "F" },
    ],
  },
  {
    id: 7,
    question: "여행 짐을 챙길 때?",
    options: [
      { text: "필요한 물건을 리스트로 작성하고 미리 준비한다.", type: "J" },
      { text: "출발하기 하루 전에 차분히 준비한다.", type: "J" },
      { text: "짐은 대충 챙겨도 된다, 여행이 중요한 거다.", type: "P" },
      { text: "출발 직전에 빠르게 챙긴다.", type: "P" },
    ],
  },
  {
    id: 8,
    question: "관광 명소를 선택할 때?",
    options: [
      { text: "이미 유명하고 검증된 명소를 선택한다.", type: "S" },
      { text: "역사적인 배경이 있는 장소를 찾는다.", type: "S" },
      { text: "현지인만 아는 독특한 장소를 탐험한다.", type: "N" },
      { text: "지도에도 없는 비밀스러운 장소를 찾아간다.", type: "N" },
    ],
  },
  {
    id: 9,
    question: "여행 중 예상치 못한 상황에 직면한다면 어떻게 반응하나요?",
    options: [
      { text: "전에 겪었던 비슷한 상황을 떠올리며 해결한다.", type: "S" },
      { text: "주변 사람들과 이야기하며 해결책을 찾는다.", type: "E" },
      { text: "논리적으로 가능한 해결책을 찾는다.", type: "T" },
      { text: "다른 사람의 감정과 의견을 먼저 고려한다.", type: "F" },
    ],
  },
  {
    id: 10,
    question: "여행지에서 남는 시간을 어떻게 활용하고 싶나요?",
    options: [
      { text: "혼자 조용히 쉰다.", type: "I" },
      { text: "지금까지 가보지 않은 독특한 장소를 찾아간다.", type: "N" },
      { text: "세부 계획을 세우고 효율적으로 시간을 쓴다.", type: "J" },
      { text: "즉흥적으로 발길 닿는 대로 돌아다닌다.", type: "P" },
    ],
  }
];