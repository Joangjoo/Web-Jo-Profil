<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { Send } from 'lucide-vue-next'
import { getAIResponse } from './assistantEngine'

const props = defineProps<{
    isOpen: boolean
}>()

const userInput = ref('')
const messages = ref<{ from: 'user' | 'ai'; text: string }[]>([
    { from: 'ai', text: 'Halo! Saya AI Assistant Jo. Silakan tanya apa saja tentang portofolio ini.' }
])
const isTyping = ref(false)

const messagesContainer = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
    nextTick(() => {
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
        }
    })
}

const sendMessage = () => {
    if (!userInput.value.trim() || isTyping.value) return

    const input = userInput.value
    messages.value.push({ from: 'user', text: input })
    userInput.value = ''
    scrollToBottom()

    isTyping.value = true
    scrollToBottom()

    // Simulate thinking delay with variable natural timing
    const delay = Math.min(1000 + input.length * 20, 2000)

    setTimeout(() => {
        const response = getAIResponse(input)
        isTyping.value = false

        messages.value.push({
            from: 'ai',
            text: response,
        })
        scrollToBottom()
    }, delay)
}

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
               bg-[#0a0a14]/95 backdrop-blur-xl border border-[#00f0ff]/20
               rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">

            <!-- Header -->
            <div class="px-4 py-3 bg-[#00f0ff]/5 border-b border-[#00f0ff]/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
                    <span class="font-mono text-[#00f0ff] font-bold tracking-wider text-sm">JO'S ASSISTANT</span>
                </div>
            </div>

            <!-- Chat Area -->
            <div ref="messagesContainer" class="p-4 h-80 overflow-y-auto space-y-4 scrollbar-thin">
                <div v-for="(msg, i) in messages" :key="i" class="flex"
                    :class="msg.from === 'user' ? 'justify-end' : 'justify-start'">

                    <div class="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed" :class="msg.from === 'user'
                        ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-gray-200 rounded-tr-sm'
                        : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-sm'">
                        {{ msg.text }}
                    </div>
                </div>

                <!-- Typing Indicator -->
                <div v-if="isTyping" class="flex justify-start">
                    <div
                        class="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                        <div class="w-1.5 h-1.5 bg-[#00f0ff]/50 rounded-full animate-bounce [animation-delay:-0.3s]">
                        </div>
                        <div class="w-1.5 h-1.5 bg-[#00f0ff]/50 rounded-full animate-bounce [animation-delay:-0.15s]">
                        </div>
                        <div class="w-1.5 h-1.5 bg-[#00f0ff]/50 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>

            <!-- Input Area -->
            <div class="p-3 border-t border-[#00f0ff]/10 bg-[#0a0a14]">
                <div
                    class="relative flex items-center bg-white/5 rounded-full border border-white/10 focus-within:border-[#00f0ff]/50 focus-within:bg-white/10 transition-all">
                    <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type a message..."
                        class="flex-1 bg-transparent border-none text-gray-200 text-sm px-4 py-2.5 focus:ring-0 placeholder-gray-500" />
                    <button @click="sendMessage"
                        class="p-2 mr-1 rounded-full hover:bg-[#00f0ff]/20 text-[#00f0ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
    background: rgba(0, 240, 255, 0.1);
    border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 240, 255, 0.2);
}
</style>
