<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ExperienceCard from './ExperienceCard.vue';

interface TimelineItem {
    id: number;
    year: string;
    category: 'Internship' | 'Freelance' | 'Personal Project' | 'Competition';
    role: string;
    project: string;
    description: string;
    tech: string[];
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        year: '2025 - Present',
        category: 'Internship',
        role: 'Fullstack Developer Intern',
        project: 'Horus Technology',
        description: 'Developing scalable web applications and contributing to production features. Working with a modern stack to deliver real-world solutions.',
        tech: ['Vue.js', 'TypeScript', 'Tailwind']
    },
    {
        id: 2,
        year: '2024',
        category: 'Personal Project',
        role: 'Creator & Developer',
        project: 'School Info System',
        description: 'Designed and developed a comprehensive information system for a local school to manage student data and academic records.',
        tech: ['Laravel', 'MySQL', 'Bootstrap']
    },
    {
        id: 3,
        year: '2023',
        category: 'Freelance',
        role: 'Frontend Developer',
        project: 'E-Commerce Dashboard',
        description: 'Built a responsive admin dashboard for an e-commerce client, focusing on data visualization and user experience.',
        tech: ['React', 'Tailwind', 'Chart.js']
    },
    {
        id: 4,
        year: '2023',
        category: 'Competition',
        role: 'Team Lead',
        project: 'Hackathon 2023',
        description: 'Led a team of 3 to build a sustainability app prototype in 24 hours. Won "Best UI/UX" category.',
        tech: ['Figma', 'Flutter', 'Firebase']
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

    document.querySelectorAll('.timeline-item').forEach((el) => {
        observer.value?.observe(el);
    });
});
</script>

<template>
    <div class="relative max-w-4xl mx-auto py-12 px-4 font-mono">
        <!-- Header -->
        <div class="mb-12 text-center">
            <h3 class="text-[#00f0ff] text-xl font-bold tracking-[0.2em] mb-2 uppercase">
                // Mission History
            </h3>
            <p class="text-[#a0a0b0] text-sm">System Logs & Experience Archive</p>
        </div>

        <!-- Timeline Container -->
        <div class="relative">
            <!-- Central Line -->
            <div
                class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#00f0ff]/0 via-[#00f0ff]/50 to-[#00f0ff]/0 md:-translate-x-1/2 overflow-hidden">
                <!-- Cyber Snake -->
                <div
                    class="cyber-snake absolute left-0 w-full h-[150px] bg-linear-to-b from-transparent via-[#00f0ff] to-transparent opacity-80 z-20">
                </div>
            </div>

            <!-- Items -->
            <div v-for="(item, index) in timelineData" :key="item.id" class="timeline-item relative mb-12 last:mb-0">
                <div :class="[
                    'flex flex-col md:flex-row items-center gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out',
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                ]">

                    <!-- Content Side -->
                    <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                        :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'">
                        <ExperienceCard :item="item" :index="index" />
                    </div>

                    <!-- Node/Marker -->
                    <div
                        class="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#050510] border-2 border-[#00f0ff] z-10 shadow-[0_0_10px_#00f0ff]">
                        <div
                            class="absolute top-1/2 left-full ml-4 md:ml-0 md:left-auto md:top-auto md:-translate-y-8 w-max">
                            <span :class="[
                                'text-[#00f0ff] font-bold text-sm bg-[#050510] px-2 py-1 border border-[#00f0ff]/30 rounded',
                                index % 2 === 0 ? 'md:-translate-x-full md:-ml-8' : 'md:ml-8'
                            ]">
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
.timeline-item.in-view>div {
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
