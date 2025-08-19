<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("research.centers.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("research.centers.subtitle") }}
        </p>
      </div>

      <!-- Featured Center -->
      <div class="animate-fade-up-delay-2 mb-16">
        <div
          class="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 shadow-2xl"
        >
          <div class="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div class="relative h-64 lg:h-auto">
              <img
                :src="featuredCenter.image"
                :alt="featuredCenter.name"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent"
              ></div>
            </div>

            <div class="p-8 text-white md:p-12 lg:p-16">
              <div
                class="mb-6 inline-flex items-center rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-black"
              >
                {{ $t("research.centers.featured.badge") }}
              </div>

              <h3 class="mb-6 text-3xl font-bold md:text-4xl">
                {{ featuredCenter.name }}
              </h3>

              <p class="mb-8 text-lg leading-relaxed text-blue-100">
                {{ featuredCenter.description }}
              </p>

              <div class="mb-8 grid grid-cols-2 gap-6">
                <div>
                  <div class="mb-1 text-3xl font-bold text-yellow-400">
                    {{ featuredCenter.researchers }}
                  </div>
                  <div class="text-sm text-blue-200">
                    {{ $t("research.centers.researchers") }}
                  </div>
                </div>
                <div>
                  <div class="mb-1 text-3xl font-bold text-green-400">
                    ${{ featuredCenter.funding }}M
                  </div>
                  <div class="text-sm text-blue-200">
                    {{ $t("research.centers.annualFunding") }}
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row">
                <NuxtLink
                  :to="`/research/centers/${featuredCenter.slug}`"
                  class="inline-flex transform items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-indigo-900 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
                >
                  {{ $t("research.centers.exploreCenter") }}
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

                <a
                  href="#"
                  class="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-indigo-900"
                >
                  {{ $t("research.centers.virtualTour") }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Research Centers Grid -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(center, index) in researchCenters"
          :key="index"
          class="group animate-fade-up transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="center.image"
              :alt="center.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>
            <div class="absolute right-4 bottom-4 left-4">
              <div class="flex items-center justify-between">
                <span
                  class="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white"
                >
                  {{ center.category }}
                </span>
                <span class="text-sm font-medium text-white">
                  {{ center.established }}
                </span>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ center.name }}
            </h3>

            <p class="mb-4 line-clamp-3 text-gray-600">
              {{ center.description }}
            </p>

            <div class="mb-4 flex items-center justify-between">
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span class="flex items-center">
                  <svg
                    class="mr-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  {{ center.researchers }} researchers
                </span>
              </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="(focus, focusIndex) in center.researchFocus.slice(0, 2)"
                :key="focusIndex"
                class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700"
              >
                {{ focus }}
              </span>
              <span
                v-if="center.researchFocus.length > 2"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                +{{ center.researchFocus.length - 2 }}
              </span>
            </div>

            <NuxtLink
              :to="`/research/centers/${center.slug}`"
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

      <!-- Center Facilities -->
      <div class="animate-fade-up rounded-3xl bg-gray-50 p-8 md:p-12">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-3xl font-bold text-gray-900">
            {{ $t("research.centers.facilities.title") }}
          </h3>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            {{ $t("research.centers.facilities.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(facility, index) in centerFacilities"
            :key="index"
            class="group text-center"
          >
            <div
              class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <img
                :src="facility.icon"
                :alt="facility.name"
                class="h-10 w-10"
              />
            </div>

            <h4 class="mb-2 text-lg font-bold text-gray-900">
              {{ facility.name }}
            </h4>
            <p class="text-sm text-gray-600">{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredCenter = {
  name: "Center for Artificial Intelligence and Machine Learning",
  description:
    "A world-class research facility dedicated to advancing the frontiers of artificial intelligence, machine learning, and computational intelligence. Our center brings together leading researchers, cutting-edge technology, and industry partnerships to tackle the most challenging problems in AI.",
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
  researchers: 45,
  funding: "8.5",
  slug: "ai-machine-learning",
};

const researchCenters = [
  {
    name: "Quantum Computing Research Lab",
    description:
      "Pioneering research in quantum algorithms, quantum cryptography, and quantum information processing systems.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&crop=center",
    category: "Quantum Research",
    established: "Est. 2019",
    researchers: 25,
    researchFocus: [
      "Quantum Algorithms",
      "Quantum Cryptography",
      "Quantum Hardware",
    ],
    slug: "quantum-computing",
  },
  {
    name: "Sustainable Energy Research Institute",
    description:
      "Developing innovative solutions for renewable energy, energy storage, and smart grid technologies.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
    category: "Energy Research",
    established: "Est. 2015",
    researchers: 32,
    researchFocus: ["Solar Energy", "Energy Storage", "Smart Grids"],
    slug: "sustainable-energy",
  },
  {
    name: "Biomedical Engineering Center",
    description:
      "Advancing healthcare through biomedical device development, tissue engineering, and medical imaging.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    category: "Biomedical",
    established: "Est. 2017",
    researchers: 28,
    researchFocus: ["Medical Devices", "Tissue Engineering", "Imaging"],
    slug: "biomedical-engineering",
  },
  {
    name: "Cybersecurity Research Lab",
    description:
      "Protecting digital infrastructure through advanced cybersecurity research and threat analysis.",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop&crop=center",
    category: "Security",
    established: "Est. 2018",
    researchers: 20,
    researchFocus: ["Network Security", "Cryptography", "Threat Detection"],
    slug: "cybersecurity",
  },
  {
    name: "Environmental Science Institute",
    description:
      "Addressing climate change and environmental challenges through interdisciplinary research.",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop&crop=center",
    category: "Environmental",
    established: "Est. 2016",
    researchers: 35,
    researchFocus: [
      "Climate Science",
      "Environmental Monitoring",
      "Sustainability",
    ],
    slug: "environmental-science",
  },
  {
    name: "Advanced Materials Lab",
    description:
      "Developing next-generation materials for aerospace, electronics, and construction applications.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop&crop=center",
    category: "Materials",
    established: "Est. 2020",
    researchers: 18,
    researchFocus: ["Nanomaterials", "Smart Materials", "Composites"],
    slug: "advanced-materials",
  },
];

const centerFacilities = [
  {
    name: "High-Performance Computing",
    description:
      "State-of-the-art supercomputing clusters for complex simulations",
    icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop&crop=center",
  },
  {
    name: "Clean Room Facilities",
    description: "ISO-certified clean rooms for nanotechnology research",
    icon: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=80&h=80&fit=crop&crop=center",
  },
  {
    name: "Advanced Instrumentation",
    description: "Cutting-edge scientific instruments and measurement tools",
    icon: "https://images.unsplash.com/photo-1581093458791-9f3c3250e8d8?w=80&h=80&fit=crop&crop=center",
  },
  {
    name: "Collaboration Spaces",
    description:
      "Modern facilities for interdisciplinary research collaboration",
    icon: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=80&h=80&fit=crop&crop=center",
  },
];
</script>
