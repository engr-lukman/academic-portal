<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-20"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="animate-float absolute top-20 left-10 h-32 w-32 rounded-full bg-white"
      ></div>
      <div
        class="animate-float-delay-1 absolute right-10 bottom-20 h-24 w-24 rounded-full bg-blue-300"
      ></div>
      <div
        class="animate-float-delay-2 absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-indigo-300"
      ></div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-white md:text-5xl"
        >
          {{ $t("research.cta.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto mb-8 max-w-3xl text-xl text-blue-100"
        >
          {{ $t("research.cta.subtitle") }}
        </p>
      </div>

      <div class="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Research Collaboration -->
        <div
          class="animate-fade-up-delay-2 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:bg-white/20"
        >
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500"
          >
            <svg
              class="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("research.cta.collaborate.title") }}
          </h3>
          <p class="mb-6 text-blue-100">
            {{ $t("research.cta.collaborate.description") }}
          </p>
          <NuxtLink
            to="/research/collaboration"
            class="inline-flex items-center font-semibold text-blue-300 transition-colors duration-300 hover:text-white"
          >
            {{ $t("research.cta.collaborate.action") }}
            <svg
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Funding Opportunities -->
        <div
          class="animate-fade-up-delay-3 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:bg-white/20"
        >
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
          >
            <svg
              class="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("research.cta.funding.title") }}
          </h3>
          <p class="mb-6 text-blue-100">
            {{ $t("research.cta.funding.description") }}
          </p>
          <NuxtLink
            to="/research/funding"
            class="inline-flex items-center font-semibold text-green-300 transition-colors duration-300 hover:text-white"
          >
            {{ $t("research.cta.funding.action") }}
            <svg
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Join Our Team -->
        <div
          class="animate-fade-up-delay-4 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:bg-white/20"
        >
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500"
          >
            <svg
              class="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("research.cta.careers.title") }}
          </h3>
          <p class="mb-6 text-blue-100">
            {{ $t("research.cta.careers.description") }}
          </p>
          <NuxtLink
            to="/careers/research"
            class="inline-flex items-center font-semibold text-purple-300 transition-colors duration-300 hover:text-white"
          >
            {{ $t("research.cta.careers.action") }}
            <svg
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Main CTAs -->
      <div class="animate-fade-up-delay-5 text-center">
        <div
          class="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            to="/contact"
            class="inline-flex transform items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
          >
            <span>{{ $t("research.cta.getInTouch") }}</span>
            <svg
              class="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/research/newsletter"
            class="inline-flex transform items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-900"
          >
            {{ $t("research.cta.newsletter") }}
          </NuxtLink>
        </div>

        <!-- Research Stats -->
        <div
          class="grid grid-cols-2 gap-8 border-t border-white/20 pt-12 md:grid-cols-4"
        >
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">
              200+
            </div>
            <div class="text-blue-200">
              {{ $t("research.cta.stats.activeProjects") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">
              300+
            </div>
            <div class="text-blue-200">
              {{ $t("research.cta.stats.researchers") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">15</div>
            <div class="text-blue-200">
              {{ $t("research.cta.stats.centers") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">
              $25M+
            </div>
            <div class="text-blue-200">
              {{ $t("research.cta.stats.funding") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>
