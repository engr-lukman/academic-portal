<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("about.leadership.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("about.leadership.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="leader in leadership"
          :key="leader.key"
          variant="elevated"
          hover
          class="group text-center"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="leader.image"
                :alt="leader.name"
                class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </template>

          <div class="p-6">
            <h3
              class="title-4 mb-2 text-gray-800 transition-colors duration-300 group-hover:text-emerald-600"
            >
              {{ leader.name }}
            </h3>
            <p class="mb-3 text-sm font-medium text-emerald-600">
              {{ $t(`about.leadership.${leader.key}.position`) }}
            </p>
            <p class="paragraph-2 mb-4 text-gray-600">
              {{ $t(`about.leadership.${leader.key}.bio`) }}
            </p>

            <div class="flex items-center justify-center gap-2">
              <span class="text-xs text-gray-500"
                >{{ leader.experience }} years experience</span
              >
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const leadership = [
  {
    key: "president",
    name: "Dr. Sarah Johnson",
    image: "/images/leader-president.jpg",
    experience: "15",
  },
  {
    key: "provost",
    name: "Prof. Michael Chen",
    image: "/images/leader-provost.jpg",
    experience: "12",
  },
  {
    key: "dean_engineering",
    name: "Dr. Emily Rodriguez",
    image: "/images/leader-dean-engineering.jpg",
    experience: "10",
  },
  {
    key: "dean_business",
    name: "Prof. David Thompson",
    image: "/images/leader-dean-business.jpg",
    experience: "8",
  },
  {
    key: "dean_sciences",
    name: "Dr. Lisa Wang",
    image: "/images/leader-dean-sciences.jpg",
    experience: "11",
  },
  {
    key: "director_research",
    name: "Prof. James Wilson",
    image: "/images/leader-research-director.jpg",
    experience: "14",
  },
];
</script>
