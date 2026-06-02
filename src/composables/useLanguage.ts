import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()

  const isEnglish = computed(() => locale.value === 'en')

  const toggleLanguage = () => {
    const next = locale.value === 'en' ? 'id' : 'en'
    locale.value = next
    localStorage.setItem('locale', next)
  }

  return { isEnglish, toggleLanguage, locale }
}
