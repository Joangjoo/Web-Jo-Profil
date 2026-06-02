<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ExperienceCard from './ExperienceCard.vue';

const { t } = useI18n();

interface TimelineItem {
    id: number;
    year: string;
    category: 'Internship' | 'Freelance' | 'Personal Project' | 'Competition' | 'Project School';
    role: string;
    project: string;
    description: string;
    tech: string[];
}

const timelineData = computed<TimelineItem[]>(() => [
    {
        id: 1,
        year: t('about.experience.entries.0.year'),
        category: 'Internship',
        role: t('about.experience.entries.0.role'),
        project: t('about.experience.entries.0.project'),
        description: t('about.experience.entries.0.description'),
        tech: ['React.js', 'Tailwind CSS', 'Shad CDN UI', 'Inertia', 'Laravel','Docker','PostgreSQL']
    },
    {
        id: 2,
        year: t('about.experience.entries.1.year'),
        category: 'Internship',
        role: t('about.experience.entries.1.role'),
        project: t('about.experience.entries.1.project'),
        description: t('about.experience.entries.1.description'),
        tech: ['Vue.js', 'Tailwind CSS', 'REST API', 'SSE']
    },
    {
        id: 3,
        year: t('about.experience.entries.2.year'),
        category: 'Internship',
        role: t('about.experience.entries.2.role'),
        project: t('about.experience.entries.2.project'),
        description: t('about.experience.entries.2.description'),
        tech: ['Laravel', 'FilamentPHP', 'MySQL', 'Tailwind CSS']
    },
    {
        id: 4,
        year: t('about.experience.entries.3.year'),
        category: 'Freelance',
        role: t('about.experience.entries.3.role'),
        project: t('about.experience.entries.3.project'),
        description: t('about.experience.entries.3.description'),
        tech: ['React', 'TypeScript', 'Laravel', 'FilamentPHP', 'MySQL']
    },
    {
        id: 5,
        year: t('about.experience.entries.4.year'),
        category: 'Project School',
        role: t('about.experience.entries.4.role'),
        project: t('about.experience.entries.4.project'),
        description: t('about.experience.entries.4.description'),
        tech: ['React', 'TypeScript', 'Laravel', 'FilamentPHP', 'Tailwind CSS']
    },
    {
        id: 6,
        year: t('about.experience.entries.5.year'),
        category: 'Freelance',
        role: t('about.experience.entries.5.role'),
        project: t('about.experience.entries.5.project'),
        description: t('about.experience.entries.5.description'),
        tech: ['React', 'TypeScript', 'Laravel', 'FilamentPHP', 'MySQL']
    },
    {
        id: 7,
        year: t('about.experience.entries.6.year'),
        category: 'Competition',
        role: t('about.experience.entries.6.role'),
        project: t('about.experience.entries.6.project'),
        description: t('about.experience.entries.6.description'),
        tech: ['HTML', 'Tailwind CSS', 'AOS']
    },
]);

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
            <h3 class="text-[var(--accent)] text-xl font-bold tracking-[0.2em] mb-2 uppercase">
                {{ t('about.experience.heading') }}
            </h3>
            <p class="text-[var(--text-nav)] text-sm">{{ t('about.experience.subtitle') }}</p>
        </div>

        <!-- Timeline Container -->
        <div class="relative">
            <!-- Central Line -->
            <div
                class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[var(--accent)]/0 via-[var(--accent)]/50 to-[var(--accent)]/0 md:-translate-x-1/2 overflow-hidden">
                <!-- Cyber Snake -->
                <div
                    class="cyber-snake absolute left-0 w-full h-[150px] bg-linear-to-b from-transparent via-[var(--accent)] to-transparent opacity-80 z-20">
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
                        class="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] z-10 shadow-[0_0_10px_var(--accent)]">
                        <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-max"
                            :class="index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'">
                            <span
                                class="text-[var(--accent)] font-bold text-sm bg-[var(--bg-primary)] px-2 py-1 border border-[var(--accent)]/30 rounded">
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
