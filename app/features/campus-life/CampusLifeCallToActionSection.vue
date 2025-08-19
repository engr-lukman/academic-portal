<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 py-20"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="animate-float absolute top-20 left-10 h-32 w-32 rounded-full bg-white"
      ></div>
      <div
        class="animate-float-delay-1 absolute right-10 bottom-20 h-24 w-24 rounded-full bg-green-300"
      ></div>
      <div
        class="animate-float-delay-2 absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-emerald-300"
      ></div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-white md:text-5xl"
        >
          {{ $t("campusLife.cta.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto mb-8 max-w-3xl text-xl text-green-100"
        >
          {{ $t("campusLife.cta.subtitle") }}
        </p>
      </div>

      <div class="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Visit Campus -->
        <div
          class="animate-fade-up-delay-2 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:bg-white/20"
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("campusLife.cta.visitCampus.title") }}
          </h3>
          <p class="mb-6 text-green-100">
            {{ $t("campusLife.cta.visitCampus.description") }}
          </p>
          <NuxtLink
            to="/visit"
            class="inline-flex items-center font-semibold text-green-300 transition-colors duration-300 hover:text-white"
          >
            {{ $t("campusLife.cta.visitCampus.action") }}
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

        <!-- Student Resources -->
        <div
          class="animate-fade-up-delay-3 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:bg-white/20"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("campusLife.cta.resources.title") }}
          </h3>
          <p class="mb-6 text-green-100">
            {{ $t("campusLife.cta.resources.description") }}
          </p>
          <NuxtLink
            to="/student-portal"
            class="inline-flex items-center font-semibold text-blue-300 transition-colors duration-300 hover:text-white"
          >
            {{ $t("campusLife.cta.resources.action") }}
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

        <!-- Get Involved -->
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("campusLife.cta.getInvolved.title") }}
          </h3>
          <p class="mb-6 text-green-100">
            {{ $t("campusLife.cta.getInvolved.description") }}
          </p>
          <NuxtLink
            to="/campus-life/activities"
            class="inline-flex items-center font-semibold text-purple-300 transition-colors duration-300 hover:text-white"
          >
            {{ $t("campusLife.cta.getInvolved.action") }}
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
            to="/admissions"
            class="inline-flex transform items-center rounded-full bg-white px-8 py-4 font-semibold text-green-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:shadow-xl"
          >
            <span>{{ $t("campusLife.cta.applyNow") }}</span>
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
            to="/campus-life/tour"
            class="inline-flex transform items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-green-900"
          >
            {{ $t("campusLife.cta.scheduleTour") }}
          </NuxtLink>
        </div>

        <!-- Campus Life Stats -->
        <div
          class="grid grid-cols-2 gap-8 border-t border-white/20 pt-12 md:grid-cols-4"
        >
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">
              50+
            </div>
            <div class="text-green-200">
              {{ $t("campusLife.cta.stats.clubs") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">15</div>
            <div class="text-green-200">
              {{ $t("campusLife.cta.stats.sportsTeams") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">8</div>
            <div class="text-green-200">
              {{ $t("campusLife.cta.stats.residenceHalls") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-3xl font-bold text-white md:text-4xl">
              200+
            </div>
            <div class="text-green-200">
              {{ $t("campusLife.cta.stats.events") }}
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
