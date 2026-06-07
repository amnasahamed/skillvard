export const niosGuideMeta = {
  title: "NIOS Plus Two ഗൈഡ് — എല്ലാം ഒരു പേജിൽ",
  description:
    "NIOS എന്താണ്, അഡ്മിഷൻ സ്ട്രീമുകൾ, പരീക്ഷാ ടൈംലൈൻ, TMA, TOC, പൊതുവായ ചോദ്യങ്ങൾ — Skillvard NIOS ഗൈഡ്.",
};

export const guideHero = {
  eyebrowEn: "Complete NIOS guide",
  titleMl: "NIOS എന്താണ്? എങ്ങനെ പൂർത്തിയാക്കാം?",
  subtitleMl:
    "അഡ്മിഷൻ മുതൽ സർട്ടിഫിക്കറ്റ് വരെ — സ്ട്രീമുകൾ, പരീക്ഷകൾ, സമയരേഖ, പതിവ് ചോദ്യങ്ങൾ. എളുപ്പത്തിൽ മനസ്സിലാക്കാൻ.",
  backLabel: "← NIOS Plus Two പേജിലേക്ക്",
  backHref: "/nios-plus-two",
};

export const whatIsNios = {
  titleMl: "NIOS എന്താണ്?",
  titleEn: "National Institute of Open Schooling",
  bodyMl:
    "NIOS (National Institute of Open Schooling) ഭാരത സർക്കാരിന്റെ ഒരു ഓപ്പൺ സ്കൂളിംഗ് ബോർഡാണ്. CBSE, സംസ്ഥാന ബോർഡുകൾ എന്നിവയോട് തുല്യമായ സെക്കൻഡറി (10th)യും സീനിയർ സെക്കൻഡറി (Plus Two) സർട്ടിഫിക്കറ്റുകൾ നൽകുന്നു. സ്കൂളിൽ നേരിട്ട് പോകാനാവാത്തവർക്ക്, ജോലി ചെയ്യുന്നവർക്ക്, തോൽവി കൊണ്ട് നിർത്തിയവർക്ക് — സ്വന്തം വേഗത്തിൽ പഠിച്ച് പരീക്ഷ എഴുതാം.",
  facts: [
    {
      labelMl: "ആരുടെ കീഴിൽ",
      valueMl: "ഭാരത സർക്കാർ — വിദ്യാഭ്യാസ മന്ത്രാലയം",
      icon: "gov",
    },
    {
      labelMl: "ഔദ്യോഗിക വെബ്സൈറ്റ്",
      valueMl: "nios.ac.in",
      valueEn: "അഡ്മിഷൻ: sdmis.nios.ac.in",
      icon: "web",
    },
    {
      labelMl: "കേരള റീജിയണൽ സെന്റർ",
      valueMl: "കൊച്ചി — rckochi.nios.ac.in",
      icon: "location",
    },
    {
      labelMl: "അഡ്മിഷൻ കാലാവധി",
      valueMl: "രജിസ്റ്റർ ചെയ്ത തീയതി മുതൽ 5 വർഷം",
      icon: "calendar",
    },
  ],
};

export type JourneyStep = {
  step: number;
  titleMl: string;
  titleEn: string;
  bodyMl: string;
  tipMl?: string;
};

