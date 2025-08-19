<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("research.areas.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("research.areas.subtitle") }}
        </p>
      </div>

      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(area, index) in researchAreas"
          :key="index"
          class="group animate-fade-up transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div
            class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-110"
          >
            <img
              :src="area.icon"
              :alt="area.title"
              class="h-8 w-8 text-white"
            />
          </div>

          <h3
            class="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
          >
            {{ area.title }}
          </h3>

          <p class="mb-6 leading-relaxed text-gray-600">
            {{ area.description }}
          </p>

          <div class="mb-6 flex flex-wrap gap-2">
            <span
              v-for="(tag, tagIndex) in area.tags"
              :key="tagIndex"
              class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500">
              {{ area.projects }} {{ $t("research.areas.activeProjects") }}
            </div>
            <NuxtLink
              :to="`/research/areas/${area.slug}`"
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

      <!-- Research Highlights -->
      <div
        class="animate-fade-up rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-white md:p-12"
      >
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 class="mb-6 text-3xl font-bold md:text-4xl">
              {{ $t("research.areas.highlights.title") }}
            </h3>
            <p class="mb-8 text-xl leading-relaxed text-blue-100">
              {{ $t("research.areas.highlights.description") }}
            </p>
            <NuxtLink
              to="/research/projects"
              class="inline-flex transform items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              {{ $t("research.areas.highlights.viewProjects") }}
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
            <div class="text-center">
              <div class="mb-2 text-4xl font-bold md:text-5xl">85%</div>
              <div class="text-blue-200">
                {{ $t("research.areas.highlights.stats.fundingSuccess") }}
              </div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-4xl font-bold md:text-5xl">120+</div>
              <div class="text-blue-200">
                {{ $t("research.areas.highlights.stats.collaborations") }}
              </div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-4xl font-bold md:text-5xl">45</div>
              <div class="text-blue-200">
                {{ $t("research.areas.highlights.stats.patents") }}
              </div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-4xl font-bold md:text-5xl">300+</div>
              <div class="text-blue-200">
                {{ $t("research.areas.highlights.stats.researchers") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Exploring cutting-edge AI technologies, deep learning algorithms, and intelligent systems that shape the future of technology.",
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center",
    tags: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    projects: 25,
    slug: "artificial-intelligence",
  },
  {
    title: "Sustainable Engineering",
    description:
      "Developing innovative solutions for environmental challenges through sustainable engineering practices and green technologies.",
    icon: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=100&h=100&fit=crop&crop=center",
    tags: ["Green Energy", "Sustainability", "Environmental Tech"],
    projects: 18,
    slug: "sustainable-engineering",
  },
  {
    title: "Biotechnology & Health Sciences",
    description:
      "Advancing medical research through biotechnology innovations, drug discovery, and personalized medicine approaches.",
    icon: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
    tags: ["Biotechnology", "Medical Research", "Drug Discovery"],
    projects: 22,
    slug: "biotechnology",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Extracting insights from big data using advanced statistical methods, predictive modeling, and data visualization.",
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
    tags: ["Big Data", "Analytics", "Statistical Modeling"],
    projects: 20,
    slug: "data-science",
  },
  {
    title: "Cybersecurity & Privacy",
    description:
      "Protecting digital assets through advanced security protocols, encryption technologies, and privacy-preserving systems.",
    icon: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=100&h=100&fit=crop&crop=center",
    tags: ["Cybersecurity", "Encryption", "Privacy", "Network Security"],
    projects: 15,
    slug: "cybersecurity",
  },
  {
    title: "Quantum Computing",
    description:
      "Pioneering research in quantum algorithms, quantum cryptography, and quantum information processing systems.",
    icon: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop&crop=center",
    tags: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Physics"],
    projects: 12,
    slug: "quantum-computing",
  },
];
</script>
