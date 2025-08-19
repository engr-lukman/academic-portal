<template>
  <section
    id="student-portal-hero"
    class="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"
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
          {{ $t("studentPortal.hero.title") }}
        </h1>
        <p
          class="mx-auto mb-8 max-w-4xl text-xl text-purple-100 md:text-2xl lg:text-3xl"
        >
          {{ $t("studentPortal.hero.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="#login"
            class="transform rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700"
          >
            {{ $t("studentPortal.hero.cta.login") }}
          </NuxtLink>
          <NuxtLink
            to="#services"
            class="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20"
          >
            {{ $t("studentPortal.hero.cta.explore") }}
          </NuxtLink>
        </div>
      </div>

      <!-- Login Portal -->
      <div
        class="mx-auto max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
      >
        <h3 class="mb-6 text-2xl font-bold">
          {{ $t("studentPortal.hero.login.title") }}
        </h3>
        <form
          class="space-y-4"
          @submit.prevent="handleLogin"
        >
          <div>
            <input
              v-model="credentials.studentId"
              type="text"
              :placeholder="$t('studentPortal.hero.login.studentId')"
              class="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 focus:border-transparent focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <input
              v-model="credentials.password"
              type="password"
              :placeholder="$t('studentPortal.hero.login.password')"
              class="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/70 focus:border-transparent focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700"
          >
            {{ $t("studentPortal.hero.login.submit") }}
          </button>
        </form>
        <div class="mt-4 text-center">
          <a
            href="#"
            class="text-sm text-purple-300 hover:text-white"
          >
            {{ $t("studentPortal.hero.login.forgotPassword") }}
          </a>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-purple-300 md:text-4xl">
            15K+
          </div>
          <div class="text-sm text-purple-100 md:text-base">
            {{ $t("studentPortal.stats.activeStudents") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-purple-300 md:text-4xl">
            24/7
          </div>
          <div class="text-sm text-purple-100 md:text-base">
            {{ $t("studentPortal.stats.access") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-purple-300 md:text-4xl">
            50+
          </div>
          <div class="text-sm text-purple-100 md:text-base">
            {{ $t("studentPortal.stats.services") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-3xl font-bold text-purple-300 md:text-4xl">
            99%
          </div>
          <div class="text-sm text-purple-100 md:text-base">
            {{ $t("studentPortal.stats.uptime") }}
          </div>
        </div>
      </div>
    </div>

    <!-- Animated Background Elements -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/10 blur-3xl"
      ></div>
      <div
        class="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-indigo-400/10 blur-3xl delay-1000"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const credentials = ref({
  studentId: "",
  password: "",
});

const handleLogin = () => {
  // Handle login logic
  console.log("Login attempt:", credentials.value);
};
</script>