export const niosJourney = {
  titleMl: "NIOS പാത — അഡ്മിഷൻ മുതൽ സർട്ടിഫിക്കറ്റ് വരെ",
  subtitleEn: "Your path from registration to certificate",
  steps: [
    {
      step: 1,
      titleMl: "യോഗ്യത പരിശോധിക്കുക",
      titleEn: "Check eligibility",
      bodyMl:
        "Plus Two-ന് SSLC (10th) പാസ് ആയിരിക്കണം. പ്രായം കുറഞ്ഞത് 15 വയസ്. ആവശ്യമായ രേഖകൾ (ആധാർ, ഫോട്ടോ, ഒപ്പ്, SSLC ബുക്ക്) തയ്യാറാക്കുക.",
    },
    {
      step: 2,
      titleMl: "ശരിയായ സ്ട്രീം തിരഞ്ഞെടുക്കുക",
      titleEn: "Choose the right stream",
      bodyMl:
        "പുതിയ വിദ്യാർത്ഥി → Stream 1. ബോർഡ് പരീക്ഷയിൽ തോർന്നവർ → Stream 2 (TOC ലാഭം). വർഷം മുഴുവൻ ഫ്ലെക്സിബിൾ പരീക്ഷ → Stream 3/4 (On-Demand). തെറ്റായ സ്ട്രീം = TOC നഷ്ടം.",
      tipMl: "തോർന്നവർ Stream 1-ൽ അപേക്ഷിച്ചാൽ പാസായ വിഷയങ്ങൾ വീണ്ടും എഴുതേണ്ടി വരും.",
    },
    {
      step: 3,
      titleMl: "ഓൺലൈൻ അഡ്മിഷൻ",
      titleEn: "Online registration",
      bodyMl:
        "sdmis.nios.ac.in-ൽ 100% ഓൺലൈൻ രജിസ്ട്രേഷൻ. വിഷയങ്ങൾ തിരഞ്ഞെടുക്കുക (കുറഞ്ഞത് 5, പരമാവധി 7). ഫീസ് അടച്ച് എൻറോൾമെന്റ് നമ്പർ സൂക്ഷിക്കുക.",
    },
    {
      step: 4,
      titleMl: "അഡ്മിഷൻ സ്ഥിരീകരണം",
      titleEn: "Admission confirmed",
      bodyMl:
        "NIOS Identity Card, പഠന സാമഗ്രി (പുസ്തകങ്ങൾ) ലഭിക്കും. Study Centre / AI-യുമായി ബന്ധപ്പെടാം. വിവരങ്ങളിൽ തെറ്റുണ്ടെങ്കിൽ ഉടൻ തിരുത്തുക.",
    },
    {
      step: 5,
      titleMl: "പഠനം + TMA",
      titleEn: "Study & submit TMA",
      bodyMl:
        "Stream 1-ൽ ഓരോ തിയറി വിഷയത്തിനും TMA (Tutor Marked Assignment) നിർബന്ധം — മൊത്തം മാർക്കിന്റെ 20%. ഹസ്തലിഖിതം, ഓൺലൈൻ അപ്‌ലോഡ് മാത്രം. Stream 2-ൽ TMA ഇല്ല.",
      tipMl: "April ബ്ലോക്ക്: TMA ജനുവരി 31 വരെ. October ബ്ലോക്ക്: ജൂലൈ 31 വരെ.",
    },
    {
      step: 6,
      titleMl: "പരീക്ഷ ഫീസ് + അഡ്മിറ്റ് കാർഡ്",
      titleEn: "Exam fee & admit card",
      bodyMl:
        "Public Exam-ന് പരീക്ഷാ ഫീസ് അടച്ച് രജിസ്റ്റർ ചെയ്യുക. അഡ്മിറ്റ് കാർഡ് nios.ac.in-ൽ ഡൗൺലോഡ്. Science വിഷയങ്ങൾക്ക് പ്രായോഗിക പരീക്ഷയും ഉണ്ട്.",
    },
    {
      step: 7,
      titleMl: "പരീക്ഷ എഴുതുക",
      titleEn: "Appear for exam",
      bodyMl:
        "Public Exam: വർഷത്തിൽ രണ്ടുതവണ (ഏപ്രിൽ–മേയ്, ഒക്ടോബർ–നവംബർ). On-Demand Exam: തയ്യാറാകുമ്പോൾ സ്ലോട്ട് ബുക്ക് — ഏപ്രിൽ/മേയ്, ഒക്ടോബർ/നവംബർ ഒഴികെ.",
    },
    {
      step: 8,
      titleMl: "ഫലം + സർട്ടിഫിക്കറ്റ്",
      titleEn: "Results & certificate",
      bodyMl:
        "5 വിഷയങ്ങളിൽ പാസ് (ഒന്നോ രണ്ടോ ഭാഷ + മൂന്നോ നാലോ മറ്റ് വിഷയങ്ങൾ) → Plus Two സർട്ടിഫിക്കറ്റ്. April സെഷൻ ഫലം സാധാരണയായി ജൂണിൽ; October സെഷൻ ഡിസംബർ/ജനുവരിയിൽ.",
    },
  ] as JourneyStep[],
};

export const annualCycle = {
  titleMl: "വാർഷിക അഡ്മിഷൻ & പരീക്ഷാ ചക്രം",
  subtitleEn: "Two blocks every year — plan your timeline",
  blocks: [
    {
      name: "Block 1",
      seasonMl: "ഏപ്രിൽ–മേയ് പരീക്ഷ",
      registerMl: "രജിസ്ട്രേഷൻ: സാധാരണയായി മാർച്ച് – സെപ്റ്റംബർ",
      registerNoteMl: "ലേറ്റ് ഫീയോടെ സെപ്റ്റംബർ 15 വരെ (വർഷം തിരിച്ച് മാറാം)",
      examMl: "പരീക്ഷ: ഏപ്രിൽ – മേയ്",
      resultMl: "ഫലം: ജൂൺ",
      color: "lime",
    },
    {
      name: "Block 2",
      seasonMl: "ഒക്ടോബർ–നവംബർ പരീക്ഷ",
      registerMl: "രജിസ്ട്രേഷൻ: സാധാരണയായി സെപ്റ്റംബർ – ജനുവരി",
      registerNoteMl: "ലേറ്റ് ഫീയോടെ മാർച്ച് 15 വരെ (വർഷം തിരിച്ച് മാറാം)",
      examMl: "പരീക്ഷ: ഒക്ടോബർ – നവംബർ",
      resultMl: "ഫലം: ഡിസംബർ / ജനുവരി",
      color: "dark",
    },
  ],
  noteMl:
    "ഏറ്റവും പുതിയ തീയതികൾക്ക് nios.ac.in നോട്ടിഫിക്കേഷനുകൾ പരിശോധിക്കുക. Skillvard-നോട് WhatsApp-ൽ ചോദിച്ച് നിങ്ങളുടെ സാഹചര്യത്തിന് ശരിയായ ബ്ലോക്ക് കണ്ടെത്താം.",
};

export type StreamInfo = {
  id: string;
  name: string;
  forWhomMl: string;
  examMl: string;
  tmaMl: string;
  tocMl: string;
  bestForMl: string;
  highlight?: boolean;
};

