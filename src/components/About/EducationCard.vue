<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    item: {
        year: string;
        school: string;
        degree: string;
        status: string;
        location: string;
        logo_initials: string;
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
        class="relative perspective-1000 group w-full min-w-[300px] md:min-w-[450px]">
        <div class="w-full relative p-6 bg-[#020b06]/90 backdrop-blur-xl border border-[#00ff9d]/20 rounded-xl transition-all duration-300 ease-out shadow-[0_0_20px_rgba(0,255,157,0.05)] transform-style-3d hover:border-[#00ff9d]/50 hover:shadow-[0_0_30px_rgba(0,255,157,0.1)]"
            :style="{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }">

            <div class="flex items-start gap-4 relatie z-10">
                <!-- Avatar/Logo Placeholder -->
                <div
                    class="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/30 items-center justify-center">
                    <span class="text-[#00ff9d] font-bold text-lg">{{ item.logo_initials }}</span>
                </div>

                <div class="flex-grow">
                    <!-- Header -->
                    <div class="flex flex-col gap-1 mb-2">
                        <!-- Inline Date for Mobile -->
                        <span class="md:hidden text-[#00ff9d] text-xs font-mono mb-1">
                            {{ item.year }}
                        </span>

                        <h4 class="text-white text-lg font-bold">{{ item.school }}</h4>
                        <div class="flex flex-wrap items-center gap-2 text-sm">
                            <span class="text-[#00ff9d] font-medium">{{ item.status }}</span>
                            <span class="text-[#a0a0b0]">•</span>
                            <span class="text-[#c0c0d0]">{{ item.degree }}</span>
                        </div>
                    </div>

                    <!-- Meta -->
                    <div class="flex items-center gap-2 text-[#a0a0b0] text-xs mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{{ item.location }}</span>
                    </div>
                </div>
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
