<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { GraduationCap, Briefcase, Users } from 'lucide-vue-next';

import Navbar from '../../components/Navbar/Navbar.vue';
import AboutHero from '../../components/About/AboutHero.vue';
import ExperienceTimeline from '../../components/About/ExperienceTimeline.vue';
import OrganizationTimeline from '../../components/About/OrganizationTimeline.vue';
import EducationTimeline from '../../components/About/EducationTimeline.vue';

type TabType = 'education' | 'experience' | 'organization';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const currentTab = ref<TabType>('education');
const activeRole = ref<'fullstack' | 'frontend' | 'backend'>('fullstack');

const hashToTab = (hash: string): TabType => {
    if (hash === '#education') return 'education';
    if (hash === '#experience') return 'experience';
    if (hash === '#organization') return 'organization';
    return 'education';
};

watch(() => route.hash, (newHash) => {
    currentTab.value = hashToTab(newHash);
}, { immediate: true });

const selectTab = (tab: TabType) => {
    currentTab.value = tab;
    router.replace({ hash: `#${tab}` });
};

const tabs = [
    {
        id: 'education' as TabType,
        name: 'about.education.heading',
        icon: GraduationCap,
        colorClass: 'hover:text-[#00ff9d] hover:border-[#00ff9d]/30',
        activeClass: 'text-[#00ff9d] border-[#00ff9d]/50 bg-[#00ff9d]/10 shadow-[0_0_15px_rgba(0,255,157,0.15)]'
    },
    {
        id: 'experience' as TabType,
        name: 'about.experience.heading',
        icon: Briefcase,
        colorClass: 'hover:text-[var(--accent)] hover:border-[var(--accent)]/30',
        activeClass: 'text-[var(--accent)] border-[var(--accent)]/50 bg-[var(--accent)]/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
    },
    {
        id: 'organization' as TabType,
        name: 'about.organization.heading',
        icon: Users,
        colorClass: 'hover:text-[#bc13fe] hover:border-[#bc13fe]/30',
        activeClass: 'text-[#bc13fe] border-[#bc13fe]/50 bg-[#bc13fe]/10 shadow-[0_0_15px_rgba(188,19,254,0.15)]'
    }
];
</script>

<template>
    <Navbar />
    <section id="about"
        class="min-h-screen flex flex-col items-center py-24 px-8 bg-[var(--bg-primary)] relative overflow-hidden font-mono">

        <!-- Cyber Grid Background -->
        <div class="absolute inset-0 opacity-[var(--grid-opacity)] pointer-events-none"
            style="background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black 40%, transparent 70%);">
        </div>

        <div class="relative z-10 max-w-5xl w-full flex flex-col gap-12">
            <!-- About Hero/Card Component -->
            <AboutHero v-model:activeRole="activeRole" />

            <!-- Tab Navigation Container -->
            <div class="flex flex-col items-center w-full">
                <!-- Tab Buttons -->
                <div class="flex flex-col sm:flex-row gap-2 p-1.5 bg-[var(--bg-secondary)]/60 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl sm:rounded-full w-full max-w-2xl justify-between shadow-lg mb-12">
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        @click="selectTab(tab.id)"
                        class="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl sm:rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer border border-transparent transition-all duration-300 w-full sm:w-auto"
                        :class="[
                            currentTab === tab.id ? tab.activeClass : `text-[var(--text-nav)]/80 ${tab.colorClass}`
                        ]"
                    >
                        <component :is="tab.icon" class="w-4 h-4 shrink-0" />
                        <span>{{ t(tab.name).replace('// ', '') }}</span>
                    </button>
                </div>

                <!-- Dynamic Content Area -->
                <div class="w-full">
                    <Transition name="tab-fade" mode="out-in">
                        <div :key="currentTab" class="w-full">
                            <EducationTimeline v-if="currentTab === 'education'" id="education" />
                            <ExperienceTimeline v-else-if="currentTab === 'experience'" id="experience" :activeRole="activeRole" />
                            <OrganizationTimeline v-else-if="currentTab === 'organization'" id="organization" />
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Tab Fade Transition */
.tab-fade-enter-active,
.tab-fade-leave-active {
    transition: all 0.3s ease;
}

.tab-fade-enter-from {
    opacity: 0;
    transform: translateY(12px);
}

.tab-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>
