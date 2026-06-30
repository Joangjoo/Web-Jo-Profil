<script setup lang="ts">
import { ref } from 'vue';

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    demoLink?: string;
    repoLink?: string;
}

defineProps<{
    project: Project;
    index: number;
}>();

const isExpanded = ref(false);
</script>

<template>
    <div class="relative group h-full perspective-1000" :style="{ animationDelay: `${index * 100}ms` }">
        <!-- Card Container -->
        <div class="
      relative flex flex-col h-full bg-[var(--bg-secondary)] border border-[var(--accent)]/20 rounded-xl overflow-hidden
      transition-all duration-500 ease-out
      group-hover:-translate-y-2 group-hover:border-[var(--accent)]/50 group-hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]
    ">

            <!-- Image Area -->
            <div class="relative h-48 overflow-hidden shrink-0">
                <!-- Overlay -->
                <div
                    class="absolute inset-0 bg-[var(--bg-secondary)]/40 group-hover:bg-transparent transition-all duration-500 z-10">
                </div>

                <!-- Scanline Effect (on Hover) -->
                <div
                    class="absolute inset-0 bg-linear-to-b from-transparent via-[var(--accent)]/10 to-transparent -translate-y-full group-hover:animate-scan z-20 pointer-events-none">
                </div>

                <img :src="project.image" :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            </div>

            <!-- Content Area -->
            <div class="p-6 relative flex flex-col justify-between flex-grow">
                <div>
                    <!-- Decorative Corner -->
                    <div
                        class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="w-16 h-16 border-t border-r border-[var(--accent)]/40 rounded-tr-lg"></div>
                    </div>

                    <h3
                        class="text-xl font-bold text-[var(--text-heading)] mb-2 group-hover:text-[var(--accent)] transition-colors font-mono">
                        {{ project.title }}
                    </h3>

                    <p 
                        class="text-[var(--text-nav)] text-sm text-justify transition-all duration-300 cursor-pointer"
                        :class="[isExpanded ? 'line-clamp-none mb-4' : 'line-clamp-3 mb-2']"
                        @click="isExpanded = !isExpanded"
                        :title="isExpanded ? 'Click to show less' : 'Click to read more'"
                    >
                        {{ project.description }}
                    </p>

                    <!-- Toggle Button -->
                    <button 
                        v-if="project.description.length > 150"
                        @click="isExpanded = !isExpanded"
                        class="text-xs text-[var(--accent)] hover:text-[var(--accent)]/80 mt-1 mb-4 focus:outline-none cursor-pointer font-mono font-bold tracking-wider block"
                    >
                        {{ isExpanded ? '<< [COLLAPSE]' : '>> [READ_MORE]' }}
                    </button>
                </div>

                <!-- Tech Stack Tags -->
                <div class="flex flex-wrap gap-2 mt-auto">
                    <span v-for="tech in project.tech" :key="tech"
                        class="text-xs px-2 py-1 rounded bg-[var(--accent)]/5 text-[var(--accent)] border border-[var(--accent)]/10 font-mono">
                        {{ tech }}
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes scan {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(100%);
    }
}

.animate-scan {
    animation: scan 1.5s linear infinite;
}
</style>
