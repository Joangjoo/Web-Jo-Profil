<script setup lang="ts">
import { Mail, Instagram, Linkedin, Music, Github } from 'lucide-vue-next';

const socialLinks = [
    {
        name: 'Email',
        value: 'joangjo22@gmail.com',
        icon: Mail,
        link: 'mailto:joangjo22@gmail.com',
        color: 'text-[var(--accent)]',
        borderColor: 'border-[var(--accent)]'
    },
    {
        name: 'Instagram',
        value: '@sholahuddin_jauhari',
        icon: Instagram,
        link: 'https://www.instagram.com/sholahuddin_jauhari/',
        color: 'text-[#E1306C]',
        borderColor: 'border-[#E1306C]'
    },
    {
        name: 'LinkedIn',
        value: 'Sholahudin Jauhari El Sya Na',
        icon: Linkedin,
        link: 'https://www.linkedin.com/in/sholahudin-jauhari-el-sya-na-608073304/',
        color: 'text-[#0077b5]',
        borderColor: 'border-[#0077b5]'
    },
    {
        name: 'TikTok',
        value: 'Jooo',
        icon: Music, 
        link: 'https://www.tiktok.com/@joforcoding?_r=1&_t=ZS-93Hl3XrjuwX',
        color: 'text-[#ff0050]',
        borderColor: 'border-[#ff0050]'
    },
    {
        name: 'GitHub',
        value: 'Joangjoo',
        icon: Github,
        link: 'https://github.com/Joangjoo',
        color: 'text-[#ffffff]',
        borderColor: 'border-[#ffffff]'
    }
];
</script>

<template>
    <div class="space-y-6">
        <h2 class="text-2xl font-bold text-[var(--text-heading)] font-mono mb-8 flex items-center gap-3">
            <span class="w-2 h-8 bg-[var(--accent)]"></span>
            CONNECT_
        </h2>

        <div class="grid gap-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.link" target="_blank"
                class="group flex items-center gap-4 p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:translate-x-2"
                :class="`hover:${social.borderColor}`">

                <div class="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                    <component :is="social.icon" class="w-6 h-6" :class="social.color" />
                </div>

                <div>
                    <h3 class="text-[var(--text-heading)] font-mono font-bold text-sm">{{ social.name }}</h3>
                    <p class="text-[var(--text-nav)] text-sm group-hover:text-[var(--text-heading)] transition-colors">{{ social.value }}</p>
                </div>

                <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs font-mono text-[var(--accent)]">>></span>
                </div>
            </a>
        </div>
    </div>
</template>
