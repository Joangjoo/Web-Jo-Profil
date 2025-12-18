<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { House, User, FolderKanban, FlaskConical, MessageSquare } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();

const links = [
    { name: 'Home', path: '/', icon: House },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'Lab', path: '/lab', icon: FlaskConical },
    { name: 'Contact', path: '/contact', icon: MessageSquare },
];

const pillStyle = ref({ left: '0px', width: '0px', opacity: 0 });
const navListRef = ref<HTMLElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

const updatePill = () => {
    const targetButton = document.querySelector(`[data-path="${route.path}"]`) as HTMLElement;
    const navList = navListRef.value;

    if (targetButton && navList) {
        const buttonRect = targetButton.getBoundingClientRect();
        const navRect = navList.getBoundingClientRect();
        pillStyle.value = {
            left: `${buttonRect.left - navRect.left}px`,
            width: `${buttonRect.width}px`,
            opacity: 1
        };
    } else {
        pillStyle.value = { ...pillStyle.value, opacity: 0 };
    }
};

const setupObserver = () => {
    // Cleanup previous observer
    if (resizeObserver) {
        resizeObserver.disconnect();
    }

    // Initialize new observer
    resizeObserver = new ResizeObserver(() => {
        updatePill();
    });

    nextTick(() => {
        const targetButton = document.querySelector(`[data-path="${route.path}"]`) as HTMLElement;
        if (targetButton && resizeObserver) {
            resizeObserver.observe(targetButton);
        }
        // Also observe the navList itself for window resizing/reflows
        if (navListRef.value && resizeObserver) {
            resizeObserver.observe(navListRef.value);
        }
        updatePill();
    });
};

const navigateTo = (link: { name: string, path: string }) => {
    router.push(link.path);
};

// Watch route path changes to re-attach observer to new active element
watch(() => route.path, () => {
    setupObserver();
}, { immediate: true });

onMounted(() => {
    setupObserver();
    window.addEventListener('resize', updatePill);
});

// Since we are using ResizeObserver on the element, we don't strictly need separate mouse listeners for updating active pill,
// as the hover expansion changes dimensions which triggers the observer.

</script>

<template>
    <nav class="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div
            class="bg-[#0a0a14]/80 backdrop-blur-md border border-[#00f0ff]/10 rounded-full px-2 py-2 shadow-lg shadow-black/50">
            <ul class="flex gap-1 list-none m-0 p-0 relative items-center" ref="navListRef">
                <!-- Pill (Active Background) -->
                <div class="nav-pill" :style="{
                    left: pillStyle.left,
                    width: pillStyle.width,
                    opacity: pillStyle.opacity
                }"></div>

                <!-- Items -->
                <li v-for="link in links" :key="link.name" class="z-10 flex relative group">
                    <button :data-path="link.path" @click="navigateTo(link)"
                        class="flex items-center justify-center text-[#a0a0b0] transition-colors duration-300 px-4 py-2.5 rounded-full relative cursor-pointer bg-transparent border-none gap-2 hover:text-white overflow-hidden"
                        :class="{ 'text-[#00f0ff]': route.path === link.path }">
                        <!-- Icon -->
                        <component :is="link.icon" class="w-5 h-5 relative z-10 shrink-0" />

                        <!-- Expandable Text -->
                        <span
                            class="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 ease-out text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 flex items-center">
                            {{ link.name }}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.nav-pill {
    position: absolute;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border-radius: 9999px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
    z-index: 0;
}

/* Pill Indicator Styling */
.nav-pill::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 15%;
    width: 70%;
    height: 3px;
    background: #00f0ff;
    border-radius: 2px;
    box-shadow: 0 0 10px #00f0ff;
}
</style>
