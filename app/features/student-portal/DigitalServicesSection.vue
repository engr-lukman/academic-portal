<template>
  <section
    id="digital-services"
    class="bg-white py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {{ $t("studentPortal.services.title") }}
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600">
          {{ $t("studentPortal.services.subtitle") }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in digitalServices"
          :key="service.id"
          class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div class="text-center">
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
              :class="service.iconBg"
            >
              <Icon
                :name="service.icon"
                class="h-8 w-8"
                :class="service.iconColor"
              />
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">
              {{ service.title }}
            </h3>
            <p class="mb-6 text-gray-600">
              {{ service.description }}
            </p>
            <button
              class="mx-auto flex items-center justify-center font-semibold transition-all duration-300"
              :class="service.buttonClass"
            >
              {{ service.cta }}
              <Icon
                name="mdi:arrow-right"
                class="ml-2 h-4 w-4"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div
        class="rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8"
      >
        <h3 class="mb-8 text-center text-2xl font-bold text-gray-900">
          {{ $t("studentPortal.services.quickActions.title") }}
        </h3>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <button
            v-for="action in quickActions"
            :key="action.id"
            class="group rounded-lg bg-white p-4 text-center transition-all duration-300 hover:shadow-md"
          >
            <Icon
              :name="action.icon"
              class="mx-auto mb-2 h-8 w-8 text-purple-600 transition-transform duration-300 group-hover:scale-110"
            />
            <div class="text-sm font-medium text-gray-700">
              {{ action.label }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const digitalServices = [
  {
    id: 1,
    icon: "mdi:school",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Academic Records",
    description: "Access your transcripts, grades, and academic history",
    cta: "View Records",
    buttonClass: "text-blue-600 hover:text-blue-700",
  },
  {
    id: 2,
    icon: "mdi:calendar-account",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Class Schedule",
    description: "View your current semester schedule and room assignments",
    cta: "View Schedule",
    buttonClass: "text-green-600 hover:text-green-700",
  },
  {
    id: 3,
    icon: "mdi:currency-usd",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title: "Fees & Payments",
    description: "Manage tuition payments and view financial statements",
    cta: "Manage Payments",
    buttonClass: "text-yellow-600 hover:text-yellow-700",
  },
  {
    id: 4,
    icon: "mdi:book-open-page-variant",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Course Registration",
    description: "Register for courses and plan your academic path",
    cta: "Register Courses",
    buttonClass: "text-purple-600 hover:text-purple-700",
  },
  {
    id: 5,
    icon: "mdi:library",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Digital Library",
    description: "Access e-books, journals, and research databases",
    cta: "Browse Library",
    buttonClass: "text-indigo-600 hover:text-indigo-700",
  },
  {
    id: 6,
    icon: "mdi:headset",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Student Support",
    description: "24/7 support for technical and academic assistance",
    cta: "Get Support",
    buttonClass: "text-red-600 hover:text-red-700",
  },
];

const quickActions = [
  { id: 1, icon: "mdi:file-download", label: "Download Transcript" },
  { id: 2, icon: "mdi:calendar-plus", label: "Add to Calendar" },
  { id: 3, icon: "mdi:credit-card", label: "Pay Fees" },
  { id: 4, icon: "mdi:email", label: "Contact Faculty" },
  { id: 5, icon: "mdi:book-search", label: "Search Library" },
  { id: 6, icon: "mdi:account-edit", label: "Update Profile" },
];
</script>
