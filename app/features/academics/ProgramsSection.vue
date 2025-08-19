<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("programs.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("programs.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="program in academicPrograms"
          :key="program.key"
          variant="elevated"
          hover
          class="group"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="program.image"
                :alt="$t(`programs.${program.key}.title`)"
                class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder
              />
              <div class="absolute top-4 left-4">
                <span
                  class="inline-flex items-center rounded-full bg-green-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {{ $t(`programs.${program.key}.duration`) }}
                </span>
              </div>
              <div class="absolute bottom-4 left-4">
                <Icon
                  :name="program.icon"
                  class="h-8 w-8 text-white"
                />
              </div>
            </div>
          </template>

          <div class="p-6">
            <h3
              class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-green-600"
            >
              {{ $t(`programs.${program.key}.title`) }}
            </h3>
            <p class="paragraph-2 mb-6 line-clamp-3 text-gray-600">
              {{ $t(`programs.${program.key}.description`) }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <Icon
                  name="ph:users-duotone"
                  class="h-4 w-4"
                />
                <span>{{ program.enrollment }} enrolled</span>
              </div>
              <AppButton
                :tag="'NuxtLinkLocale'"
                to="/admissions"
                variant="ghost"
                size="sm"
                icon="ph:arrow-right"
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                {{ $t("common.apply_now") }}
              </AppButton>
            </div>
          </div>
        </AppCard>
      </div>

      <div class="fade-in mt-12 text-center">
        <AppButton
          :tag="'NuxtLinkLocale'"
          to="/admissions"
          variant="primary"
          size="lg"
          icon="ph:user-plus-duotone"
        >
          {{ $t("hero.apply_admission") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const academicPrograms = [
  {
    key: "undergraduate",
    icon: "ph:student-duotone",
    image: "/images/undergraduate-program.jpg",
    enrollment: "2,500+",
  },
  {
    key: "graduate",
    icon: "ph:graduation-cap-duotone",
    image: "/images/graduate-program.jpg",
    enrollment: "800+",
  },
  {
    key: "doctoral",
    icon: "ph:scroll-duotone",
    image: "/images/doctoral-program.jpg",
    enrollment: "200+",
  },
  {
    key: "professional",
    icon: "ph:briefcase-duotone",
    image: "/images/professional-program.jpg",
    enrollment: "500+",
  },
  {
    key: "online",
    icon: "ph:laptop-duotone",
    image: "/images/online-program.jpg",
    enrollment: "1,200+",
  },
  {
    key: "continuing",
    icon: "ph:infinity-duotone",
    image: "/images/continuing-education.jpg",
    enrollment: "300+",
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
