<script setup lang="ts">
import Navbar from '../../components/Navbar/Navbar.vue';
import AboutHero from '../../components/About/AboutHero.vue';
import ExperienceTimeline from '../../components/About/ExperienceTimeline.vue';
</script>

<template>
    <Navbar />
    <section id="about"
        class="min-h-screen flex flex-col items-center py-24 px-8 bg-[#050510] relative overflow-hidden font-mono">

        <!-- Cyber Grid Background -->
        <div class="absolute inset-0 opacity-20 pointer-events-none"
            style="background-image: linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle, black 40%, transparent 70%);">
        </div>

        <div class="relative z-10 max-w-5xl w-full flex flex-col gap-24">
            <!-- About Hero/Card Component -->
            <AboutHero />

            <!-- Experience Timeline Component -->
            <ExperienceTimeline />
        </div>
    </section>
</template>
