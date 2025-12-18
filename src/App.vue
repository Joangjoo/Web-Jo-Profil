<script setup lang="ts">
import { ref } from 'vue';
import AssistantButton from './components/assistant/AssistantButton.vue';
import AssistantChat from './components/assistant/AssistantChat.vue';
import LoadingScreen from './components/Global/LoadingScreen.vue';

const isAssistantOpen = ref(false)
const isLoading = ref(true)
</script>

<template>
  <Transition name="fade">
    <LoadingScreen v-if="isLoading" @finish="isLoading = false" />
  </Transition>
  <router-view v-show="!isLoading" />
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
