<script setup lang="ts">
import joGif from '../../assets/vidio/jo.gif';
</script>

<template>
    <div class="relative z-10 max-w-5xl w-full flex flex-col gap-24">
        <!-- Glassmorphism Card -->
        <div
            class="bg-[#0a0a14]/60 backdrop-blur-xl border border-[#00f0ff]/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,240,255,0.1)] flex flex-col md:flex-row gap-12 items-center">

            <!-- Profile Visual -->
            <div class="w-full md:w-1/3 flex flex-col items-center gap-6">
                <div class="relative group">
                    <!-- Rotating Border Effect -->
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#0044ff] rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500 animate-tilt">
                    </div>

                    <div
                        class="relative rounded-2xl overflow-hidden border-2 border-[#00f0ff]/30 w-[280px] h-[350px] bg-[#050510]">
                        <img :src="joGif" alt="Jo Animation"
                            class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" />
                        <!-- Tech Overlay -->
                        <div
                            class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050510] to-transparent">
                            <div class="flex justify-between items-end">
                                <div>
                                    <div class="text-[#00f0ff] text-xs font-bold tracking-widest mb-1">STATUS</div>
                                    <div class="text-white text-sm flex items-center gap-2">
                                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Online
                                    </div>
                                </div>
                                <div class="text-[#00f0ff]/50 text-xs">ID: JO-007</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Profile Info -->
            <div class="w-full md:w-2/3 flex flex-col gap-6">
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <span
                            class="px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-xs font-bold tracking-wider border border-[#00f0ff]/20">
                            02. ABOUT ME
                        </span>
                        <div class="h-px bg-[#00f0ff]/20 flex-grow"></div>
                    </div>

                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">
                        Sholahudin <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0088ff]">Jauhari</span>
                    </h2>
                    <p class="text-[#a0a0b0] text-lg">Fullstack Developer & UI/UX Enthusiast</p>
                </div>

                <div class="space-y-4 text-[#c0c0d0] leading-relaxed text-sm md:text-base">
                    <p>
                        Hey there! I'm <span class="text-[#00f0ff]">Jo</span>. I build digital experiences that
                        blend performance with aesthetics. My journey started with tweaking themes and evolved into
                        building complex web applications.
                    </p>
                    <p>
                        I thrive in the intersection of <span class="text-[#00f0ff]">design</span> and <span
                            class="text-[#00f0ff]">engineering</span> — creating interfaces that not only look
                        futuristic but function flawlessly. Currently, I'm focused on building accessible,
                        high-performance web solutions.
                    </p>
                </div>

                <!-- Tech Stack Grid -->
                <div class="mt-4">
                    <h3 class="text-[#e0e0e0] font-semibold text-sm mb-4 flex items-center gap-2">
                        <span class="w-1 h-4 bg-[#00f0ff] rounded-full"></span>
                        Tech Stack
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">JS</span>
                            <span class="text-xs text-[#a0a0b0]">JavaScript</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">PHP</span>
                            <span class="text-xs text-[#a0a0b0]">PHP</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">React</span>
                            <span class="text-xs text-[#a0a0b0]">React.js</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">Vue</span>
                            <span class="text-xs text-[#a0a0b0]">Vue 3</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">TS</span>
                            <span class="text-xs text-[#a0a0b0]">TypeScript</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">Laravel</span>
                            <span class="text-xs text-[#a0a0b0]">Laravel</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">SQL</span>
                            <span class="text-xs text-[#a0a0b0]">MySQL</span>
                        </div>
                        <div
                            class="bg-[#0a0a14] border border-[#00f0ff]/10 rounded-lg p-3 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors group">
                            <span class="text-[#00f0ff] group-hover:scale-110 transition-transform">TW</span>
                            <span class="text-xs text-[#a0a0b0]">Tailwind</span>
                        </div>
                    </div>

                    <!-- Download CV Button -->
                    <div class="mt-8 flex justify-start">
                        <a href="/CV_JoangjooATS.pdf" download="CV_Sholahudin_Jauhari"
                            class="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#00f0ff]/10 font-bold text-[#00f0ff] border border-[#00f0ff]/50 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#00f0ff] hover:text-[#050510] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                            <span>Download My CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-tilt {
    animation: tilt 10s infinite linear;
}

@keyframes tilt {

    0%,
    50%,
    100% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(1deg);
    }

    75% {
        transform: rotate(-1deg);
    }
}
</style>
