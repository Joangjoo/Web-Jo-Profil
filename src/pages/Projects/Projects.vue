<script setup lang="ts">
import { ref, computed } from 'vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import ProjectCard from '../../components/Projects/ProjectCard.vue';

// Filter categories
const filters = ['All', 'Web', 'Mobile', 'UI/UX', 'AI'];
const activeFilter = ref('All');

// Placeholder Data - User to update this!
const projects = [
    {
        title: "Portfolio v1",
        description: "My personal portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features 3D interactions and a cyber aesthetic.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        tech: ["Vue 3", "TypeScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers. Visualize sales data, manage inventory, and track customer trends.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tech: ["React", "Node.js", "MySQL"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "AI Chat Assistant",
        description: "An intelligent chatbot integrated with OpenAI's GPT-4 API. deployed as a floating widget for easy access.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
        tech: ["Python", "OpenAI", "FastAPI"],
        category: "AI",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Finance Tracker App",
        description: "Mobile application for tracking personal expenses and investments with real-time market data.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee46a38531?q=80&w=2034&auto=format&fit=crop",
        tech: ["Flutter", "Firebase", "Dart"],
        category: "Mobile",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Cyberpunk UI Kit",
        description: "A complete design system for sci-fi themed applications. Includes buttons, inputs, and layout components.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        tech: ["Figma", "CSS", "Design"],
        category: "UI/UX",
        demoLink: "#",
        repoLink: "#"
    }
];

const filteredProjects = computed(() => {
    if (activeFilter.value === 'All') return projects;
    return projects.filter(p => p.category === activeFilter.value);
});

const setFilter = (filter: string) => {
    activeFilter.value = filter;
};
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[#050510] text-[#c8d8e8] font-mono pt-24 pb-16 px-6 relative overflow-x-hidden">
        <!-- Background Grid -->
        <div class="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>

        <div class="max-w-6xl mx-auto relative z-10">
            <!-- Header -->
            <div class="mb-12 text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-[#e8f4ff] mb-4 tracking-tight glitch-text"
                    data-text="DEPLOYED PROJECTS">
                    DEPLOYED PROJECTS
                </h1>
                <p class="text-[#a0a0b0] max-w-2xl mx-auto">
                    A collection of experiments, production apps, and digital artifacts.
                    Deployed and operational.
                </p>
            </div>

            <!-- Filter Bar -->
            <div class="flex justify-center flex-wrap gap-4 mb-12">
                <button v-for="filter in filters" :key="filter" @click="setFilter(filter)"
                    class="px-4 py-2 text-sm border transition-all duration-300 relative group overflow-hidden" :class="[
                        activeFilter === filter
                            ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                            : 'border-[#4a5f7f]/50 text-[#4a5f7f] hover:border-[#00f0ff]/50 hover:text-[#e8f4ff]'
                    ]">
                    <!-- Glitch overlay on hover -->
                    <span
                        class="absolute inset-0 bg-[#00f0ff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span class="relative z-10">[{{ filter }}]</span>
                </button>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TransitionGroup name="list">
                    <ProjectCard v-for="(project, index) in filteredProjects" :key="project.title" :project="project"
                        :index="index" />
                </TransitionGroup>
            </div>

            <!-- Empty State -->
            <div v-if="filteredProjects.length === 0" class="text-center py-20 text-[#4a5f7f] animate-pulse">
                >> NO ARTIFACTS FOUND IN THIS SECTOR << </div>
            </div>
        </div>
</template>

<style scoped>
.grid-bg {
    background-image:
        linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
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
    background: #050510;
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
