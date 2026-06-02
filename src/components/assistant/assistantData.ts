export interface AssistantData {
  keywords: string[];
  answer: string;
}

export const identityKeywords = [
  "jo", "Joang", "joang", "Joangjo", "joangjo",
  "assistant", "ai", "kamu", "siapa", "itu siapa", "tentang kamu",
];

export const profileData = {
  name: "Sholahudin Jauhari El Sya'na",
  alias: "Joangjo",
  nicknames: ["Jo", "Joang", "Joangjo"],
  id: "JO-007",
  role: "Frontend, Backend, & Fullstack Developer",
  status: "Mahasiswa Informatika UAD",
  summaries: [
    "Sholahudin Jauhari El Sya'na adalah Fullstack Developer (Vue, React, Laravel) yang juga mahasiswa Informatika UAD. Dia berfokus pada pembuatan aplikasi web modern yang clean dan performant.",
    "Jo adalah pengembang web kreatif dengan keahlian di Frontend (Vue/React) dan Backend (Laravel). Saat ini ia berkuliah di Universitas Ahmad Dahlan.",
    "Dikenal sebagai Joangjo, ia adalah mahasiswa Informatika UAD yang aktif membangun portofolio web apps, mulai dari sistem informasi sekolah hingga website bisnis, menggunakan teknologi terkini.",
    "Selain kuliah di Informatika UAD, Sholahudin aktif mengerjakan proyek freelance fullstack dan terus mendalami React serta Laravel untuk solusi digital yang efisien.",
  ],
};

export const stackByRole = {
  frontend: {
    keywords: ["frontend", "front end", "ui", "ux"],
    answers: [
      "Untuk frontend, dia biasanya menggunakan Vue 3 dan React dengan TypeScript serta Tailwind CSS.",
      "Di sisi frontend, dia fokus membangun UI yang responsif dan modern menggunakan Vue, React, dan Tailwind CSS.",
      "Jo paham betul slicing UI dari Figma ke kode. Beberapa proyek frontend-nya termasuk slicing UI Web Coffee, Website Destination, dan Website Perpustakaan.",
    ],
  },
  backend: {
    keywords: ["backend", "back end", "server", "api", "database"],
    answers: [
      "Untuk backend, dia terbiasa menggunakan Laravel untuk membangun REST API dan manajemen database MySQL atau PostgreSQL.",
      "Di backend, Jo fokus pada pengembangan API, CRUD, dan pengelolaan database menggunakan Laravel dengan FilamentPHP untuk admin panel.",
      "Jo berpengalaman membangun backend untuk Sistem Informasi Sekolah dan Workforce Distribution System menggunakan Laravel dengan PostgreSQL atau MySQL.",
    ],
  },
  fullstack: {
    keywords: ["fullstack", "full stack"],
    answers: [
      "Sebagai fullstack developer, Jo biasanya menggabungkan Vue atau React di frontend dengan Laravel di backend.",
      "Jo menangani frontend dan backend secara end-to-end menggunakan React/Vue dan Laravel. Dalam proyek freelance, ia juga mengelola database dan deployment sendiri.",
      "Stack favorit Jo untuk fullstack: React/Vue + TypeScript + Laravel + MySQL + Tailwind CSS.",
    ],
  },
};