export const niosStreams = {
  titleMl: "അഡ്മിഷൻ സ്ട്രീമുകൾ — ഏത് നിങ്ങൾക്ക്?",
  subtitleEn: "Choosing the wrong stream is the most common costly mistake",
  streams: [
    {
      id: "stream-1",
      name: "Stream 1",
      forWhomMl: "പുതിയ വിദ്യാർത്ഥികൾ (ആദ്യമായി NIOS)",
      examMl: "Public Exam — ഏപ്രിൽ അല്ലെങ്കിൽ ഒക്ടോബർ",
      tmaMl: "ഉണ്ട് — നിർബന്ധം",
      tocMl: "TOC ലഭ്യം (മുൻ ബോർഡ് പാസ് വിഷയങ്ങൾ)",
      bestForMl: "സ്കൂൾ വിട്ടവർ, ഫ്രഷ് ഓപ്പൺ സ്കൂളിംഗ്",
    },
    {
      id: "stream-2",
      name: "Stream 2",
      forWhomMl: "ബോർഡ് പരീക്ഷയിൽ തോർന്ന / കംപാർട്ട്മെന്റ് വിദ്യാർത്ഥികൾ",
      examMl: "പ്രധാനമായും ഒക്ടോബർ–നവംബർ Public Exam",
      tmaMl: "ഇല്ല",
      tocMl: "അത്യാവശ്യം — 2 വിഷയം വരെ കടത്താം",
      bestForMl: "ഒരു അക്കാദമിക് വർഷം ലാഭിക്കാൻ — തോർന്ന വിഷയം മാത്രം",
      highlight: true,
    },
    {
      id: "stream-3-4",
      name: "Stream 3 & 4",
      forWhomMl: "On-Demand പരീക്ഷ വേണം — 10th (S3) / 12th (S4)",
      examMl: "വർഷം മുഴുവൻ സ്ലോട്ട് ബുക്ക് (ODE)",
      tmaMl: "ഇല്ല",
      tocMl: "ലഭ്യം",
      bestForMl: "ഉടനെ സർട്ടിഫിക്കറ്റ്, ഫ്ലെക്സിബിൾ ഷെഡ്യൂൾ",
    },
  ] as StreamInfo[],
  tocExplain: {
    titleMl: "TOC (Transfer of Credit) എന്താണ്?",
    bodyMl:
      "മുമ്പ് CBSE, ICSE, സംസ്ഥാന ബോർഡ് എന്നിവയിൽ പാസായ വിഷയങ്ങളുടെ മാർക്ക് NIOS-ിലേക്ക് കടത്താം — പരമാവധി 2 വിഷയം. അപ്പോൾ ആ വിഷയങ്ങൾ വീണ്ടും എഴുതേണ്ട. Stream 2-ൽ തോർന്നവർക്ക് ഇത് വലിയ ലാഭമാണ്.",
  },
};

export const examTypes = {
  titleMl: "രണ്ട് തരം പരീക്ഷകൾ",
  subtitleEn: "Public Exam vs On-Demand Examination (ODE)",
  types: [
    {
      nameMl: "Public Exam",
      nameEn: "Scheduled twice a year",
      pointsMl: [
        "വർഷത്തിൽ രണ്ടുതവണ — ഏപ്രിൽ–മേയ്, ഒക്ടോബർ–നവംബർ",
        "എല്ലാ NIOS രജിസ്റ്റർ ചെയ്ത വിദ്യാർത്ഥികൾക്കും",
        "ഡേറ്റ് ഷീറ്റ് nios.ac.in-ൽ പ്രസിദ്ധീകരിക്കും",
        "Stream 1, Stream 2 — പ്രധാന പരീക്ഷാ മാർഗം",
      ],
    },
    {
      nameMl: "On-Demand Exam (ODE)",
      nameEn: "Book when you are ready",
      pointsMl: [
        "തയ്യാറാകുമ്പോൾ സ്ലോട്ട് ബുക്ക് — വർഷം മുഴുവൻ",
        "ഏപ്രിൽ, മേയ്, ഒക്ടോബർ, നവംബർ മാസങ്ങളിൽ ODE ഇല്ല",
        "ഫലം സാധാരണയായി ഒരു മാസത്തിനുള്ളിൽ",
        "Stream 3 (10th), Stream 4 (12th) — അല്ലെങ്കിൽ ODE സെന്ററിൽ",
      ],
    },
  ],
};

