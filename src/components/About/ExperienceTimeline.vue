<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ExperienceCard from './ExperienceCard.vue';

interface TimelineItem {
    id: number;
    year: string;
    category: 'Internship' | 'Freelance' | 'Personal Project' | 'Competition' | 'Project School';
    role: string;
    project: string;
    description: string;
    tech: string[];
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        year: 'October 2025 - January 2026',
        category: 'Internship',
        role: 'Fullstack Developer Intern',
        project: 'Horus Technology',
        description: 'Contributed to the development of AI-driven enterprise software. Focused on frontend development for TING software, including UI implementation, backend API integration, and real-time data handling using Server-Sent Events (SSE). Also developed and redesigned company websites, built an Agentic AI demo, and collaborated closely with backend engineers, product teams, and the CEO.',
        tech: ['Vue.js', 'Tailwind CSS', 'REST API', 'SSE']
    },
    {
        id: 2,
        year: 'April 2025 - July 2025',
        category: 'Internship',
        role: 'Fullstack Developer Intern',
        project: 'School Information System – SD Muhammadiyah Bausasran',
        description: 'Developed a full-featured School Information System including a dynamic school profile website, admin panel, and online student admission (PPDB) system. Independently handled frontend and backend development, database management, and content management features for administrators.',
        tech: ['Laravel', 'FilamentPHP', 'MySQL', 'Tailwind CSS']
    },
    {
        id: 3,
        year: '2025',
        category: 'Freelance',
        role: 'Fullstack Web Developer',
        project: 'Car Rental Website',
        description: 'Built a responsive fullstack web application for a car rental business. Developed a Laravel backend and React TypeScript frontend, including admin features for managing vehicles, rental schedules, and customer data.',
        tech: ['React', 'TypeScript', 'Laravel', 'FilamentPHP', 'MySQL']
    },
    {
        id: 4,
        year: '2025',
        category: 'Project School',
        role: 'Project Manager & Frontend Developer',
        project: 'Tri Jaya Agung Business Website',
        description: 'Developed a business profile website for a building materials store with a dynamic product catalog. Integrated an admin panel for content management and focused on clean UI/UX to improve business credibility.',
        tech: ['React', 'TypeScript', 'Laravel', 'FilamentPHP', 'Tailwind CSS']
    },
    {
        id: 5,
        year: '2025',
        category: 'Freelance',
        role: 'Fullstack Web Developer',
        project: 'Boarding School Management System',
        description: 'Built a school management system to digitize administrative tasks, including student data management, activity scheduling, and news updates. Designed a user-friendly admin dashboard for school operators.',
        tech: ['React', 'TypeScript', 'Laravel', 'FilamentPHP', 'MySQL']
    },
    {
        id: 6,
        year: '2024',
        category: 'Competition',
        role: 'Frontend Developer',
        project: 'Tourism Destination Website',
        description: 'Designed and developed a responsive tourism destination website for a competition project, focusing on visual storytelling, responsive layout, and smooth animations using AOS.',
        tech: ['HTML', 'Tailwind CSS', 'AOS']
    },
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
                // My Experience
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
                        <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-max"
                            :class="index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'">
                            <span
                                class="text-[#00f0ff] font-bold text-sm bg-[#050510] px-2 py-1 border border-[#00f0ff]/30 rounded">
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
