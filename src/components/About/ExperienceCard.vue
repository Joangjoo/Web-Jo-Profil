<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
    item: {
        year: string;
        category: string;
        role: string;
        role_fe?: string;
        role_be?: string;
        project: string;
        description: string;
        description_fe?: string;
        description_be?: string;
        tech: string[];
    };
    index: number;
    activeRole: 'fullstack' | 'frontend' | 'backend';
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

const computedRole = computed(() => {
    if (props.activeRole === 'frontend' && props.item.role_fe) return props.item.role_fe;
    if (props.activeRole === 'backend' && props.item.role_be) return props.item.role_be;
    return props.item.role;
});

const computedDescription = computed(() => {
    if (props.activeRole === 'frontend' && props.item.description_fe) return props.item.description_fe;
    if (props.activeRole === 'backend' && props.item.description_be) return props.item.description_be;
    return props.item.description;
});
</script>

<template>
    <div ref="tiltCard" @mousemove="handleTiltMove" @mouseleave="resetTilt"
        class="relative perspective-1000 group w-full font-mono">
        <div class="w-full relative p-4 md:p-6 bg-[var(--bg-secondary)]/80 backdrop-blur-sm border rounded-lg transition-transform duration-100 ease-linear shadow-[0_0_20px_rgba(var(--accent-rgb),0.05)] transform-style-3d hover:border-[var(--accent)]/30"
            :class="[
                props.activeRole === 'fullstack' ? 'border-[var(--accent)]/10 shadow-[0_0_20px_rgba(0,240,255,0.03)]' : '',
                props.activeRole === 'frontend' ? 'border-[#00ff9d]/10 shadow-[0_0_20px_rgba(0,255,157,0.03)]' : '',
                props.activeRole === 'backend' ? 'border-[#bc13fe]/10 shadow-[0_0_20px_rgba(188,19,254,0.03)]' : ''
            ]"
            :style="{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }">
            <!-- Header -->
            <div class="flex flex-col gap-1 mb-3 relative z-10"
                :class="index % 2 === 0 ? 'items-start' : 'md:items-end'">
                <span class="md:hidden text-xs font-mono mb-1 animate-pulse"
                    :class="[
                        props.activeRole === 'fullstack' ? 'text-[var(--accent)]' : '',
                        props.activeRole === 'frontend' ? 'text-[#00ff9d]' : '',
                        props.activeRole === 'backend' ? 'text-[#bc13fe]' : ''
                    ]">
                    {{ item.year }}
                </span>
                <span
                    class="text-xs font-bold tracking-wider px-2 py-0.5 rounded border transition-colors duration-300"
                    :class="[
                        props.activeRole === 'fullstack' ? 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20' : '',
                        props.activeRole === 'frontend' ? 'bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20' : '',
                        props.activeRole === 'backend' ? 'bg-[#bc13fe]/10 text-[#bc13fe] border-[#bc13fe]/20' : ''
                    ]"
                >
                    {{ item.category }}
                </span>
                <h4 class="text-[var(--text-heading)] text-lg font-bold">{{ item.project }}</h4>
                <span class="text-[var(--text-nav)] text-sm italic transition-colors duration-300">{{ computedRole }}</span>
            </div>

            <!-- Description -->
            <p class="text-[var(--text-body)] text-sm leading-relaxed mb-4 relative z-10 text-justify">
                {{ computedDescription }}
            </p>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-2 relative z-10"
                :class="index % 2 === 0 ? 'justify-start' : 'md:justify-end'">
                <span v-for="tech in item.tech" :key="tech" class="text-xs font-mono transition-colors duration-300"
                    :class="[
                        props.activeRole === 'fullstack' ? 'text-[var(--accent)]/80' : '',
                        props.activeRole === 'frontend' ? 'text-[#00ff9d]/80' : '',
                        props.activeRole === 'backend' ? 'text-[#bc13fe]/80' : ''
                    ]">
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
