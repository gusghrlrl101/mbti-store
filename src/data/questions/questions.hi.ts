import { QuestionData } from "../questions";

export const hiQuestions: QuestionData[] = [
  {
    id: 1,
    question: "अगर आपको हवाई अड्डे पर इंतजार करने का समय मिले, तो आप क्या करेंगे?",
    options: [
      { text: "नए लोगों के साथ बातचीत शुरू करने की कोशिश करेंगे।", type: "E" },
      { text: "आसपास के लोगों को अनौपचारिक रूप से नमस्ते कहेंगे।", type: "E" },
      { text: "किताब या फिल्म के साथ अकेले समय का आनंद लेंगे।", type: "I" },
      { text: "शांत रहकर आराम करेंगे और अपनी अगली योजनाओं को व्यवस्थित करेंगे।", type: "I" }
    ]
  },
  {
    id: 2,
    question: "यात्रा की योजना बनाते समय आपका तरीका क्या है?",
    options: [
      { text: "हर पल को विस्तार से योजना बनाना।", type: "S" },
      { text: "केवल आवश्यक चीज़ों की चेकलिस्ट तैयार करना।", type: "S" },
      { text: "सामान्य दिशा तय करें और प्रवाह के साथ चलें।", type: "N" },
      { text: "बिना किसी योजना के स्वतंत्र रूप से अन्वेषण करें।", type: "N" }
    ]
  },
  {
    id: 3,
    question: "निर्णय लेते समय आप क्या विचार करते हैं?",
    options: [
      { text: "तथ्यों और तर्क पर आधारित निर्णय लेना।", type: "T" },
      { text: "प्राथमिकता के रूप में दक्षता को रखना।", type: "T" },
      { text: "सबसे पहले लोगों की भावनाओं पर ध्यान देना।", type: "F" },
      { text: "दूसरों की राय को महत्व देना।", type: "F" }
    ]
  },
  {
    id: 4,
    question: "यात्रा करते समय तनाव को कैसे संभालते हैं?",
    options: [
      { text: "स्थानीय स्थानों पर लोगों के साथ सामाजिक मेलजोल करें।", type: "E" },
      { text: "शांत जगह में अकेले समय बिताएं।", type: "I" },
      { text: "समस्या का विश्लेषण करें और समाधान खोजें।", type: "T" },
      { text: "अपनी भावनाओं को साझा करें और साथियों से बात करें।", type: "F" }
    ]
  },
  {
    id: 5,
    question: "नए यात्रा गंतव्य पर भोजन का चयन कैसे करते हैं?",
    options: [
      { text: "समीक्षा देखें और एक सत्यापित मेनू चुनें।", type: "S" },
      { text: "सबसे लोकप्रिय मेनू का चयन करें।", type: "S" },
      { text: "अद्वितीय व्यंजन आज़माएं जो आपने पहले कभी नहीं देखे।", type: "N" },
      { text: "ऐसा खाना चुनें जो आपको आकर्षित करे।", type: "N" }
    ]
  },
  {
    id: 6,
    question: "अगर यात्रा साथी के साथ संघर्ष हो, तो आप क्या करेंगे?",
    options: [
      { text: "स्थिति को तार्किक रूप से समझाकर हल करने की कोशिश करेंगे।", type: "T" },
      { text: "वास्तविक विकल्प सुझाएंगे।", type: "T" },
      { text: "सबसे पहले अपने साथी की भावनाओं पर ध्यान देंगे।", type: "F" },
      { text: "भावनात्मक सहानुभूति दिखाकर संघर्ष को हल करेंगे।", type: "F" }
    ]
  },
  {
    id: 7,
    question: "आप यात्रा के लिए सामान कैसे तैयार करते हैं?",
    options: [
      { text: "आवश्यक चीजों की सूची बनाएं और पहले से तैयारी करें।", type: "J" },
      { text: "यात्रा के एक दिन पहले शांति से तैयारी करें।", type: "J" },
      { text: "हल्का पैक करें क्योंकि यात्रा ही सबसे महत्वपूर्ण है।", type: "P" },
      { text: "आखिरी समय में जल्दी से पैक करें।", type: "P" }
    ]
  },
  {
    id: 8,
    question: "आप पर्यटक स्थलों का चयन कैसे करते हैं?",
    options: [
      { text: "प्रसिद्ध और अच्छी तरह से समीक्षा किए गए स्थलों को चुनें।", type: "S" },
      { text: "ऐसे स्थानों की तलाश करें जिनका ऐतिहासिक महत्व हो।", type: "S" },
      { text: "स्थानीय लोगों द्वारा जाने जाने वाले अद्वितीय स्थानों का अन्वेषण करें।", type: "N" },
      { text: "ऐसे गुप्त स्थान ढूंढें जो मानचित्र में भी न हों।", type: "N" }
    ]
  },
  {
    id: 9,
    question: "यात्रा के दौरान अप्रत्याशित परिस्थितियों में आप कैसे प्रतिक्रिया देंगे?",
    options: [
      { text: "पिछले समान अनुभवों को याद करके समस्या का समाधान करें।", type: "S" },
      { text: "आसपास के लोगों से बात करके समाधान खोजें।", type: "E" },
      { text: "तार्किक रूप से संभावित समाधान खोजें।", type: "T" },
      { text: "दूसरों की भावनाओं और राय को पहले ध्यान में रखें।", type: "F" }
    ]
  },
  {
    id: 10,
    question: "यात्रा गंतव्य पर बचे हुए समय का उपयोग कैसे करेंगे?",
    options: [
      { text: "शांत समय अकेले बिताएं।", type: "I" },
      { text: "ऐसे अनोखे स्थान खोजें जहां आप अभी तक नहीं गए।", type: "N" },
      { text: "समय का कुशल उपयोग करने के लिए विस्तार से योजना बनाएं।", type: "J" },
      { text: "जहां मन चाहे वहां स्वतः घूम लें।", type: "P" }
    ]
  }
];