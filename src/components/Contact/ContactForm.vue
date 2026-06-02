<script setup lang="ts">
import { ref } from 'vue';
import { Send, CheckCircle2, AlertCircle } from 'lucide-vue-next';
import emailjs from '@emailjs/browser';

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);
const notification = ref({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
});

const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    notification.value = {
        show: true,
        message,
        type
    };
    setTimeout(() => {
        notification.value.show = false;
    }, 5000);
};

const handleSubmit = async () => {
    if (!form.value.name || !form.value.email || !form.value.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    isSubmitting.value = true;

    try {
        // Sending multiple variations of keys to ensure template compatibility
        const templateParams = {
            from_name: form.value.name,
            name: form.value.name,       // Fallback key
            from_email: form.value.email,
            email: form.value.email,     // Fallback key
            subject: form.value.subject,
            message: form.value.message,
            to_name: 'Sholahuddin Jauhari'
        };

        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        showNotification('Message transmitted successfully! I will reply shortly.');
        form.value = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
        console.error('EmailJS Error:', error);
        showNotification('Transmission failed. Please try again later.', 'error');
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <div class="bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--border-color)] relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-20 h-20 bg-[var(--accent)]/5 rounded-bl-full pointer-events-none"></div>

        <h2 class="text-2xl font-bold text-[var(--text-heading)] font-mono mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-[#bc13fe]"></span>
            SEND_MESSAGE_
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-6 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">Name</label>
                    <input v-model="form.name" type="text" required
                        class="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded p-3 text-[var(--text-heading)] focus:border-[var(--accent)] focus:outline-none transition-colors font-mono placeholder:text-[var(--border-color)]"
                         />
                </div>
                <div class="space-y-2">
                    <label class="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">Email</label>
                    <input v-model="form.email" type="email" required
                        class="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded p-3 text-[var(--text-heading)] focus:border-[var(--accent)] focus:outline-none transition-colors font-mono placeholder:text-[var(--border-color)]"
                         />
                </div>
            </div>

            <div class="space-y-2">
                <label class="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">Subject</label>
                <input v-model="form.subject" type="text" required
                    class="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded p-3 text-[var(--text-heading)] focus:border-[var(--accent)] focus:outline-none transition-colors font-mono placeholder:text-[var(--border-color)]"
                     />
            </div>

            <div class="space-y-2">
                <label class="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">Message</label>
                <textarea v-model="form.message" required rows="5"
                    class="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded p-3 text-[var(--text-heading)] focus:border-[var(--accent)] focus:outline-none transition-colors font-mono placeholder:text-[var(--border-color)] resize-none"
                     ></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
                class="w-full bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] py-4 rounded font-mono font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="!isSubmitting">Transmit Message</span>
                <span v-else>Transmitting...</span>
                <Send v-if="!isSubmitting" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>

        <!-- Notification Toast -->
        <Transition enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform translate-y-5 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform translate-y-5 opacity-0">
            <div v-if="notification.show"
                class="absolute bottom-4 left-4 right-4 p-4 rounded-lg flex items-center gap-3 shadow-lg border"
                :class="notification.type === 'success' ? 'bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)]' : 'bg-red-500/10 border-red-500 text-red-500'">
                <CheckCircle2 v-if="notification.type === 'success'" class="w-5 h-5 shrink-0" />
                <AlertCircle v-else class="w-5 h-5 shrink-0" />
                <span class="text-sm font-mono">{{ notification.message }}</span>
            </div>
        </Transition>
    </div>
</template>
