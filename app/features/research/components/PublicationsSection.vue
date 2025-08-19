<template>
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("research.publications.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("research.publications.subtitle") }}
        </p>
      </div>

      <!-- Publication Stats -->
      <div
        class="animate-fade-up-delay-2 mb-16 grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        <div class="text-center">
          <div
            class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600"
          >
            <svg
              class="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <div class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            800+
          </div>
          <div class="text-gray-600">
            {{ $t("research.publications.stats.totalPublications") }}
          </div>
        </div>

        <div class="text-center">
          <div
            class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-600"
          >
            <svg
              class="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            95%
          </div>
          <div class="text-gray-600">
            {{ $t("research.publications.stats.peerReviewed") }}
          </div>
        </div>

        <div class="text-center">
          <div
            class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600"
          >
            <svg
              class="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <div class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            15,000+
          </div>
          <div class="text-gray-600">
            {{ $t("research.publications.stats.citations") }}
          </div>
        </div>

        <div class="text-center">
          <div
            class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600"
          >
            <svg
              class="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
          </div>
          <div class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            45
          </div>
          <div class="text-gray-600">
            {{ $t("research.publications.stats.topJournals") }}
          </div>
        </div>
      </div>

      <!-- Recent Publications -->
      <div class="mb-16">
        <h3 class="animate-fade-up mb-8 text-3xl font-bold text-gray-900">
          {{ $t("research.publications.recent.title") }}
        </h3>

        <div class="space-y-6">
          <div
            v-for="(publication, index) in recentPublications"
            :key="index"
            class="group animate-fade-up transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
              <div class="lg:col-span-3">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">
                    <div
                      class="mt-2 h-3 w-3 rounded-full"
                      :class="
                        publication.type === 'Journal'
                          ? 'bg-blue-500'
                          : publication.type === 'Conference'
                            ? 'bg-green-500'
                            : 'bg-purple-500'
                      "
                    ></div>
                  </div>

                  <div class="flex-grow">
                    <h4
                      class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
                    >
                      {{ publication.title }}
                    </h4>

                    <p class="mb-3 text-gray-600">
                      {{ publication.authors }}
                    </p>

                    <div
                      class="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500"
                    >
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
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          ></path>
                        </svg>
                        {{ publication.journal }}
                      </span>
                      <span>{{ publication.year }}</span>
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
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          ></path>
                        </svg>
                        {{ publication.citations }}
                        {{ $t("research.publications.citations") }}
                      </span>
                    </div>

                    <div class="mb-4 flex flex-wrap gap-2">
                      <span
                        v-for="(tag, tagIndex) in publication.tags"
                        :key="tagIndex"
                        class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                      >
                        {{ tag }}
                      </span>
                    </div>

                    <p class="line-clamp-2 text-gray-600">
                      {{ publication.abstract }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col justify-center lg:col-span-1">
                <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    :href="publication.pdfUrl"
                    target="_blank"
                    class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
                  >
                    <svg
                      class="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    {{ $t("research.publications.downloadPdf") }}
                  </a>

                  <a
                    :href="publication.doiUrl"
                    target="_blank"
                    class="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-50"
                  >
                    <svg
                      class="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    DOI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Publication Categories -->
      <div class="animate-fade-up rounded-3xl bg-white p-8 shadow-lg md:p-12">
        <h3 class="mb-8 text-center text-3xl font-bold text-gray-900">
          {{ $t("research.publications.categories.title") }}
        </h3>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(category, index) in publicationCategories"
            :key="index"
            class="group text-center"
          >
            <div
              class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-110"
            >
              <svg
                class="h-12 w-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="category.icon"
                ></path>
              </svg>
            </div>

            <h4 class="mb-3 text-xl font-bold text-gray-900">
              {{ category.name }}
            </h4>
            <div class="mb-2 text-3xl font-bold text-blue-600">
              {{ category.count }}
            </div>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>

      <!-- View All Publications -->
      <div class="animate-fade-up mt-16 text-center">
        <NuxtLink
          to="/research/publications"
          class="inline-flex transform items-center rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          {{ $t("research.publications.viewAll") }}
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
  </section>
</template>

<script setup>
const recentPublications = [
  {
    title:
      "Advanced Neural Networks for Quantum State Prediction in Complex Systems",
    authors: "Dr. Sarah Chen, Dr. Michael Rodriguez, Dr. Emily Watson",
    journal: "Nature Quantum Information",
    year: "2024",
    type: "Journal",
    citations: 45,
    tags: ["Quantum Computing", "Neural Networks", "Machine Learning"],
    abstract:
      "This study presents a novel approach to quantum state prediction using advanced neural network architectures, demonstrating significant improvements in accuracy and computational efficiency.",
    pdfUrl: "#",
    doiUrl: "#",
  },
  {
    title: "Sustainable Energy Storage Solutions for Smart Grid Integration",
    authors: "Dr. James Liu, Dr. Anna Kowalski, Dr. Robert Kim",
    journal: "IEEE Transactions on Smart Grid",
    year: "2024",
    type: "Journal",
    citations: 32,
    tags: ["Smart Grid", "Energy Storage", "Sustainability"],
    abstract:
      "We propose innovative energy storage technologies that enhance smart grid reliability while reducing environmental impact through advanced materials and control systems.",
    pdfUrl: "#",
    doiUrl: "#",
  },
  {
    title: "Personalized Medicine Through AI-Driven Genomic Analysis",
    authors: "Dr. Emily Watson, Dr. Sarah Chen, Dr. Michael Rodriguez",
    journal: "Science Translational Medicine",
    year: "2024",
    type: "Journal",
    citations: 67,
    tags: ["Personalized Medicine", "Genomics", "Artificial Intelligence"],
    abstract:
      "Our research demonstrates how artificial intelligence can revolutionize personalized medicine by analyzing complex genomic data to predict treatment outcomes.",
    pdfUrl: "#",
    doiUrl: "#",
  },
  {
    title: "Cybersecurity Framework for IoT Device Authentication",
    authors: "Dr. Anna Kowalski, Dr. James Liu",
    journal: "Proceedings of ACM CCS 2024",
    year: "2024",
    type: "Conference",
    citations: 28,
    tags: ["Cybersecurity", "IoT", "Authentication"],
    abstract:
      "This work introduces a comprehensive cybersecurity framework specifically designed for Internet of Things device authentication in distributed environments.",
    pdfUrl: "#",
    doiUrl: "#",
  },
];

const publicationCategories = [
  {
    name: "Journal Articles",
    count: 650,
    description: "Peer-reviewed research in top-tier academic journals",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    name: "Conference Papers",
    count: 120,
    description: "Presentations at international conferences and symposiums",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Book Chapters",
    count: 30,
    description: "Contributions to academic textbooks and edited volumes",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
];
</script>
