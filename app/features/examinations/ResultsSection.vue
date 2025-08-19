<template>
  <section
    id="results"
    class="bg-gray-50 py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {{ $t("examinations.results.title") }}
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600">
          {{ $t("examinations.results.subtitle") }}
        </p>
      </div>

      <!-- Results Access -->
      <div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- Student Results Portal -->
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <div class="mb-8 text-center">
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
            >
              <Icon
                name="mdi:account-school"
                class="h-8 w-8 text-blue-600"
              />
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">
              {{ $t("examinations.results.student.title") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("examinations.results.student.subtitle") }}
            </p>
          </div>

          <form
            class="space-y-6"
            @submit.prevent="checkResults"
          >
            <div>
              <label
                for="student-id"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                {{ $t("examinations.results.student.studentId") }}
              </label>
              <input
                id="student-id"
                v-model="studentId"
                type="text"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                :placeholder="
                  $t('examinations.results.student.studentIdPlaceholder')
                "
              />
            </div>
            <div>
              <label
                for="semester"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                {{ $t("examinations.results.student.semester") }}
              </label>
              <select
                id="semester"
                v-model="selectedSemester"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  {{ $t("examinations.results.student.selectSemester") }}
                </option>
                <option
                  v-for="semester in semesters"
                  :key="semester.value"
                  :value="semester.value"
                >
                  {{ semester.label }}
                </option>
              </select>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              {{ $t("examinations.results.student.checkResults") }}
            </button>
          </form>
        </div>

        <!-- General Results Information -->
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <div class="mb-8 text-center">
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
            >
              <Icon
                name="mdi:chart-line"
                class="h-8 w-8 text-green-600"
              />
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">
              {{ $t("examinations.results.general.title") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("examinations.results.general.subtitle") }}
            </p>
          </div>

          <div class="space-y-6">
            <div class="rounded-lg bg-green-50 p-6">
              <h4 class="mb-3 flex items-center font-semibold text-gray-900">
                <Icon
                  name="mdi:calendar-check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                {{ $t("examinations.results.general.latestResults") }}
              </h4>
              <div class="space-y-2 text-sm text-gray-700">
                <div class="flex justify-between">
                  <span>Fall 2024 Finals:</span>
                  <span class="font-medium text-green-600">Published</span>
                </div>
                <div class="flex justify-between">
                  <span>Fall 2024 Midterms:</span>
                  <span class="font-medium text-green-600">Published</span>
                </div>
                <div class="flex justify-between">
                  <span>Spring 2025 Midterms:</span>
                  <span class="font-medium text-orange-600">Pending</span>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-blue-50 p-6">
              <h4 class="mb-3 flex items-center font-semibold text-gray-900">
                <Icon
                  name="mdi:download"
                  class="mr-2 h-5 w-5 text-blue-600"
                />
                {{ $t("examinations.results.general.downloadOptions") }}
              </h4>
              <div class="space-y-3">
                <button
                  class="w-full rounded border bg-white px-4 py-2 text-left transition-colors hover:bg-blue-50"
                >
                  <Icon
                    name="mdi:file-pdf"
                    class="mr-2 inline h-4 w-4 text-red-500"
                  />
                  {{ $t("examinations.results.general.transcriptPdf") }}
                </button>
                <button
                  class="w-full rounded border bg-white px-4 py-2 text-left transition-colors hover:bg-blue-50"
                >
                  <Icon
                    name="mdi:certificate"
                    class="mr-2 inline h-4 w-4 text-blue-500"
                  />
                  {{ $t("examinations.results.general.certificate") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grading System -->
      <div class="mb-16 rounded-2xl bg-white p-8 shadow-lg">
        <h3 class="mb-8 text-center text-2xl font-bold text-gray-900">
          {{ $t("examinations.results.grading.title") }}
        </h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="grade in gradingSystem"
            :key="grade.grade"
            class="rounded-lg border p-6 text-center"
          >
            <div
              class="mb-2 text-3xl font-bold"
              :class="grade.color"
            >
              {{ grade.grade }}
            </div>
            <div class="mb-1 text-sm text-gray-600">{{ grade.range }}</div>
            <div class="text-xs text-gray-500">{{ grade.gpa }} GPA</div>
          </div>
        </div>
      </div>

      <!-- Result Statistics -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="rounded-xl bg-white p-6 text-center shadow-lg">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
          >
            <Icon
              name="mdi:account-group"
              class="h-6 w-6 text-blue-600"
            />
          </div>
          <div class="mb-2 text-3xl font-bold text-blue-600">95.2%</div>
          <div class="text-gray-600">
            {{ $t("examinations.results.stats.passRate") }}
          </div>
        </div>

        <div class="rounded-xl bg-white p-6 text-center shadow-lg">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
          >
            <Icon
              name="mdi:trophy"
              class="h-6 w-6 text-green-600"
            />
          </div>
          <div class="mb-2 text-3xl font-bold text-green-600">3.45</div>
          <div class="text-gray-600">
            {{ $t("examinations.results.stats.averageGpa") }}
          </div>
        </div>

        <div class="rounded-xl bg-white p-6 text-center shadow-lg">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100"
          >
            <Icon
              name="mdi:clock-fast"
              class="h-6 w-6 text-purple-600"
            />
          </div>
          <div class="mb-2 text-3xl font-bold text-purple-600">24h</div>
          <div class="text-gray-600">
            {{ $t("examinations.results.stats.resultTime") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const studentId = ref("");
const selectedSemester = ref("");

const semesters = [
  { value: "fall-2024", label: "Fall 2024" },
  { value: "spring-2024", label: "Spring 2024" },
  { value: "summer-2024", label: "Summer 2024" },
  { value: "fall-2023", label: "Fall 2023" },
];

const gradingSystem = [
  { grade: "A+", range: "90-100%", gpa: "4.00", color: "text-green-600" },
  { grade: "A", range: "85-89%", gpa: "3.75", color: "text-green-600" },
  { grade: "B+", range: "80-84%", gpa: "3.50", color: "text-blue-600" },
  { grade: "B", range: "75-79%", gpa: "3.00", color: "text-blue-600" },
  { grade: "C+", range: "70-74%", gpa: "2.50", color: "text-yellow-600" },
  { grade: "C", range: "65-69%", gpa: "2.00", color: "text-yellow-600" },
  { grade: "D", range: "60-64%", gpa: "1.00", color: "text-orange-600" },
  { grade: "F", range: "0-59%", gpa: "0.00", color: "text-red-600" },
];

const checkResults = () => {
  // Handle result checking logic
  console.log("Checking results for:", studentId.value, selectedSemester.value);
};
</script>
