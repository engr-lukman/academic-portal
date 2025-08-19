<template>
  <section
    class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 text-white"
  >
    <div class="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
      <div class="mb-12">
        <h2 class="mb-6 text-4xl font-bold md:text-5xl">
          {{ $t("examinations.cta.title") }}
        </h2>
        <p class="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl">
          {{ $t("examinations.cta.subtitle") }}
        </p>
      </div>

      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Quick Links -->
        <div
          v-for="link in quickLinks"
          :key="link.id"
          class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 transition-transform duration-300 group-hover:scale-110"
          >
            <Icon
              :name="link.icon"
              class="h-8 w-8 text-blue-300"
            />
          </div>
          <h3 class="mb-4 text-xl font-bold">{{ link.title }}</h3>
          <p class="mb-6 text-sm text-blue-100">{{ link.description }}</p>
          <NuxtLink
            :to="link.url"
            class="inline-flex items-center font-semibold text-blue-300 transition-colors duration-300 hover:text-white"
          >
            {{ link.cta }}
            <Icon
              name="mdi:arrow-right"
              class="ml-2 h-4 w-4"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
        <h3 class="mb-4 text-2xl font-bold">
          {{ $t("examinations.cta.support.title") }}
        </h3>
        <p class="mb-6 text-blue-100">
          {{ $t("examinations.cta.support.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+8801234567890"
            class="flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            <Icon
              name="mdi:phone"
              class="mr-2 h-5 w-5"
            />
            {{ $t("examinations.cta.support.call") }}
          </a>
          <a
            href="mailto:examinations@diu.edu.bd"
            class="flex items-center justify-center rounded-lg border border-white/30 bg-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/30"
          >
            <Icon
              name="mdi:email"
              class="mr-2 h-5 w-5"
            />
            {{ $t("examinations.cta.support.email") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const quickLinks = [
  {
    id: 1,
    icon: "mdi:calendar-check",
    title: "Exam Schedule",
    description: "View current and upcoming examination schedules",
    cta: "View Schedule",
    url: "#exam-schedule",
  },
  {
    id: 2,
    icon: "mdi:file-document",
    title: "Results Portal",
    description: "Check your examination results and transcripts",
    cta: "Check Results",
    url: "#results",
  },
  {
    id: 3,
    icon: "mdi:book-open",
    title: "Exam Policies",
    description: "Learn about examination rules and procedures",
    cta: "Read Policies",
    url: "#exam-policies",
  },
];
</script>
