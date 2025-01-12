import { QuestionData } from "../questions";

export const frQuestions: QuestionData[] = [
  {
    id: 1,
    question: "Si vous avez du temps à attendre à l'aéroport, que feriez-vous ?",
    options: [
      { text: "Essayer de commencer des conversations avec de nouvelles personnes.", type: "E" },
      { text: "Saluer les personnes autour de vous de manière informelle.", type: "E" },
      { text: "Profiter d'un moment seul avec un livre ou un film.", type: "I" },
      { text: "Se détendre tranquillement et organiser vos prochains plans.", type: "I" }
    ]
  },
  {
    id: 2,
    question: "Quel est votre style pour planifier un voyage ?",
    options: [
      { text: "Planifier chaque moment en détail.", type: "S" },
      { text: "Préparer uniquement ce qui est nécessaire sous forme de liste.", type: "S" },
      { text: "Fixer une direction générale et suivre le courant.", type: "N" },
      { text: "Explorer librement sans aucun plan.", type: "N" }
    ]
  },
  {
    id: 3,
    question: "Que considérez-vous lors de la prise de décisions ?",
    options: [
      { text: "Jugement basé sur la logique et les faits.", type: "T" },
      { text: "Prioriser l'efficacité avant tout.", type: "T" },
      { text: "Considérer les sentiments des autres en premier.", type: "F" },
      { text: "Accorder de l'importance aux opinions des autres.", type: "F" }
    ]
  },
  {
    id: 4,
    question: "Comment gérez-vous le stress en voyage ?",
    options: [
      { text: "Socialiser avec des gens dans des endroits animés.", type: "E" },
      { text: "Passer du temps seul dans un endroit calme.", type: "I" },
      { text: "Analyser le problème et chercher des solutions.", type: "T" },
      { text: "Partager vos émotions et parler avec vos compagnons.", type: "F" }
    ]
  },
  {
    id: 5,
    question: "Comment choisissez-vous votre nourriture dans une nouvelle destination ?",
    options: [
      { text: "Consulter les avis et choisir un menu vérifié.", type: "S" },
      { text: "Choisir le menu le plus populaire.", type: "S" },
      { text: "Essayer des plats uniques que vous n'avez jamais vus auparavant.", type: "N" },
      { text: "Commander des plats qui attirent votre attention.", type: "N" }
    ]
  },
  {
    id: 6,
    question: "Que feriez-vous en cas de conflit avec un compagnon de voyage ?",
    options: [
      { text: "Expliquer la situation de manière logique pour la résoudre.", type: "T" },
      { text: "Proposer des alternatives réalistes.", type: "T" },
      { text: "Prêter attention en premier lieu aux sentiments de votre compagnon.", type: "F" },
      { text: "Faire preuve d'empathie émotionnelle pour résoudre le conflit.", type: "F" }
    ]
  },
  {
    id: 7,
    question: "Comment préparez-vous vos bagages pour un voyage ?",
    options: [
      { text: "Faire une liste d'essentiels et préparer à l'avance.", type: "J" },
      { text: "Se préparer calmement la veille du départ.", type: "J" },
      { text: "Voyager léger car c'est le voyage qui compte le plus.", type: "P" },
      { text: "Préparer rapidement à la dernière minute.", type: "P" }
    ]
  },
  {
    id: 8,
    question: "Comment choisissez-vous les attractions touristiques ?",
    options: [
      { text: "Choisir des monuments célèbres et bien notés.", type: "S" },
      { text: "Chercher des endroits ayant une importance historique.", type: "S" },
      { text: "Explorer des lieux uniques connus seulement des locaux.", type: "N" },
      { text: "Trouver des endroits secrets qui ne figurent même pas sur la carte.", type: "N" }
    ]
  },
  {
    id: 9,
    question: "Comment réagissez-vous à des situations inattendues en voyage ?",
    options: [
      { text: "Se rappeler des expériences similaires passées pour résoudre le problème.", type: "S" },
      { text: "Parler avec des gens autour de vous pour trouver une solution.", type: "E" },
      { text: "Rechercher logiquement des solutions possibles.", type: "T" },
      { text: "Prendre en compte d'abord les émotions et opinions des autres.", type: "F" }
    ]
  },
  {
    id: 10,
    question: "Comment utiliseriez-vous le temps libre à une destination de voyage ?",
    options: [
      { text: "Passer un moment calme seul.", type: "I" },
      { text: "Trouver des endroits uniques que vous n'avez pas encore visités.", type: "N" },
      { text: "Planifier en détail pour utiliser votre temps efficacement.", type: "J" },
      { text: "Errer spontanément là où vos pieds vous mènent.", type: "P" }
    ]
  }
];