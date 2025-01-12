import { QuestionData } from "../questions";

export const enQuestions: QuestionData[] = [
  {
    id: 1,
    question: "If you have time to wait at the airport, what would you do?",
    options: [
      { text: "Try to start conversations with new people.", type: "E" },
      { text: "Casually greet people around you.", type: "E" },
      { text: "Enjoy some alone time with a book or movie.", type: "I" },
      { text: "Relax quietly and organize your next plans.", type: "I" }
    ]
  },
  {
    id: 2,
    question: "What is your style when planning a trip?",
    options: [
      { text: "Plan every moment in detail.", type: "S" },
      { text: "Prepare only what's necessary as a checklist.", type: "S" },
      { text: "Set a general direction and go with the flow.", type: "N" },
      { text: "Explore freely without any plans.", type: "N" }
    ]
  },
  {
    id: 3,
    question: "What do you consider when making decisions?",
    options: [
      { text: "Judge based on logic and facts.", type: "T" },
      { text: "Prioritize efficiency above all.", type: "T" },
      { text: "Consider people's feelings first.", type: "F" },
      { text: "Value the opinions of others.", type: "F" }
    ]
  },
  {
    id: 4,
    question: "How do you deal with stress while traveling?",
    options: [
      { text: "Socialize with people at lively local spots.", type: "E" },
      { text: "Spend time alone in a quiet place.", type: "I" },
      { text: "Analyze the problem and look for solutions.", type: "T" },
      { text: "Share your emotions and talk with companions.", type: "F" }
    ]
  },
  {
    id: 5,
    question: "How do you choose food at a new travel destination?",
    options: [
      { text: "Look up reviews and pick a verified menu.", type: "S" },
      { text: "Choose the most popular menu.", type: "S" },
      { text: "Try unique dishes you've never seen before.", type: "N" },
      { text: "Order new food based on what catches your eye.", type: "N" }
    ]
  },
  {
    id: 6,
    question: "What would you do if conflicts arise with a travel companion?",
    options: [
      { text: "Explain the situation logically to resolve it.", type: "T" },
      { text: "Suggest realistic alternatives.", type: "T" },
      { text: "Pay attention to your companion's feelings first.", type: "F" },
      { text: "Empathize emotionally and resolve the conflict.", type: "F" }
    ]
  },
  {
    id: 7,
    question: "How do you pack for a trip?",
    options: [
      { text: "Write a list of essentials and prepare in advance.", type: "J" },
      { text: "Calmly prepare the day before departure.", type: "J" },
      { text: "Pack lightly because the trip itself is what matters.", type: "P" },
      { text: "Quickly pack at the last minute.", type: "P" }
    ]
  },
  {
    id: 8,
    question: "How do you choose tourist attractions?",
    options: [
      { text: "Pick famous and well-reviewed landmarks.", type: "S" },
      { text: "Search for places with historical significance.", type: "S" },
      { text: "Explore unique spots known only to locals.", type: "N" },
      { text: "Find secret locations not even on the map.", type: "N" }
    ]
  },
  {
    id: 9,
    question: "How do you react to unexpected situations while traveling?",
    options: [
      { text: "Recall similar past experiences to solve the issue.", type: "S" },
      { text: "Talk to people nearby to find a solution.", type: "E" },
      { text: "Logically search for possible solutions.", type: "T" },
      { text: "Consider others' emotions and opinions first.", type: "F" }
    ]
  },
  {
    id: 10,
    question: "How would you spend leftover time at a travel destination?",
    options: [
      { text: "Spend quiet time alone.", type: "I" },
      { text: "Find unique places you haven't visited yet.", type: "N" },
      { text: "Plan in detail to use your time efficiently.", type: "J" },
      { text: "Wander spontaneously wherever your feet take you.", type: "P" }
    ]
  }
];