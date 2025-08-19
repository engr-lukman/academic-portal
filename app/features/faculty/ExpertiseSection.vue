<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("faculty.expertise.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("faculty.expertise.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="area in expertiseAreas"
          :key="area.key"
          variant="elevated"
          hover
          class="group text-center"
        >
          <div class="p-8">
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg"
            >
              <Icon
                :name="area.icon"
                class="h-8 w-8 text-white"
              />
            </div>
            <h3
              class="title-4 mb-4 text-gray-800 transition-colors duration-300 group-hover:text-teal-600"
            >
              {{ $t(`faculty.expertise.areas.${area.key}.title`) }}
            </h3>
            <p class="paragraph-2 mb-6 text-gray-600">
              {{ $t(`faculty.expertise.areas.${area.key}.description`) }}
            </p>
            <div class="text-sm font-medium text-teal-600">
              {{ area.facultyCount }} Faculty Members
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const expertiseAreas = [
  {
    key: "research",
    icon: "ph:flask-duotone",
    facultyCount: "85+",
  },
  {
    key: "teaching",
    icon: "ph:chalkboard-teacher-duotone",
    facultyCount: "100+",
  },
  {
    key: "industry",
    icon: "ph:briefcase-duotone",
    facultyCount: "65+",
  },
  {
    key: "innovation",
    icon: "ph:lightbulb-duotone",
    facultyCount: "45+",
  },
  {
    key: "mentorship",
    icon: "ph:users-duotone",
    facultyCount: "120+",
  },
  {
    key: "leadership",
    icon: "ph:crown-duotone",
    facultyCount: "30+",
  },
];
</script>