export const assistantKnowledge: AssistantData[] = [
  {
    keywords: ["kamu siapa", "siapa kamu", "profil", "tentang kamu", "jo", "joang", "joangjo", "sholahudin"],
    answer: "Aku asisten AI untuk Sholahudin Jauhari El Sya'na (Joangjo). Jo adalah Fullstack Web Developer dan mahasiswa Informatika Universitas Ahmad Dahlan. Ia punya pengalaman dari 3 internships dan beberapa proyek freelance, plus aktif di organisasi kampus.",
  },
  {
    keywords: ["kuliah", "pendidikan", "kampus", "universitas", "uad", "informatika", "ipk"],
    answer: "Sholahudin kuliah S1 Informatika di Universitas Ahmad Dahlan (UAD), Yogyakarta dari 2022 sampai sekarang. IPK 3.50. Selain kuliah, dia aktif di BEM FTI, HMIF, dan berbagai kepanitiaan kampus.",
  },
  {
    keywords: ["magang", "internship", "pengalaman kerja", "kerja", "bekerja"],
    answer: "Jo punya 3 pengalaman magang: 1) Backend Developer Intern di PT Razen Teknologi Indonesia (Feb-Apr 2026) — bikin workforce distribution system. 2) Fullstack Developer Intern di Horus Technology (Okt 2025-Jan 2026) — ngurusin enterprise software berbasis AI. 3) Fullstack Developer Intern di SD Muhammadiyah Bausasran (Apr-Jul 2025) — bangun Sistem Informasi Sekolah dari nol.",
  },
  {
    keywords: ["razen", "pt razen", "razon"],
    answer: "Jo magang di PT Razen Teknologi Indonesia dari Februari sampai April 2026 sebagai Backend Developer Intern. Proyeknya: Workforce Distribution & Job Readiness Information System — platform multi-stakeholder yang menghubungkan sekolah, siswa, perusahaan, dan pemerintah. Stack: React.js, Tailwind, Inertia, Laravel, Docker, PostgreSQL.",
  },
  {
    keywords: ["horus", "horus technology"],
    answer: "Jo magang di Horus Technology dari Oktober 2025 sampai Januari 2026 sebagai Fullstack Developer Intern. Ia mengerjakan TING software (enterprise software berbasis AI) — frontend dengan Vue.js, integrasi REST API, real-time data dengan SSE, dan bikin demo Agentic AI. Juga bantu redesign website perusahaan. Kolaborasi dengan backend engineer, product team, dan CEO.",
  },
  {
    keywords: ["bausasran", "sd muhammadiyah", "sd muh", "sekolah"],
    answer: "Jo magang di SD Muhammadiyah Bausasran dari April sampai Juli 2025 sebagai Fullstack Developer Intern. Ia membangun Sistem Informasi Sekolah lengkap sendirian — website profil sekolah dinamis, admin panel, dan sistem PPDB online. Stack: Laravel, FilamentPHP, MySQL, Tailwind CSS.",
  },
  {
    keywords: ["freelance", "proyek freelance", "pekerjaan lepas", "client"],
    answer: "Jo sudah mengerjakan beberapa proyek freelance: 1) Car Rental Website — platform rental mobil dengan manajemen kendaraan dan jadwal sewa. 2) Boarding School Management System — sistem manajemen pondok pesantren untuk data santri, jadwal, dan berita. 3) Tri Jaya Agung Business Profile — website profil toko bangunan dengan katalog produk dan admin panel. Semua pakai React + TypeScript + Laravel + FilamentPHP + MySQL.",
  },
  {
    keywords: ["rental", "rental mobil", "car rental"],
    answer: "Jo bikin Car Rental Website sebagai proyek freelance tahun 2025. Aplikasi fullstack untuk bisnis rental mobil — ada fitur manajemen kendaraan, jadwal sewa, dan data pelanggan. Stack: React, TypeScript, Laravel, FilamentPHP, MySQL.",
  },
  {
    keywords: ["pondok", "pesantren", "boarding school", "santri"],
    answer: "Jo bikin Boarding School Management System tahun 2025 sebagai proyek freelance. Sistem manajemen pondok pesantren untuk digitalisasi administrasi — kelola data santri, jadwal kegiatan, dan update berita dengan dashboard admin. Stack: React, TypeScript, Laravel, FilamentPHP, MySQL.",
  },
  {
    keywords: ["tri jaya", "agung", "toko bangunan", "bisnis profile"],
    answer: "Jo mengerjakan website profil bisnis untuk Toko Bangunan Tri Jaya Agung sebagai Project Manager & Frontend Developer (2025). Ada katalog produk dinamis, admin panel untuk manajemen konten, dan UI/UX bersih untuk meningkatkan kredibilitas bisnis. Stack: React, TypeScript, Laravel, FilamentPHP, Tailwind CSS.",
  },
  {
    keywords: ["competition", "kompetisi", "pariwisata", "tourism", "destination"],
    answer: "Jo ikut proyek kompetisi website pariwisata tahun 2024 sebagai Frontend Developer. Bikin website destinasi wisata responsif dengan fokus pada visual storytelling dan animasi halus. Stack: HTML, Tailwind CSS, AOS.",
  },
  {
    keywords: ["project", "proyek", "portofolio", "karya", "website"],
    answer: "Proyek-proyek Jo: 1) Website E-Commerce Toko Roti (HTML, PHP, JS, Tailwind). 2-3) Slicing UI Web Coffee (HTML, CSS, JS, Tailwind). 4) Website Destination (HTML, CSS, JS, Tailwind). 5) Website Perpustakaan (React, Tailwind, AOS). 6) Student Org Database (HTML, Tailwind, AOS). 7) Website Budaya (HTML, CSS, JS, Tailwind). 8) Website Destination (HTML, CSS, JS, Tailwind). 9) Shoe Store UI/UX Design (Figma). Detailnya lihat di halaman Projects!",
  },
  {
    keywords: ["ecommerce", "toko roti", "bakery"],
    answer: "Jo bikin Website E-Commerce Toko Roti — platform penjualan roti online dengan daftar produk, harga, dan alur pembelian. Stack: HTML, PHP, JavaScript, Tailwind CSS.",
  },
  {
    keywords: ["perpustakaan", "library"],
    answer: "Jo bikin Website Perpustakaan menggunakan React, Tailwind CSS, dan AOS. Ini adalah web untuk koleksi buku dan pengumuman perpustakaan.",
  },
  {
    keywords: ["budaya", "cultural"],
    answer: "Jo bikin Website Budaya yang menyajikan konten warisan tradisional — desainnya fokus ke visual storytelling dan tata letak responsif. Stack: HTML, CSS, JavaScript, Tailwind.",
  },
  {
    keywords: ["sepatu", "shoe", "shoe store", "ui ux"],
    answer: "Jo bikin Shoe Store Web Design sebagai proyek UI/UX — konsep desain toko sepatu dengan pendekatan mobile-first dan estetika modern. Tools: Figma.",
  },
  {
    keywords: ["organisasi", "bem", "hmif", "kepanitiaan", "fti"],
    answer: "Jo aktif organisasi: 1) Kepala Departemen Kaderisasi BEM FTI (2024) — bikin program kaderisasi dan leadership. 2) Staff AKASTRAT HMIF (2023) — jembatan aspirasi mahasiswa ke prodi. 3) Ketua Pelaksana Milad FTI 2024 — koordinasi acara perayaan FTI. 4) Ketua Pelaksana Informatics Competition 2023 — kompetisi bergengsi tingkat nasional.",
  },
  {
    keywords: ["bem fti", "kaderisasi", "bem"],
    answer: "Jo jadi Kepala Departemen Kaderisasi di BEM FTI UAD (Januari-Desember 2024). Tugasnya: perencanaan program, bikin matriks kerja, ngadain agenda pengembangan leadership, supervisi anggota departemen, dan koordinasi tim. Skill: Leadership, Team Management, Strategic Planning.",
  },
  {
    keywords: ["akastrat", "hmif", "aspirasi"],
    answer: "Jo jadi Staff AKASTRAT (Strategic and Aspirational Studies) di HMIF UAD (Januari-Desember 2023). Tugasnya: jembatan antara mahasiswa dan prodi, nampung aspirasi mahasiswa, dan fasilitasi komunikasi. Skill: Communication, Problem Solving.",
  },
  {
    keywords: ["milad", "fti", "dies natalis"],
    answer: "Jo jadi Ketua Pelaksana Milad FTI 2024 (Desember 2024). Memimpin panitia merancang dan mengeksekusi program perayaan fakultas, koordinasi lintas divisi, dan mastiin jalannya acara lancar. Skill: Event Management, Leadership, Coordination.",
  },
  {
    keywords: ["informatics competition", "infocomp"],
    answer: "Jo jadi Ketua Pelaksana Informatics Competition 2023 (Oktober 2023) di UAD. Mengawasi seluruh eksekusi event dari perencanaan sampai evaluasi, koordinasi tim teknis, publikasi, dan logistik. Skill: Project Management, Logistics, Team Leadership.",
  },
  {
    keywords: ["sertifikat", "sertif", "prestasi", "penghargaan", "juara", "piagam"],
    answer: "Sertifikat & prestasi Jo: 1) Best Team FI-CHALLENGE 2023 (FIPEX). 2) Webinar Design Thinking — Politeknik Negeri Surabaya. 3) Web Design Competition — Politeknik Negeri Bali. 4) Staff Humas HMIF. 5) Staff Acara KPUMP HMIF. 6) Leadership Education — BEM FTI UAD.",
  },
  {
    keywords: ["fi-challenge", "best team", "fipex"],
    answer: "Jo meraih penghargaan Best Team di FI-CHALLENGE 2023 yang diselenggarakan FIPEX. Ini adalah lomba di bidang teknologi dan inovasi.",
  },
  {
    keywords: ["web design", "politeknik", "bali", "poltek"],
    answer: "Jo punya sertifikat Web Design Competition dari Politeknik Negeri Bali (September). Juga Webinar Design Thinking dari Politeknik Negeri Surabaya (Desember).",
  },
  {
    keywords: ["skill", "keahlian", "tech stack", "teknologi", "bahasa"],
    answer: "Tech stack Jo: Languages (JS, TS, PHP), Frontend (React, Vue.js, Tailwind CSS, AOS), Backend (Laravel, FilamentPHP, Inertia), Database (MySQL, PostgreSQL), Tools (Git, Docker, Figma, VS Code). Juga punya soft skill: Leadership, Team Management, Event Management, Public Speaking.",
  },
  {
    keywords: ["soft skill", "non teknis"],
    answer: "Soft skill Jo: Leadership (kepala departemen BEM, ketua pelaksana event), Team Management & Coordination (supervisi tim), Strategic Planning & Project Management (bikin program kerja dan matriks), Event Management (ngurus acara kampus), Communication & Public Speaking (jadi penghubung mahasiswa-prodi), Problem Solving (teknis maupun organisasi).",
  },
  {
    keywords: ["kontak", "email", "hubungi", "sosmed", "ig", "instagram", "linkedin", "github", "tiktok"],
    answer: "Kontak Jo: Email joangjo22@gmail.com, Instagram @sholahuddin_jauhari, LinkedIn Sholahudin Jauhari El Sya Na, TikTok @joforcoding, GitHub Joangjoo. Langsung aja ke halaman Contact buat kirim pesan!",
  },
  {
    keywords: ["lokasi", "domisili", "tinggal", "yogyakarta", "sleman", "jogja"],
    answer: "Jo tinggal di Sleman, Yogyakarta, Indonesia — tepatnya di daerah kampus UAD. Zona waktu UTC+7.",
  },
  {
    keywords: ["hobi", "kesukaan", "suka", "interest", "minat"],
    answer: "Jo suka belajar teknologi baru, ngoding, ngerjain project real-world, dan kolaborasi tim. Di luar coding, ia juga aktif di organisasi dan suka ngikutin kompetisi. Ia juga tertarik bikin produk digital yang impactfull.",
  },
  {
    keywords: ["cv", "download cv", "curriculum vitae", "resume"],
    answer: "CV Jo bisa didownload langsung dari halaman Home (link 'Download My CV') atau halaman About. File PDF: CV_Sholahuddin_Jauhari.pdf.",
  },
  {
    keywords: ["halaman", "page", "navigasi", "menu"],
    answer: "Portofolio ini punya halaman: Home, About (berisi bio, education, experience, organization), Projects, Certificates, Contact. Ada juga AI assistant yang bisa ditanyain apa aja tentang Jo.",
  },
  {
    keywords: ["about", "tentang", "tentang halaman"],
    answer: "Halaman About berisi info lengkap: hero section dengan bio singkat, timeline pendidikan di UAD, timeline pengalaman kerja (3 internships + freelance), dan organisasi/kepanitiaan.",
  },
  {
    keywords: ["project page", "projects", "halaman project"],
    answer: "Halaman Projects menampilkan semua karya Jo — dari e-commerce, slicing UI, website pariwisata, web perpustakaan, sampai UI/UX design di Figma. Masing-masing project ada deskripsi dan link detail. Total ada 9 project!",
  },
  {
    keywords: ["certificate", "certificates", "sertifikat"],
    answer: "Halaman Certificates berisi semua sertifikat Jo — mulai dari Best Team FI-CHALLENGE, Web Design Competition, Leadership Education, sampai sertifikat organisasi. Bisa diliatin satu-satu pake modal viewer.",
  },
  {
    keywords: ["contact", "contact page", "contact form"],
    answer: "Halaman Contact ada form kirim pesan langsung (pake EmailJS), plus info kontak lengkap: Email, Instagram, LinkedIn, TikTok, GitHub. Silakan kirim pesan kalo ada pertanyaan atau mau kolaborasi!",
  },
  {
    keywords: ["emailjs", "form", "pesan"],
    answer: "Form kontak di halaman Contact pake EmailJS. Kirim aja pesan — nanti langsung masuk ke email Jo di joangjo22@gmail.com.",
  },
  {
    keywords: ["theme", "dark mode", "light mode", "toggle"],
    answer: "Portofolio ini punya dark mode (cyan cyber) dan light mode (green accent). Klik tombol floating di pojok kiri bawah buat toggle.",
  },
  {
    keywords: ["stack", "tech stack", "teknologi", "laravel", "react", "vue"],
    answer: "Jo pake banyak teknologi! Frontend: React.js, Vue 3, TypeScript, Tailwind CSS. Backend: Laravel, FilamentPHP, Inertia.js. Database: MySQL, PostgreSQL. Tools: Docker, Git, Figma. Web server: Apache. Setiap proyek beda stack tergantung kebutuhan.",
  },
  {
    keywords: ["docker", "deployment", "devops"],
    answer: "Jo pernah pake Docker untuk development di proyek PT Razen (Laravel + PostgreSQL pake Docker). Juga familiar dengan deployment dan manajemen lingkungan development.",
  },
  {
    keywords: ["figma", "desain", "design"],
    answer: "Jo pake Figma untuk UI/UX design. Contohnya proyek Shoe Store Web Design — desain toko sepatu dengan mobile-first approach. Juga biasa slicing dari Figma ke kode.",
  },
  {
    keywords: ["lulus", "tahun lulus", "target", "wisuda"],
    answer: "Jo masih di Informatika UAD (masuk 2022)",
  },
  {
    keywords: ["ipk", "nilai", "gpa", "akademik"],
    answer: "IPK Jo saat ini 3.50 dari skala 4.00 — cukup kompetitif.",
  },
];

export const refusalResponses = [
  "Aku fokus menjawab hal yang berkaitan dengan profil dan pengalaman Sholahudin saja ya 🙂. Coba tanya tentang skill, pengalaman kerja, project, atau organisasinya!",
  "Maaf, topik itu di luar konteks asisten portofolio ini. Aku cuma bisa jawab pertanyaan tentang Sholahudin Jauhari (Joangjo) dan portfolionya.",
  "Aku belum bisa menjawab hal di luar informasi tentang Sholahudin. Tanyakan sesuatu tentang portofolio ini, seperti project, skill, atau pengalamannya!",
  "Hmm, aku cuma asisten portofolio Jo — belum bisa jawab itu. Coba tanya: 'Siapa Jo?' atau 'Tech stack apa?', nanti aku jawab!",
];
