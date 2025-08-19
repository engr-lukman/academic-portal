<template>
  <section
    id="examinations-hero"
    class="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
    >
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 mx-auto max-w-6xl px-4 text-center text-white sm:px-6 lg:px-8"
    >
      <!-- Hero Content -->
      <div class="mb-12">
        <h1
          class="mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl"
        >
          {{ $t("examinations.hero.title") }}
        </h1>
        <p
          class="mx-auto mb-8 max-w-4xl text-xl text-blue-100 md:text-2xl lg:text-3xl"
        >
          {{ $t("examinations.hero.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="#exam-schedule"
            class="transform rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            {{ $t("examinations.hero.cta.schedule") }}
          </NuxtLink>
          <NuxtLink
            to="#results"
            class="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20"
          >
            {{ $t("examinations.hero.cta.results") }}
          </NuxtLink>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-blue-300 md:text-4xl">4</div>
          <div class="text-sm text-blue-100 md:text-base">
            {{ $t("examinations.stats.semesters") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-blue-300 md:text-4xl">
            95%
          </div>
          <div class="text-sm text-blue-100 md:text-base">
            {{ $t("examinations.stats.passRate") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-blue-300 md:text-4xl">
            24/7
          </div>
          <div class="text-sm text-blue-100 md:text-base">
            {{ $t("examinations.stats.support") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-blue-300 md:text-4xl">
            100%
          </div>
          <div class="text-sm text-blue-100 md:text-base">
            {{ $t("examinations.stats.digital") }}
          </div>
        </div>
      </div>
    </div>

    <!-- Animated Background Elements -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
      ></div>
      <div
        class="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-400/10 blur-3xl delay-1000"
      ></div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>
