import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  kr: {
    translation: {
      title: "여행지 MBTI",
      description: "나에게 알맞는 여행지를 확인해보세요!",
      home: {
        title: "나에게 맞는 여행지 테스트",
        startTest: "테스트 시작하기",
      },
      result: {
        correctCountry: "나에게 맞는 여행지",
        wrongCountry: "안 맞는 여행지",
        startShare: "공유하기",
        startTest: "테스트 시작하기",
        error: "잘못된 결과 페이지입니다.",
        share: {
          text: "나에게 맞는 여행지는 {{country}}입니다.\n이유: {{reason}}",
          success: "공유되었습니다!",
          error: "공유 기능이 지원되지 않는 환경입니다.",
        },
      },
      privatePolicy: {
        title: "개인정보처리방침",
        intro: "해당 서비스는 사용자의 개인정보를 중요하게 생각하며, Google AdSense를 통해 제공되는 광고와 관련하여 최소한의 정보를 처리합니다.",
        sections: [
          {
            title: "1. 수집하는 개인정보 항목",
            content:
              "해당 서비스는 자체적으로 개인정보를 수집하지 않으며, Google AdSense를 통해 아래의 정보가 자동으로 수집될 수 있습니다:",
            list: ["IP 주소", "쿠키 정보", "페이지 방문 및 클릭 이벤트 정보"],
          },
          {
            title: "2. 개인정보 처리 목적",
            content:
              "수집된 정보는 Google AdSense를 통해 맞춤형 광고를 제공하고, 사용자 경험을 개선하며, 트래픽 분석 및 통계 생성을 위해 사용됩니다.",
          },
          {
            title: "3. Google AdSense와의 협력",
            content:
              "Google AdSense는 광고 제공 과정에서 쿠키를 통해 사용자 데이터를 처리할 수 있습니다. Google의 개인정보처리방침은",
            here: "여기",
            content2: "에서 확인하실 수 있습니다.",
          },
          {
            title: "4. 사용자의 선택",
            content:
              "사용자는 브라우저 설정을 통해 쿠키를 비활성화하거나 데이터 수집을 거부할 수 있습니다. 자세한 방법은 브라우저 도움말을 참조하세요.",
          },
          {
            title: "5. 문의",
            content:
              "본 개인정보처리방침에 대한 문의는 아래 이메일로 연락주시기 바랍니다:",
          },
        ],
        footer: "본 방침은 2025년 1월 8일부터 적용됩니다.",
      },
      footer: {
        creator: "제작자",
        privacyPolicy: "개인정보방침",
      },
    },
  },
  en: {
    translation: {
      title: "Travel Destination MBTI",
      description: "Find perfect travel destination for you!",
      home: {
        title: "Find your ideal travel destination",
        startTest: "Start Test",
      },
      result: {
        correctCountry: "Your ideal travel destination",
        wrongCountry: "Least suitable travel destination",
        startShare: "Share",
        startTest: "Start Test",
        error: "Incorrect result page.",
        share: {
          title: "Your ideal travel destination",
          text: "Your ideal travel destination is {{country}}.\nReason: {{reason}}",
          success: "Shared successfully!",
          error: "Sharing is not supported in this environment.",
        },
      },
      privatePolicy: {
        title: "Privacy Policy",
        intro: "This service values your privacy and processes minimal information related to advertisements provided through Google AdSense.",
        sections: [
          {
            title: "1. Personal Information Collected",
            content:
              "This service does not directly collect personal information. However, the following information may be automatically collected through Google AdSense:",
            list: ["IP Address", "Cookie Information", "Page visits and click events"],
          },
          {
            title: "2. Purpose of Processing Personal Information",
            content:
              "The collected information is used to provide personalized advertisements through Google AdSense, improve user experience, and generate traffic analysis and statistics.",
          },
          {
            title: "3. Collaboration with Google AdSense",
            content:
              "Google AdSense may process user data through cookies during the advertisement delivery process. Google's privacy policy can be reviewed",
            here: "here",
            content2: ".",
          },
          {
            title: "4. User Choices",
            content:
              "Users can disable cookies or refuse data collection through browser settings. Please refer to your browser's help section for detailed instructions.",
          },
          {
            title: "5. Contact",
            content:
              "For inquiries regarding this privacy policy, please contact us at the email address below:",
          },
        ],
        footer: "This policy is effective as of January 8, 2025.",
      },
      footer: {
        creator: "Creator",
        privacyPolicy: "Privacy Policy",
      },
    },
  },
  es: {
    translation: {
      title: "MBTI de destinos de viaje",
      description: "¡Encuentra el destino de viaje perfecto para ti!",
      home: {
        title: "Encuentra tu destino de viaje ideal",
        startTest: "Comenzar prueba",
      },
      result: {
        correctCountry: "Tu destino de viaje ideal",
        wrongCountry: "Destino de viaje menos adecuado",
        startShare: "Compartir",
        startTest: "Comenzar prueba",
        error: "Página de resultados incorrecta.",
        share: {
          title: "Tu destino de viaje ideal",
          text: "Tu destino de viaje ideal es {{country}}.\nRazón: {{reason}}",
          success: "¡Compartido con éxito!",
          error: "Compartir no es compatible en este entorno.",
        },
      },
      privatePolicy: {
        title: "Política de privacidad",
        intro: "Este servicio valora tu privacidad y procesa una cantidad mínima de información relacionada con los anuncios proporcionados a través de Google AdSense.",
        sections: [
          {
            title: "1. Información personal recopilada",
            content:
              "Este servicio no recopila información personal directamente. Sin embargo, la siguiente información puede ser recopilada automáticamente a través de Google AdSense:",
            list: ["Dirección IP", "Información de cookies", "Visitas a páginas y eventos de clic"],
          },
          {
            title: "2. Propósito del procesamiento de información personal",
            content:
              "La información recopilada se utiliza para proporcionar anuncios personalizados a través de Google AdSense, mejorar la experiencia del usuario y generar análisis y estadísticas de tráfico.",
          },
          {
            title: "3. Colaboración con Google AdSense",
            content:
              "Google AdSense puede procesar datos del usuario mediante cookies durante el proceso de entrega de anuncios. La política de privacidad de Google se puede revisar",
            here: "aquí",
            content2: ".",
          },
          {
            title: "4. Opciones del usuario",
            content:
              "Los usuarios pueden desactivar las cookies o rechazar la recopilación de datos a través de la configuración del navegador. Consulta la sección de ayuda de tu navegador para obtener instrucciones detalladas.",
          },
          {
            title: "5. Contacto",
            content:
              "Para consultas relacionadas con esta política de privacidad, por favor contáctanos en la siguiente dirección de correo electrónico:",
          },
        ],
        footer: "Esta política es efectiva a partir del 8 de enero de 2025.",
      },
      footer: {
        creator: "Creador",
        privacyPolicy: "Política de privacidad",
      },
    },
  },
  zh: {
    translation: {
      title: "旅行目的地 MBTI",
      description: "为您寻找完美的旅行目的地！",
      home: {
        title: "寻找您的理想旅行目的地",
        startTest: "开始测试",
      },
      result: {
        correctCountry: "您的理想旅行目的地",
        wrongCountry: "最不适合的旅行目的地",
        startShare: "分享",
        startTest: "开始测试",
        error: "错误的结果页面。",
        share: {
          title: "您的理想旅行目的地",
          text: "您的理想旅行目的地是 {{country}}。\n理由：{{reason}}",
          success: "分享成功！",
          error: "此环境不支持分享功能。",
        },
      },
      privatePolicy: {
        title: "隐私政策",
        intro: "本服务重视您的隐私，仅处理与 Google AdSense 提供的广告相关的最低限度信息。",
        sections: [
          {
            title: "1. 收集的个人信息",
            content:
              "本服务不会直接收集个人信息。然而，通过 Google AdSense，以下信息可能会被自动收集：",
            list: ["IP 地址", "Cookie 信息", "页面访问和点击事件信息"],
          },
          {
            title: "2. 处理个人信息的目的",
            content:
              "收集的信息用于通过 Google AdSense 提供个性化广告、改善用户体验以及生成流量分析和统计数据。",
          },
          {
            title: "3. 与 Google AdSense 的合作",
            content:
              "在广告投放过程中，Google AdSense 可能通过 Cookie 处理用户数据。您可以在",
            here: "此处",
            content2: "查看 Google 的隐私政策。",
          },
          {
            title: "4. 用户选择",
            content:
              "用户可以通过浏览器设置禁用 Cookie 或拒绝数据收集。请参考浏览器的帮助部分以获取详细说明。",
          },
          {
            title: "5. 联系方式",
            content:
              "如果您对本隐私政策有任何疑问，请通过以下电子邮件地址联系我们：",
          },
        ],
        footer: "本政策自 2025 年 1 月 8 日起生效。",
      },
      footer: {
        creator: "创建者",
        privacyPolicy: "隐私政策",
      },
    },
  },
  jp: {
    translation: {
      title: "旅行先 MBTI",
      description: "あなたにぴったりの旅行先を見つけましょう！",
      home: {
        title: "理想的な旅行先を見つける",
        startTest: "テストを始める",
      },
      result: {
        correctCountry: "あなたにぴったりの旅行先",
        wrongCountry: "最も合わない旅行先",
        startShare: "共有する",
        startTest: "テストを始める",
        error: "結果ページが正しくありません。",
        share: {
          title: "あなたにぴったりの旅行先",
          text: "あなたにぴったりの旅行先は {{country}} です。\n理由：{{reason}}",
          success: "正常に共有されました！",
          error: "この環境では共有機能がサポートされていません。",
        },
      },
      privatePolicy: {
        title: "プライバシーポリシー",
        intro: "本サービスはユーザーのプライバシーを重視し、Google AdSense を通じて提供される広告に関連する最小限の情報のみを処理します。",
        sections: [
          {
            title: "1. 収集される個人情報の項目",
            content:
              "本サービスは直接的に個人情報を収集しませんが、以下の情報が Google AdSense を通じて自動的に収集される場合があります：",
            list: ["IPアドレス", "クッキー情報", "ページ訪問およびクリックイベント情報"],
          },
          {
            title: "2. 個人情報処理の目的",
            content:
              "収集された情報は、Google AdSense を通じてパーソナライズされた広告を提供し、ユーザー体験を向上させ、トラフィック分析および統計生成に使用されます。",
          },
          {
            title: "3. Google AdSense との連携",
            content:
              "Google AdSense は、広告配信プロセス中にクッキーを介してユーザーデータを処理する場合があります。Google のプライバシーポリシーは",
            here: "こちら",
            content2: "でご確認いただけます。",
          },
          {
            title: "4. ユーザーの選択",
            content:
              "ユーザーは、ブラウザの設定を通じてクッキーを無効化したり、データ収集を拒否したりすることができます。詳しい手順については、ブラウザのヘルプセクションをご参照ください。",
          },
          {
            title: "5. 問い合わせ先",
            content:
              "本プライバシーポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください：",
          },
        ],
        footer: "本ポリシーは2025年1月8日より適用されます。",
      },
      footer: {
        creator: "作成者",
        privacyPolicy: "プライバシーポリシー",
      },
    },
  },
  fr: {
    translation: {
      title: "MBTI des destinations de voyage",
      description: "Trouvez la destination de voyage parfaite pour vous !",
      home: {
        title: "Trouvez votre destination de voyage idéale",
        startTest: "Commencer le test",
      },
      result: {
        correctCountry: "Votre destination de voyage idéale",
        wrongCountry: "La destination de voyage la moins adaptée",
        startShare: "Partager",
        startTest: "Commencer le test",
        error: "Page de résultats incorrecte.",
        share: {
          title: "Votre destination de voyage idéale",
          text: "Votre destination de voyage idéale est {{country}}.\nRaison : {{reason}}",
          success: "Partagé avec succès !",
          error: "Le partage n'est pas pris en charge dans cet environnement.",
        },
      },
      privatePolicy: {
        title: "Politique de confidentialité",
        intro: "Ce service accorde une grande importance à votre vie privée et traite un minimum d'informations liées aux annonces fournies via Google AdSense.",
        sections: [
          {
            title: "1. Informations personnelles collectées",
            content:
              "Ce service ne collecte pas directement d'informations personnelles. Cependant, les informations suivantes peuvent être collectées automatiquement via Google AdSense :",
            list: ["Adresse IP", "Informations sur les cookies", "Visites de pages et événements de clic"],
          },
          {
            title: "2. Objectif du traitement des informations personnelles",
            content:
              "Les informations collectées sont utilisées pour fournir des publicités personnalisées via Google AdSense, améliorer l'expérience utilisateur et générer des analyses et statistiques de trafic.",
          },
          {
            title: "3. Collaboration avec Google AdSense",
            content:
              "Google AdSense peut traiter les données des utilisateurs via des cookies pendant le processus de diffusion des annonces. La politique de confidentialité de Google peut être consultée",
            here: "ici",
            content2: ".",
          },
          {
            title: "4. Choix des utilisateurs",
            content:
              "Les utilisateurs peuvent désactiver les cookies ou refuser la collecte de données via les paramètres du navigateur. Veuillez consulter la section d'aide de votre navigateur pour des instructions détaillées.",
          },
          {
            title: "5. Contact",
            content:
              "Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à l'adresse e-mail suivante :",
          },
        ],
        footer: "Cette politique est en vigueur à compter du 8 janvier 2025.",
      },
      footer: {
        creator: "Créateur",
        privacyPolicy: "Politique de confidentialité",
      },
    },
  },
  de: {
    translation: {
      title: "MBTI-Reiseziele",
      description: "Finden Sie Ihr perfektes Reiseziel!",
      home: {
        title: "Finden Sie Ihr ideales Reiseziel",
        startTest: "Test starten",
      },
      result: {
        correctCountry: "Ihr ideales Reiseziel",
        wrongCountry: "Das am wenigsten geeignete Reiseziel",
        startShare: "Teilen",
        startTest: "Test starten",
        error: "Ungültige Ergebnisseite.",
        share: {
          title: "Ihr ideales Reiseziel",
          text: "Ihr ideales Reiseziel ist {{country}}.\nGrund: {{reason}}",
          success: "Erfolgreich geteilt!",
          error: "Das Teilen wird in dieser Umgebung nicht unterstützt.",
        },
      },
      privatePolicy: {
        title: "Datenschutzrichtlinie",
        intro: "Dieser Dienst legt großen Wert auf Ihre Privatsphäre und verarbeitet nur minimale Informationen im Zusammenhang mit Anzeigen, die über Google AdSense bereitgestellt werden.",
        sections: [
          {
            title: "1. Erfasste personenbezogene Daten",
            content:
              "Dieser Dienst sammelt keine personenbezogenen Daten direkt. Folgende Informationen können jedoch automatisch über Google AdSense erfasst werden:",
            list: ["IP-Adresse", "Cookie-Informationen", "Seitenbesuche und Klickereignisse"],
          },
          {
            title: "2. Zweck der Verarbeitung personenbezogener Daten",
            content:
              "Die erfassten Informationen werden verwendet, um personalisierte Anzeigen über Google AdSense bereitzustellen, die Benutzererfahrung zu verbessern und Traffic-Analysen und Statistiken zu erstellen.",
          },
          {
            title: "3. Zusammenarbeit mit Google AdSense",
            content:
              "Google AdSense kann während des Anzeigenbereitstellungsprozesses Benutzerdaten über Cookies verarbeiten. Die Datenschutzrichtlinie von Google finden Sie",
            here: "hier",
            content2: ".",
          },
          {
            title: "4. Benutzeroptionen",
            content:
              "Benutzer können Cookies deaktivieren oder die Datenerfassung über die Browsereinstellungen ablehnen. Bitte konsultieren Sie die Hilfeseite Ihres Browsers für detaillierte Anweisungen.",
          },
          {
            title: "5. Kontakt",
            content:
              "Bei Fragen zu dieser Datenschutzrichtlinie kontaktieren Sie uns bitte unter der folgenden E-Mail-Adresse:",
          },
        ],
        footer: "Diese Richtlinie gilt ab dem 8. Januar 2025.",
      },
      footer: {
        creator: "Ersteller",
        privacyPolicy: "Datenschutzrichtlinie",
      },
    },
  },
  hi: {
    translation: {
      title: "यात्रा गंतव्य MBTI",
      description: "अपने लिए सबसे उपयुक्त यात्रा गंतव्य खोजें!",
      home: {
        title: "अपने आदर्श यात्रा गंतव्य की खोज करें",
        startTest: "परीक्षण शुरू करें",
      },
      result: {
        correctCountry: "आपका आदर्श यात्रा गंतव्य",
        wrongCountry: "सबसे कम उपयुक्त यात्रा गंतव्य",
        startShare: "साझा करें",
        startTest: "परीक्षण शुरू करें",
        error: "गलत परिणाम पृष्ठ।",
        share: {
          title: "आपका आदर्श यात्रा गंतव्य",
          text: "आपका आदर्श यात्रा गंतव्य {{country}} है।\nकारण: {{reason}}",
          success: "सफलतापूर्वक साझा किया गया!",
          error: "इस वातावरण में साझा करना समर्थित नहीं है।",
        },
      },
      privatePolicy: {
        title: "गोपनीयता नीति",
        intro: "यह सेवा आपकी गोपनीयता को महत्व देती है और Google AdSense के माध्यम से प्रदान किए गए विज्ञापनों से संबंधित न्यूनतम जानकारी को संसाधित करती है।",
        sections: [
          {
            title: "1. एकत्र की जाने वाली व्यक्तिगत जानकारी",
            content:
              "यह सेवा सीधे व्यक्तिगत जानकारी एकत्र नहीं करती है। हालाँकि, Google AdSense के माध्यम से निम्नलिखित जानकारी स्वचालित रूप से एकत्र की जा सकती है:",
            list: ["आईपी पता", "कुकी जानकारी", "पृष्ठ विज़िट और क्लिक इवेंट"],
          },
          {
            title: "2. व्यक्तिगत जानकारी संसाधित करने का उद्देश्य",
            content:
              "एकत्र की गई जानकारी का उपयोग Google AdSense के माध्यम से व्यक्तिगत विज्ञापन प्रदान करने, उपयोगकर्ता अनुभव को बेहतर बनाने और ट्रैफ़िक विश्लेषण और आँकड़े उत्पन्न करने के लिए किया जाता है।",
          },
          {
            title: "3. Google AdSense के साथ सहयोग",
            content:
              "Google AdSense विज्ञापन वितरण प्रक्रिया के दौरान कुकीज़ के माध्यम से उपयोगकर्ता डेटा को संसाधित कर सकता है। Google की गोपनीयता नीति को",
            here: "यहाँ",
            content2: "देखा जा सकता है।",
          },
          {
            title: "4. उपयोगकर्ता विकल्प",
            content:
              "उपयोगकर्ता ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को अक्षम कर सकते हैं या डेटा संग्रह को अस्वीकार कर सकते हैं। विस्तृत निर्देशों के लिए कृपया अपने ब्राउज़र की सहायता अनुभाग देखें।",
          },
          {
            title: "5. संपर्क करें",
            content:
              "इस गोपनीयता नीति के संबंध में प्रश्नों के लिए, कृपया नीचे दिए गए ईमेल पते पर संपर्क करें:",
          },
        ],
        footer: "यह नीति 8 जनवरी 2025 से प्रभावी है।",
      },
      footer: {
        creator: "निर्माता",
        privacyPolicy: "गोपनीयता नीति",
      },
    },
  },
  ar: {
    translation: {
      title: "MBTI وجهات السفر",
      description: "اكتشف وجهة السفر المثالية لك!",
      home: {
        title: "اكتشف وجهة السفر المثالية الخاصة بك",
        startTest: "ابدأ الاختبار",
      },
      result: {
        correctCountry: "وجهة السفر المثالية الخاصة بك",
        wrongCountry: "أقل وجهة سفر ملاءمة",
        startShare: "شارك",
        startTest: "ابدأ الاختبار",
        error: "صفحة نتائج غير صحيحة.",
        share: {
          title: "وجهة السفر المثالية الخاصة بك",
          text: "وجهة السفر المثالية الخاصة بك هي {{country}}.\nالسبب: {{reason}}",
          success: "تمت المشاركة بنجاح!",
          error: "المشاركة غير مدعومة في هذا البيئة.",
        },
      },
      privatePolicy: {
        title: "سياسة الخصوصية",
        intro: "تقدّر هذه الخدمة خصوصيتك وتعالج الحد الأدنى من المعلومات المتعلقة بالإعلانات المقدمة من خلال Google AdSense.",
        sections: [
          {
            title: "1. المعلومات الشخصية التي يتم جمعها",
            content:
              "لا تجمع هذه الخدمة أي معلومات شخصية بشكل مباشر. ومع ذلك، قد يتم جمع المعلومات التالية تلقائيًا عبر Google AdSense:",
            list: ["عنوان IP", "معلومات الكوكيز", "زيارات الصفحات وأحداث النقر"],
          },
          {
            title: "2. الغرض من معالجة المعلومات الشخصية",
            content:
              "تُستخدم المعلومات المجمعة لتقديم إعلانات مخصصة عبر Google AdSense، وتحسين تجربة المستخدم، وإنشاء تحليلات وإحصائيات المرور.",
          },
          {
            title: "3. التعاون مع Google AdSense",
            content:
              "قد تقوم Google AdSense بمعالجة بيانات المستخدم من خلال الكوكيز أثناء عملية تقديم الإعلانات. يمكن مراجعة سياسة الخصوصية الخاصة بـ Google",
            here: "هنا",
            content2: ".",
          },
          {
            title: "4. خيارات المستخدم",
            content:
              "يمكن للمستخدمين تعطيل الكوكيز أو رفض جمع البيانات عبر إعدادات المتصفح. يرجى الرجوع إلى قسم المساعدة في متصفحك للحصول على تعليمات مفصلة.",
          },
          {
            title: "5. التواصل",
            content:
              "للاستفسارات المتعلقة بسياسة الخصوصية هذه، يرجى الاتصال بنا عبر عنوان البريد الإلكتروني التالي:",
          },
        ],
        footer: "تسري هذه السياسة اعتبارًا من 8 يناير 2025.",
      },
      footer: {
        creator: "المُنشئ",
        privacyPolicy: "سياسة الخصوصية",
      },
    },
  },
  pt: {
    translation: {
      title: "MBTI de destinos de viagem",
      description: "Encontre o destino de viagem perfeito para você!",
      home: {
        title: "Encontre o seu destino de viagem ideal",
        startTest: "Iniciar teste",
      },
      result: {
        correctCountry: "Seu destino de viagem ideal",
        wrongCountry: "Destino de viagem menos adequado",
        startShare: "Compartilhar",
        startTest: "Iniciar teste",
        error: "Página de resultados incorreta.",
        share: {
          title: "Seu destino de viagem ideal",
          text: "Seu destino de viagem ideal é {{country}}.\nMotivo: {{reason}}",
          success: "Compartilhado com sucesso!",
          error: "Compartilhamento não suportado neste ambiente.",
        },
      },
      privatePolicy: {
        title: "Política de Privacidade",
        intro: "Este serviço valoriza sua privacidade e processa apenas informações mínimas relacionadas a anúncios fornecidos pelo Google AdSense.",
        sections: [
          {
            title: "1. Informações pessoais coletadas",
            content:
              "Este serviço não coleta informações pessoais diretamente. No entanto, as seguintes informações podem ser coletadas automaticamente por meio do Google AdSense:",
            list: ["Endereço IP", "Informações de cookies", "Visitas de páginas e eventos de clique"],
          },
          {
            title: "2. Finalidade do processamento de informações pessoais",
            content:
              "As informações coletadas são usadas para fornecer anúncios personalizados por meio do Google AdSense, melhorar a experiência do usuário e gerar análises e estatísticas de tráfego.",
          },
          {
            title: "3. Colaboração com o Google AdSense",
            content:
              "O Google AdSense pode processar dados do usuário por meio de cookies durante o processo de entrega de anúncios. A política de privacidade do Google pode ser revisada",
            here: "aqui",
            content2: ".",
          },
          {
            title: "4. Opções do usuário",
            content:
              "Os usuários podem desativar cookies ou recusar a coleta de dados por meio das configurações do navegador. Consulte a seção de ajuda do seu navegador para obter instruções detalhadas.",
          },
          {
            title: "5. Contato",
            content:
              "Para dúvidas relacionadas a esta política de privacidade, entre em contato conosco pelo seguinte endereço de e-mail:",
          },
        ],
        footer: "Esta política entra em vigor a partir de 8 de janeiro de 2025.",
      },
      footer: {
        creator: "Criador",
        privacyPolicy: "Política de Privacidade",
      },
    },
  },
  ru: {
    translation: {
      title: "MBTI для выбора направления путешествия",
      description: "Найдите идеальное направление для вашего путешествия!",
      home: {
        title: "Найдите свое идеальное направление для путешествия",
        startTest: "Начать тест",
      },
      result: {
        correctCountry: "Ваше идеальное направление для путешествия",
        wrongCountry: "Наименее подходящее направление для путешествия",
        startShare: "Поделиться",
        startTest: "Начать тест",
        error: "Неверная страница результатов.",
        share: {
          title: "Ваше идеальное направление для путешествия",
          text: "Ваше идеальное направление для путешествия — {{country}}.\nПричина: {{reason}}",
          success: "Успешно поделено!",
          error: "Поделиться невозможно в данной среде.",
        },
      },
      privatePolicy: {
        title: "Политика конфиденциальности",
        intro: "Этот сервис ценит вашу конфиденциальность и обрабатывает минимальное количество информации, связанной с рекламой, предоставляемой через Google AdSense.",
        sections: [
          {
            title: "1. Собираемая личная информация",
            content:
              "Этот сервис не собирает личную информацию напрямую. Однако следующая информация может автоматически собираться через Google AdSense:",
            list: ["IP-адрес", "Информация о куки", "Посещения страниц и события кликов"],
          },
          {
            title: "2. Цели обработки личной информации",
            content:
              "Собранная информация используется для предоставления персонализированной рекламы через Google AdSense, улучшения пользовательского опыта и создания анализа трафика и статистики.",
          },
          {
            title: "3. Сотрудничество с Google AdSense",
            content:
              "Google AdSense может обрабатывать данные пользователей через куки во время процесса предоставления рекламы. Политику конфиденциальности Google можно просмотреть",
            here: "здесь",
            content2: ".",
          },
          {
            title: "4. Выбор пользователя",
            content:
              "Пользователи могут отключить куки или отказаться от сбора данных через настройки браузера. Пожалуйста, ознакомьтесь с разделом справки вашего браузера для получения подробных инструкций.",
          },
          {
            title: "5. Контакты",
            content:
              "Если у вас есть вопросы относительно этой политики конфиденциальности, пожалуйста, свяжитесь с нами по следующему адресу электронной почты:",
          },
        ],
        footer: "Эта политика вступает в силу с 8 января 2025 года.",
      },
      footer: {
        creator: "Создатель",
        privacyPolicy: "Политика конфиденциальности",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // 언어 감지 플러그인
  .use(initReactI18next) // React와 통합
  .init({
    resources,
    fallbackLng: "en", // 기본 언어
    interpolation: {
      escapeValue: false, // React 자동 escaping
    },
  });

export default i18n;