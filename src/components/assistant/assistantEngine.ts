import {
  assistantKnowledge,
  stackByRole,
  refusalResponses,
  profileData,
} from "./assistantData";

type RoleKey = keyof typeof stackByRole;

interface AiContext {
  lastRole: RoleKey | null;
  lastTopic: string | null;
  messageCount: number;
}

const aiContext: AiContext = {
  lastRole: null as RoleKey | null,
  lastTopic: null,
  messageCount: 0,
};

function randomPick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)] ?? "";
}

const followUpMap: Record<string, string[]> = {
  skill: ["tech stack", "frontend", "backend", "skill", "keahlian"],
  kerja: ["magang", "internship", "pengalaman kerja", "razen", "horus", "bausasran"],
  kerja_lanjutan: ["freelance", "rental", "pesantren", "tri jaya"],
  project: ["project", "proyek", "portofolio", "perpustakaan", "budaya", "toko roti"],
  organisasi: ["organisasi", "bem", "hmif", "milad", "informatics competition"],
  about: ["tentang", "profil", "kuliah", "pendidikan", "sertifikat", "prestasi"],
};

export function getAIResponse(input: string): string {
  const text = input.toLowerCase().trim();
  aiContext.messageCount++;

  // Empty input
  if (!text) return "Halo! Ada yang bisa ditanya tentang Sholahudin? Coba 'Siapa Jo?' atau 'Tech stack apa?'";

  // Greetings
  const greetings = ["halo", "hi", "hey", "hai", "helo", "p", "permisi", "siang", "pagi", "malam"];
  if (text.length < 6 && greetings.some((g) => text.includes(g))) {
    const greetingsResponse = [
      "Halo! Ada yang ingin kamu tanyakan tentang Sholahudin?",
      "Hey! Silakan tanya apa saja tentang profil atau portofolio Jo.",
      "Hai! Aku siap bantu. Tanya aja tentang pengalaman, project, atau skill Jo!",
    ];
    return randomPick(greetingsResponse);
  }

  // Thank you
  const thanks = ["makasih", "terima kasih", "thank", "thanks", "tq"];
  if (thanks.some((t) => text.includes(t))) {
    const thankResponses = [
      "Sama-sama! Kalau ada lagi yang mau ditanya, bilang aja ya 😊",
      "Senang bisa bantu! Jangan sungkan tanya lagi ya.",
      "Sama-sama! Semoga membantu 🙌",
    ];
    return randomPick(thankResponses);
  }

  // Yes / No follow-up
  if (["ya", "oh", "oh gitu", "iya", "ok", "oke", "baik", "sip", "nice", "wow", "keren"].some((w) => text === w || text.startsWith(w))) {
    const followUps = [
      "Ada lagi yang ingin ditanyakan?",
      "Yang lain? Bisa tanya tentang pengalaman kerjanya atau project-portfolio-nya.",
      "Mau tanya lebih detail? Coba sebut topik spesifik seperti 'magang di Horus' atau 'project apa aja'.",
    ];
    return randomPick(followUps);
  }

  // Try role-based stack questions first
  for (const roleKey in stackByRole) {
    const role = stackByRole[roleKey as RoleKey];
    if (role.keywords.some((k) => text.includes(k))) {
      aiContext.lastRole = roleKey as RoleKey;
      aiContext.lastTopic = "skill";
      return randomPick(role.answers);
    }
  }

  // Handle "apa"/"yang" follow-ups about last known topic
  if (aiContext.lastTopic && (
    text.includes("apa") || text.includes("yang") || text.includes("jelaskan") || text.includes("ceritakan") || text.includes("detail")
  )) {
    const followTopics = followUpMap[aiContext.lastTopic] ?? [];
    for (const kw of followTopics) {
      const found = assistantKnowledge.find((item) =>
        item.keywords.some((k) => k.includes(kw))
      );
      if (found) return found.answer;
    }
  }

  // Check for identity/profile questions
  const nameKeywords = [
    "jo", "joang", "joangjo", "sholahudin", "jauhari", "kamu",
  ];
  const intentKeywords = [
    "siapa", "tentang", "info", "profil", "biografi", "kenal", "biodata", "perkenalkan",
  ];

  const hasName = nameKeywords.some((name) => text.includes(name));
  const hasIntent = intentKeywords.some((intent) => text.includes(intent));

  if (hasName && hasIntent) {
    aiContext.lastTopic = "about";
    return randomPick(profileData.summaries);
  }

  // Context follow-up: if they just asked about a role
  if (
    aiContext.lastRole &&
    ["yang", "paling", "biasanya", "sering", "lebih", "contoh"].some((w) => text.includes(w))
  ) {
    return randomPick(stackByRole[aiContext.lastRole].answers);
  }

  // Search main knowledge base
  const found = assistantKnowledge.find((item) =>
    item.keywords.some((k) => text.includes(k))
  );

  if (found) {
    // Infer last topic from match
    if (text.includes("skill") || text.includes("tech") || text.includes("stack")) aiContext.lastTopic = "skill";
    else if (text.includes("magang") || text.includes("kerja") || text.includes("intern") || text.includes("freelance")) aiContext.lastTopic = "kerja";
    else if (text.includes("project") || text.includes("proyek") || text.includes("portofolio") || text.includes("website")) aiContext.lastTopic = "project";
    else if (text.includes("organisasi") || text.includes("bem") || text.includes("hmif")) aiContext.lastTopic = "organisasi";
    else if (text.includes("sertifikat") || text.includes("prestasi") || text.includes("juara")) aiContext.lastTopic = "sertifikat";
    else if (text.includes("tentang") || text.includes("profil") || text.includes("kuliah") || text.includes("pendidikan")) aiContext.lastTopic = "about";
    return found.answer;
  }

  // Fallback to last role context
  const role = aiContext.lastRole;
  if (role) {
    return randomPick(stackByRole[role].answers);
  }

  // Final fallback
  return randomPick(refusalResponses);
}
