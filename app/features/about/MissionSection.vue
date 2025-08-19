<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("about.core_values.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("about.core_values.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Mission -->
        <AppCard
          variant="elevated"
          hover
          class="group text-center"
        >
          <template #media>
            <div
              class="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600"
            >
              <Icon
                name="ph:target-duotone"
                class="h-20 w-20 text-white opacity-80 transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </div>
          </template>

          <div class="p-8">
            <h3
              class="title-3 mb-4 text-blue-900 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ $t("about.mission.title") }}
            </h3>
            <p class="paragraph-2 text-blue-700">
              {{ $t("about.mission.description") }}
            </p>
          </div>
        </AppCard>

        <!-- Vision -->
        <AppCard
          variant="elevated"
          hover
          class="group text-center"
        >
          <template #media>
            <div
              class="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-green-500 to-green-600"
            >
              <Icon
                name="ph:eye-duotone"
                class="h-20 w-20 text-white opacity-80 transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </div>
          </template>

          <div class="p-8">
            <h3
              class="title-3 mb-4 text-green-900 transition-colors duration-300 group-hover:text-green-600"
            >
              {{ $t("about.vision.title") }}
            </h3>
            <p class="paragraph-2 text-green-700">
              {{ $t("about.vision.description") }}
            </p>
          </div>
        </AppCard>

        <!-- Values -->
        <AppCard
          variant="elevated"
          hover
          class="group text-center"
        >
          <template #media>
            <div
              class="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600"
            >
              <Icon
                name="ph:heart-duotone"
                class="h-20 w-20 text-white opacity-80 transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </div>
          </template>

          <div class="p-8">
            <h3
              class="title-3 mb-4 text-purple-900 transition-colors duration-300 group-hover:text-purple-600"
            >
              {{ $t("about.values.title") }}
            </h3>
            <p class="paragraph-2 text-purple-700">
              {{ $t("about.values.description") }}
            </p>
          </div>
        </AppCard>
      </div>

      <!-- Detailed Values Section -->
      <div class="mt-20">
        <div class="grid gap-8 lg:grid-cols-2">
          <div class="fade-in">
            <h3 class="title-3 mb-6 text-gray-800">
              {{ $t("about.our_commitment.title") }}
            </h3>
            <div class="space-y-4">
              <div
                v-for="commitment in commitments"
                :key="commitment.key"
                class="group flex items-start gap-4"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-200"
                >
                  <Icon
                    :name="commitment.icon"
                    class="h-5 w-5 text-emerald-600"
                  />
                </div>
                <div>
                  <h4 class="mb-1 font-semibold text-gray-800">
                    {{ $t(`about.commitments.${commitment.key}.title`) }}
                  </h4>
                  <p class="paragraph-2 text-gray-600">
                    {{ $t(`about.commitments.${commitment.key}.description`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="fade-in">
            <NuxtImg
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Our Commitment"
              class="h-auto w-full rounded-lg shadow-lg"
              placeholder
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const commitments = [
  {
    key: "excellence",
    icon: "ph:star-duotone",
  },
  {
    key: "innovation",
    icon: "ph:lightbulb-duotone",
  },
  {
    key: "integrity",
    icon: "ph:shield-check-duotone",
  },
  {
    key: "inclusivity",
    icon: "ph:users-duotone",
  },
];
</script>
