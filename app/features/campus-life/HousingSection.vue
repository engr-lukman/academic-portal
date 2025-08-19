<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("campusLife.housing.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("campusLife.housing.subtitle") }}
        </p>
      </div>

      <!-- Housing Options -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(option, index) in housingOptions"
          :key="index"
          class="group animate-fade-up transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="option.image"
              :alt="option.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold text-white"
                :class="
                  option.availability === 'Available'
                    ? 'bg-green-500'
                    : option.availability === 'Limited'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                "
              >
                {{ option.availability }}
              </span>
            </div>
            <div class="absolute right-4 bottom-4">
              <span
                class="rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white"
              >
                ${{ option.price }}/month
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ option.name }}
            </h3>

            <p class="mb-4 text-gray-600">
              {{ option.description }}
            </p>

            <div class="mb-4 grid grid-cols-2 gap-4">
              <div class="rounded-lg bg-gray-50 p-3 text-center">
                <div class="text-lg font-bold text-blue-600">
                  {{ option.capacity }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ $t("campusLife.housing.capacity") }}
                </div>
              </div>
              <div class="rounded-lg bg-gray-50 p-3 text-center">
                <div class="text-lg font-bold text-green-600">
                  {{ option.rooms }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ $t("campusLife.housing.rooms") }}
                </div>
              </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="(amenity, amenityIndex) in option.amenities.slice(0, 3)"
                :key="amenityIndex"
                class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700"
              >
                {{ amenity }}
              </span>
              <span
                v-if="option.amenities.length > 3"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                +{{ option.amenities.length - 3 }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <NuxtLink
                :to="`/campus-life/housing/${option.slug}`"
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

              <button
                class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
              >
                {{ $t("campusLife.housing.apply") }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Housing Services -->
      <div class="animate-fade-up rounded-3xl bg-white p-8 shadow-lg md:p-12">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-3xl font-bold text-gray-900">
            {{ $t("campusLife.housing.services.title") }}
          </h3>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            {{ $t("campusLife.housing.services.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(service, index) in housingServices"
            :key="index"
            class="group text-center"
          >
            <div
              class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <img
                :src="service.icon"
                :alt="service.name"
                class="h-10 w-10"
              />
            </div>

            <h4 class="mb-2 text-lg font-bold text-gray-900">
              {{ service.name }}
            </h4>
            <p class="text-sm text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const housingOptions = [
  {
    name: "Freshman Residence Hall",
    description:
      "Modern dormitory designed specifically for first-year students with shared common areas and study spaces.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e460b1e5?w=400&h=300&fit=crop&crop=center",
    availability: "Available",
    price: 800,
    capacity: 400,
    rooms: 200,
    amenities: [
      "Wi-Fi",
      "Laundry",
      "Common Room",
      "Study Areas",
      "24/7 Security",
    ],
    slug: "freshman-hall",
  },
  {
    name: "Graduate Housing Complex",
    description:
      "Apartment-style housing for graduate students and upperclassmen with kitchen facilities and private bathrooms.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop&crop=center",
    availability: "Limited",
    price: 1200,
    capacity: 300,
    rooms: 150,
    amenities: [
      "Full Kitchen",
      "Private Bath",
      "Parking",
      "Gym Access",
      "Pet Friendly",
    ],
    slug: "graduate-complex",
  },
  {
    name: "International Student House",
    description:
      "Specialized housing for international students with cultural support and community programs.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&crop=center",
    availability: "Available",
    price: 900,
    capacity: 250,
    rooms: 125,
    amenities: [
      "Cultural Center",
      "Language Support",
      "International Kitchen",
      "Events Space",
    ],
    slug: "international-house",
  },
  {
    name: "Honors College Residence",
    description:
      "Premium housing for honors program students with enhanced amenities and study facilities.",
    image:
      "https://images.unsplash.com/photo-1581302083865-4d8b8ef5e2d6?w=400&h=300&fit=crop&crop=center",
    availability: "Waitlist",
    price: 1000,
    capacity: 150,
    rooms: 75,
    amenities: [
      "Study Suites",
      "Honors Lounge",
      "Private Dining",
      "Concierge Service",
    ],
    slug: "honors-residence",
  },
  {
    name: "Family Housing Village",
    description:
      "Apartment-style housing for married students and families with playground and childcare facilities.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&crop=center",
    availability: "Available",
    price: 1500,
    capacity: 100,
    rooms: 50,
    amenities: [
      "Playground",
      "Childcare",
      "Family Events",
      "School Shuttle",
      "Garden Space",
    ],
    slug: "family-village",
  },
  {
    name: "Eco-Friendly Residence",
    description:
      "Sustainable living community with green technologies and environmental programs.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    availability: "Available",
    price: 950,
    capacity: 200,
    rooms: 100,
    amenities: [
      "Solar Power",
      "Recycling Center",
      "Green Roof",
      "Composting",
      "LEED Certified",
    ],
    slug: "eco-residence",
  },
];

const housingServices = [
  {
    name: "Maintenance",
    description: "24/7 maintenance support for all housing facilities",
    icon: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=80&h=80&fit=crop&crop=center",
  },
  {
    name: "Security",
    description: "Round-the-clock security and access control systems",
    icon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop&crop=center",
  },
  {
    name: "Residential Life",
    description: "Programs and events to build community connections",
    icon: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=80&h=80&fit=crop&crop=center",
  },
  {
    name: "Support Services",
    description: "Academic and personal support for residential students",
    icon: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=80&h=80&fit=crop&crop=center",
  },
];
</script>
