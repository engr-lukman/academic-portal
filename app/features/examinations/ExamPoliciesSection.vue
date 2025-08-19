<template>
  <section
    id="exam-policies"
    class="bg-white py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {{ $t("examinations.policies.title") }}
        </h2>
        <p class="mx-auto max-w-3xl text-xl text-gray-600">
          {{ $t("examinations.policies.subtitle") }}
        </p>
      </div>

      <!-- Policies Grid -->
      <div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- General Policies -->
        <div class="space-y-8">
          <h3 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:clipboard-text"
              class="mr-3 h-6 w-6 text-blue-600"
            />
            {{ $t("examinations.policies.general.title") }}
          </h3>

          <div class="space-y-6">
            <div
              v-for="policy in generalPolicies"
              :key="policy.id"
              class="rounded-lg bg-blue-50 p-6"
            >
              <h4 class="mb-3 flex items-center font-semibold text-gray-900">
                <Icon
                  :name="policy.icon"
                  class="mr-2 h-5 w-5 text-blue-600"
                />
                {{ policy.title }}
              </h4>
              <p class="text-gray-700">{{ policy.description }}</p>
            </div>
          </div>
        </div>

        <!-- Examination Rules -->
        <div class="space-y-8">
          <h3 class="mb-6 flex items-center text-2xl font-bold text-gray-900">
            <Icon
              name="mdi:gavel"
              class="mr-3 h-6 w-6 text-red-600"
            />
            {{ $t("examinations.policies.rules.title") }}
          </h3>

          <div class="space-y-6">
            <div
              v-for="rule in examinationRules"
              :key="rule.id"
              class="rounded-lg bg-red-50 p-6"
            >
              <h4 class="mb-3 flex items-center font-semibold text-gray-900">
                <Icon
                  :name="rule.icon"
                  class="mr-2 h-5 w-5 text-red-600"
                />
                {{ rule.title }}
              </h4>
              <p class="text-gray-700">{{ rule.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Guidelines -->
      <div
        class="mb-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8"
      >
        <h3 class="mb-6 text-center text-2xl font-bold text-gray-900">
          {{ $t("examinations.policies.guidelines.title") }}
        </h3>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="guideline in guidelines"
            :key="guideline.id"
            class="rounded-lg bg-white p-6 shadow-sm"
          >
            <div class="mb-4 text-center">
              <Icon
                :name="guideline.icon"
                class="mx-auto mb-3 h-12 w-12 text-blue-600"
              />
              <h4 class="font-semibold text-gray-900">{{ guideline.title }}</h4>
            </div>
            <p class="text-sm text-gray-600">{{ guideline.description }}</p>
          </div>
        </div>
      </div>

      <!-- Academic Integrity -->
      <div
        class="rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-8 text-white"
      >
        <div class="text-center">
          <Icon
            name="mdi:shield-alert"
            class="mx-auto mb-4 h-16 w-16"
          />
          <h3 class="mb-4 text-2xl font-bold">
            {{ $t("examinations.policies.integrity.title") }}
          </h3>
          <p class="mb-6 text-lg text-red-100">
            {{ $t("examinations.policies.integrity.subtitle") }}
          </p>
          <div class="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            <div
              v-for="principle in integrityPrinciples"
              :key="principle.id"
              class="rounded-lg bg-white/10 p-4"
            >
              <h4 class="mb-2 font-semibold">{{ principle.title }}</h4>
              <p class="text-sm text-red-100">{{ principle.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const generalPolicies = [
  {
    id: 1,
    icon: "mdi:clock-outline",
    title: "Attendance Policy",
    description:
      "Students must arrive at least 15 minutes before the examination begins. Late arrivals may not be permitted to take the exam.",
  },
  {
    id: 2,
    icon: "mdi:card-account-details",
    title: "Identification Requirements",
    description:
      "Valid student ID and admit card are mandatory for entry into the examination hall.",
  },
  {
    id: 3,
    icon: "mdi:pencil",
    title: "Permitted Materials",
    description:
      "Only university-approved writing materials and calculators (where specified) are allowed during examinations.",
  },
  {
    id: 4,
    icon: "mdi:medical-bag",
    title: "Medical Accommodations",
    description:
      "Students with medical conditions must register with the disability services office for appropriate accommodations.",
  },
];

const examinationRules = [
  {
    id: 1,
    icon: "mdi:cellphone-off",
    title: "Electronic Devices",
    description:
      "Mobile phones, smartwatches, and other electronic devices must be switched off and placed in designated areas.",
  },
  {
    id: 2,
    icon: "mdi:account-multiple-remove",
    title: "No Communication",
    description:
      "Any form of communication between students during the examination is strictly prohibited and will result in disqualification.",
  },
  {
    id: 3,
    icon: "mdi:book-remove",
    title: "Unauthorized Materials",
    description:
      "Possession of unauthorized books, notes, or materials will lead to immediate suspension from the examination.",
  },
  {
    id: 4,
    icon: "mdi:exit-to-app",
    title: "Early Departure",
    description:
      "Students may not leave the examination hall during the first 30 minutes or last 15 minutes of the exam.",
  },
];

const guidelines = [
  {
    id: 1,
    icon: "mdi:clock-check",
    title: "Time Management",
    description:
      "Plan your time wisely and allocate appropriate time for each section of the examination.",
  },
  {
    id: 2,
    icon: "mdi:hand-paper",
    title: "Seek Assistance",
    description:
      "Raise your hand if you need clarification or assistance from the invigilator during the exam.",
  },
  {
    id: 3,
    icon: "mdi:file-check",
    title: "Review Answers",
    description:
      "Always review your answers before submitting the examination paper.",
  },
  {
    id: 4,
    icon: "mdi:pencil-box",
    title: "Write Clearly",
    description:
      "Ensure your handwriting is legible and answers are clearly marked for proper evaluation.",
  },
  {
    id: 5,
    icon: "mdi:format-list-numbered",
    title: "Follow Instructions",
    description:
      "Carefully read and follow all instructions provided on the examination paper.",
  },
  {
    id: 6,
    icon: "mdi:account-check",
    title: "Student Information",
    description:
      "Fill in all required student information accurately on the answer sheet.",
  },
];

const integrityPrinciples = [
  {
    id: 1,
    title: "Zero Tolerance",
    description:
      "Any form of academic dishonesty will result in severe disciplinary action including course failure.",
  },
  {
    id: 2,
    title: "Original Work",
    description:
      "All examination answers must be your own original work without any external assistance.",
  },
  {
    id: 3,
    title: "Honesty Policy",
    description:
      "Students are expected to maintain the highest standards of academic honesty and integrity.",
  },
];
</script>
