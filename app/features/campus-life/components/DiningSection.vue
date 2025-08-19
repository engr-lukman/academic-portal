<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("campusLife.dining.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("campusLife.dining.subtitle") }}
        </p>
      </div>

      <!-- Dining Locations -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(location, index) in diningLocations"
          :key="index"
          class="group animate-fade-up transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="location.image"
              :alt="location.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold text-white"
                :class="
                  location.status === 'Open'
                    ? 'bg-green-500'
                    : location.status === 'Closing Soon'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                "
              >
                {{ location.status }}
              </span>
            </div>
            <div class="absolute right-4 bottom-4">
              <div class="flex items-center text-yellow-400">
                <svg
                  class="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
                <span class="ml-1 text-sm font-medium text-white">{{
                  location.rating
                }}</span>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ location.name }}
            </h3>

            <p class="mb-4 text-gray-600">
              {{ location.description }}
            </p>

            <div class="mb-4 flex items-center justify-between">
              <div class="text-sm text-gray-500">
                {{ $t("campusLife.dining.hours") }}: {{ location.hours }}
              </div>
              <div class="text-sm font-medium text-green-600">
                {{ location.priceRange }}
              </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="(cuisine, cuisineIndex) in location.cuisineTypes.slice(
                  0,
                  3
                )"
                :key="cuisineIndex"
                class="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700"
              >
                {{ cuisine }}
              </span>
              <span
                v-if="location.cuisineTypes.length > 3"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                +{{ location.cuisineTypes.length - 3 }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <NuxtLink
                :to="`/campus-life/dining/${location.slug}`"
                class="inline-flex items-center font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
              >
                {{ $t("campusLife.dining.viewMenu") }}
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

              <div class="flex items-center gap-2">
                <span
                  v-if="location.takeout"
                  class="h-2 w-2 rounded-full bg-green-500"
                  title="Takeout Available"
                ></span>
                <span
                  v-if="location.delivery"
                  class="h-2 w-2 rounded-full bg-blue-500"
                  title="Delivery Available"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dining Plans -->
      <div
        class="animate-fade-up mb-16 rounded-3xl bg-gradient-to-r from-orange-50 to-red-50 p-8 md:p-12"
      >
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-3xl font-bold text-gray-900">
            {{ $t("campusLife.dining.plans.title") }}
          </h3>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            {{ $t("campusLife.dining.plans.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(plan, index) in diningPlans"
            :key="index"
            class="rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div class="mb-6 text-center">
              <h4 class="mb-2 text-xl font-bold text-gray-900">
                {{ plan.name }}
              </h4>
              <div class="mb-2 text-3xl font-bold text-orange-600">
                ${{ plan.price }}
              </div>
              <div class="text-gray-500">{{ plan.period }}</div>
            </div>

            <ul class="mb-6 space-y-3">
              <li
                v-for="(feature, featureIndex) in plan.features"
                :key="featureIndex"
                class="flex items-center"
              >
                <svg
                  class="mr-3 h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>

            <button
              class="w-full rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-orange-700"
            >
              {{ $t("campusLife.dining.plans.select") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Nutrition & Dietary -->
      <div class="animate-fade-up grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 class="mb-6 text-3xl font-bold text-gray-900">
            {{ $t("campusLife.dining.nutrition.title") }}
          </h3>
          <p class="mb-6 text-lg text-gray-600">
            {{ $t("campusLife.dining.nutrition.description") }}
          </p>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(option, index) in dietaryOptions"
              :key="index"
              class="flex items-center rounded-lg bg-green-50 p-4"
            >
              <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ option.name }}</div>
                <div class="text-sm text-gray-600">
                  {{ option.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&crop=center"
            alt="Healthy Campus Dining"
            class="h-full w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const diningLocations = [
  {
    name: "Main Dining Hall",
    description:
      "All-you-can-eat dining with international cuisine and fresh salad bar.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "7 AM - 10 PM",
    rating: 4.5,
    priceRange: "$12-18",
    cuisineTypes: ["International", "American", "Asian", "Vegetarian"],
    takeout: true,
    delivery: false,
    slug: "main-dining-hall",
  },
  {
    name: "Student Union Food Court",
    description:
      "Quick service restaurants and popular chain outlets for grab-and-go meals.",
    image:
      "https://images.unsplash.com/photo-1567521464027-f51d5c6b1861?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "10 AM - 11 PM",
    rating: 4.3,
    priceRange: "$8-15",
    cuisineTypes: ["Fast Food", "Pizza", "Sandwiches", "Coffee"],
    takeout: true,
    delivery: true,
    slug: "food-court",
  },
  {
    name: "Campus Café",
    description:
      "Cozy coffee shop with light meals, pastries, and specialty beverages.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "6 AM - 8 PM",
    rating: 4.7,
    priceRange: "$5-12",
    cuisineTypes: ["Coffee", "Pastries", "Light Meals", "Snacks"],
    takeout: true,
    delivery: false,
    slug: "campus-cafe",
  },
  {
    name: "International Kitchen",
    description:
      "Authentic ethnic cuisines from around the world with rotating menus.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "11 AM - 9 PM",
    rating: 4.6,
    priceRange: "$10-20",
    cuisineTypes: ["Indian", "Mexican", "Thai", "Mediterranean"],
    takeout: true,
    delivery: true,
    slug: "international-kitchen",
  },
  {
    name: "Healthy Eats",
    description:
      "Fresh, organic, and health-conscious dining with vegan and gluten-free options.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center",
    status: "Closing Soon",
    hours: "9 AM - 6 PM",
    rating: 4.8,
    priceRange: "$8-16",
    cuisineTypes: ["Organic", "Vegan", "Gluten-Free", "Raw"],
    takeout: true,
    delivery: false,
    slug: "healthy-eats",
  },
  {
    name: "Late Night Grill",
    description:
      "Extended hours dining with comfort food and study fuel for late-night students.",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center",
    status: "Open",
    hours: "8 PM - 2 AM",
    rating: 4.2,
    priceRange: "$6-14",
    cuisineTypes: ["American", "Comfort Food", "Grilled", "Snacks"],
    takeout: true,
    delivery: true,
    slug: "late-night-grill",
  },
];

const diningPlans = [
  {
    name: "Bronze Plan",
    price: 450,
    period: "per semester",
    features: [
      "10 meals per week",
      "Access to main dining hall",
      "$50 dining dollars",
      "Guest meal privileges",
    ],
  },
  {
    name: "Silver Plan",
    price: 650,
    period: "per semester",
    features: [
      "15 meals per week",
      "All dining locations",
      "$100 dining dollars",
      "Late night access",
      "Meal rollover",
    ],
  },
  {
    name: "Gold Plan",
    price: 850,
    period: "per semester",
    features: [
      "Unlimited meals",
      "All dining locations",
      "$150 dining dollars",
      "24/7 access",
      "Guest privileges",
      "Premium options",
    ],
  },
];

const dietaryOptions = [
  {
    name: "Vegetarian",
    description: "Plant-based options",
  },
  {
    name: "Vegan",
    description: "No animal products",
  },
  {
    name: "Gluten-Free",
    description: "Celiac-safe meals",
  },
  {
    name: "Halal",
    description: "Islamic dietary laws",
  },
];
</script>
