<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("admissions.process.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("admissions.process.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in processSteps"
          :key="step.key"
          class="group relative"
        >
          <!-- Connecting Line -->
          <div
            v-if="index < processSteps.length - 1"
            class="absolute top-6 left-12 hidden h-0.5 w-full bg-gradient-to-r from-purple-300 to-purple-200 lg:block"
          />

          <AppCard
            variant="elevated"
            hover
            class="relative z-10 text-center transition-all duration-300 group-hover:scale-105"
          >
            <div class="p-6">
              <div
                class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 font-bold text-white shadow-lg"
              >
                {{ index + 1 }}
              </div>
              <h3
                class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-purple-600"
              >
                {{ $t(`admissions.process.${step.key}.title`) }}
              </h3>
              <p class="paragraph-2 mb-4 text-gray-600">
                {{ $t(`admissions.process.${step.key}.description`) }}
              </p>
              <div
                class="flex items-center justify-center gap-2 text-sm text-purple-600"
              >
                <Icon
                  :name="step.icon"
                  class="h-4 w-4"
                />
                <span>{{ step.duration }}</span>
              </div>
            </div>
          </AppCard>
        </div>
      </div>

      <div class="fade-in mt-12 text-center">
        <AppButton
          variant="primary"
          size="lg"
          icon="ph:download-duotone"
        >
          {{ $t("admissions.download_guide") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const processSteps = [
  {
    key: "step1",
    icon: "ph:computer-tower-duotone",
    duration: "10-15 mins",
  },
  {
    key: "step2",
    icon: "ph:files-duotone",
    duration: "1-2 days",
  },
  {
    key: "step3",
    icon: "ph:chats-circle-duotone",
    duration: "30-45 mins",
  },
  {
    key: "step4",
    icon: "ph:graduation-cap-duotone",
    duration: "2-3 days",
  },
];
</script>
