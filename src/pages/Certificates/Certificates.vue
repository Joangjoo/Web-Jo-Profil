<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import CertificateCard from '../../components/Certificates/CertificateCard.vue';
import { X } from 'lucide-vue-next';

// Image Imports
import sertif1 from '../../assets/sertifikat/sertif1.png';
import sertif2 from '../../assets/sertifikat/sertif2.png';
import sertif3 from '../../assets/sertifikat/sertif3.png';
import sertif4 from '../../assets/sertifikat/sertif4.png';
import sertif5 from '../../assets/sertifikat/sertif5.png';
import sertif6 from '../../assets/sertifikat/sertif6.png';

const certificates = [
    {
        id: 1,
        title: "Best Team FI-CHALLENGE",
        image: sertif1,
        issued: "Issued on 9-11 Januari",
        description: "FIPEX"
    },
    {
        id: 2,
        title: "Webinar Design Thinking",
        image: sertif2,
        issued: "Issued on 25 Desember",
        description: "POLITEKNIK NEGERI SURABAYA"
    },
    {
        id: 3,
        title: "Web Design Competition",
        image: sertif3,
        issued: "Issued on 21-22 September",
        description: "POLITEKNIK NEGERI BALI"
    },
    {
        id: 4,
        title: "Staff Humas HMIF",
        image: sertif4,
        issued: "Issued on 01-05 Januari",
        description: "HMIF"
    },
    {
        id: 5,
        title: "Staff Acara KPUMP",
        image: sertif5,
        issued: "Issued on 11-17 Januari",
        description: "HMIF"
    },
    {
        id: 6,
        title: "Leadership Education",
        image: sertif6,
        issued: "Issued on 20 Oktober",
        description: "BEM FTI UAD"
    },
];

const selectedCert = ref<string | null>(null);

const openModal = (image: string) => {
    selectedCert.value = image;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    selectedCert.value = null;
    document.body.style.overflow = '';
};
</script>

<template>
    <Navbar />

    <div class="min-h-screen bg-[#050510] pt-24 pb-16 px-6 font-mono relative overflow-hidden">
        <!-- Background Grid -->
        <div class="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>

        <div class="max-w-6xl mx-auto relative z-10">
            <!-- Header -->
            <div class="mb-12 text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-[#e8f4ff] mb-4 tracking-tight glitch-text"
                    data-text="ACHIEVEMENTS">
                    ACHIEVEMENTS
                </h1>
                <p class="text-[#a0a0b0] max-w-2xl mx-auto">
                    Professional certifications, awards, and recognitions.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <CertificateCard v-for="(cert, index) in certificates" :key="cert.id" :image="cert.image"
                    :title="cert.title" :issued="cert.issued" :description="cert.description" :index="index"
                    @click="openModal(cert.image)" />
            </div>
        </div>

        <!-- Modal -->
        <Transition name="fade">
            <div v-if="selectedCert"
                class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                @click="closeModal">

                <button class="absolute top-6 right-6 text-white hover:text-[#00f0ff] transition-colors"
                    @click="closeModal">
                    <X class="w-8 h-8" />
                </button>

                <div class="relative max-w-5xl max-h-[90vh] w-full" @click.stop>
                    <img :src="selectedCert"
                        class="w-full h-full object-contain rounded-lg border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.2)]" />
                </div>
            </div>
        </Transition>
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
