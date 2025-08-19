<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("departments.programs.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("departments.programs.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <div
          v-for="category in programCategories"
          :key="category.key"
          class="group"
        >
          <AppCard
            variant="elevated"
            hover
            class="h-full"
          >
            <template #media>
              <div class="relative overflow-hidden">
                <NuxtImg
                  :src="category.image"
                  :alt="$t(`departments.programs.${category.key}.title`)"
                  class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
                <div class="absolute bottom-4 left-4 text-white">
                  <Icon
                    :name="category.icon"
                    class="mb-2 h-8 w-8"
                  />
                  <h3 class="text-xl font-semibold">
                    {{ $t(`departments.programs.${category.key}.title`) }}
                  </h3>
                </div>
              </div>
            </template>

            <div class="p-6">
              <p class="paragraph-2 mb-6 text-gray-600">
                {{ $t(`departments.programs.${category.key}.description`) }}
              </p>

              <div class="space-y-4">
                <div
                  v-for="program in category.programs"
                  :key="program.name"
                  class="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors duration-300 hover:bg-indigo-50"
                >
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      {{ program.name }}
                    </h4>
                    <p class="text-sm text-gray-600">{{ program.duration }}</p>
                  </div>
                  <div class="text-right">
                    <span class="text-sm font-medium text-indigo-600">{{
                      program.level
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const programCategories = [
  {
    key: "undergraduate",
    icon: "ph:student-duotone",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        name: "Bachelor of Engineering",
        duration: "4 years",
        level: "Undergraduate",
      },
      {
        name: "Bachelor of Business Administration",
        duration: "4 years",
        level: "Undergraduate",
      },
      {
        name: "Bachelor of Science",
        duration: "4 years",
        level: "Undergraduate",
      },
      { name: "Bachelor of Arts", duration: "4 years", level: "Undergraduate" },
    ],
  },
  {
    key: "graduate",
    icon: "ph:graduation-cap-duotone",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    programs: [
      { name: "Master of Engineering", duration: "2 years", level: "Graduate" },
      {
        name: "Master of Business Administration",
        duration: "2 years",
        level: "Graduate",
      },
      { name: "Master of Science", duration: "2 years", level: "Graduate" },
      {
        name: "Doctor of Philosophy",
        duration: "3-5 years",
        level: "Doctoral",
      },
    ],
  },
];
</script>