export const documentsSection = {
  titleMl: "ആവശ്യമായ രേഖകൾ",
  subtitleEn: "Keep these ready before you apply — JPG/JPEG format for uploads",
  required: [
    {
      titleMl: "എല്ലാ അപേക്ഷകർക്കും",
      items: [
        { ml: "ജനന സർട്ടിഫിക്കറ്റ് / ജനന തീയതി തെളിവ്", en: "Birth certificate or DOB proof" },
        { ml: "SSLC / 10th മാർക്ക് ഷീറ്റ് അല്ലെങ്കിൽ ബുക്ക്", en: "Class 10 pass certificate" },
        { ml: "ആധാർ കാർഡ് അല്ലെങ്കിൽ സർക്കാർ ID", en: "Aadhaar or valid ID" },
        { ml: "പാസ്‌പോർട്ട് സൈസ് കളർ ഫോട്ടോ", en: "Recent passport-size photo" },
        { ml: "കറുത്ത മഷിയിൽ ഒപ്പ്", en: "Signature in black ink" },
        { ml: "വിലാസ തെളിവ്", en: "Proof of residence" },
      ],
    },
    {
      titleMl: "Stream 2 / TOC-ക്ക് അതിരികെ",
      items: [
        {
          ml: "ഒറിജിനൽ ഫെയിൽ / കംപാർട്ട്മെന്റ് മാർക്ക് ഷീറ്റ്",
          en: "Original fail marksheet from previous board",
          important: true,
        },
        {
          ml: "അഡ്മിഷൻ സ്ഥിരീകരണത്തിന് ശേഷം 10 ദിവസത്തിനുള്ളിൽ Regional Centre-യിൽ സമർപ്പിക്കുക",
          en: "Submit to RC within 10 days of admission confirmation",
          important: true,
        },
        { ml: "ലാമിനേറ്റ് ചെയ്ത മാർക്ക് ഷീറ്റ് സ്വീകരിക്കില്ല", en: "Laminated marksheets not accepted" },
        { ml: "ഓൺലൈൻ അഡ്മിഷൻ ഫോം / acknowledgement കോപ്പി കൂടെ", en: "Copy of admission form with enrollment no." },
      ],
    },
    {
      titleMl: "ആവശ്യമെങ്കിൽ മാത്രം",
      items: [
        { ml: "SC/ST/OBC സർട്ടിഫിക്കറ്റ് (ഗസറ്റഡ് ഓഫീസർ അറ്റെസ്റ്റ്)", en: "Category certificate if applicable" },
        { ml: "എക്സ്-സർവിസ്മെൻ സർട്ടിഫിക്കറ്റ്", en: "Ex-serviceman certificate" },
        { ml: "വൈകല്യ സർട്ടിഫിക്കറ്റ് (സർക്കാർ ആശുപത്രി)", en: "Disability certificate from govt hospital" },
      ],
    },
  ],
  tips: [
    "എല്ലാ രേഖകളും JPG/JPEG ആയി സ്കാൻ ചെയ്ത് അപ്‌ലോഡ് ചെയ്യുക — രേഖകളില്ലാത്ത അപേക്ഷ നിരസിക്കാം.",
    "TOC വിഷയങ്ങൾ അഡ്മിഷൻ ഫോമിൽ ശരിയായി നൽകുക — ബോർഡ് പേര്, വർഷം, രോൾ നമ്പർ, മാർക്ക്.",
    "രേഖകൾ തയ്യാറാക്കാൻ Skillvard WhatsApp-ൽ സഹായം ലഭ്യം.",
  ],
};

export const passMarksToc = {
  titleMl: "പാസ് മാർക്ക് & TOC നിയമങ്ങൾ",
  subtitleEn: "Pass criteria and Transfer of Credit — read before choosing Stream 2",
  passCriteria: {
    titleMl: "പാസാകാൻ എന്ത് വേണം?",
    items: [
      {
        titleMl: "കുറഞ്ഞത് 5 വിഷയം പാസ്",
        bodyMl: "ഒന്നോ രണ്ടോ ഭാഷ (Group A) + മൂന്നോ നാലോ മറ്റ് വിഷയങ്ങൾ — എല്ലാം മൊത്തത്തിൽ പാസ്.",
      },
      {
        titleMl: "തിയറി — കുറഞ്ഞത് 33%",
        bodyMl: "ഓരോ തിയറി വിഷയത്തിലും സാധാരണയായി 33% മാർക്ക് (നിങ്ങളുടെ കാറ്റഗറി അനുസരിച്ച് NEET/JEE-ക്ക് വ്യത്യാസം ഉണ്ടാകും).",
      },
      {
        titleMl: "പ്രായോഗികം — തനി വേർതിരിച്ച്",
        bodyMl: "Physics, Chemistry, Biology, Home Science, Computer Science തുടങ്ങിയവയ്ക്ക് theory + practical വേർതിരിച്ച് പാസാകണം.",
      },
      {
        titleMl: "Stream 1-ൽ TMA",
        bodyMl: "TMA മാർക്ക് (20%) theory മാർക്കിനോട് ചേർത്താണ്. Stream 2-ൽ TMA ഇല്ല.",
      },
    ],
  },
  tocRules: {
    titleMl: "TOC — കടത്താവുന്ന നിയമങ്ങൾ",
    items: [
      "പരമാവധി 2 വിഷയം മുമ്പത്തെ അംഗീകൃത ബോർഡിൽ നിന്ന് കടത്താം.",
      "ആ വിഷയങ്ങൾ കഴിഞ്ഞ 5 വർഷത്തിനുള്ളിൽ കുറഞ്ഞത് 33% മാർക്കോടെ പാസായിരിക്കണം.",
      "പ്രായോഗികമുള്ള വിഷയങ്ങൾക്ക് — theory-യും practical-ും വേർതിരിച്ച് പാസായിരിക്കണം TOC-ക്ക്.",
      "കോഴ്സ് മൊത്തം പാസായവർ TOC-ക്ക് അർഹരല്ല — Dual/Part Admission വേറെ സ്കീം.",
      "ഒറിജിനൽ ഫെയിൽ മാർക്ക് ഷീറ്റ് Regional Centre-യിൽ സമർപ്പിക്കാതെ TOC അപ്ഡേറ്റ് ആകണമെന്ന് ഉറപ്പില്ല.",
      "10 ദിവസത്തിന് ശേഷം സമർപ്പിച്ചാൽ TOC-ക്ക് ലേറ്റ് ഫീ ബാധകം — e-service വഴി.",
    ],
    failMarksheet: {
      titleMl: "ഫെയിൽ മാർക്ക് ഷീറ്റ് — എന്തുകൊണ്ട് നിർണായകം?",
      bodyMl:
        "Stream 2 / TOC അപേക്ഷിക്കുമ്പോൾ മുമ്പത്തെ ബോർഡിന്റെ ഒറിജിനൽ ഫെയിൽ അല്ലെങ്കിൽ കംപാർട്ട്മെന്റ് റിസൽട്ട് അനിവാര്യം. ഫോട്ടോകോപ്പി മാത്രം പോരാ. എൻറോൾമെന്റ് നമ്പർ മാർക്ക് ഷീറ്റിന്റെ പിൻഭാഗത്ത് എഴുതി, അഡ്മിഷൻ ഫോം കോപ്പിയോടെ Regional Centre-യിലേക്ക് അയയ്ക്കുക (തപാൽ അല്ലെങ്കിൽ നേരിട്ട്).",
    },
  },
};

