<script setup lang="ts">

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    demoLink?: string;
    repoLink?: string;
}

const props = defineProps<{
    project: Project;
    index: number;
}>();
</script>

<template>
    <div class="relative group h-full perspective-1000" :style="{ animationDelay: `${index * 100}ms` }">
        <!-- Card Container -->
        <div class="
      relative h-full bg-[#0a0a14] border border-[#00f0ff]/20 rounded-xl overflow-hidden
      transition-all duration-500 ease-out
      group-hover:-translate-y-2 group-hover:border-[#00f0ff]/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]
    ">

            <!-- Image Area -->
            <div class="relative h-48 overflow-hidden">
                <!-- Overlay -->
                <div
                    class="absolute inset-0 bg-[#0a0a14]/40 group-hover:bg-transparent transition-all duration-500 z-10">
                </div>

                <!-- Scanline Effect (on Hover) -->
                <div
                    class="absolute inset-0 bg-linear-to-b from-transparent via-[#00f0ff]/10 to-transparent -translate-y-full group-hover:animate-scan z-20 pointer-events-none">
                </div>

                <img :src="project.image" :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0">
            </div>

            <!-- Content Area -->
            <div class="p-6 relative">
                <!-- Decorative Corner -->
                <div
                    class="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="w-16 h-16 border-t border-r border-[#00f0ff]/40 rounded-tr-lg"></div>
                </div>

                <h3
                    class="text-xl font-bold text-[#e8f4ff] mb-2 group-hover:text-[#00f0ff] transition-colors font-mono">
                    {{ project.title }}
                </h3>

                <p class="text-[#a0a0b0] text-sm mb-4 line-clamp-3">
                    {{ project.description }}
                </p>

                <!-- Tech Stack Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <span v-for="tech in project.tech" :key="tech"
                        class="text-xs px-2 py-1 rounded bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/10 font-mono">
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
