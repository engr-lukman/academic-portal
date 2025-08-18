<template>
  <div class="relative">
    <button
      class="focus:ring-primary flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:outline-none"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="isOpen = !isOpen"
    >
      <Icon
        name="uil:globe"
        class="h-4 w-4"
      />
      <span>{{ $t(`languages.${currentLocale.code}`) }}</span>
      <Icon
        name="uil:angle-down"
        class="h-4 w-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
    >
      <button
        v-for="loc in availableLocales"
        :key="loc.code"
        class="w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50"
        :class="{ 'bg-blue-50 text-blue-700': loc.code === $i18n.locale }"
        @click="changeLocale(loc.code)"
      >
        <span class="font-medium">{{ $t(`languages.${loc.code}`) }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isOpen = ref(false);

const availableLocales = computed(() => locales.value);
const currentLocale = computed(
  () => locales.value.find((l) => l.code === locale.value) || locales.value[0]
);

const changeLocale = async (localeCode) => {
  const path = switchLocalePath(localeCode);
  await navigateTo(path);
  isOpen.value = false;
};

// Close dropdown when clicking outside
onMounted(() => {
  const handleClick = (e) => {
    if (!e.target.closest(".relative")) {
      isOpen.value = false;
    }
  };
  document.addEventListener("click", handleClick);

  onUnmounted(() => {
    document.removeEventListener("click", handleClick);
  });
});
</script>