export const subjectGroups = {
  titleMl: "വിഷയ ഗ്രൂപ്പുകൾ & കരിയർ കോമ്പിനേഷനുകൾ",
  subtitleEn: "Pick subjects that match your goal — NEET, engineering, or general degree",
  groups: [
    {
      code: "A",
      nameMl: "ഭാഷകൾ",
      nameEn: "Languages",
      examples: "മലയാളം (343), ഇംഗ്ലീഷ് (302), ഹിന്ദി (301)…",
      noteMl: "കുറഞ്ഞത് 1, പരമാവധി 2 ഭാഷകൾ.",
    },
    {
      code: "B–F",
      nameMl: "അക്കാദമിക് വിഷയങ്ങൾ",
      nameEn: "Academic subjects",
      examples: "Maths, Physics, Chemistry, Biology, History, Commerce…",
      noteMl: "ചില വിഷയങ്ങൾ ഒരേ ദിവസം പരീക്ഷ — ഷെഡ്യൂൾ പരിശോധിക്കുക.",
    },
  ],
  careerPaths: [
    {
      goalMl: "എഞ്ചിനീയറിംഗ് (JEE / B.Tech)",
      subjectsMl: "PCM + ഇംഗ്ലീഷ്",
      detailMl: "Physics (312), Chemistry (313), Mathematics (311), English (302). പ്രായോഗിക പരീക്ഷകൾ പൂർത്തിയാക്കണം.",
      tag: "PCM",
    },
    {
      goalMl: "മെഡിക്കൽ (NEET / MBBS)",
      subjectsMl: "PCB + ഇംഗ്ലീഷ്",
      detailMl: "Physics, Chemistry, Biology (314), English. NIOS Gov. recognized — GMER പ്രകാരം NEET-ക്ക് യോഗ്യത (വിഷയ കോമ്പിനേഷൻ + മാർക്ക് നിയമങ്ങൾ പാലിക്കണം).",
      tag: "PCB",
    },
    {
      goalMl: "PCM ഉണ്ട്, Biology വേണം (NEET)",
      subjectsMl: "Biology അധിക വിഷയമായി",
      detailMl: "NMC ഗൈഡൻസ് പ്രകാരം PCM-നോട് Biology/Biotechnology അധിക വിഷയമായി NIOS-ൽ എടുക്കാം (Part/Dual admission). NEET/JEE നിയമങ്ങൾ വർഷം തിരിച്ച് പരിശോധിക്കുക.",
      tag: "PCM+B",
    },
    {
      goalMl: "കൊമേഴ്സ് / ഡിഗ്രി",
      subjectsMl: "Accountancy, Economics, Business Studies…",
      detailMl: "ബിസിനസ്, ബാങ്കിംഗ്, B.Com തുടങ്ങിയ മാർഗങ്ങൾ. Science പ്രായോഗികം ഇല്ല.",
      tag: "Commerce",
    },
    {
      goalMl: "ഹ്യൂമാനിറ്റീസ്",
      subjectsMl: "History, Political Science, Geography…",
      detailMl: "സിവിൽ സർവീസ്, ലോ, സോഷ്യൽ വർക്ക്, ആർട്സ് ഡിഗ്രി.",
      tag: "Arts",
    },
  ],
  clashNoteMl:
    "Physics, History, Environmental Science ഒരേ ദിവസം; Chemistry, Political Science ഒരേ ദിവസം — ഇങ്ങനെ ഗ്രൂപ്പ് C–F-ൽ ഷെഡ്യൂൾ ക്ലാഷുകൾ ഉണ്ട്. വിഷയം തിരഞ്ഞെടുക്കുമ്പോൾ nios.ac.in ഡേറ്റ് ഷീറ്റ് മുൻകൂട്ടി നോക്കുക.",
};

