<script setup lang="ts">
import { ref, computed } from 'vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import ProjectCard from '../../components/Projects/ProjectCard.vue';

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

// Filter categories
const activeFilter = ref('All');

const projects = [
    {
        title: "Website E-Commerce Toko Roti",
        description: "E-commerce website for a bakery store featuring product listings, pricing display, and a simple purchasing flow with a clean and responsive layout.",
        image: projek1,
        tech: ["HTML", "PHP", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Slicing UI Web Coffee",
        description: "Frontend UI slicing project for a coffee shop website, focusing on responsive layout, visual consistency, and clean component structure.",
        image: projek2,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Slicing UI Web Coffee",
        description: "Coffee shop website UI slicing with emphasis on modern design, smooth layout, and user-friendly presentation.",
        image: projek3,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Website Destination",
        description: "Tourism destination website showcasing local attractions with engaging visuals, structured content, and responsive design.",
        image: projek4,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Website Perpustakaan",
        description: "Library website designed to display book collections, library information, and announcements with a responsive and accessible interface.",
        image: projek5,
        tech: ["React", "Tailwind CSS", "AOS"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Student Org Database",
        description: "Internal web system for managing student organization data, including member lists, organizational structure, and documentation records.",
        image: projek6,
        tech: ["HTML", "Tailwind CSS", "AOS"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Website Budaya",
        description: "Cultural website designed to present traditional heritage content with informative sections and modern visual layout.",
        image: projek7,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Website Destination",
        description: "Tourism website highlighting destinations, galleries, and descriptive content with a clean and user-friendly design.",
        image: projek8,
        tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
        category: "Web",
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Shoe Store Web Design",
        description: "UI/UX design concept for a shoe store website with a mobile-first approach, focusing on usability, modern aesthetics, and intuitive navigation across web devices.",
        image: sepatu,
        tech: ["Figma", "UI/UX", "Web Design"],
        category: "UI/UX",
        demoLink: "#",
        repoLink: "#"
    }


];

const filteredProjects = computed(() => {
    if (activeFilter.value === 'All') return projects;
    return projects.filter(p => p.category === activeFilter.value);
});


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
                    data-text="PROJECTS">
                    PROJECTS
                </h1>
                <p class="text-[#a0a0b0] max-w-2xl mx-auto">
                    A collection of experiments, production apps, and digital artifacts.
                    Deployed and operational.
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
