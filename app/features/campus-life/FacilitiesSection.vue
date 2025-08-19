<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("campusLife.facilities.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("campusLife.facilities.subtitle") }}
        </p>
      </div>

      <!-- Featured Facility -->
      <div class="animate-fade-up-delay-2 mb-16">
        <div
          class="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl"
        >
          <div class="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div class="relative h-64 lg:h-auto">
              <img
                :src="featuredFacility.image"
                :alt="featuredFacility.name"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>

            <div class="p-8 md:p-12 lg:p-16">
              <div
                class="mb-6 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-sm text-white"
              >
                {{ $t("campusLife.facilities.featured.badge") }}
              </div>

              <h3 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                {{ featuredFacility.name }}
              </h3>

              <p class="mb-8 text-lg leading-relaxed text-gray-600">
                {{ featuredFacility.description }}
              </p>

              <div class="mb-8 flex items-center gap-6">
                <div>
                  <div class="text-2xl font-bold text-blue-600">
                    {{ featuredFacility.capacity }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ $t("campusLife.facilities.capacity") }}
                  </div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-green-600">
                    {{ featuredFacility.hours }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ $t("campusLife.facilities.hours") }}
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row">
                <NuxtLink
                  :to="`/campus-life/facilities/${featuredFacility.slug}`"
                  class="inline-flex transform items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  {{ $t("campusLife.facilities.viewDetails") }}
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

                <button
                  class="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  {{ $t("campusLife.facilities.virtualTour") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Facilities Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(facility, index) in facilities"
          :key="index"
          class="group animate-fade-up transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="facility.image"
              :alt="facility.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold text-white"
                :class="
                  facility.status === 'Open'
                    ? 'bg-green-500'
                    : facility.status === 'Renovating'
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                "
              >
                {{ facility.status }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ facility.name }}
            </h3>

            <p class="mb-4 line-clamp-3 text-gray-600">
              {{ facility.description }}
            </p>

            <div class="mb-4 flex items-center justify-between">
              <div class="text-sm text-gray-500">
                {{ $t("campusLife.facilities.openHours") }}:
                {{ facility.hours }}
              </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="(feature, featureIndex) in facility.features.slice(0, 3)"
                :key="featureIndex"
                class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700"
              >
                {{ feature }}
              </span>
              <span
                v-if="facility.features.length > 3"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                +{{ facility.features.length - 3 }}
              </span>
            </div>

            <NuxtLink
              :to="`/campus-life/facilities/${facility.slug}`"
              class="inline-flex items-center font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
            >
              {{ $t("common.learnMore") }}
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredFacility = {
  name: "Student Recreation Center",
  description:
    "A state-of-the-art recreation facility featuring modern fitness equipment, swimming pools, basketball courts, and wellness programs to support student health and well-being.",
  image:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
  capacity: "2,000",
  hours: "24/7",
  slug: "recreation-center",
};

const facilities = [
  {
    name: "Central Library",
    description:
      "Modern library with extensive digital and physical collections, study spaces, and research facilities.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "6 AM - 12 AM",
    features: [
      "Digital Resources",
      "Study Rooms",
      "Research Support",
      "24/7 Access",
    ],
    slug: "central-library",
  },
  {
    name: "Sports Complex",
    description:
      "Comprehensive sports facility with courts, fields, and equipment for various athletic activities.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "5 AM - 11 PM",
    features: [
      "Basketball Courts",
      "Swimming Pool",
      "Gymnasium",
      "Athletic Fields",
    ],
    slug: "sports-complex",
  },
  {
    name: "Student Union Building",
    description:
      "Central hub for student activities, dining, and social gatherings with modern amenities.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "7 AM - 10 PM",
    features: [
      "Food Court",
      "Meeting Rooms",
      "Event Spaces",
      "Student Services",
    ],
    slug: "student-union",
  },
  {
    name: "Innovation Lab",
    description:
      "Cutting-edge technology space for entrepreneurship, innovation, and collaborative projects.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "8 AM - 8 PM",
    features: ["3D Printing", "VR/AR Lab", "Maker Space", "Startup Incubator"],
    slug: "innovation-lab",
  },
  {
    name: "Health & Wellness Center",
    description:
      "Comprehensive healthcare facility providing medical services and wellness programs.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "8 AM - 6 PM",
    features: [
      "Medical Care",
      "Mental Health",
      "Pharmacy",
      "Wellness Programs",
    ],
    slug: "health-center",
  },
  {
    name: "Arts & Cultural Center",
    description:
      "Vibrant space for artistic expression, performances, and cultural events.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    status: "Renovating",
    hours: "9 AM - 9 PM",
    features: ["Theater", "Art Galleries", "Music Studios", "Dance Studios"],
    slug: "arts-center",
  },
];
</script>