export const pcpPractical = {
  titleMl: "PCP & പ്രായോഗിക പരീക്ഷകൾ",
  subtitleEn: "Personal Contact Programme and lab exams — often overlooked",
  pcp: {
    titleMl: "PCP (Personal Contact Programme) എന്താണ്?",
    bodyMl:
      "NIOS സ്വയം പഠന മോഡൽ ആണ് — പക്ഷേ സംശയ നിവാരണത്തിന് Study Centre-യിൽ Personal Contact Programme നടക്കും. പൂർണ്ണ ടൈം സ്കൂൾ ക്ലാസ് അല്ല; വീക്കെൻഡ്/അവധി ദിവസങ്ങളിൽ ചെറിയ സെഷനുകൾ.",
    points: [
      "തിയറി വിഷയങ്ങൾ: 30 PCP സെഷൻ — അതിൽ 15 നിർബന്ധം (Stream 1).",
      "Stream 1 Block 1: PCP സാധാരണയായി നവംബർ മുതൽ; Block 2: മേയ് മുതൽ.",
      "Study Centre-യിൽ PCP-ക്ക് അധിക പണം അടയ്ക്കരുത് — NIOS നിയമം.",
      "Stream 2, Stream 3/4-ൽ TMA/PCP നിയമങ്ങൾ വ്യത്യാസം — സ്ട്രീം അനുസരിച്ച്.",
    ],
  },
  practical: {
    titleMl: "പ്രായോഗിക പരീക്ഷ",
    bodyMl:
      "Science & technical വിഷയങ്ങൾക്ക് theory-യോടൊപ്പം practical exam ഉണ്ട്. Study Centre-യിൽ PCP പ്രായോഗിക സെഷനുകൾ (5 സെഷൻ) — ഫോർമേറ്റീവ് + സമ്മേറ്റീവ് മാർക്ക്.",
    subjectsMl: "Physics, Chemistry, Biology, Home Science, Computer Science, Painting, Data Entry Operations…",
    points: [
      "5 പ്രായോഗിക PCP സെഷനുകൾ നിർബന്ധം — ഹാജരാകാതെ practical പാസാകാൻ പ്രയാസം.",
      "പ്രായോഗിക അഡ്മിറ്റ് കാർഡും theory-യിൽ നിന്ന് വേർതിരിച്ച് വരും.",
      "Practical ഡേറ്റ് ഷീറ്റ് nios.ac.in-ൽ പ്രത്യേകം പ്രസിദ്ധീകരിക്കും.",
      "TOC-ക്ക്: മുമ്പ് ബോർഡിൽ theory + practical വേർതിരിച്ച് പാസായിരിക്കണം.",
    ],
  },
};

export const subjectRules = {
  titleMl: "വിഷയങ്ങൾ — എത്ര എടുക്കാം?",
  rules: [
    {
      titleMl: "കുറഞ്ഞത് 5 വിഷയം",
      bodyMl: "പാസ് സർട്ടിഫിക്കറ്റിന് — ഒന്നോ രണ്ടോ ഭാഷ (Group A) + മൂന്നോ നാലോ മറ്റ് വിഷയങ്ങൾ.",
    },
    {
      titleMl: "പരമാവധി 7 വിഷയം",
      bodyMl: "അധിക വിഷയങ്ങൾ തിരഞ്ഞെടുക്കാം; പക്ഷേ ആദ്യ Public Exam-ൽ വിഷയം മാറ്റം അനുവദനീയമല്ല.",
    },
    {
      titleMl: "വിഷയം മാറ്റം",
      bodyMl: "5 വർഷത്തിനുള്ളിൽ, രജിസ്ട്രേഷൻ മുതൽ 4 വർഷത്തിനുള്ളിൽ മാത്രം. പാസായ വിഷയം മാറ്റാൻ പറ്റില്ല.",
    },
    {
      titleMl: "ഭാഷ & മീഡിയം",
      bodyMl: "മലയാളം (343), ഇംഗ്ലീഷ്, ഹിന്ദി ഉൾപ്പെടെ പല ഭാഷകൾ. Science ഒഴികെ പല വിഷയങ്ങളും മലയാളം/ഇംഗ്ലീഷിൽ പരീക്ഷ എഴുതാം.",
    },
  ],
  popularMl: "കേരളത്തിൽ സാധാരണം: Humanities, Commerce, Science, Computer Science സ്ട്രീമുകൾ.",
};

export type FaqCategory = {
  id: string;
  titleMl: string;
  titleEn: string;
  items: { q: string; a: string }[];
};

