import {
  about1,
  medical1,
  coxmind,
  glyrosun,
  nyramind,
  seizmex,
  setmind,
  stromind,
  telotel,
  walmindDSR,
  walmindDSR2,
  injection,
  injection2,
  injection3,
} from "./assests/images";

const productData = [
  {
    id: 1,
    name: "Lacosunt Injection",
    description1:
      "Lacosunt Injection is the main product and is used to treat seizures and neurological disorders. It acts quickly to prevent seizures and stabilize brain activity. ",
    images: [injection, injection2, injection3],
    faqs: [
      {
        question: "What is Lacosunt Injection used for?",
        answer: "It is used to prevent seizures and stabilize brain activity.",
      },
      {
        question: "How quickly does it work?",
        answer: "Lacosunt acts quickly to prevent seizures.",
      },
      {
        question: "Are there any side effects?",
        answer: "Common side effects include dizziness and nausea.",
      },
      {
        question: "Is it safe for long-term use?",
        answer: "Consult a healthcare provider for long-term treatment plans.",
      },
    ],
  },
  {
    id: 2,
    name: "Walmind DSR",
    description1:
      "Walmind DSR helps manage gastrointestinal issues by reducing stomach acid and aiding in digestion. It contains rabeprazole and domperidone, which help prevent acid reflux and alleviate symptoms like heartburn and indigestion.",
    images: [walmindDSR, walmindDSR2, about1],
    faqs: [
      {
        question: "What is Walmind DSR used for?",
        answer:
          "It is used to treat conditions like GERD, acid reflux, and indigestion.",
      },
      {
        question: "How should I take Walmind DSR?",
        answer:
          "Take it 30 minutes before meals with water, without breaking the capsule.",
      },
      {
        question: "Can Walmind DSR be taken during pregnancy?",
        answer: "Consult a doctor before using it during pregnancy.",
      },
      {
        question: "Are there any side effects?",
        answer: "Common side effects include nausea, headache, and dizziness.",
      },
    ],
  },
  {
    id: 3,
    name: "Calastoplus",
    description1:
      "Calastoplus is a dietary supplement that supports calcium absorption and promotes bone health. It is commonly used to prevent or treat calcium deficiency in people with bone disorders.",
    images: [injection, seizmex, medical1],
    faqs: [
      {
        question: "What is Calastoplus used for?",
        answer:
          "It is used for calcium deficiency and improving bone strength.",
      },
      {
        question: "Can I take Calastoplus with other supplements?",
        answer: "Consult a healthcare provider for combining supplements.",
      },
      {
        question: "What are the possible side effects?",
        answer: "Rare side effects include bloating and constipation.",
      },
      {
        question: "How often should I take it?",
        answer: "Follow the prescribed dosage, generally once daily.",
      },
    ],
  },
  {
    id: 4,
    name: "Telotel-H",
    description1:
      "Telotel-H is used to manage high blood pressure (hypertension). It contains telmisartan and hydrochlorothiazide, which work together to lower blood pressure and reduce the risk of strokes and heart attacks.",
    images: [telotel, walmindDSR2, about1],
    faqs: [
      {
        question: "What does Telotel-H treat?",
        answer: "It is primarily used to treat hypertension.",
      },
      {
        question: "Are there any side effects?",
        answer: "Common side effects are dizziness and dehydration.",
      },
      {
        question: "How long do I need to take it?",
        answer:
          "It is typically a long-term treatment; consult your doctor for details.",
      },
      {
        question: "Can I stop taking it suddenly?",
        answer:
          "No, discontinuing it abruptly may cause serious complications.",
      },
    ],
  },
  {
    id: 5,
    name: "Glyrosun",
    description1:
      "Glyrosun is used to control blood sugar levels in patients with type 2 diabetes. It helps the body utilize insulin more effectively, reducing blood sugar spikes after meals.",
    images: [glyrosun, seizmex, medical1],
    faqs: [
      {
        question: "How does Glyrosun work?",
        answer:
          "It enhances insulin sensitivity and controls blood glucose levels.",
      },
      {
        question: "Can I take Glyrosun on an empty stomach?",
        answer: "It is usually taken with meals.",
      },
      {
        question: "What are the side effects?",
        answer:
          "Common side effects include low blood sugar and gastrointestinal discomfort.",
      },
      {
        question: "Can Glyrosun be taken with other diabetes medications?",
        answer: "Consult your healthcare provider for combining medications.",
      },
    ],
  },
  {
    id: 6,
    name: "Coximind",
    description1:
      "Coximind helps manage inflammatory conditions like arthritis. It contains anti-inflammatory agents that reduce pain and swelling.",
    images: [coxmind, walmindDSR2, about1],
    faqs: [
      {
        question: "What conditions does Coximind treat?",
        answer: "It is used for arthritis and other inflammatory disorders.",
      },
      {
        question: "Can Coximind be taken long-term?",
        answer: "Consult a doctor, as long-term use may lead to side effects.",
      },
      {
        question: "What are the potential side effects?",
        answer:
          "Nausea, dizziness, and gastrointestinal issues are common side effects.",
      },
      {
        question: "Can I take it with painkillers?",
        answer:
          "Consult a healthcare professional before combining medications.",
      },
    ],
  },
  {
    id: 7,
    name: "Naramind",
    description1:
      "Naramind is an anti-migraine tablet that helps relieve symptoms like headaches and nausea associated with migraines. It acts on the brain to ease pain and reduce migraine frequency.",
    images: [nyramind, seizmex, medical1],
    faqs: [
      {
        question: "What is Naramind used for?",
        answer: "It treats migraines and their associated symptoms.",
      },
      {
        question: "How soon does it work?",
        answer: "It starts relieving pain within 30 minutes to an hour.",
      },
      {
        question: "Can Naramind be taken daily?",
        answer: "It should be taken only when symptoms occur, not regularly.",
      },
      {
        question: "What are its side effects?",
        answer: "Common side effects include dizziness and drowsiness.",
      },
    ],
  },
  {
    id: 8,
    name: "Setmind (Injection)",
    description1:
      "Setmind is an injectable treatment used to manage severe pain, often in a clinical setting. It provides quick relief for patients experiencing acute pain. ",
    description2:
      "improves cognitive functions of the brain like memory attention and intelligence. 74 to 85% of piracetam recipients experienced improvements in arm pr leg mevements or aphasia Increase blood flow and oxygen to the brain, aid stroke recovery and improves alzheimers and downs syndrome Enhnces the speed and accuracy of reading, writing and spelling in dyslexic children Cerebro Vaacular Disesase  More efficacious for chronic alcoholics as it imprvoes enerogo",
    images: [setmind, injection2, injection3],
    faqs: [
      {
        question: "What is Setmind Injection used for?",
        answer: "It is used for acute pain management in clinical settings.",
      },
      {
        question: "How quickly does Setmind work?",
        answer: "It works within minutes to relieve pain.",
      },
      {
        question: "Are there any side effects?",
        answer: "Common side effects include drowsiness and nausea.",
      },
      {
        question: "Can it be used at home?",
        answer:
          "Setmind should only be administered by healthcare professionals.",
      },
    ],
  },
  {
    id: 9,
    name: "Stromind (Tablet + Injection)",
    description1:
      "Stromind is available in both tablet and injection forms and is used to treat inflammation and manage moderate pain. It is often prescribed for post-surgical pain management.",
    images: [stromind, seizmex, medical1],
    faqs: [
      {
        question: "What is Stromind used for?",
        answer:
          "It is used for inflammation and post-surgical pain management.",
      },
      {
        question: "How is Stromind administered?",
        answer: "It is available as both a tablet and an injection.",
      },
      {
        question: "Are there any side effects?",
        answer:
          "Side effects may include dizziness and gastrointestinal discomfort.",
      },
      {
        question: "Can I use both forms together?",
        answer: "Consult your doctor for proper dosage and form.",
      },
    ],
  },
  {
    id: 10,
    name: "Setrokind (Tablet)",
    description1:
      "Setrokind is used to manage chronic pain conditions and provide long-term relief from pain. It works by blocking pain signals in the brain.",
    images: [stromind, walmindDSR2, about1],
    faqs: [
      {
        question: "What is Setrokind used for?",
        answer: "It is used for chronic pain relief.",
      },
      {
        question: "How long does it take to work?",
        answer: "It can take 30 minutes to an hour to start relieving pain.",
      },
      {
        question: "Are there any side effects?",
        answer: "Common side effects include dizziness and nausea.",
      },
      {
        question: "Can I take Setrokind regularly?",
        answer: "Consult your doctor for long-term use instructions.",
      },
    ],
  },
];

export default productData;
