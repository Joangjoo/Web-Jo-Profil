<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import joGif from "../../assets/vidio/jo.gif";

const { t } = useI18n()
</script>

<template>
  <div class="relative z-10 max-w-5xl w-full flex flex-col gap-24">
    <!-- Glassmorphism Card -->
    <div
      class="bg-[var(--bg-secondary)]/60 backdrop-blur-xl border border-[var(--accent)]/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)] flex flex-col md:flex-row gap-12 items-center"
    >
      <!-- Profile Visual -->
      <div class="w-full md:w-1/3 flex flex-col items-center gap-6">
        <div class="relative group">
          <!-- Rotating Border Effect -->
          <div
            class="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[#0044ff] rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500 animate-tilt"
          ></div>

          <div
            class="relative rounded-2xl overflow-hidden border-2 border-[var(--accent)]/30 w-[280px] h-[350px] bg-[var(--bg-primary)]"
          >
            <img
              :src="joGif"
              alt="Sholahudin Jauhari"
              class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
            />
            <!-- Tech Overlay -->
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--bg-primary)] to-transparent"
            >
              <div class="flex justify-between items-end">
                <div>
                  <div
                    class="text-[var(--accent)] text-xs font-bold tracking-widest mb-1"
                  >
                    {{ t('about.hero.status_label') }}
                  </div>
                  <div class="text-[var(--text-heading)] text-sm flex items-center gap-2">
                    <span
                      class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    ></span>
                    {{ t('about.hero.status_online') }}
                  </div>
                </div>
                <div class="text-[var(--accent)]/50 text-xs">{{ t('about.hero.id_badge') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Info -->
      <div class="w-full md:w-2/3 flex flex-col gap-6">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold tracking-wider border border-[var(--accent)]/20"
            >
               {{ t('about.hero.section_badge') }}
            </span>
            <div class="h-px bg-[var(--accent)]/20 flex-grow"></div>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-[var(--text-heading)] mb-2">
            {{ t('about.hero.first_name') }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#0088ff]"
              >{{ t('about.hero.last_name') }}</span
            >
          </h2>
          <p class="text-[var(--text-nav)] text-lg">
            {{ t('about.hero.role') }}
          </p>
        </div>

        <div
          class="space-y-4 text-[var(--text-body)] leading-relaxed text-sm md:text-base"
        >
          <p>{{ t('about.hero.bio_1') }}</p>

          <p>{{ t('about.hero.bio_2') }}</p>
        </div>

        <!-- Tech Stack Grid -->
        <div class="mt-4">
          <h3
            class="text-[var(--text-heading)] font-semibold text-sm mb-4 flex items-center gap-2"
          >
            <span class="w-1 h-4 bg-[var(--accent)] rounded-full"></span>
            {{ t('about.hero.tech_stack_title') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >JS</span
              >
              <span class="text-xs text-[var(--text-nav)]">JavaScript</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >PHP</span
              >
              <span class="text-xs text-[var(--text-nav)]">PHP</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >React</span
              >
              <span class="text-xs text-[var(--text-nav)]">React.js</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >Vue</span
              >
              <span class="text-xs text-[var(--text-nav)]">Vue 3</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >TS</span
              >
              <span class="text-xs text-[var(--text-nav)]">TypeScript</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >Laravel</span
              >
              <span class="text-xs text-[var(--text-nav)]">Laravel</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >SQL</span
              >
              <span class="text-xs text-[var(--text-nav)]">MySQL</span>
            </div>
            <div
              class="bg-[var(--bg-secondary)] border border-[var(--accent)]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <span
                class="text-[var(--accent)] group-hover:scale-110 transition-transform"
                >TW</span
              >
              <span class="text-xs text-[var(--text-nav)]">Tailwind</span>
            </div>
          </div>

          <!-- Download CV Button -->
          <div class="mt-8 flex justify-start">
            <a
              href="/Sholahudin_Jauhari_El_Sya'na_CV.pdf"
              download="CV_Sholahudin_Jauhari"
              class="group relative inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent)]/10 font-bold text-[var(--accent)] border border-[var(--accent)]/50 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
            >
              <span>                {{ t('about.hero.download_cv') }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 transition-transform group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-tilt {
  animation: tilt 10s infinite linear;
}

@keyframes tilt {
  0%,
  50%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(1deg);
  }

  75% {
    transform: rotate(-1deg);
  }
}
</style>