export const niosGuideFaqs: FaqCategory[] = [
  {
    id: "basics",
    titleMl: "NIOS അടിസ്ഥാനം",
    titleEn: "Basics",
    items: [
      {
        q: "NIOS സർട്ടിഫിക്കറ്റ് മറ്റ് ബോർഡുകളോട് തുല്യമാണോ?",
        a: "അതെ. NIOS ഭാരത സർക്കാരിന്റെ ഓപ്പൺ സ്കൂളിംഗ് ബോർഡാണ്. Plus Two സർട്ടിഫിക്കറ്റ് ഉയർന്ന വിദ്യാഭ്യാസം, ജോലി, എഞ്ചിനീയറിംഗ്/മെഡിക്കൽ അഡ്മിഷൻ എന്നിവയ്ക്ക് സാധാരണയായി അംഗീകരിക്കപ്പെടുന്നു (വിശിഷ്ട സ്ഥാപന നിയമങ്ങൾ പാലിക്കണം).",
      },
      {
        q: "NIOS-ൽ നേരിട്ട് Plus Two-യിൽ അഡ്മിഷൻ എടുക്കാമോ?",
        a: "അതെ — SSLC/10th ഒരു അംഗീകൃത ബോർഡിൽ നിന്ന് പാസ് ആണെങ്കിൽ Senior Secondary (Plus Two)-യിൽ നേരിട്ട് അഡ്മിഷൻ എടുക്കാം. പ്രായം കുറഞ്ഞത് 15.",
      },
      {
        q: "അഡ്മിഷൻ എത്ര വർഷം സാധുതയുള്ളത്?",
        a: "രജിസ്റ്റർ ചെയ്ത തീയതി മുതൽ 5 വർഷം. ഈ കാലത്തിനുള്ളിൽ പരീക്ഷ എഴുതി കോഴ്സ് പൂർത്തിയാക്കാം. 5 വർഷം കഴിഞ്ഞാൽ Re-admission — പാസായ വിഷയങ്ങൾ (പരമാവധി 4) കടത്താം.",
      },
      {
        q: "അഡ്മിഷൻ എങ്ങനെ? ഓഫ്ലൈൻ വേണോ?",
        a: "100% ഓൺലൈൻ — sdmis.nios.ac.in. Study Centre, Regional Centre, Common Service Centre എന്നിവയിൽ സഹായം ലഭിക്കും. വർഷം മുഴുവൻ 24×7 ഓൺലൈൻ അഡ്മിഷൻ സൗകര്യം.",
      },
    ],
  },
  {
    id: "streams",
    titleMl: "സ്ട്രീമുകൾ & TOC",
    titleEn: "Streams & TOC",
    items: [
      {
        q: "Stream 1, 2, 3, 4 — എന്ത് വ്യത്യാസം?",
        a: "Stream 1: പുതിയവർ. Stream 2: ബോർഡിൽ തോർന്നവർ — TOC ഉപയോഗിച്ച് പാസ് വിഷയം കടത്താം. Stream 3/4: On-Demand പരീക്ഷ — വർഷം മുഴുവൻ ഫ്ലെക്സിബിൾ. തോർന്നവർ Stream 1 തിരഞ്ഞെടുത്താൽ TOC നഷ്ടപ്പെടാം.",
      },
      {
        q: "TOC (Transfer of Credit) എങ്ങനെ പ്രയോജനപ്പെടുത്താം?",
        a: "മുമ്പ് അംഗീകൃത ബോർഡിൽ പാസായ വിഷയങ്ങൾ (പരമാവധി 2) NIOS-ിലേക്ക് കടത്താം. അവ വീണ്ടും എഴുതേണ്ട. തോർന്ന വിഷയങ്ങൾ + പുതിയ വിഷയങ്ങൾ ചേർത്ത് മൊത്തം 5 വിഷയം പൂർത്തിയാക്കണം.",
      },
      {
        q: "ഒരു വിഷയം മാത്രം തോർന്നാൽ Stream 2 എടുക്കാമോ?",
        a: "അതെ. ഒരു വിഷയം മാത്രം fail/compartment ആണെങ്കിലും Stream 2-ൽ അപേക്ഷിക്കാം. TOC-യോടെ പാസ് വിഷയങ്ങൾ കടത്തി, തോർന്ന വിഷയം മാത്രം വീണ്ടും എഴുതാം.",
      },
      {
        q: "ഇതിനകം Plus Two പാസ് ആയവർ NIOS-ൽ വീണ്ടും ചേരാമോ?",
        a: "Dual/Part Admission — അതേ ലെവലിൽ പരമാവധി 4 വിഷയം മാത്രം. പൂർത്തിയാക്കിയാൽ Mark Sheet മാത്രം; Certificate issued under this scheme ഇല്ല.",
      },
      {
        q: "Stream 2 vs Improvement — എന്ത് വ്യത്യാസം?",
        a: "Stream 2: ബോർഡ് പരീക്ഷയിൽ തോർന്ന/കംപാർട്ട്മെന്റ് — കോഴ്സ് പൂർത്തിയായിട്ടില്ല. TOC-യോടെ പാസ് വിഷയം കടത്തി തോർന്നത് മാത്രം എഴുതാം. Improvement: കോഴ്സ് മൊത്തം പാസ് ആയിട്ടും മാർക്ക് മെച്ചപ്പെടുത്താൻ — വ്യത്യസ്ത അപേക്ഷ, Stream 2 അല്ല. തെറ്റായ കാറ്റഗറി = നിരസണം + കാലം നഷ്ടം.",
      },
      {
        q: "പാസ് ആയിട്ടും മാർക്ക് കുറവാണ് — Stream 2 എടുക്കാമോ?",
        a: "ഇല്ല. Stream 2 തോർന്ന/കംപാർട്ട്മെന്റ് വിദ്യാർത്ഥികൾക്ക് മാത്രം. മാർക്ക് മെച്ചപ്പെടുത്താൻ Improvement അല്ലെങ്കിൽ Dual/Part Admission (വിഷയം തിരഞ്ഞെടുത്ത് വീണ്ടും എഴുതൽ) പോലുള്ള മാർഗം — Skillvard-നോട് നിങ്ങളുടെ മാർക്ക് ഷീറ്റ് കാണിച്ച് ശരിയായ ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക.",
      },
      {
        q: "ഫെയിൽ മാർക്ക് ഷീറ്റ് എപ്പോൾ അയയ്ക്കണം?",
        a: "അഡ്മിഷൻ സ്ഥിരീകരണത്തിന് ശേഷം 10 ദിവസത്തിനുള്ളിൽ concerned Regional Centre-യിലേക്ക് ഒറിജിനൽ ഫെയിൽ മാർക്ക് ഷീറ്റ് + അഡ്മിഷൻ acknowledgement. വൈകിയാൽ TOC ലേറ്റ് ഫീ. ഫോട്ടോകോപ്പി മാത്രം പോരാ.",
      },
    ],
  },
  {
    id: "exams",
    titleMl: "പരീക്ഷകൾ & TMA",
    titleEn: "Exams & TMA",
    items: [
      {
        q: "TMA എന്താണ്? നിർബന്ധമാണോ?",
        a: "Tutor Marked Assignment — തിയറി വിഷയത്തിന്റെ 20% മാർക്ക്. Stream 1-ൽ നിർബന്ധം. ഹസ്തലിഖിതം, student portal-ൽ upload. Stream 2-ൽ TMA ഇല്ല.",
      },
      {
        q: "Public Exam എപ്പോൾ?",
        a: "വർഷത്തിൽ രണ്ടുതവണ: ഏപ്രിൽ–മേയ് (Block 1), ഒക്ടോബർ–നവംബർ (Block 2). ഡേറ്റ് ഷീറ്റ് nios.ac.in-ൽ.",
      },
      {
        q: "On-Demand Exam എപ്പോൾ എടുക്കാം?",
        a: "രജിസ്റ്റർ ചെയ്ത വിഷയങ്ങളിൽ തയ്യാറാകുമ്പോൾ സ്ലോട്ട് ബുക്ക്. ഏപ്രിൽ, മേയ്, ഒക്ടോബർ, നവംബർ ഒഴികെ. ഫലം ~1 മാസം.",
      },
      {
        q: "Science വിഷയങ്ങൾക്ക് പ്രായോഗിക പരീക്ഷ ഉണ്ടോ?",
        a: "അതെ. Physics, Chemistry, Biology, Home Science, Computer Science തുടങ്ങിയവയ്ക്ക് theory + practical. 5 PCP പ്രായോഗിക സെഷനുകൾ ഹാജരാകൽ പ്രധാനം.",
      },
      {
        q: "PCP-യിൽ ഹാജരാകണോ?",
        a: "Stream 1-ൽ തിയറിക്ക് 15 PCP സെഷൻ നിർബന്ധം; പ്രായോഗിക വിഷയങ്ങൾക്ക് 5 സെഷൻ നിർബന്ധം. പൂർണ്ണ ക്ലാസ്‌റൂം പഠനമല്ല — സംശയ നിവാരണവും പ്രായോഗിക പരിശീലനവും.",
      },
      {
        q: "NIOS-ൽ നിന്ന് NEET/JEE-ക്ക് അപേക്ഷിക്കാമോ?",
        a: "അതെ — ശരിയായ വിഷയ കോമ്പിനേഷൻ ഉണ്ടെങ്കിൽ. JEE: PCM + English. NEET: PCB + English (അല്ലെങ്കിൽ PCM + Biology അധിക വിഷയം NMC നിയമങ്ങൾക്ക് അനുസൃതം). പ്രായോഗികം + മാർക്ക് നിയമങ്ങൾ പാലിക്കണം.",
      },
      {
        q: "ആദ്യ പരീക്ഷയ്ക്ക് മുമ്പ് വിഷയം മാറ്റാമോ?",
        a: "ആദ്യ Public Examination-ൽ വിഷയം ചേർക്കുക/മാറ്റുക അനുവദനീയമല്ല. പിന്നീട് 4 വർഷത്തിനുള്ളിൽ, പാസായ വിഷയം ഒഴികെ മാറ്റാം.",
      },
    ],
  },
  {
    id: "kerala",
    titleMl: "കേരള വിദ്യാർത്ഥികൾ",
    titleEn: "For Kerala learners",
    items: [
      {
        q: "മലയാളത്തിൽ പരീക്ഷ എഴുതാമോ?",
        a: "മലയാളം (343) ഭാഷാ വിഷയമായി എടുക്കാം. Science ഒഴികെയുള്ള പല വിഷയങ്ങളും മലയാളം അല്ലെങ്കിൽ ഇംഗ്ലീഷ് മീഡിയത്തിൽ പരീക്ഷ എഴുതാം.",
      },
      {
        q: "SSLC ബുക്ക് എന്തിന്?",
        a: "Plus Two അഡ്മിഷന് SSLC/10th തെളിവ്. പ്രത്യേക ക്ലാസ് തോറ്റവർക്ക് SSLC ബുക്ക് പ്രധാന രേഖ.",
      },
      {
        q: "കേരളത്തിൽ Study Centre എങ്ങനെ കണ്ടെത്താം?",
        a: "അഡ്മിഷൻ സമയത്ത് Study Centre തിരഞ്ഞെടുക്കാം. സഹായത്തിന് NIOS Regional Centre Kochi (0484-2310032, rdkochi@nios.ac.in) അല്ലെങ്കിൽ Skillvard WhatsApp.",
      },
      {
        q: "Skillvard NIOS-ൽ എന്ത് നൽകുന്നു?",
        a: "ശരിയായ സ്ട്രീം തിരഞ്ഞെടുപ്പ്, പഠന പിന്തുണ, റെക്കോർഡഡ് ക്ലാസുകൾ, നോട്ടുകൾ, WhatsApp സംശയ നിവാരണം, പരീക്ഷാ തയ്യാരി — പാസാകുന്നതുവരെ കരുതലുള്ള കൂട്ട്.",
      },
    ],
  },
];

export const guideCta = {
  titleMl: "ഇനിയും സംശയമുണ്ടോ?",
  bodyMl:
    "ഈ ഗൈഡ് പൊതുവായ വിവരങ്ങൾ മാത്രം. നിങ്ങളുടെ മാർക്ക് ഷീറ്റ്, തോൽവി, സമയം — ഇവ അനുസരിച്ച് ശരിയായ സ്ട്രീം വ്യത്യസ്തമാകും. Skillvard-നോട് സംസാരിക്കാം.",
  cta: "സംസാരിക്കാൻ WhatsApp-ൽ",
  disclaimerMl:
    "ഔദ്യോഗിക നിയമങ്ങൾക്കും തീയതികൾക്കും nios.ac.in എപ്പോഴും അവസാന അധികാരം. മുകളിലെ വിവരങ്ങൾ മാർഗ്ഗദർശന മാത്രം.",
};

export const guideLink = {
  labelMl: "NIOS പൂർണ്ണ ഗൈഡ്",
  labelEn: "Documents, streams, PCP, subjects & FAQs",
  href: "/nios-plus-two/guide",
};
