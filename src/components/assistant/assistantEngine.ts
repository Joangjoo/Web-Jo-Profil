import {
  assistantKnowledge,
  stackByRole,
  refusalResponses,
  identityKeywords,
  profileData,
} from "./assistantData";

type RoleKey = keyof typeof stackByRole;

const aiContext = {
  lastRole: null as RoleKey | null,
};

function randomPick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)] ?? "";
}

export function getAIResponse(input: string): string {
  const text = input.toLowerCase();

  for (const roleKey in stackByRole) {
    const role = stackByRole[roleKey as RoleKey];
    if (role.keywords.some((k) => text.includes(k))) {
      aiContext.lastRole = roleKey as RoleKey;
      return randomPick(role.answers);
    }
  }

  // Check for identity/profile questions
  const nameKeywords = [
    "jo",
    "joang",
    "joangjo",
    "sholahudin",
    "jauhari",
    "kamu",
  ];
  const intentKeywords = [
    "siapa",
    "tentang",
    "info",
    "profil",
    "biografi",
    "kenal",
    "biodata",
  ];

  const hasName = nameKeywords.some((name) => text.includes(name));
  const hasIntent = intentKeywords.some((intent) => text.includes(intent));

  if (hasName && hasIntent) {
    return randomPick(profileData.summaries);
  }

  if (
    aiContext.lastRole &&
    ["yang", "paling", "biasanya", "sering"].some((w) => text.includes(w))
  ) {
    return randomPick(stackByRole[aiContext.lastRole].answers);
  }

  const found = assistantKnowledge.find((item) =>
    item.keywords.some((k) => text.includes(k))
  );

  if (found) return found.answer;

  const role = aiContext.lastRole;
  if (role) {
    return randomPick(stackByRole[role].answers);
  }

  return randomPick(refusalResponses);
}
