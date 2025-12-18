<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    item: {
        year: string;
        category: string;
        role: string;
        project: string;
        description: string;
        tech: string[];
    };
    index: number;
}>();

const tiltCard = ref<HTMLElement | null>(null);
const tilt = ref({ x: 0, y: 0 });

const handleTiltMove = (e: MouseEvent) => {
    if (!tiltCard.value) return;
    const rect = tiltCard.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg
    const rotateY = ((x - centerX) / centerX) * 15;

    tilt.value = { x: rotateX, y: rotateY };
};

const resetTilt = () => {
    tilt.value = { x: 0, y: 0 };
};
</script>

<template>
    <div ref="tiltCard" @mousemove="handleTiltMove" @mouseleave="resetTilt"
        class="relative perspective-1000 group w-full">
        <div class="w-full relative p-4 md:p-6 bg-[#0a0a14]/80 backdrop-blur-sm border border-[#00f0ff]/10 rounded-lg transition-transform duration-100 ease-linear shadow-[0_0_20px_rgba(0,240,255,0.05)] transform-style-3d hover:border-[#00f0ff]/30"
            :style="{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }">
            <!-- Header -->
            <div class="flex flex-col gap-1 mb-3 relative z-10"
                :class="index % 2 === 0 ? 'items-start' : 'md:items-end'">
                <span
                    class="text-[#00f0ff] text-xs font-bold tracking-wider px-2 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                    {{ item.category }}
                </span>
                <h4 class="text-white text-lg font-bold">{{ item.project }}</h4>
                <span class="text-[#a0a0b0] text-sm italic">{{ item.role }}</span>
            </div>

            <!-- Description -->
            <p class="text-[#c0c0d0] text-sm leading-relaxed mb-4 relative z-10">
                {{ item.description }}
            </p>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-2 relative z-10"
                :class="index % 2 === 0 ? 'justify-start' : 'md:justify-end'">
                <span v-for="tech in item.tech" :key="tech" class="text-xs text-[#00f0ff]/80 font-mono">
                    #{{ tech }}
                </span>
            </div>

            <!-- Shine Effect -->
            <div
                class="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg z-0">
            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}

.transform-style-3d {
    transform-style: preserve-3d;
}
</style>
