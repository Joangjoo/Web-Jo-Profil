<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import joGif from "../../assets/vidio/jo.gif";

const props = defineProps<{
  activeRole: 'fullstack' | 'frontend' | 'backend';
}>();

const emit = defineEmits<{
  (e: 'update:activeRole', val: 'fullstack' | 'frontend' | 'backend'): void;
}>();

const { t } = useI18n();

interface Skill {
  name: string;
  abbr: string;
  category: 'frontend' | 'backend';
}

const skills = computed<Skill[]>(() => [
  { name: 'JavaScript', abbr: 'JS', category: 'frontend' },
  { name: 'TypeScript', abbr: 'TS', category: 'frontend' },
  { name: 'React.js', abbr: 'React', category: 'frontend' },
  { name: 'Vue 3', abbr: 'Vue', category: 'frontend' },
  { name: 'Tailwind', abbr: 'TW', category: 'frontend' },
  { name: 'PHP', abbr: 'PHP', category: 'backend' },
  { name: 'Laravel', abbr: 'Laravel', category: 'backend' },
  { name: 'MySQL', abbr: 'MySQL', category: 'backend' },
  { name: 'PostgreSQL', abbr: 'PostgreSQL', category: 'backend' },
  { name: 'Docker', abbr: 'Docker', category: 'backend' }
]);

const filteredSkills = computed(() => {
  if (props.activeRole === 'fullstack') return skills.value;
  return skills.value.filter(s => s.category === props.activeRole);
});

const computedRole = computed(() => {
  if (props.activeRole === 'frontend') return t('about.hero.role_fe');
  if (props.activeRole === 'backend') return t('about.hero.role_be');
  return t('about.hero.role'); // Fullstack Developer
});

const computedBio1 = computed(() => {
  if (props.activeRole === 'frontend') return t('about.hero.bio_1_fe');
  if (props.activeRole === 'backend') return t('about.hero.bio_1_be');
  return t('about.hero.bio_1');
});

const computedBio2 = computed(() => {
  if (props.activeRole === 'frontend') return t('about.hero.bio_2_fe');
  if (props.activeRole === 'backend') return t('about.hero.bio_2_be');
  return t('about.hero.bio_2');
});

const cvFile = computed(() => {
  if (props.activeRole === 'frontend') return "/Sholahudin Jauhari El Sya'na_CV_Frontend.pdf";
  if (props.activeRole === 'backend') return "/Sholahudin Jauhari El Sya'na_CV_Backend.pdf";
  return "/CV_Sholahudin Jauhari_FullStack.pdf";
});

const cvFilename = computed(() => {
  if (props.activeRole === 'frontend') return 'Sholahudin_Jauhari_El_Syana_CV_Frontend.pdf';
  if (props.activeRole === 'backend') return 'Sholahudin_Jauhari_El_Syana_CV_Backend.pdf';
  return 'CV_Sholahudin_Jauhari_FullStack.pdf';
});
</script>

