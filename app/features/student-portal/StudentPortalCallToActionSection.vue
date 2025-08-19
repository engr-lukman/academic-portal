<template>
  <section
    class="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 py-20 text-white"
  >
    <div class="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
      <div class="mb-12">
        <h2 class="mb-6 text-4xl font-bold md:text-5xl">
          {{ $t("studentPortal.cta.title") }}
        </h2>
        <p class="mx-auto mb-8 max-w-3xl text-xl text-purple-100 md:text-2xl">
          {{ $t("studentPortal.cta.subtitle") }}
        </p>
      </div>

      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Quick Access Cards -->
        <div
          v-for="access in quickAccess"
          :key="access.id"
          class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 transition-transform duration-300 group-hover:scale-110"
          >
            <Icon
              :name="access.icon"
              class="h-8 w-8 text-purple-300"
            />
          </div>
          <h3 class="mb-4 text-xl font-bold">{{ access.title }}</h3>
          <p class="mb-6 text-sm text-purple-100">{{ access.description }}</p>
          <button
            class="transform rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700"
          >
            {{ access.cta }}
          </button>
        </div>
      </div>

      <!-- Support Information -->
      <div class="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
        <h3 class="mb-6 text-2xl font-bold">
          {{ $t("studentPortal.cta.support.title") }}
        </h3>

        <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="text-center">
            <Icon
              name="mdi:clock"
              class="mx-auto mb-3 h-8 w-8 text-purple-300"
            />
            <h4 class="mb-2 font-semibold">
              {{ $t("studentPortal.cta.support.hours.title") }}
            </h4>
            <p class="text-sm text-purple-100">
              {{ $t("studentPortal.cta.support.hours.time") }}
            </p>
          </div>
          <div class="text-center">
            <Icon
              name="mdi:phone"
              class="mx-auto mb-3 h-8 w-8 text-purple-300"
            />
            <h4 class="mb-2 font-semibold">
              {{ $t("studentPortal.cta.support.phone.title") }}
            </h4>
            <p class="text-sm text-purple-100">
              {{ $t("studentPortal.cta.support.phone.number") }}
            </p>
          </div>
          <div class="text-center">
            <Icon
              name="mdi:email"
              class="mx-auto mb-3 h-8 w-8 text-purple-300"
            />
            <h4 class="mb-2 font-semibold">
              {{ $t("studentPortal.cta.support.email.title") }}
            </h4>
            <p class="text-sm text-purple-100">
              {{ $t("studentPortal.cta.support.email.address") }}
            </p>
          </div>
        </div>

        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            class="flex items-center justify-center rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-700"
          >
            <Icon
              name="mdi:chat"
              class="mr-2 h-5 w-5"
            />
            {{ $t("studentPortal.cta.support.chat") }}
          </button>
          <a
            href="mailto:support@diu.edu.bd"
            class="flex items-center justify-center rounded-lg border border-white/30 bg-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/30"
          >
            <Icon
              name="mdi:email-send"
              class="mr-2 h-5 w-5"
            />
            {{ $t("studentPortal.cta.support.contact") }}
          </a>
        </div>
      </div>

      <!-- Download App -->
      <div class="mt-12 text-center">
        <h3 class="mb-6 text-xl font-bold">
          {{ $t("studentPortal.cta.app.title") }}
        </h3>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            class="flex items-center justify-center rounded-lg bg-black px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800"
          >
            <Icon
              name="mdi:apple"
              class="mr-2 h-5 w-5"
            />
            {{ $t("studentPortal.cta.app.ios") }}
          </a>
          <a
            href="#"
            class="flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700"
          >
            <Icon
              name="mdi:google-play"
              class="mr-2 h-5 w-5"
            />
            {{ $t("studentPortal.cta.app.android") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const quickAccess = [
  {
    id: 1,
    icon: "mdi:account-circle",
    title: "Login Portal",
    description: "Access your student dashboard and services",
    cta: "Login Now",
  },
  {
    id: 2,
    icon: "mdi:account-plus",
    title: "New Student",
    description: "Register and get started with orientation",
    cta: "Get Started",
  },
  {
    id: 3,
    icon: "mdi:help-circle",
    title: "Need Help?",
    description: "Get technical support and assistance",
    cta: "Get Support",
  },
];
</script>
