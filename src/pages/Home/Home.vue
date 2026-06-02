<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "../../components/Navbar/Navbar.vue";
import CV from "../../cv/Sholahudin_Jauhari_El_Sya'na_CV.pdf";

const currentTime = ref("");
let timeInterval: ReturnType<typeof setInterval> | null = null;

const updateTime = () => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour12: false });
  currentTime.value = `UTC+7 - ${timeStr}`;
};

const greeting = "Hello Everyone!";

const bioParagraphs = [
  "Greetings.",
  "I'm Sholahudin Jauhari El Sya'na, a Fullstack Web Developer and Informatics student at Ahmad Dahlan University. With experience from three internships and multiple freelance projects, I have developed various web-based solutions, including School Information Systems, Workforce Distribution Platforms, Rental Management Systems, and Business Profile Websites. I specialize in React, TypeScript, Laravel, FilamentPHP, and MySQL, with experience in building responsive user interfaces, REST API integrations, admin dashboards, and scalable web applications. Beyond coding, I enjoy learning new technologies, solving real-world problems, and collaborating with teams to create impactful digital products.",
];

const displayedGreeting = ref("");
const displayedBio = ref<string[]>(bioParagraphs.map(() => ""));
const currentTypingIndex = ref(-1); 
const isGreetingDone = ref(false);

const typeText = async (
  text: string,
  updateFn: (char: string) => void,
  speed = 30,
) => {
  for (let i = 0; i < text.length; i++) {
    updateFn(text[i]!);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

const startTypingSequence = async () => {
  // Type Greeting
  await typeText(greeting, (char) => (displayedGreeting.value += char), 50);
  isGreetingDone.value = true;
  currentTypingIndex.value = 0;

  // Type Bio Paragraphs
  for (let i = 0; i < bioParagraphs.length; i++) {
    currentTypingIndex.value = i;
    await typeText(
      bioParagraphs[i]!,
      (char) => (displayedBio.value[i] += char),
      15,
    );
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  currentTypingIndex.value = bioParagraphs.length;
};

onMounted(() => {
  startTypingSequence();
  updateTime();
  timeInterval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval);
});
</script>

<template>
  <Navbar />
  <section
    class="min-h-screen flex flex-col justify-center items-center p-8 pt-20 text-[var(--text-primary)] font-mono bg-[var(--bg-primary)] relative overflow-hidden"
    id="home"
  >
    <!-- Cyber Grid Background -->
    <div class="absolute inset-0 opacity-[var(--grid-opacity)] pointer-events-none"
      style="background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black 40%, transparent 70%);">
    </div>
    <div class="max-w-[900px] w-full">
      <h1
        class="text-4xl font-bold mb-8 tracking-wide min-h-[3rem] text-[var(--text-heading)]"
      >
        {{ displayedGreeting
        }}<span class="animate-pulse text-[var(--accent)]" v-if="!isGreetingDone"
          >|</span
        >
      </h1>

      <div class="flex flex-col md:flex-row gap-4 md:gap-0 mb-12">
        <span class="text-[var(--text-muted)] w-[100px] shrink-0 text-sm mt-1">
          {{ displayedBio[0] }}
        </span>
        <div class="flex flex-col gap-4">
          <p
            v-for="(text, index) in displayedBio.slice(1)"
            :key="index"
            class="leading-relaxed text-sm text-[var(--text-primary)] m-0 text-justify"
          >
            {{ text
            }}<span
              class="animate-pulse"
              v-if="currentTypingIndex === index + 1"
              >|</span
            >
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-4 md:gap-0">
        <span class="text-[var(--text-muted)] w-[100px] shrink-0 text-sm mt-1"
          >Pages.</span
        >
        <div class="flex flex-col sm:flex-row gap-8 md:gap-16 flex-wrap">
          <div class="flex flex-col gap-3">
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >01.</span
              >
              <router-link
                to="/"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-[var(--accent)] transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >Home</router-link
              >
            </div>
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0.1s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >02.</span
              >
              <router-link
                to="/about"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-transparent transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >About</router-link
              >
            </div>
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0.2s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >03.</span
              >
              <router-link
                to="/about#education"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-transparent transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >Education</router-link
              >
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0.3s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >04.</span
              >
              <router-link
                to="/about#experience"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-transparent transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >Experience</router-link
              >
            </div>
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0.4s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >05.</span
              >
              <router-link
                to="/projects"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-transparent transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >Projects</router-link
              >
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0.5s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >06.</span
              >
              <router-link
                to="/contact"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-transparent transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >Contact</router-link
              >
            </div>
            <div
              class="flex items-center gap-2 page-link-item group"
              style="--delay: 0.6s"
            >
              <span
                class="text-[var(--text-muted)] text-sm transition-all duration-300 group-hover:text-[var(--accent)] group-hover:scale-110 font-mono"
                >07.</span
              >
              <a
                :href="CV"
                download="CV_Sholahuddin_Jauhari.pdf"
                class="text-[var(--text-primary)] no-underline font-semibold border-b-2 border-transparent transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"
                >Download My CV</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="mt-12 md:absolute md:bottom-8 w-full px-8 md:px-12 flex flex-col md:flex-row justify-between text-xs text-[var(--text-muted)] text-center md:text-left gap-4 md:gap-0"
    >
      <div class="leading-relaxed">
        Sleman, Yogyakarta - Indonesia<br />
        {{ currentTime }}
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-link-item {
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.page-link-item a {
  position: relative;
}

.page-link-item a::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent));
  transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.6);
}

.page-link-item:hover a::before {
  width: 4px;
}
</style>
