<script setup lang="ts">
import { ref, onMounted } from 'vue';
import OrganizationCard from './OrganizationCard.vue';

interface TimelineItem {
    id: number;
    year: string;
    category: 'Organization' | 'Committee';
    role: string;
    project: string;
    description: string;
    tech: string[];
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        year: 'Dec 2024',
        category: 'Committee',
        role: 'Chief Executive (Chairperson)',
        project: 'FTI Anniversary (Milad FTI) 2024',
        description: 'Led the organizing committee in designing and executing celebratory programs for the Faculty of Industrial Technology. Managed coordination across divisions, event timeline, and ensured smooth execution of the anniversary series. Promoted faculty identity and unity through various internal and external events.',
        tech: ['Event Management', 'Leadership', 'Coordination']
    },
    {
        id: 2,
        year: 'Jan 2024 - Dec 2024',
        category: 'Organization',
        role: 'Head of Cadre Development Department',
        project: 'BEM Faculty of Industrial Technology (BEM FTI)',
        description: 'Led department planning by creating program matrices and organizing leadership development agendas. Supervised department members and ensured the execution of all programs aligned with organizational goals. Responsible for team coordination, delegation, and maintaining communication flow within the department.',
        tech: ['Leadership', 'Team Management', 'Strategic Planning']
    },
    {
        id: 3,
        year: 'Oct 2023',
        category: 'Committee',
        role: 'Chief Executive (Chairperson)',
        project: 'Informatics Competition 2023 (UAD)',
        description: 'Oversaw the entire event execution from planning to post-event evaluation. Coordinated multiple teams including technical, publication, and logistics divisions. Ensured the event met academic and competitive standards while promoting collaboration among participants.',
        tech: ['Project Management', 'Logistics', 'Team Leadership']
    },
    {
        id: 4,
        year: 'Jan 2023 - Dec 2023',
        category: 'Organization',
        role: 'Staff of Strategic and Aspirational Studies (AKASTRAT)',
        project: 'Himpunan Mahasiswa Informatika (HMIF)',
        description: 'Served as a liaison between students and faculty, addressing academic and campus-related issues. Collected and conveyed student aspirations to the department. Facilitated communication to ensure student concerns were heard and acted upon by the program.',
        tech: ['Communication', 'Student Advocacy', 'Problem Solving']
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

    document.querySelectorAll('.org-timeline-item').forEach((el) => {
        observer.value?.observe(el);
    });
});
</script>

<template>
    <div class="relative max-w-4xl mx-auto py-12 px-4 font-mono">
        <!-- Purple Grid Background -->
        <div class="absolute inset-0 opacity-10 pointer-events-none"
            style="background-image: linear-gradient(#bc13fe 1px, transparent 1px), linear-gradient(90deg, #bc13fe 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black 40%, transparent 70%);">
        </div>

        <!-- Header -->
        <div class="mb-12 text-center">
            <h3 class="text-[#bc13fe] text-xl font-bold tracking-[0.2em] mb-2 uppercase">
                // Organizational & Committee
            </h3>
            <p class="text-[#a0a0b0] text-sm">Leadership & Event Management Archives</p>
        </div>

        <!-- Timeline Container -->
        <div class="relative">
            <!-- Central Line -->
            <div
                class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#bc13fe]/0 via-[#bc13fe]/50 to-[#bc13fe]/0 md:-translate-x-1/2 overflow-hidden">
                <!-- Cyber Snake -->
                <div
                    class="cyber-snake absolute left-0 w-full h-[150px] bg-linear-to-b from-transparent via-[#bc13fe] to-transparent opacity-80 z-20">
                </div>
            </div>

            <!-- Items -->
            <div v-for="(item, index) in timelineData" :key="item.id"
                class="org-timeline-item relative mb-12 last:mb-0">
                <div :class="[
                    'flex flex-col md:flex-row items-center gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out',
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                ]">

                    <!-- Content Side -->
                    <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left"
                        :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'">
                        <OrganizationCard :item="item" :index="index" />
                    </div>

                    <!-- Node/Marker -->
                    <div
                        class="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#050510] border-2 border-[#bc13fe] z-10 shadow-[0_0_10px_#bc13fe]">

                        <!-- Date Label - Floating desktop only, strict side placement -->
                        <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-max"
                            :class="index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'">
                            <span
                                class="text-[#bc13fe] font-bold text-sm bg-[#050510] px-2 py-1 border border-[#bc13fe]/30 rounded">
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
.org-timeline-item.in-view>div {
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
