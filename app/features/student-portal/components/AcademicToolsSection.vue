<template>
  <section
    id="academic-tools"
    class="bg-gray-50 py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {{ $t("studentPortal.tools.title") }}
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600">
          {{ $t("studentPortal.tools.subtitle") }}
        </p>
      </div>

      <!-- Tools Categories -->
      <div class="space-y-16">
        <!-- Learning Management -->
        <div>
          <h3 class="mb-8 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:school"
              class="mr-3 h-6 w-6 text-blue-600"
            />
            {{ $t("studentPortal.tools.learning.title") }}
          </h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="tool in learningTools"
              :key="tool.id"
              class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div class="flex items-start space-x-4">
                <div
                  class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                  :class="tool.iconBg"
                >
                  <Icon
                    :name="tool.icon"
                    class="h-6 w-6"
                    :class="tool.iconColor"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="mb-2 font-semibold text-gray-900">
                    {{ tool.title }}
                  </h4>
                  <p class="mb-3 text-sm text-gray-600">
                    {{ tool.description }}
                  </p>
                  <button
                    class="text-sm font-medium transition-colors duration-300"
                    :class="tool.buttonClass"
                  >
                    {{ tool.cta }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Productivity Tools -->
        <div>
          <h3 class="mb-8 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:tools"
              class="mr-3 h-6 w-6 text-green-600"
            />
            {{ $t("studentPortal.tools.productivity.title") }}
          </h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="tool in productivityTools"
              :key="tool.id"
              class="rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div
                class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                :class="tool.iconBg"
              >
                <Icon
                  :name="tool.icon"
                  class="h-6 w-6"
                  :class="tool.iconColor"
                />
              </div>
              <h4 class="mb-2 font-semibold text-gray-900">{{ tool.title }}</h4>
              <p class="mb-4 text-sm text-gray-600">{{ tool.description }}</p>
              <button
                class="text-sm font-medium transition-colors duration-300"
                :class="tool.buttonClass"
              >
                {{ tool.cta }}
              </button>
            </div>
          </div>
        </div>

        <!-- Communication Tools -->
        <div>
          <h3 class="mb-8 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:forum"
              class="mr-3 h-6 w-6 text-purple-600"
            />
            {{ $t("studentPortal.tools.communication.title") }}
          </h3>
          <div class="rounded-2xl bg-white p-8 shadow-lg">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="tool in communicationTools"
                :key="tool.id"
                class="text-center"
              >
                <div
                  class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  :class="tool.iconBg"
                >
                  <Icon
                    :name="tool.icon"
                    class="h-8 w-8"
                    :class="tool.iconColor"
                  />
                </div>
                <h4 class="mb-2 font-semibold text-gray-900">
                  {{ tool.title }}
                </h4>
                <p class="mb-4 text-sm text-gray-600">{{ tool.description }}</p>
                <div class="space-y-2">
                  <div
                    v-for="feature in tool.features"
                    :key="feature"
                    class="mr-2 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-500"
                  >
                    {{ feature }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const learningTools = [
  {
    id: 1,
    icon: "mdi:video",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Video Lectures",
    description: "Access recorded lectures and live streaming classes",
    cta: "Watch Now",
    buttonClass: "text-red-600 hover:text-red-700",
  },
  {
    id: 2,
    icon: "mdi:file-document",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Course Materials",
    description: "Download lecture notes, assignments, and resources",
    cta: "Browse Files",
    buttonClass: "text-blue-600 hover:text-blue-700",
  },
  {
    id: 3,
    icon: "mdi:quiz",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Online Quizzes",
    description: "Take practice tests and submit assignments online",
    cta: "Start Quiz",
    buttonClass: "text-green-600 hover:text-green-700",
  },
  {
    id: 4,
    icon: "mdi:chart-line",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Grade Tracker",
    description: "Monitor your academic progress and performance",
    cta: "View Grades",
    buttonClass: "text-purple-600 hover:text-purple-700",
  },
  {
    id: 5,
    icon: "mdi:calendar-today",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Assignment Calendar",
    description: "Track deadlines and manage your schedule",
    cta: "View Calendar",
    buttonClass: "text-orange-600 hover:text-orange-700",
  },
  {
    id: 6,
    icon: "mdi:account-group",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    title: "Study Groups",
    description: "Join collaborative learning sessions with peers",
    cta: "Join Group",
    buttonClass: "text-teal-600 hover:text-teal-700",
  },
];

const productivityTools = [
  {
    id: 1,
    icon: "mdi:note-edit",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Note Taking",
    description: "Digital notebook for lectures",
    cta: "Open Notes",
    buttonClass: "text-blue-600 hover:text-blue-700",
  },
  {
    id: 2,
    icon: "mdi:timer",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Study Timer",
    description: "Pomodoro and time tracking",
    cta: "Start Timer",
    buttonClass: "text-green-600 hover:text-green-700",
  },
  {
    id: 3,
    icon: "mdi:bookmark",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title: "Bookmarks",
    description: "Save important resources",
    cta: "View Saved",
    buttonClass: "text-yellow-600 hover:text-yellow-700",
  },
  {
    id: 4,
    icon: "mdi:calculator",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "GPA Calculator",
    description: "Calculate your GPA",
    cta: "Calculate",
    buttonClass: "text-purple-600 hover:text-purple-700",
  },
];

const communicationTools = [
  {
    id: 1,
    icon: "mdi:message",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Messaging",
    description: "Direct communication with faculty and peers",
    features: ["Instant Messages", "Group Chats", "File Sharing"],
  },
  {
    id: 2,
    icon: "mdi:forum",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Discussion Forums",
    description: "Course-specific discussion boards and Q&A",
    features: ["Course Forums", "Q&A Sessions", "Peer Help"],
  },
  {
    id: 3,
    icon: "mdi:video-account",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Virtual Meetings",
    description: "Online meetings and office hours",
    features: ["Video Calls", "Screen Share", "Recording"],
  },
];
</script>
