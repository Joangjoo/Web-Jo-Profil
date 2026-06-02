import { ref, watch } from 'vue';

const isDark = ref(localStorage.getItem('theme') !== 'light');

const applyTheme = (dark: boolean) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};

watch(isDark, (val) => applyTheme(val), { immediate: true });

export function useTheme() {
  const toggle = () => { isDark.value = !isDark.value; };
  return { isDark, toggle };
}
