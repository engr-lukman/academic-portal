<template>
  <div class="relative">
    <button
      class="focus:ring-primary flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:outline-none"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="isOpen = !isOpen"
    >
      <Icon
        name="mdi:palette"
        class="h-4 w-4"
      />
      <span>{{ $t(`themes.${currentTheme.value}`) }}</span>
      <Icon
        name="uil:angle-down"
        class="h-4 w-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
    >
      <button
        v-for="theme in themes"
        :key="theme.value"
        class="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50"
        :class="{
          'bg-blue-50 text-blue-700': theme.value === currentTheme.value,
        }"
        @click="changeTheme(theme.value)"
      >
        <div
          class="h-4 w-4 rounded-full border border-gray-200"
          :style="{ backgroundColor: theme.color }"
        ></div>
        <span class="font-medium">{{ $t(`themes.${theme.value}`) }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

// Available themes with proper colors
const themes = [
  {
    value: "blue",
    name: "Academic Blue",
    color: "#1e40af",
    primaryColor: "#1e40af",
    secondaryColor: "#3b82f6",
  },
  {
    value: "green",
    name: "Nature Green",
    color: "#059669",
    primaryColor: "#059669",
    secondaryColor: "#10b981",
  },
  {
    value: "purple",
    name: "Royal Purple",
    color: "#7c3aed",
    primaryColor: "#7c3aed",
    secondaryColor: "#8b5cf6",
  },
  {
    value: "red",
    name: "Cardinal Red",
    color: "#dc2626",
    primaryColor: "#dc2626",
    secondaryColor: "#ef4444",
  },
];

// Current theme state
const currentThemeValue = ref("blue");

// Computed current theme
const currentTheme = computed(
  () =>
    themes.find((theme) => theme.value === currentThemeValue.value) || themes[0]
);

// Change theme function
const changeTheme = (themeValue) => {
  currentThemeValue.value = themeValue;

  // Apply theme CSS variables to document
  const theme = themes.find((t) => t.value === themeValue);
  if (theme) {
    document.documentElement.style.setProperty(
      "--theme-primary",
      theme.primaryColor
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      theme.secondaryColor
    );
    document.documentElement.setAttribute("data-theme", themeValue);
  }

  // Store in localStorage
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", themeValue);
  }

  isOpen.value = false;
};

// Load theme from localStorage on mount
onMounted(() => {
  if (typeof localStorage !== "undefined") {
    const savedTheme = localStorage.getItem("theme") || "blue";
    changeTheme(savedTheme);
  }

  // Close dropdown when clicking outside
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
