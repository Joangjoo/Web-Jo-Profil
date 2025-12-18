<script setup lang="ts">
import { Bot } from 'lucide-vue-next';

defineProps<{
    isOpen: boolean
}>()

defineEmits(['toggle'])
</script>

<template>
    <button class="fixed bottom-8 right-8 z-50 group" @click="$emit('toggle')">
        <!-- Pulse Effect -->
        <div
            class="absolute inset-0 bg-[#00f0ff] rounded-full blur opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-300">
        </div>

        <!-- Button Container -->
        <div class="relative flex items-center justify-center w-14 h-14 rounded-full 
               bg-[#0a0a14]/90 backdrop-blur-md border border-[#00f0ff]/30
               shadow-[0_0_15px_rgba(0,240,255,0.3)]
               transition-all duration-300
               group-hover:scale-110 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
            <Bot class="w-7 h-7 text-[#00f0ff] transition-transform duration-300 group-hover:rotate-12" />
        </div>
    </button>
</template>

<style scoped>
/* Optional: Add custom animations if not using Tailwind's animate-pulse */
</style>
