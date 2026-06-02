<script setup lang="ts">
import { ref } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';
import AssistantButton from './components/assistant/AssistantButton.vue';
import AssistantChat from './components/assistant/AssistantChat.vue';
import LoadingScreen from './components/Global/LoadingScreen.vue';
import { useTheme } from './composables/useTheme';
import { useLanguage } from './composables/useLanguage';

const { isDark, toggle } = useTheme();
const { toggleLanguage, isEnglish } = useLanguage();

const isAssistantOpen = ref(false)
const isLoading = ref(true)
</script>

<template>
  <Transition name="fade">
    <LoadingScreen v-if="isLoading" @finish="isLoading = false" />
  </Transition>
  <router-view v-show="!isLoading" />
  <button @click="toggle"
    class="fixed bottom-24 left-8 z-50 group"
    :title="isDark ? $t('nav.theme_toggle_dark') : $t('nav.theme_toggle_light')">
    <div
      class="absolute inset-0 bg-[var(--accent)] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300">
    </div>
    <div
      class="relative flex items-center justify-center w-14 h-14 rounded-full 
             bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--accent)]/30
             shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]
             transition-all duration-300
             group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.5)]">
      <component :is="isDark ? Moon : Sun" class="w-7 h-7 text-[var(--accent)] transition-transform duration-300 group-hover:rotate-12" />
    </div>
  </button>
  <button @click="toggleLanguage"
    class="fixed bottom-44 left-8 z-50 group"
    :title="$t('nav.language')">
    <div
      class="absolute inset-0 bg-[var(--accent)] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300">
    </div>
    <div
      class="relative flex items-center justify-center w-12 h-12 rounded-full 
             bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--accent)]/30
             shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]
             transition-all duration-300 text-sm font-mono font-bold
             group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.5)]">
      <span class="text-[var(--accent)]">{{ isEnglish ? 'ID' : 'EN' }}</span>
    </div>
  </button>
  <AssistantButton :isOpen="isAssistantOpen" @toggle="isAssistantOpen = !isAssistantOpen" />
  <AssistantChat :isOpen="isAssistantOpen" />
</template>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
