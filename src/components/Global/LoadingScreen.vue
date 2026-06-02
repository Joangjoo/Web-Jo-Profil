<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(['finish']);

const progress = ref(0);
const messages = computed(() => [
    t('loading.messages.0'),
    t('loading.messages.1'),
    t('loading.messages.2'),
    t('loading.messages.3'),
    t('loading.messages.4'),
]);
const currentMessage = ref('');

onMounted(() => {
    currentMessage.value = messages.value[0] ?? '';
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
        currentStep++;
        progress.value = Math.min(100, (currentStep / steps) * 100);

        const messageIndex = Math.floor((progress.value / 100) * (messages.value.length - 1));
        currentMessage.value = messages.value[messageIndex] ?? '';

        if (currentStep >= steps) {
            clearInterval(timer);
            setTimeout(() => {
                emit('finish');
            }, 500); // Small delay at 100% before finishing
        }
    }, interval);
});
</script>

<template>
    <div class="fixed inset-0 bg-[var(--bg-primary)] z-[9999] flex flex-col items-center justify-center font-mono">
        <!-- Cyber Grid Background (Optional, subtle) -->
        <div class="absolute inset-0 opacity-[var(--grid-opacity)] pointer-events-none"
            style="background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px); background-size: 50px 50px;">
        </div>

        <div class="relative z-10 w-64 md:w-80 flex flex-col gap-4">
            <!-- Glitch Text -->
            <h1 class="text-[var(--accent)] text-2xl font-bold tracking-widest uppercase text-center animate-pulse">
                {{ t('loading.title') }}
            </h1>

            <!-- Progress Bar Container -->
            <div class="w-full h-2 bg-[var(--bg-secondary)] border border-[var(--accent)]/30 rounded-full overflow-hidden relative">
                <!-- Shine Effect -->
                <div
                    class="absolute inset-0 z-20 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer">
                </div>

                <!-- Fill -->
                <div class="h-full bg-[var(--accent)] transition-all duration-75 ease-out shadow-[0_0_10px_var(--accent)]"
                    :style="{ width: `${progress}%` }"></div>
            </div>

            <div class="flex justify-between items-center text-xs text-[var(--accent)]/70">
                <span class="truncate pr-4">> {{ currentMessage }}</span>
                <span>{{ Math.floor(progress) }}%</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.animate-shimmer {
    animation: shimmer 1.5s infinite linear;
}
</style>
