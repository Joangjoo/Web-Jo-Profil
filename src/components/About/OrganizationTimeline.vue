<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import OrganizationCard from './OrganizationCard.vue';

const { t } = useI18n();

interface TimelineItem {
    id: number;
    year: string;
    category: 'Organization' | 'Committee';
    role: string;
    project: string;
    description: string;
    tech: string[];
}

const timelineData = computed<TimelineItem[]>(() => [
    {
        id: 1,
        year: t('about.organization.entries.0.year'),
        category: 'Committee',
        role: t('about.organization.entries.0.role'),
        project: t('about.organization.entries.0.project'),
        description: t('about.organization.entries.0.description'),
        tech: ['Event Management', 'Leadership', 'Coordination']
    },
    {
        id: 2,
        year: t('about.organization.entries.1.year'),
        category: 'Organization',
        role: t('about.organization.entries.1.role'),
        project: t('about.organization.entries.1.project'),
        description: t('about.organization.entries.1.description'),
        tech: ['Leadership', 'Team Management', 'Strategic Planning']
    },
    {
        id: 3,
        year: t('about.organization.entries.2.year'),
        category: 'Committee',
        role: t('about.organization.entries.2.role'),
        project: t('about.organization.entries.2.project'),
        description: t('about.organization.entries.2.description'),
        tech: ['Project Management', 'Logistics', 'Team Leadership']
    },
    {
        id: 4,
        year: t('about.organization.entries.3.year'),
        category: 'Organization',
        role: t('about.organization.entries.3.role'),
        project: t('about.organization.entries.3.project'),
        description: t('about.organization.entries.3.description'),
        tech: ['Communication', 'Student Advocacy', 'Problem Solving']
    }
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

    document.querySelectorAll('.org-timeline-item').forEach((el) => {
        observer.value?.observe(el);
    });
});
</script>

<template>
    <div class="relative max-w-4xl mx-auto py-12 px-4 font-mono">
        <!-- Purple Grid Background -->
        <div class="absolute inset-0 opacity-[calc(var(--grid-opacity)*0.5)] pointer-events-none"
            style="background-image: linear-gradient(#bc13fe 1px, transparent 1px), linear-gradient(90deg, #bc13fe 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black 40%, transparent 70%);">
        </div>

        <!-- Header -->
        <div class="mb-12 text-center">
            <h3 class="text-[#bc13fe] text-xl font-bold tracking-[0.2em] mb-2 uppercase">
                {{ t('about.organization.heading') }}
            </h3>
            <p class="text-[var(--text-nav)] text-sm">{{ t('about.organization.subtitle') }}</p>
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
                        class="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[var(--bg-primary)] border-2 border-[#bc13fe] z-10 shadow-[0_0_10px_#bc13fe]">

                        <!-- Date Label - Floating desktop only, strict side placement -->
                        <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-max"
                            :class="index % 2 === 0 ? 'right-full mr-8' : 'left-full ml-8'">
                            <span
                                class="text-[#bc13fe] font-bold text-sm bg-[var(--bg-primary)] px-2 py-1 border border-[#bc13fe]/30 rounded">
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
