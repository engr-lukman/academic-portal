<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("academics.departments.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("academics.departments.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="department in departments"
          :key="department.key"
          variant="elevated"
          hover
          class="group"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="department.image"
                :alt="$t(`academics.departments.${department.key}.title`)"
                class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              />
              <div class="absolute bottom-4 left-4">
                <Icon
                  :name="department.icon"
                  class="h-8 w-8 text-white"
                />
              </div>
            </div>
          </template>

          <div class="p-6">
            <h3
              class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-green-600"
            >
              {{ $t(`academics.departments.${department.key}.title`) }}
            </h3>
            <p class="paragraph-2 mb-4 line-clamp-3 text-gray-600">
              {{ $t(`academics.departments.${department.key}.description`) }}
            </p>

            <div class="mb-4">
              <h4 class="mb-2 text-sm font-semibold text-gray-700">
                {{ $t("programs.title") }}:
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="program in $t(
                    `academics.departments.${department.key}.programs`
                  )"
                  :key="program"
                  class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
                >
                  {{ program }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-green-600">
                {{ department.studentCount }} Students
              </span>
              <AppButton
                :tag="'NuxtLinkLocale'"
                to="/departments"
                variant="ghost"
                size="sm"
                icon="ph:arrow-right"
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                {{ $t("common.learn_more") }}
              </AppButton>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const departments = [
  {
    key: "engineering",
    icon: "ph:gear-duotone",
    image: "/images/department-engineering.jpg",
    studentCount: "1,200+",
  },
  {
    key: "business",
    icon: "ph:briefcase-duotone",
    image: "/images/department-business.jpg",
    studentCount: "800+",
  },
  {
    key: "sciences",
    icon: "ph:flask-duotone",
    image: "/images/department-sciences.jpg",
    studentCount: "600+",
  },
  {
    key: "liberal_arts",
    icon: "ph:book-open-duotone",
    image: "/images/department-liberal-arts.jpg",
    studentCount: "500+",
  },
  {
    key: "health",
    icon: "ph:heart-duotone",
    image: "/images/department-health.jpg",
    studentCount: "400+",
  },
  {
    key: "education",
    icon: "ph:graduation-cap-duotone",
    image: "/images/department-education.jpg",
    studentCount: "300+",
  },
];
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
