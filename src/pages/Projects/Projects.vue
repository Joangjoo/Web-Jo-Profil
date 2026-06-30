<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Navbar from '../../components/Navbar/Navbar.vue';
import ProjectCard from '../../components/Projects/ProjectCard.vue';

const { t } = useI18n();

// Image Imports
import projek1 from '../../assets/projects/projek1.png';
import projek2 from '../../assets/projects/projek2.png';
import projek3 from '../../assets/projects/projek3.png';
import projek4 from '../../assets/projects/projek4.png';
import projek5 from '../../assets/projects/projek5.png';
import projek6 from '../../assets/projects/projek6.png';
import projek7 from '../../assets/projects/projek7.png';
import projek8 from '../../assets/projects/projek8.png';
import sepatu from '../../assets/projects/sepatu.png';
import projek9 from '../../assets/projects/projek9.jpeg';

// Filter categories
const activeFilter = ref('All');

const projects = computed(() => [
    {
        title: t('projects.entries.0.title'),
        description: t('projects.entries.0.description'),
        image: projek1,
        tech: ["HTML", "PHP", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.1.title'),
        description: t('projects.entries.1.description'),
        image: projek2,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.2.title'),
        description: t('projects.entries.2.description'),
        image: projek3,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.3.title'),
        description: t('projects.entries.3.description'),
        image: projek4,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.4.title'),
        description: t('projects.entries.4.description'),
        image: projek5,
        tech: ["React", "Tailwind CSS", "AOS"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.5.title'),
        description: t('projects.entries.5.description'),
        image: projek6,
        tech: ["HTML", "Tailwind CSS", "AOS"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.6.title'),
        description: t('projects.entries.6.description'),
        image: projek7,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.7.title'),
        description: t('projects.entries.7.description'),
        image: projek8,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.8.title'),
        description: t('projects.entries.8.description'),
        image: sepatu,
        tech: ["Figma", "UI/UX", "Web Design"],
        category: "UI/UX",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: t('projects.entries.9.title'),
        description: t('projects.entries.9.description'),
        image: projek9,
        tech: ["React (TSX)", "Vite", "Tailwind CSS", "Laravel API"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    }
]);

const filteredProjects = computed(() => {
    if (activeFilter.value === 'All') return projects.value;
    return projects.value.filter(p => p.category === activeFilter.value);
});


</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-mono pt-24 pb-16 px-6 relative overflow-x-hidden">
        <!-- Background Grid -->
        <div class="fixed inset-0 grid-bg opacity-[var(--grid-opacity)] pointer-events-none"></div>

        <div class="max-w-6xl mx-auto relative z-10">
            <!-- Header -->
            <div class="mb-12 text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-[var(--text-heading)] mb-4 tracking-tight glitch-text"
                    :data-text="t('projects.heading')">
                    {{ t('projects.heading') }}
                </h1>
                <p class="text-[var(--text-nav)] max-w-2xl mx-auto">
                    {{ t('projects.subtitle') }}
                </p>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TransitionGroup name="list">
                    <ProjectCard v-for="(project, index) in filteredProjects" :key="project.title" :project="project"
                        :index="index" />
                </TransitionGroup>
            </div>

            <!-- Empty State -->
            <div v-if="filteredProjects.length === 0" class="text-center py-20 text-[var(--text-muted)] animate-pulse">
                {{ t('projects.empty_state') }} </div>
            </div>
        </div>
</template>

<style scoped>
.grid-bg {
    background-image:
        linear-gradient(var(--grid-color-dim) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-color-dim) 1px, transparent 1px);
    background-size: 50px 50px;
}

.glitch-text {
    position: relative;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--glitch-bg);
}

.glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
    left: -2px;
    text-shadow: -1px 0 #00fff9;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% {
        clip: rect(12px, 9999px, 86px, 0);
    }

    20% {
        clip: rect(74px, 9999px, 12px, 0);
    }

    40% {
        clip: rect(48px, 9999px, 59px, 0);
    }

    60% {
        clip: rect(2px, 9999px, 34px, 0);
    }

    80% {
        clip: rect(98px, 9999px, 6px, 0);
    }

    100% {
        clip: rect(32px, 9999px, 45px, 0);
    }
}

@keyframes glitch-anim2 {
    0% {
        clip: rect(22px, 9999px, 16px, 0);
    }

    20% {
        clip: rect(84px, 9999px, 2px, 0);
    }

    40% {
        clip: rect(58px, 9999px, 69px, 0);
    }

    60% {
        clip: rect(12px, 9999px, 44px, 0);
    }

    80% {
        clip: rect(88px, 9999px, 16px, 0);
    }

    100% {
        clip: rect(42px, 9999px, 55px, 0);
    }
}

/* List Transitions */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
