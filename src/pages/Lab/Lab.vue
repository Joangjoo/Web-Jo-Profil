<script setup lang="ts">
import Navbar from '../../components/Navbar/Navbar.vue';
import BugHunterGame from '../../components/Lab/BugHunterGame.vue';
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[#050510] pt-24 pb-10 px-6 box-border">
        <div class="max-w-6xl mx-auto h-[80vh] flex flex-col">
            <!-- Header -->
            <div class="mb-6 flex justify-between items-end">
                <div>
                    <h1 class="text-3xl text-white font-bold font-mono tracking-tight">
                        <span class="text-[#00f0ff]">LAB</span> / EXPERIMENTS
                    </h1>
                    <p class="text-[#a0a0b0] text-sm">Interactive prototypes and digital toys.</p>
                </div>
                <div
                    class="hidden md:block text-xs font-mono text-[#00f0ff]/50 border border-[#00f0ff]/20 px-2 py-1 rounded">
                    STATUS: ONLINE
                </div>
            </div>

            <!-- Main Lab Area -->
            <div class="flex-grow relative">
                <BugHunterGame />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ensure the page layout handles the canvas resizing gracefully */
</style>
