<script setup lang="ts">

defineProps<{
    image: string;
    title: string;
    issued: string;
    description: string;
    index: number;
}>();

const emit = defineEmits(['click']);
</script>

<template>
    <div class="group relative cursor-pointer overflow-hidden rounded-xl bg-[#0a0a14] border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
        @click="emit('click')" :style="{ animationDelay: `${index * 100}ms` }">

        <!-- Image Container -->
        <div class="relative aspect-video overflow-hidden">
            <img :src="image" :alt="title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50" />

            <!-- Gradient Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300">
            </div>

        </div>

        <!-- Content Overlay (Bottom) -->
        <div
            class="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
            <!-- Label -->
            <div class="flex items-center gap-2 mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <div class="w-1 h-4 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                <span class="text-[#00f0ff] text-xs font-mono uppercase tracking-wider">{{ issued }}</span>
            </div>

            <!-- Title -->
            <h3
                class="text-white font-bold text-lg font-mono leading-tight mb-2 group-hover:text-[#00f0ff] transition-colors drop-shadow-md">
                {{ title }}
            </h3>

            <!-- Description (Hidden by default, slides in) -->
            <div
                class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div class="overflow-hidden">
                    <p class="text-[#a0a0b0] text-sm leading-relaxed pb-1 border-t border-[#00f0ff]/20 pt-3 mt-1">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Tech Lines / Decoration -->
        <div class="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="flex gap-1">
                <div class="w-1 h-1 bg-[#00f0ff] rounded-full animate-pulse"></div>
                <div class="w-1 h-1 bg-[#00f0ff] rounded-full opacity-50"></div>
                <div class="w-1 h-1 bg-[#00f0ff] rounded-full opacity-25"></div>
            </div>
        </div>
    </div>
</template>
