<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("campusLife.activities.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("campusLife.activities.subtitle") }}
        </p>
      </div>

      <!-- Activity Categories -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(category, index) in activityCategories"
          :key="index"
          class="group animate-fade-up text-center"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div
            class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <img
              :src="category.icon"
              :alt="category.name"
              class="h-12 w-12 text-white"
            />
          </div>

          <h3
            class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
          >
            {{ category.name }}
          </h3>

          <p class="mb-4 text-gray-600">
            {{ category.description }}
          </p>

          <div class="mb-2 text-2xl font-bold text-blue-600">
            {{ category.count }}
          </div>
          <div class="text-sm text-gray-500">{{ category.type }}</div>
        </div>
      </div>

      <!-- Featured Activities -->
      <div class="mb-16">
        <h3
          class="animate-fade-up mb-8 text-center text-3xl font-bold text-gray-900"
        >
          {{ $t("campusLife.activities.featured.title") }}
        </h3>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(activity, index) in featuredActivities"
            :key="index"
            class="group animate-fade-up transform overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="activity.image"
                :alt="activity.name"
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
                      activity.category === 'Academic'
                        ? 'bg-blue-600'
                        : activity.category === 'Sports'
                          ? 'bg-green-600'
                          : activity.category === 'Cultural'
                            ? 'bg-purple-600'
                            : 'bg-orange-600'
                    "
                  >
                    {{ activity.category }}
                  </span>
                  <span class="text-sm font-medium text-white">
                    {{ activity.members }} members
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h4
                class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
              >
                {{ activity.name }}
              </h4>

              <p class="mb-4 line-clamp-3 text-gray-600">
                {{ activity.description }}
              </p>

              <div class="mb-4 flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  {{ $t("campusLife.activities.meetingTime") }}:
                  {{ activity.meetingTime }}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <NuxtLink
                  :to="`/campus-life/activities/${activity.slug}`"
                  class="inline-flex items-center font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
                >
                  {{ $t("campusLife.activities.joinClub") }}
                  <svg
                    class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </NuxtLink>

                <div class="flex items-center text-yellow-500">
                  <svg
                    class="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                  <span class="ml-1 text-sm font-medium">{{
                    activity.rating
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Student Organizations -->
      <div
        class="animate-fade-up rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:p-12"
      >
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-3xl font-bold text-gray-900">
            {{ $t("campusLife.activities.organizations.title") }}
          </h3>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            {{ $t("campusLife.activities.organizations.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">
              50+
            </div>
            <div class="text-gray-600">
              {{ $t("campusLife.activities.organizations.stats.clubs") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-bold text-purple-600 md:text-5xl">
              15
            </div>
            <div class="text-gray-600">
              {{ $t("campusLife.activities.organizations.stats.sportsTeams") }}
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 text-4xl font-bold text-green-600 md:text-5xl">
              200+
            </div>
            <div class="text-gray-600">
              {{ $t("campusLife.activities.organizations.stats.events") }}
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <NuxtLink
            to="/campus-life/organizations"
            class="inline-flex transform items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            {{ $t("campusLife.activities.organizations.viewAll") }}
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
      </div>
    </div>
  </section>
</template>

<script setup>
const activityCategories = [
  {
    name: "Academic Clubs",
    description: "Subject-specific organizations for academic enhancement",
    icon: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center",
    count: 20,
    type: "Organizations",
  },
  {
    name: "Sports Teams",
    description: "Competitive and recreational sports activities",
    icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop&crop=center",
    count: 15,
    type: "Teams",
  },
  {
    name: "Cultural Groups",
    description: "Arts, music, and cultural expression organizations",
    icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center",
    count: 12,
    type: "Groups",
  },
  {
    name: "Service Clubs",
    description: "Community service and volunteer organizations",
    icon: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=80&h=80&fit=crop&crop=center",
    count: 8,
    type: "Clubs",
  },
];

const featuredActivities = [
  {
    name: "Computer Science Society",
    description:
      "A vibrant community of tech enthusiasts engaging in coding competitions, hackathons, and technical workshops.",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&crop=center",
    category: "Academic",
    members: 150,
    meetingTime: "Thursdays 6 PM",
    rating: 4.8,
    slug: "computer-science-society",
  },
  {
    name: "Basketball Team",
    description:
      "Competitive basketball team representing the university in inter-collegiate tournaments and championships.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&crop=center",
    category: "Sports",
    members: 25,
    meetingTime: "Daily 5 PM",
    rating: 4.9,
    slug: "basketball-team",
  },
  {
    name: "Drama Club",
    description:
      "Creative theater group producing original plays, musicals, and dramatic performances throughout the year.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    category: "Cultural",
    members: 45,
    meetingTime: "Tuesdays 7 PM",
    rating: 4.7,
    slug: "drama-club",
  },
  {
    name: "Environmental Action Group",
    description:
      "Dedicated to campus sustainability and environmental awareness through various green initiatives.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=center",
    category: "Service",
    members: 80,
    meetingTime: "Saturdays 10 AM",
    rating: 4.6,
    slug: "environmental-action",
  },
  {
    name: "Debate Society",
    description:
      "Developing critical thinking and public speaking skills through competitive debates and forums.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop&crop=center",
    category: "Academic",
    members: 35,
    meetingTime: "Wednesdays 6 PM",
    rating: 4.8,
    slug: "debate-society",
  },
  {
    name: "Photography Club",
    description:
      "Capturing campus life and artistic expression through photography workshops and exhibitions.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop&crop=center",
    category: "Cultural",
    members: 60,
    meetingTime: "Fridays 4 PM",
    rating: 4.5,
    slug: "photography-club",
  },
];
</script>
