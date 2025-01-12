import { QuestionData } from "../questions";

export const esQuestions: QuestionData[] = [
  {
    id: 1,
    question: "Si tienes tiempo para esperar en el aeropuerto, ¿qué harías?",
    options: [
      { text: "Intentar entablar conversaciones con nuevas personas.", type: "E" },
      { text: "Saludar casualmente a las personas a tu alrededor.", type: "E" },
      { text: "Disfrutar de un tiempo a solas con un libro o una película.", type: "I" },
      { text: "Relajarte tranquilamente y organizar tus próximos planes.", type: "I" }
    ]
  },
  {
    id: 2,
    question: "¿Cuál es tu estilo al planificar un viaje?",
    options: [
      { text: "Planear cada momento en detalle.", type: "S" },
      { text: "Preparar solo lo necesario como una lista de verificación.", type: "S" },
      { text: "Establecer una dirección general y dejarte llevar.", type: "N" },
      { text: "Explorar libremente sin ningún plan.", type: "N" }
    ]
  },
  {
    id: 3,
    question: "¿Qué consideras al tomar decisiones?",
    options: [
      { text: "Juzgar en función de la lógica y los hechos.", type: "T" },
      { text: "Priorizar la eficiencia sobre todo.", type: "T" },
      { text: "Considerar primero los sentimientos de las personas.", type: "F" },
      { text: "Valorar las opiniones de los demás.", type: "F" }
    ]
  },
  {
    id: 4,
    question: "¿Cómo manejas el estrés mientras viajas?",
    options: [
      { text: "Socializar con personas en lugares locales animados.", type: "E" },
      { text: "Pasar tiempo a solas en un lugar tranquilo.", type: "I" },
      { text: "Analizar el problema y buscar soluciones.", type: "T" },
      { text: "Compartir tus emociones y hablar con tus compañeros.", type: "F" }
    ]
  },
  {
    id: 5,
    question: "¿Cómo eliges comida en un nuevo destino de viaje?",
    options: [
      { text: "Buscar reseñas y elegir un menú verificado.", type: "S" },
      { text: "Elegir el menú más popular.", type: "S" },
      { text: "Probar platos únicos que nunca has visto antes.", type: "N" },
      { text: "Pedir comida nueva según lo que llame tu atención.", type: "N" }
    ]
  },
  {
    id: 6,
    question: "¿Qué harías si surgieran conflictos con un compañero de viaje?",
    options: [
      { text: "Explicar la situación lógicamente para resolverla.", type: "T" },
      { text: "Sugerir alternativas realistas.", type: "T" },
      { text: "Prestar atención primero a los sentimientos de tu compañero.", type: "F" },
      { text: "Empatizar emocionalmente y resolver el conflicto.", type: "F" }
    ]
  },
  {
    id: 7,
    question: "¿Cómo empacas para un viaje?",
    options: [
      { text: "Hacer una lista de esenciales y prepararlos con anticipación.", type: "J" },
      { text: "Preparar tranquilamente el día antes de la salida.", type: "J" },
      { text: "Empacar ligero porque lo importante es el viaje en sí.", type: "P" },
      { text: "Empacar rápidamente en el último momento.", type: "P" }
    ]
  },
  {
    id: 8,
    question: "¿Cómo eliges atracciones turísticas?",
    options: [
      { text: "Elegir lugares famosos y bien valorados.", type: "S" },
      { text: "Buscar lugares con importancia histórica.", type: "S" },
      { text: "Explorar lugares únicos conocidos solo por los locales.", type: "N" },
      { text: "Encontrar lugares secretos que ni siquiera están en el mapa.", type: "N" }
    ]
  },
  {
    id: 9,
    question: "¿Cómo reaccionas ante situaciones inesperadas mientras viajas?",
    options: [
      { text: "Recordar experiencias similares pasadas para resolver el problema.", type: "S" },
      { text: "Hablar con personas cercanas para encontrar una solución.", type: "E" },
      { text: "Buscar soluciones posibles de manera lógica.", type: "T" },
      { text: "Considerar primero las emociones y opiniones de los demás.", type: "F" }
    ]
  },
  {
    id: 10,
    question: "¿Cómo aprovecharías el tiempo libre en un destino de viaje?",
    options: [
      { text: "Pasar tiempo tranquilo a solas.", type: "I" },
      { text: "Encontrar lugares únicos que aún no has visitado.", type: "N" },
      { text: "Planificar en detalle para usar el tiempo de manera eficiente.", type: "J" },
      { text: "Deambular espontáneamente donde tus pies te lleven.", type: "P" }
    ]
  }
];