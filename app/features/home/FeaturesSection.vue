<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("features.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("features.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="feature in features"
          :key="feature.key"
          variant="elevated"
          hover
        >
          <template #media>
            <div
              class="flex h-16 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
            >
              <Icon
                :name="feature.icon"
                class="h-8 w-8 text-white"
              />
            </div>
          </template>

          <h3 class="title-4 mb-3 text-gray-800">
            {{ $t(`features.${feature.key}.title`) }}
          </h3>
          <p class="paragraph-2 text-gray-600">
            {{ $t(`features.${feature.key}.description`) }}
          </p>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    key: "academic_excellence",
    icon: "ph:graduation-cap-duotone",
  },
  {
    key: "research_innovation",
    icon: "ph:flask-duotone",
  },
  {
    key: "expert_faculty",
    icon: "ph:users-three-duotone",
  },
  {
    key: "modern_technology",
    icon: "ph:device-mobile-duotone",
  },
  {
    key: "global_community",
    icon: "ph:globe-duotone",
  },
  {
    key: "career_support",
    icon: "ph:briefcase-duotone",
  },
];
</script>
