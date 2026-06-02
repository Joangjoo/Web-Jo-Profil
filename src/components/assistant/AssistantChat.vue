<script setup lang="ts">
import { ref, nextTick, watch, computed } from 'vue'
import { Send, Trash2, Sparkles } from 'lucide-vue-next'
import { getAIResponse } from './assistantEngine'

const props = defineProps<{
    isOpen: boolean
}>()

const userInput = ref('')
const messages = ref<{ from: 'user' | 'ai'; text: string; ts: Date }[]>([])
const isTyping = ref(false)
const typingText = ref('')
const typingIndex = ref(0)

const messagesContainer = ref<HTMLElement | null>(null)

const suggestedQuestions = [
    'Siapa Jo?',
    'Tech stack apa?',
    'Pengalaman kerja?',
    'Hubungi Jo',
]

const scrollToBottom = () => {
    nextTick(() => {
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
        }
    })
}

const typeResponse = (text: string) => {
    typingText.value = ''
    typingIndex.value = 0
    isTyping.value = true
    scrollToBottom()

    const chars = text.split('')
    const speed = 20 + Math.random() * 15
    let i = 0

    const interval = setInterval(() => {
        if (i < chars.length) {
            typingText.value += chars[i]!
            i++
            scrollToBottom()
        } else {
            clearInterval(interval)
            isTyping.value = false
            messages.value.push({ from: 'ai', text, ts: new Date() })
            typingText.value = ''
            scrollToBottom()
        }
    }, speed)
}

const sendMessage = (text?: string) => {
    const input = text ?? userInput.value
    if (!input.trim() || isTyping.value) return

    messages.value.push({ from: 'user', text: input, ts: new Date() })
    if (!text) userInput.value = ''
    scrollToBottom()

    const delay = 400 + Math.random() * 400
    setTimeout(() => {
        const response = getAIResponse(input)
        typeResponse(response)
    }, delay)
}

const clearChat = () => {
    messages.value = []
    typingText.value = ''
    isTyping.value = false
}

const showSuggestions = computed(() => messages.value.length === 0 && !isTyping.value)

watch(() => props.isOpen, (newVal) => {
    if (newVal) scrollToBottom()
})
</script>


<template>
    <Transition enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0 scale-95"
        enter-to-class="transform translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 scale-100"
        leave-to-class="transform translate-y-4 opacity-0 scale-95">
        <div v-if="isOpen" class="fixed bottom-24 right-8 z-50 w-[350px] max-w-[calc(100vw-2rem)]
               bg-[var(--bg-secondary)]/95 backdrop-blur-xl border border-[var(--accent)]/20
               rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">

            <!-- Header -->
            <div class="px-4 py-3 bg-[var(--accent)]/5 border-b border-[var(--accent)]/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
                    <span class="font-mono text-[var(--accent)] font-bold tracking-wider text-sm">JO'S ASSISTANT</span>
                </div>
                <button v-if="messages.length > 0" @click="clearChat"
                    class="p-1.5 rounded-lg hover:bg-[var(--accent)]/10 text-[var(--text-muted)] hover:text-red-400 transition-all"
                    title="Clear chat">
                    <Trash2 class="w-3.5 h-3.5" />
                </button>
            </div>

            <!-- Chat Area -->
            <div ref="messagesContainer" class="p-4 h-80 overflow-y-auto space-y-3 scrollbar-thin">
                <div v-for="(msg, i) in messages" :key="i"
                    class="flex message-enter"
                    :class="msg.from === 'user' ? 'justify-end' : 'justify-start'">

                    <div class="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                        :class="msg.from === 'user'
                            ? 'bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--text-primary)] rounded-tr-sm'
                            : 'bg-[var(--bg-primary)] border border-[var(--accent)]/10 text-[var(--text-primary)] rounded-tl-sm'">
                        <span class="whitespace-pre-wrap">{{ msg.text }}</span>
                        <div class="text-[10px] text-[var(--text-muted)] mt-1 opacity-60 text-right">
                            {{ msg.ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
                        </div>
                    </div>
                </div>

                <!-- Typing response being typed out -->
                <div v-if="isTyping" class="flex justify-start">
                    <div class="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                            bg-[var(--bg-primary)] border border-[var(--accent)]/10 text-[var(--text-primary)] rounded-tl-sm">
                        <span>{{ typingText }}</span>
                        <span class="inline-block w-1.5 h-4 bg-[var(--accent)] ml-0.5 animate-pulse align-middle"></span>
                    </div>
                </div>
            </div>

            <!-- Suggested Questions -->
            <div v-if="showSuggestions" class="px-3 pb-2 flex flex-wrap gap-1.5">
                <button v-for="(q, i) in suggestedQuestions" :key="i" @click="sendMessage(q)"
                    class="text-xs px-3 py-1.5 rounded-full border border-[var(--accent)]/20 text-[var(--accent)] 
                           hover:bg-[var(--accent)]/10 transition-all duration-200 flex items-center gap-1">
                    <Sparkles class="w-3 h-3" />
                    {{ q }}
                </button>
            </div>

            <!-- Input Area -->
            <div class="p-3 border-t border-[var(--accent)]/10 bg-[var(--bg-secondary)]">
                <div
                    class="relative flex items-center bg-[var(--bg-primary)] rounded-full border border-[var(--accent)]/10 focus-within:border-[var(--accent)]/50 transition-all">
                    <input v-model="userInput" @keyup.enter="sendMessage()" placeholder="Type a message..."
                        class="flex-1 bg-transparent border-none text-[var(--text-primary)] text-sm px-4 py-2.5 focus:ring-0 placeholder-[var(--text-muted)]" />
                    <button @click="sendMessage()"
                        class="p-2 mr-1 rounded-full hover:bg-[var(--accent)]/20 text-[var(--accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="!userInput.trim()">
                        <Send class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
    width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: rgba(var(--accent-rgb), 0.1);
    border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: rgba(var(--accent-rgb), 0.2);
}

@keyframes messageSlide {
    from {
        opacity: 0;
        transform: translateY(12px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.message-enter {
    animation: messageSlide 0.25s ease-out both;
}
</style>
