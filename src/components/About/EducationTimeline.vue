<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EducationCard from './EducationCard.vue';

interface EducationItem {
    id: number;
    year: string;
    school: string;
    degree: string;
    status: string;
    location: string;
    logo_initials: string;
}

const timelineData: EducationItem[] = [
    {
        id: 1,
        year: '2022 - Present',
        school: 'Universitas Ahmad Dahlan',
        degree: 'Informatika, (S.Kom)',
        status: 'Undergraduate student',
        location: 'Yogyakarta, Indonesia 🇮🇩',
        logo_initials: 'UAD'
    }
];

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.edu-timeline-item').forEach((el) => {
        observer.value?.observe(el);
    });
});
</script>

<template>
    <div class="relative max-w-4xl mx-auto py-12 px-4 font-mono">
        <!-- Green Grid Background -->
        <div class="absolute inset-0 opacity-10 pointer-events-none"
            style="background-image: linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black 40%, transparent 70%);">
        </div>

        <!-- Header -->
        <div class="mb-12 text-center">
            <h3 class="text-[#00ff9d] text-xl font-bold tracking-[0.2em] mb-2 uppercase">
                // Education Level
            </h3>
            <p class="text-[#a0a0b0] text-sm">Academic Background</p>
        </div>

        <!-- Timeline Container -->
        <div class="relative">
            <!-- Central Line -->
            <div
                class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#00ff9d]/0 via-[#00ff9d]/50 to-[#00ff9d]/0 md:-translate-x-1/2 overflow-hidden">
                <!-- Cyber Snake -->
                <div
                    class="cyber-snake absolute left-0 w-full h-[150px] bg-linear-to-b from-transparent via-[#00ff9d] to-transparent opacity-80 z-20">
                </div>
            </div>

            <!-- Items -->
            <div v-for="(item, index) in timelineData" :key="item.id"
                class="edu-timeline-item relative mb-12 last:mb-0">
                <div :class="[
                    'flex flex-col md:flex-row items-center gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out',
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                ]">

                    <!-- Content Side -->
                    <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                        :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'">
                        <EducationCard :item="item" :index="index" />
                    </div>

                    <!-- Node/Marker -->
                    <div
                        class="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#050510] border-2 border-[#00ff9d] z-10 shadow-[0_0_10px_#00ff9d]">

                        <!-- Date Label - Floating desktop only, strict side placement -->
                        <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-max"
                            :class="index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'">
                            <span
                                class="text-[#00ff9d] font-bold text-sm bg-[#050510] px-2 py-1 border border-[#00ff9d]/30 rounded">
                                {{ item.year }}
                            </span>
                        </div>
                    </div>

                    <!-- Empty side for balancing -->
                    <div class="hidden md:block w-1/2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.edu-timeline-item.in-view>div {
    opacity: 1;
    transform: translateY(0);
}

.cyber-snake {
    animation: snake-move 3s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}

@keyframes snake-move {
    0% {
        top: -150px;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}
</style>
