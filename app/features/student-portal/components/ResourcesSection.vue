<template>
  <section
    id="resources"
    class="bg-white py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {{ $t("studentPortal.resources.title") }}
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600">
          {{ $t("studentPortal.resources.subtitle") }}
        </p>
      </div>

      <!-- Resources Grid -->
      <div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- Academic Resources -->
        <div class="space-y-8">
          <h3 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:book-open"
              class="mr-3 h-6 w-6 text-blue-600"
            />
            {{ $t("studentPortal.resources.academic.title") }}
          </h3>

          <div class="space-y-4">
            <div
              v-for="resource in academicResources"
              :key="resource.id"
              class="rounded-lg bg-blue-50 p-6 transition-colors duration-300 hover:bg-blue-100"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100"
                >
                  <Icon
                    :name="resource.icon"
                    class="h-5 w-5 text-blue-600"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="mb-2 font-semibold text-gray-900">
                    {{ resource.title }}
                  </h4>
                  <p class="mb-3 text-sm text-gray-700">
                    {{ resource.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <span
                      class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600"
                    >
                      {{ resource.category }}
                    </span>
                    <button
                      class="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      {{ resource.cta }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Student Services -->
        <div class="space-y-8">
          <h3 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:help-circle"
              class="mr-3 h-6 w-6 text-green-600"
            />
            {{ $t("studentPortal.resources.services.title") }}
          </h3>

          <div class="space-y-4">
            <div
              v-for="service in studentServices"
              :key="service.id"
              class="rounded-lg bg-green-50 p-6 transition-colors duration-300 hover:bg-green-100"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100"
                >
                  <Icon
                    :name="service.icon"
                    class="h-5 w-5 text-green-600"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="mb-2 font-semibold text-gray-900">
                    {{ service.title }}
                  </h4>
                  <p class="mb-3 text-sm text-gray-700">
                    {{ service.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <span
                      class="rounded bg-green-100 px-2 py-1 text-xs text-green-600"
                    >
                      {{ service.availability }}
                    </span>
                    <button
                      class="text-sm font-medium text-green-600 hover:text-green-700"
                    >
                      {{ service.cta }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <h3 class="mb-8 text-center text-2xl font-bold text-gray-900">
          {{ $t("studentPortal.resources.quickLinks.title") }}
        </h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          <a
            v-for="link in quickLinks"
            :key="link.id"
            :href="link.url"
            class="group rounded-lg bg-white p-4 text-center transition-all duration-300 hover:shadow-md"
          >
            <Icon
              :name="link.icon"
              class="mx-auto mb-3 h-8 w-8 transition-transform duration-300 group-hover:scale-110"
              :class="link.iconColor"
            />
            <div class="text-sm font-medium text-gray-700">
              {{ link.label }}
            </div>
          </a>
        </div>
      </div>

      <!-- Help Center -->
      <div class="mt-16 rounded-2xl bg-purple-50 p-8">
        <div class="text-center">
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100"
          >
            <Icon
              name="mdi:help-circle"
              class="h-8 w-8 text-purple-600"
            />
          </div>
          <h3 class="mb-4 text-2xl font-bold text-gray-900">
            {{ $t("studentPortal.resources.help.title") }}
          </h3>
          <p class="mx-auto mb-6 max-w-2xl text-gray-600">
            {{ $t("studentPortal.resources.help.subtitle") }}
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              class="flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700"
            >
              <Icon
                name="mdi:chat"
                class="mr-2 h-5 w-5"
              />
              {{ $t("studentPortal.resources.help.chat") }}
            </button>
            <button
              class="flex items-center justify-center rounded-lg border border-purple-200 bg-white px-6 py-3 font-semibold text-purple-600 transition-all duration-300 hover:bg-gray-50"
            >
              <Icon
                name="mdi:book-open"
                class="mr-2 h-5 w-5"
              />
              {{ $t("studentPortal.resources.help.guide") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const academicResources = [
  {
    id: 1,
    icon: "mdi:library",
    title: "Digital Library",
    description: "Access thousands of e-books, journals, and research papers",
    category: "Library",
    cta: "Browse Collection",
  },
  {
    id: 2,
    icon: "mdi:file-document",
    title: "Course Catalog",
    description: "Comprehensive catalog of all available courses and programs",
    category: "Academic",
    cta: "View Catalog",
  },
  {
    id: 3,
    icon: "mdi:school",
    title: "Academic Calendar",
    description: "Important dates, deadlines, and university events",
    category: "Planning",
    cta: "View Calendar",
  },
  {
    id: 4,
    icon: "mdi:certificate",
    title: "Degree Audit",
    description: "Track your progress towards degree completion",
    category: "Progress",
    cta: "Check Progress",
  },
  {
    id: 5,
    icon: "mdi:chart-line",
    title: "Learning Analytics",
    description: "Insights into your learning patterns and performance",
    category: "Analytics",
    cta: "View Insights",
  },
];

const studentServices = [
  {
    id: 1,
    icon: "mdi:account-question",
    title: "Academic Advising",
    description: "Get guidance on course selection and career planning",
    availability: "24/7 Online",
    cta: "Book Session",
  },
  {
    id: 2,
    icon: "mdi:medical-bag",
    title: "Health Services",
    description: "Access to campus health center and wellness resources",
    availability: "Mon-Fri 9-5",
    cta: "Schedule Visit",
  },
  {
    id: 3,
    icon: "mdi:briefcase",
    title: "Career Services",
    description: "Job placement assistance and career development",
    availability: "By Appointment",
    cta: "Get Started",
  },
  {
    id: 4,
    icon: "mdi:currency-usd",
    title: "Financial Aid",
    description: "Information about scholarships and financial assistance",
    availability: "Mon-Fri 10-4",
    cta: "Learn More",
  },
  {
    id: 5,
    icon: "mdi:wheelchair-accessibility",
    title: "Disability Services",
    description: "Support and accommodations for students with disabilities",
    availability: "24/7 Support",
    cta: "Contact Us",
  },
];

const quickLinks = [
  {
    id: 1,
    icon: "mdi:map",
    label: "Campus Map",
    url: "#",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: "mdi:bus",
    label: "Transportation",
    url: "#",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    icon: "mdi:food",
    label: "Dining",
    url: "#",
    iconColor: "text-orange-600",
  },
  {
    id: 4,
    icon: "mdi:home",
    label: "Housing",
    url: "#",
    iconColor: "text-purple-600",
  },
  {
    id: 5,
    icon: "mdi:shield-check",
    label: "Security",
    url: "#",
    iconColor: "text-red-600",
  },
  {
    id: 6,
    icon: "mdi:wifi",
    label: "IT Support",
    url: "#",
    iconColor: "text-indigo-600",
  },
];
</script>
