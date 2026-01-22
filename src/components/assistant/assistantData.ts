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
      "Aku adalah asisten AI personal untuk Sholahudin Jauhari El Sya'na (Joangjo). Jo adalah Frontend, Backend, & Fullstack Developer yang berpengalaman dengan Vue, React, Laravel, dan FilamentPHP. Saat ini ia adalah mahasiswa Informatika di Universitas Ahmad Dahlan.",
  },
  {
    keywords: ["kuliah", "pendidikan", "kampus", "universitas", "ipk"],
    answer:
      "Sholahudin saat ini menempuh pendidikan S1 Informatika di Universitas Ahmad Dahlan (UAD), Yogyakarta (2022 - Sekarang). Ia memiliki IPK 3.50 dan aktif dalam berbagai kegiatan akademik maupun organisasi.",
  },
  {
    keywords: ["pengalaman kerja", "magang", "internship", "horus"],
    answer:
      "Jo memiliki pengalaman magang sebagai Fullstack Developer di Horus Technology (Okt 2025 - Jan 2026) mengerjakan software enterprise berbasis AI, dan di SD Muhammadiyah Bausasran (Apr 2025 - Jul 2025) membangun Sistem Informasi Sekolah lengkap dengan PPDB.",
  },
  {
    keywords: ["freelance", "proyek freelance", "pekerjaan lepas"],
    answer:
      "Sebagai freelancer, Jo telah mengerjakan berbagai proyek fullstack seperti Website Rental Mobil (React + Laravel), Sistem Manajemen Pondok Pesantren, dan Website Profil Bisnis untuk Toko Bangunan Tri Jaya Agung.",
  },
  {
    keywords: ["project", "proyek", "portofolio", "karya"],
    answer:
      "Beberapa proyek unggulannya meliputi: Sistem Informasi Sekolah (Laravel/FilamentPHP), Car Rental Platform (React/Laravel), Website Pariwisata (Project Kompetisi), dan Dashboard E-Commerce. Detailnya bisa dilihat di halaman Projects.",
  },
  {
    keywords: ["organisasi", "bem", "hmif", "kepanitiaan"],
    answer:
      "Jo sangat aktif berorganisasi. Ia pernah menjabat sebagai Kepala Departemen Kaderisasi di BEM FTI (2024), Staff AKASTRAT di HMIF (2023), serta menjadi Ketua Pelaksana untuk Milad FTI 2024 dan Informatics Competition 2023.",
  },
  {
    keywords: ["sertifikat", "prestasi", "penghargaan", "juara"],
    answer:
      "Jo meraih penghargaan 'Best Team' di FI-CHALLENGE 2023. Ia juga memiliki sertifikat kompetensi di bidang Web Design (Politeknik Negeri Bali), Leadership (BEM FTI), dan Public Speaking/Humas.",
  },
  {
    keywords: ["skill", "keahlian", "tech stack", "teknologi"],
    answer:
      "Tech stack utamanya adalah: Languages (JS, TS, PHP), Frontend (Vue.js, React, Tailwind CSS), Backend (Laravel, FilamentPHP, MySQL), dan Tools lainnya seperti Git, Figma, dan VS Code.",
  },
  {
    keywords: ["kontak", "email", "hubungi", "sosmed"],
    answer:
      "Kamu bisa menghubungi Jo melalui Email (joangjo22@gmail.com), Instagram (@sholahuddin_jauhari), atau LinkedIn. Silakan kunjungi halaman Contact untuk mengirim pesan langsung.",
  },
  {
    keywords: ["lokasi", "domisili", "tinggal"],
    answer: "Saat ini Sholahudin berdomisili di Yogyakarta, Indonesia.",
  },
];

export const refusalResponses = [
  "Aku fokus menjawab hal yang berkaitan dengan profil dan pengalaman Sholahudin saja ya 🙂",
  "Topik itu di luar konteks asisten portofolio ini.",
  "Aku belum bisa menjawab hal di luar informasi tentang Sholahudin.",
];
