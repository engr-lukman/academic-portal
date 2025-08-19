<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("departments.overview.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("departments.overview.subtitle") }}
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
                :alt="$t(`departments.list.${department.key}.title`)"
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
              class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-indigo-600"
            >
              {{ $t(`departments.list.${department.key}.title`) }}
            </h3>
            <p class="paragraph-2 mb-4 line-clamp-3 text-gray-600">
              {{ $t(`departments.list.${department.key}.description`) }}
            </p>

            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="program in department.programs"
                  :key="program"
                  class="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800"
                >
                  {{ program }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-indigo-600">
                {{ department.studentCount }} Students
              </span>
              <AppButton
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
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    studentCount: "1,200+",
    programs: [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],
  },
  {
    key: "business",
    icon: "ph:briefcase-duotone",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    studentCount: "800+",
    programs: ["Business Administration", "Marketing", "Finance"],
  },
  {
    key: "sciences",
    icon: "ph:flask-duotone",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    studentCount: "600+",
    programs: ["Biology", "Chemistry", "Physics"],
  },
  {
    key: "liberal_arts",
    icon: "ph:book-open-duotone",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    studentCount: "500+",
    programs: ["English Literature", "History", "Philosophy"],
  },
  {
    key: "health",
    icon: "ph:heart-duotone",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    studentCount: "400+",
    programs: ["Medicine", "Nursing", "Pharmacy"],
  },
  {
    key: "education",
    icon: "ph:graduation-cap-duotone",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    studentCount: "300+",
    programs: [
      "Elementary Education",
      "Secondary Education",
      "Educational Leadership",
    ],
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