<template>
  <div class="relative z-10 max-w-5xl w-full flex flex-col gap-24 font-mono">
    <!-- Glassmorphism Card -->
    <div
      class="bg-[var(--bg-secondary)]/60 backdrop-blur-xl border rounded-3xl p-8 md:p-12 transition-all duration-500 flex flex-col md:flex-row gap-12 items-center"
      :class="[
        props.activeRole === 'fullstack' ? 'border-[var(--accent)]/15 shadow-[0_0_40px_rgba(var(--accent-rgb),0.05)]' : '',
        props.activeRole === 'frontend' ? 'border-[#00ff9d]/15 shadow-[0_0_40px_rgba(0,255,157,0.05)]' : '',
        props.activeRole === 'backend' ? 'border-[#bc13fe]/15 shadow-[0_0_40px_rgba(188,19,254,0.05)]' : '',
      ]"
    >
      <!-- Profile Visual -->
      <div class="w-full md:w-1/3 flex flex-col items-center gap-6">
        <div class="relative group">
          <!-- Rotating Border Effect -->
          <div
            class="absolute -inset-1 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500 animate-tilt"
            :class="[
              props.activeRole === 'fullstack' ? 'bg-gradient-to-r from-[var(--accent)] to-[#0044ff]' : '',
              props.activeRole === 'frontend' ? 'bg-gradient-to-r from-[#00ff9d] to-[#00f0ff]' : '',
              props.activeRole === 'backend' ? 'bg-gradient-to-r from-[#bc13fe] to-[#ff007f]' : '',
            ]"
          ></div>

          <div
            class="relative rounded-2xl overflow-hidden w-[280px] h-[350px] bg-[var(--bg-primary)] border-2 transition-colors duration-500"
            :class="[
              props.activeRole === 'fullstack' ? 'border-[var(--accent)]/30' : '',
              props.activeRole === 'frontend' ? 'border-[#00ff9d]/30' : '',
              props.activeRole === 'backend' ? 'border-[#bc13fe]/30' : '',
            ]"
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
                    class="text-xs font-bold tracking-widest mb-1 animate-pulse"
                    :class="[
                      props.activeRole === 'fullstack' ? 'text-[var(--accent)]' : '',
                      props.activeRole === 'frontend' ? 'text-[#00ff9d]' : '',
                      props.activeRole === 'backend' ? 'text-[#bc13fe]' : '',
                    ]"
                  >
                    {{ t('about.hero.status_label') }}
                  </div>
                  <div class="text-[var(--text-heading)] text-sm flex items-center gap-2">
                    <span
                      class="w-2 h-2 rounded-full animate-pulse"
                      :class="[
                        props.activeRole === 'fullstack' ? 'bg-[var(--accent)]' : '',
                        props.activeRole === 'frontend' ? 'bg-[#00ff9d]' : '',
                        props.activeRole === 'backend' ? 'bg-[#bc13fe]' : '',
                      ]"
                    ></span>
                    {{ t('about.hero.status_online') }}
                  </div>
                </div>
                <div class="text-xs opacity-50">{{ t('about.hero.id_badge') }}</div>
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
              class="px-3 py-1 rounded-full text-xs font-bold tracking-wider border transition-colors duration-300"
              :class="[
                props.activeRole === 'fullstack' ? 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20' : '',
                props.activeRole === 'frontend' ? 'bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20' : '',
                props.activeRole === 'backend' ? 'bg-[#bc13fe]/10 text-[#bc13fe] border-[#bc13fe]/20' : '',
              ]"
            >
               {{ t('about.hero.section_badge') }}
            </span>
            <div 
              class="h-px flex-grow transition-colors duration-300" 
              :class="[
                props.activeRole === 'fullstack' ? 'bg-[var(--accent)]/20' : '',
                props.activeRole === 'frontend' ? 'bg-[#00ff9d]/20' : '',
                props.activeRole === 'backend' ? 'bg-[#bc13fe]/20' : '',
              ]"
            ></div>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-[var(--text-heading)] mb-2">
            {{ t('about.hero.first_name') }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300"
              :class="[
                props.activeRole === 'fullstack' ? 'from-[var(--accent)] to-[#0088ff]' : '',
                props.activeRole === 'frontend' ? 'from-[#00ff9d] to-[#00f0ff]' : '',
                props.activeRole === 'backend' ? 'from-[#bc13fe] to-[#ff007f]' : '',
              ]"
              >{{ t('about.hero.last_name') }}</span
            >
          </h2>
          <p class="text-[var(--text-nav)] text-lg transition-colors duration-300">
            {{ computedRole }}
          </p>
        </div>

        <div
          class="space-y-4 text-[var(--text-body)] leading-relaxed text-sm md:text-base transition-all duration-300 text-justify"
        >
          <p>{{ computedBio1 }}</p>
          <p>{{ computedBio2 }}</p>
        </div>

        <!-- Role Selector (Switcher) -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-4 py-2">
          <span class="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">Fokus Sektor:</span>
          <div class="inline-flex p-1 bg-[var(--bg-primary)]/80 border border-[var(--border-color)] rounded-xl w-fit flex-wrap">
            <button 
              @click="emit('update:activeRole', 'fullstack')"
              class="px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase cursor-pointer transition-all duration-300 border border-transparent"
              :class="props.activeRole === 'fullstack' 
                ? 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/25 shadow-[0_0_10px_rgba(0,240,255,0.15)]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'"
            >
              Fullstack
            </button>
            <button 
              @click="emit('update:activeRole', 'frontend')"
              class="px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase cursor-pointer transition-all duration-300 border border-transparent"
              :class="props.activeRole === 'frontend' 
                ? 'bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/25 shadow-[0_0_10px_rgba(0,255,157,0.15)]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'"
            >
              Frontend
            </button>
            <button 
              @click="emit('update:activeRole', 'backend')"
              class="px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase cursor-pointer transition-all duration-300 border border-transparent"
              :class="props.activeRole === 'backend' 
                ? 'bg-[#bc13fe]/10 text-[#bc13fe] border-[#bc13fe]/25 shadow-[0_0_10px_rgba(188,19,254,0.15)]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'"
            >
              Backend
            </button>
          </div>
        </div>

        <!-- Dynamic Tech Stack Grid -->
        <div class="mt-2">
          <h3
            class="text-[var(--text-heading)] font-semibold text-sm mb-4 flex items-center gap-2 transition-colors duration-300"
          >
            <span 
              class="w-1 h-4 rounded-full transition-colors duration-300" 
              :class="[
                props.activeRole === 'fullstack' ? 'bg-[var(--accent)]' : '',
                props.activeRole === 'frontend' ? 'bg-[#00ff9d]' : '',
                props.activeRole === 'backend' ? 'bg-[#bc13fe]' : '',
              ]"
            ></span>
            {{ t('about.hero.tech_stack_title') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div
              v-for="skill in filteredSkills"
              :key="skill.name"
              class="bg-[var(--bg-secondary)]/90 border rounded-lg p-3 flex items-center gap-2 transition-all duration-300 group cursor-default"
              :class="[
                props.activeRole === 'fullstack' ? 'border-[var(--accent)]/10 hover:border-[var(--accent)]/40' : '',
                props.activeRole === 'frontend' ? 'border-[#00ff9d]/10 hover:border-[#00ff9d]/40' : '',
                props.activeRole === 'backend' ? 'border-[#bc13fe]/10 hover:border-[#bc13fe]/40' : '',
              ]"
            >
              <span
                class="transition-transform group-hover:scale-110 font-bold"
                :class="[
                  props.activeRole === 'fullstack' ? 'text-[var(--accent)]' : '',
                  props.activeRole === 'frontend' ? 'text-[#00ff9d]' : '',
                  props.activeRole === 'backend' ? 'text-[#bc13fe]' : '',
                ]"
                >{{ skill.abbr }}</span
              >
              <span class="text-xs text-[var(--text-nav)]">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Download CV Section -->
        <div class="mt-4 flex justify-start">
          <a
            :href="cvFile"
            :download="cvFilename"
            class="group relative inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent)]/10 font-bold text-[var(--accent)] border border-[var(--accent)]/50 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
          >
            <span>{{ t('about.hero.download_cv') }}</span>
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
