<script setup lang="ts">
import Navbar from '../../components/Navbar/Navbar.vue';
import ContactInfo from '../../components/Contact/ContactInfo.vue';
import ContactForm from '../../components/Contact/ContactForm.vue';
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[#050510] pt-24 pb-16 px-6 relative overflow-x-hidden">
        <!-- Background Grid -->
        <div class="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>

        <div class="max-w-6xl mx-auto relative z-10">
            <!-- Header -->
            <div class="mb-16 text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-[#e8f4ff] mb-4 tracking-tight glitch-text"
                    data-text="INITIATE CONTACT">
                    INITIATE CONTACT
                </h1>
                <p class="text-[#a0a0b0] max-w-2xl mx-auto font-mono">
                    System ready for communication. Choose your channel.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Left Column: Info -->
                <div class="space-y-8">
                    <ContactInfo />
                </div>

                <!-- Right Column: Form -->
                <div>
                    <ContactForm />
                </div>
            </div>
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
    font-family: 'Courier New', Courier, monospace;
    /* Or your project's mono font */
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
</style>
