<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("academics.facilities.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("academics.facilities.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <AppCard
          v-for="facility in facilities"
          :key="facility.key"
          variant="elevated"
          hover
          class="group"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="facility.image"
                :alt="$t(`academics.facilities.${facility.key}.title`)"
                class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              />
              <div class="absolute bottom-4 left-4 flex items-center gap-3">
                <Icon
                  :name="facility.icon"
                  class="h-8 w-8 text-white"
                />
                <div class="text-white">
                  <h3 class="text-lg font-semibold">
                    {{ $t(`academics.facilities.${facility.key}.title`) }}
                  </h3>
                  <p class="text-sm opacity-90">{{ facility.capacity }}</p>
                </div>
              </div>
            </div>
          </template>

          <div class="p-6">
            <p class="paragraph-2 mb-6 text-gray-600">
              {{ $t(`academics.facilities.${facility.key}.description`) }}
            </p>

            <div class="space-y-3">
              <div
                v-for="feature in facility.features"
                :key="feature"
                class="flex items-center gap-2 text-sm text-gray-600"
              >
                <Icon
                  name="ph:check-circle-duotone"
                  class="h-4 w-4 text-green-600"
                />
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const facilities = [
  {
    key: "library",
    icon: "ph:books-duotone",
    image: "/images/facility-library.jpg",
    capacity: "2,000 seats",
    features: [
      "24/7 Digital Access",
      "Study Rooms",
      "Research Support",
      "Online Databases",
    ],
  },
  {
    key: "laboratories",
    icon: "ph:flask-duotone",
    image: "/images/facility-labs.jpg",
    capacity: "50+ Labs",
    features: [
      "Modern Equipment",
      "Safety Protocols",
      "Research Facilities",
      "Student Access",
    ],
  },
  {
    key: "classrooms",
    icon: "ph:chalkboard-teacher-duotone",
    image: "/images/facility-classrooms.jpg",
    capacity: "100+ Rooms",
    features: [
      "Smart Boards",
      "Audio Visual",
      "Comfortable Seating",
      "Climate Control",
    ],
  },
  {
    key: "auditoriums",
    icon: "ph:presentation-chart-duotone",
    image: "/images/facility-auditoriums.jpg",
    capacity: "5 Large Halls",
    features: [
      "500+ Capacity",
      "State-of-art Sound",
      "Professional Lighting",
      "Recording Facilities",
    ],
  },
];
</script>
