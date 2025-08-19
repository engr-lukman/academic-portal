<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2
          class="animate-fade-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          {{ $t("research.projects.title") }}
        </h2>
        <p
          class="animate-fade-up-delay-1 mx-auto max-w-3xl text-xl text-gray-600"
        >
          {{ $t("research.projects.subtitle") }}
        </p>
      </div>

      <!-- Featured Project -->
      <div class="animate-fade-up-delay-2 mb-16">
        <div
          class="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl"
        >
          <div class="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div class="p-8 md:p-12 lg:p-16">
              <div
                class="mb-6 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-sm text-white"
              >
                {{ $t("research.projects.featured.badge") }}
              </div>

              <h3 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                {{ featuredProject.title }}
              </h3>

              <p class="mb-8 text-lg leading-relaxed text-gray-600">
                {{ featuredProject.description }}
              </p>

              <div class="mb-8 flex flex-wrap gap-3">
                <span
                  v-for="(tech, index) in featuredProject.technologies"
                  :key="index"
                  class="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="mb-8 flex items-center gap-6">
                <div>
                  <div class="text-2xl font-bold text-blue-600">
                    ${{ featuredProject.funding }}M
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ $t("research.projects.funding") }}
                  </div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-green-600">
                    {{ featuredProject.duration }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ $t("research.projects.duration") }}
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row">
                <NuxtLink
                  :to="`/research/projects/${featuredProject.slug}`"
                  class="inline-flex transform items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  {{ $t("research.projects.viewDetails") }}
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
                  {{ $t("research.projects.downloadReport") }}
                </button>
              </div>
            </div>

            <div class="relative h-64 lg:h-auto">
              <img
                :src="featuredProject.image"
                :alt="featuredProject.title"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group animate-fade-up transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold text-white"
                :class="
                  project.status === 'Active'
                    ? 'bg-green-500'
                    : project.status === 'Completed'
                      ? 'bg-blue-500'
                      : 'bg-yellow-500'
                "
              >
                {{ project.status }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ project.title }}
            </h3>

            <p class="mb-4 line-clamp-3 text-gray-600">
              {{ project.description }}
            </p>

            <div class="mb-4 flex items-center justify-between">
              <div class="text-sm text-gray-500">
                {{ $t("research.projects.pi") }}:
                {{ project.principalInvestigator }}
              </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="(tag, tagIndex) in project.tags.slice(0, 3)"
                :key="tagIndex"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                {{ tag }}
              </span>
              <span
                v-if="project.tags.length > 3"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                +{{ project.tags.length - 3 }}
              </span>
            </div>

            <NuxtLink
              :to="`/research/projects/${project.slug}`"
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

      <!-- View All Projects -->
      <div class="animate-fade-up mt-16 text-center">
        <NuxtLink
          to="/research/projects"
          class="inline-flex transform items-center rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          {{ $t("research.projects.viewAllProjects") }}
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
const featuredProject = {
  title: "Smart City Infrastructure with AI Integration",
  description:
    "A comprehensive research initiative developing intelligent urban infrastructure systems that leverage artificial intelligence to optimize traffic flow, energy consumption, and public safety across metropolitan areas.",
  image:
    "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop&crop=center",
  technologies: ["AI/ML", "IoT", "Cloud Computing", "Edge Computing"],
  funding: "5.2",
  duration: "4 Years",
  slug: "smart-city-ai-integration",
};

const projects = [
  {
    title: "Quantum Cryptography Protocols",
    description:
      "Developing next-generation quantum encryption methods for ultra-secure communication systems in financial and healthcare sectors.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&crop=center",
    status: "Active",
    principalInvestigator: "Dr. Sarah Chen",
    tags: ["Quantum Computing", "Cryptography", "Security"],
    slug: "quantum-cryptography",
  },
  {
    title: "Sustainable Energy Storage Systems",
    description:
      "Innovative battery technologies using advanced materials for efficient renewable energy storage and grid stabilization.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
    status: "Active",
    principalInvestigator: "Dr. Michael Rodriguez",
    tags: ["Energy Storage", "Materials Science", "Sustainability"],
    slug: "energy-storage-systems",
  },
  {
    title: "Personalized Medicine Platform",
    description:
      "AI-driven platform for personalized treatment recommendations based on genetic profiling and patient data analysis.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    status: "Completed",
    principalInvestigator: "Dr. Emily Watson",
    tags: ["AI/ML", "Healthcare", "Genomics"],
    slug: "personalized-medicine",
  },
  {
    title: "Ocean Plastic Recycling Innovation",
    description:
      "Novel enzymatic processes for breaking down ocean plastic waste into valuable chemical compounds and materials.",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop&crop=center",
    status: "Active",
    principalInvestigator: "Dr. James Liu",
    tags: ["Environmental Science", "Biotechnology", "Sustainability"],
    slug: "ocean-plastic-recycling",
  },
  {
    title: "Autonomous Vehicle Safety Systems",
    description:
      "Advanced sensor fusion and machine learning algorithms for improved safety in autonomous vehicle navigation.",
    image:
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=400&h=300&fit=crop&crop=center",
    status: "Planning",
    principalInvestigator: "Dr. Anna Kowalski",
    tags: ["Autonomous Systems", "Computer Vision", "Safety"],
    slug: "autonomous-vehicle-safety",
  },
  {
    title: "Digital Twin Manufacturing",
    description:
      "Creating digital replicas of manufacturing processes for predictive maintenance and optimization.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop&crop=center",
    status: "Active",
    principalInvestigator: "Dr. Robert Kim",
    tags: ["Digital Twin", "Manufacturing", "Industry 4.0"],
    slug: "digital-twin-manufacturing",
  },
];
</script>
