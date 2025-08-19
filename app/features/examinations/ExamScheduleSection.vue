<template>
  <section
    id="exam-schedule"
    class="bg-gray-50 py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {{ $t("examinations.schedule.title") }}
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600">
          {{ $t("examinations.schedule.subtitle") }}
        </p>
      </div>

      <!-- Calendar Filter -->
      <div class="mb-12 flex flex-wrap justify-center gap-4">
        <button
          v-for="semester in semesters"
          :key="semester.id"
          :class="[
            'rounded-lg px-6 py-3 font-semibold transition-all duration-300',
            selectedSemester === semester.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'border border-gray-200 bg-white text-gray-700 hover:bg-blue-50',
          ]"
          @click="selectedSemester = semester.id"
        >
          {{ semester.name }}
        </button>
      </div>

      <!-- Exam Schedule Grid -->
      <div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- Current Semester Schedule -->
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <h3 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:calendar-clock"
              class="mr-3 h-6 w-6 text-blue-600"
            />
            {{ $t("examinations.schedule.current.title") }}
          </h3>
          <div class="space-y-4">
            <div
              v-for="exam in currentExams"
              :key="exam.id"
              class="border-l-4 border-blue-500 py-4 pl-6"
            >
              <div class="mb-2 flex items-start justify-between">
                <h4 class="font-semibold text-gray-900">{{ exam.subject }}</h4>
                <span
                  class="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
                >
                  {{ exam.type }}
                </span>
              </div>
              <div class="space-y-1 text-gray-600">
                <div class="flex items-center">
                  <Icon
                    name="mdi:calendar"
                    class="mr-2 h-4 w-4"
                  />
                  {{ exam.date }}
                </div>
                <div class="flex items-center">
                  <Icon
                    name="mdi:clock"
                    class="mr-2 h-4 w-4"
                  />
                  {{ exam.time }}
                </div>
                <div class="flex items-center">
                  <Icon
                    name="mdi:map-marker"
                    class="mr-2 h-4 w-4"
                  />
                  {{ exam.location }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Schedule -->
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <h3 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:calendar-arrow-right"
              class="mr-3 h-6 w-6 text-green-600"
            />
            {{ $t("examinations.schedule.upcoming.title") }}
          </h3>
          <div class="space-y-4">
            <div
              v-for="exam in upcomingExams"
              :key="exam.id"
              class="border-l-4 border-green-500 py-4 pl-6"
            >
              <div class="mb-2 flex items-start justify-between">
                <h4 class="font-semibold text-gray-900">{{ exam.subject }}</h4>
                <span
                  class="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600"
                >
                  {{ exam.type }}
                </span>
              </div>
              <div class="space-y-1 text-gray-600">
                <div class="flex items-center">
                  <Icon
                    name="mdi:calendar"
                    class="mr-2 h-4 w-4"
                  />
                  {{ exam.date }}
                </div>
                <div class="flex items-center">
                  <Icon
                    name="mdi:clock"
                    class="mr-2 h-4 w-4"
                  />
                  {{ exam.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Download Section -->
      <div class="rounded-2xl bg-blue-50 p-8">
        <div class="text-center">
          <h3 class="mb-4 text-2xl font-bold text-gray-900">
            {{ $t("examinations.schedule.download.title") }}
          </h3>
          <p class="mb-6 text-gray-600">
            {{ $t("examinations.schedule.download.subtitle") }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button
              class="flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              <Icon
                name="mdi:download"
                class="mr-2 h-5 w-5"
              />
              {{ $t("examinations.schedule.download.pdf") }}
            </button>
            <button
              class="flex items-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700"
            >
              <Icon
                name="mdi:calendar-plus"
                class="mr-2 h-5 w-5"
              />
              {{ $t("examinations.schedule.download.calendar") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedSemester = ref("fall-2024");

const semesters = [
  { id: "fall-2024", name: "Fall 2024" },
  { id: "spring-2024", name: "Spring 2024" },
  { id: "summer-2024", name: "Summer 2024" },
  { id: "fall-2023", name: "Fall 2023" },
];

const currentExams = [
  {
    id: 1,
    subject: "Computer Science 101",
    type: "Midterm",
    date: "December 15, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "Room 301, Building A",
  },
  {
    id: 2,
    subject: "Mathematics 201",
    type: "Final",
    date: "December 18, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Room 205, Building B",
  },
  {
    id: 3,
    subject: "English Literature",
    type: "Final",
    date: "December 20, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Room 401, Building C",
  },
];

const upcomingExams = [
  {
    id: 1,
    subject: "Physics 301",
    type: "Midterm",
    date: "January 10, 2025",
    time: "9:00 AM - 12:00 PM",
  },
  {
    id: 2,
    subject: "Chemistry 201",
    type: "Quiz",
    date: "January 12, 2025",
    time: "11:00 AM - 12:00 PM",
  },
  {
    id: 3,
    subject: "Biology 101",
    type: "Final",
    date: "January 15, 2025",
    time: "2:00 PM - 5:00 PM",
  },
];
</script>
