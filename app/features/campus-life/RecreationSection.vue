<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("campusLife.recreation.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("campusLife.recreation.subtitle") }}
        </p>
      </div>

      <!-- Recreation Categories -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(category, index) in recreationCategories"
          :key="index"
          class="group animate-fade-up text-center"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative mx-auto mb-6 h-24 w-24">
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-600 shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <img
                :src="category.icon"
                :alt="category.name"
                class="h-12 w-12"
              />
            </div>
          </div>

          <h3
            class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
          >
            {{ category.name }}
          </h3>

          <p class="mb-4 text-gray-600">
            {{ category.description }}
          </p>

          <div class="text-2xl font-bold text-blue-600">
            {{ category.facilities }}
          </div>
          <div class="text-sm text-gray-500">
            {{ $t("campusLife.recreation.facilities") }}
          </div>
        </div>
      </div>

      <!-- Featured Programs -->
      <div class="mb-16">
        <h3
          class="animate-fade-up mb-8 text-center text-3xl font-bold text-gray-900"
        >
          {{ $t("campusLife.recreation.programs.title") }}
        </h3>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(program, index) in recreationPrograms"
            :key="index"
            class="group animate-fade-up transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="program.image"
                :alt="program.name"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute right-4 bottom-4 left-4">
                <div class="flex items-center justify-between">
                  <span
                    class="rounded-full px-3 py-1 text-sm font-semibold text-white"
                    :class="
                      program.type === 'Free'
                        ? 'bg-green-600'
                        : program.type === 'Membership'
                          ? 'bg-blue-600'
                          : 'bg-purple-600'
                    "
                  >
                    {{ program.type }}
                  </span>
                  <span class="text-sm font-medium text-white">
                    {{ program.participants }} participants
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h4
                class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
              >
                {{ program.name }}
              </h4>

              <p class="mb-4 text-gray-600">
                {{ program.description }}
              </p>

              <div class="mb-4 flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  {{ $t("campusLife.recreation.schedule") }}:
                  {{ program.schedule }}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-lg font-bold text-green-600">
                  {{
                    program.price === 0
                      ? $t("campusLife.recreation.free")
                      : `$${program.price}`
                  }}
                </div>

                <button
                  class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  {{ $t("campusLife.recreation.joinProgram") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wellness & Fitness -->
      <div
        class="animate-fade-up rounded-3xl bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 p-8 text-white md:p-12"
      >
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 class="mb-6 text-3xl font-bold md:text-4xl">
              {{ $t("campusLife.recreation.wellness.title") }}
            </h3>
            <p class="mb-8 text-xl leading-relaxed text-blue-100">
              {{ $t("campusLife.recreation.wellness.description") }}
            </p>

            <div class="mb-8 grid grid-cols-2 gap-6">
              <div>
                <div class="mb-1 text-3xl font-bold text-green-400">24/7</div>
                <div class="text-sm text-blue-200">
                  {{ $t("campusLife.recreation.wellness.stats.access") }}
                </div>
              </div>
              <div>
                <div class="mb-1 text-3xl font-bold text-blue-400">50+</div>
                <div class="text-sm text-blue-200">
                  {{ $t("campusLife.recreation.wellness.stats.classes") }}
                </div>
              </div>
            </div>

            <NuxtLink
              to="/campus-life/wellness"
              class="inline-flex transform items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              {{ $t("campusLife.recreation.wellness.explore") }}
              <svg
                class="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </NuxtLink>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div
              class="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-lg"
            >
              <div class="mb-2 text-3xl font-bold">2,000+</div>
              <div class="text-blue-200">
                {{ $t("campusLife.recreation.wellness.stats.members") }}
              </div>
            </div>
            <div
              class="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-lg"
            >
              <div class="mb-2 text-3xl font-bold">15</div>
              <div class="text-blue-200">
                {{ $t("campusLife.recreation.wellness.stats.trainers") }}
              </div>
            </div>
            <div
              class="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-lg"
            >
              <div class="mb-2 text-3xl font-bold">3</div>
              <div class="text-blue-200">
                {{ $t("campusLife.recreation.wellness.stats.pools") }}
              </div>
            </div>
            <div
              class="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-lg"
            >
              <div class="mb-2 text-3xl font-bold">8</div>
              <div class="text-blue-200">
                {{ $t("campusLife.recreation.wellness.stats.courts") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const recreationCategories = [
  {
    name: "Fitness & Gym",
    description: "State-of-the-art fitness equipment and personal training",
    icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center",
    facilities: 5,
  },
  {
    name: "Aquatics",
    description: "Swimming pools, water sports, and aqua fitness",
    icon: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=80&h=80&fit=crop&crop=center",
    facilities: 3,
  },
  {
    name: "Court Sports",
    description: "Basketball, tennis, badminton, and volleyball courts",
    icon: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=80&h=80&fit=crop&crop=center",
    facilities: 12,
  },
  {
    name: "Outdoor Activities",
    description: "Hiking trails, outdoor courts, and adventure programs",
    icon: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=80&h=80&fit=crop&crop=center",
    facilities: 8,
  },
];

const recreationPrograms = [
  {
    name: "Intramural Sports League",
    description:
      "Competitive sports leagues for students across multiple skill levels and sports.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    type: "Free",
    participants: 500,
    schedule: "Evenings & Weekends",
    price: 0,
  },
  {
    name: "Group Fitness Classes",
    description:
      "Yoga, pilates, zumba, and high-intensity interval training classes.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop&crop=center",
    type: "Membership",
    participants: 300,
    schedule: "Daily Sessions",
    price: 50,
  },
  {
    name: "Outdoor Adventure Club",
    description:
      "Hiking, camping, rock climbing, and outdoor exploration activities.",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
    type: "Paid",
    participants: 150,
    schedule: "Weekends",
    price: 75,
  },
  {
    name: "Aqua Fitness Programs",
    description:
      "Water aerobics, swimming lessons, and competitive swim teams.",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop&crop=center",
    type: "Membership",
    participants: 200,
    schedule: "Morning & Evening",
    price: 40,
  },
  {
    name: "Wellness Workshops",
    description:
      "Mental health, nutrition, stress management, and lifestyle workshops.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop&crop=center",
    type: "Free",
    participants: 100,
    schedule: "Weekly Sessions",
    price: 0,
  },
  {
    name: "Personal Training",
    description: "One-on-one fitness coaching and customized workout programs.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    type: "Paid",
    participants: 80,
    schedule: "By Appointment",
    price: 120,
  },
];
</script>
