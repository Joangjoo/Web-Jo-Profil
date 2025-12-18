export interface AssistantData {
  keywords: string[];
  answer: string;
}

export const identityKeywords = [
  "jo",
  "Joang",
  "joang",
  "Joangjo",
  "joangjo",
  "assistant",
  "ai",
  "kamu",
  "siapa",
  "itu siapa",
  "tentang kamu",
];

export const profileData = {
  name: "Sholahudin Jauhari El Sya'na",
  alias: "Joangjo",
  role: "Frontend, Backend, & Fullstack Developer",
  summaries: [
    "Sholahudin Jauhari El Sya'na adalah Fullstack Developer (Vue, React, Laravel) yang juga mahasiswa Informatika UAD semester 7. Dia berfokus pada pembuatan aplikasi web modern yang clean dan performant.",
    "Jo adalah pengembang web kreatif dengan keahlian di Frontend (Vue/React) dan Backend (Laravel). Saat ini ia menempuh semester 7 di Universitas Ahmad Dahlan.",
    "Dikenal sebagai Joangjo, ia adalah mahasiswa Informatika UAD yang aktif membangun portofolio web apps, mulai dari sistem informasi sekolah hingga website bisnis, menggunakan teknologi terkini.",
    "Selain kuliah di semester 7 Informatika UAD, Sholahudin aktif mengerjakan proyek freelance fullstack dan terus mendalami React serta Laravel untuk solusi digital yang efisien.",
  ],
};

export const stackByRole = {
  frontend: {
    keywords: ["frontend", "front end", "ui"],
    answers: [
      "Untuk frontend, dia biasanya menggunakan Vue 3 dan React dengan TypeScript serta Tailwind CSS.",
      "Di sisi frontend, dia fokus membangun UI yang responsif dan modern menggunakan Vue, React, dan Tailwind CSS.",
    ],
  },

  backend: {
    keywords: ["backend", "back end", "server", "api"],
    answers: [
      "Untuk backend, dia terbiasa menggunakan Laravel untuk membangun REST API dan manajemen database MySQL.",
      "Di backend, dia fokus pada pengembangan API, CRUD, dan pengelolaan database menggunakan Laravel.",
    ],
  },

  fullstack: {
    keywords: ["fullstack", "full stack"],
    answers: [
      "Sebagai fullstack developer, aku biasanya menggabungkan Vue atau React di frontend dengan Laravel di backend.",
      "Aku menangani frontend dan backend secara end-to-end menggunakan React/Vue dan Laravel.",
    ],
  },
};

export const assistantKnowledge: AssistantData[] = [
  {
    keywords: [
      "kamu siapa",
      "siapa kamu",
      "profil",
      "tentang kamu",
      "jo",
      "joang",
      "joangjo",
      "sholahudin",
    ],
    answer:
      "Aku adalah asisten portofolio Sholahudin Jauhari El Sya'na, seorang Frontend, Backend, dan Fullstack Developer.",
  },
  {
    keywords: ["kuliah", "pendidikan", "kampus", "universitas"],
    answer:
      "Sholahudin adalah mahasiswa Informatika Universitas Ahmad Dahlan dengan IPK 3.50 dan fokus pada pengembangan web.",
  },
  {
    keywords: ["magang", "internship", "pengalaman kerja"],
    answer:
      "Ia pernah magang sebagai Fullstack Developer di SD Muhammadiyah Bausasran dan mengembangkan sistem informasi sekolah secara menyeluruh.",
  },
  {
    keywords: ["project", "proyek", "portofolio"],
    answer:
      "Beberapa project yang pernah dikerjakan antara lain Sistem Informasi Sekolah, Web Rental Mobil, Website Bisnis, dan Sistem Manajemen Pondok.",
  },
  {
    keywords: ["organisasi", "kepanitiaan", "bem", "hmif"],
    answer:
      "Ia aktif berorganisasi di HMIF dan BEM FTI, serta pernah menjadi ketua pelaksana beberapa event tingkat fakultas.",
  },
  {
    keywords: ["skill", "keahlian"],
    answer:
      "Keahlian utamanya meliputi frontend dan backend web development, REST API, manajemen database, serta UI responsif.",
  },
  {
    keywords: ["bahasa pemrograman"],
    answer:
      "Bahasa pemrograman yang dikuasai antara lain JavaScript, TypeScript, PHP, Python, Java, dan C++.",
  },
  {
    keywords: ["tools", "alat"],
    answer:
      "Tools yang sering digunakan meliputi Laravel, React, Tailwind CSS, FilamentPHP, Git, dan Visual Studio Code.",
  },
  {
    keywords: ["kontak", "email", "linkedin", "github"],
    answer:
      "Kontak, LinkedIn, dan GitHub dapat ditemukan di halaman portofolio ini.",
  },
];

export const refusalResponses = [
  "Aku fokus menjawab hal yang berkaitan dengan profil dan pengalaman Sholahudin saja ya 🙂",
  "Topik itu di luar konteks asisten portofolio ini.",
  "Aku belum bisa menjawab hal di luar informasi tentang Sholahudin.",
];
