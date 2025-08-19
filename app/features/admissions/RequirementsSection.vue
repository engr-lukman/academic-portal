<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("admissions.requirements.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("admissions.requirements.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <!-- Academic Requirements -->
        <AppCard
          variant="elevated"
          hover
          class="group"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <div
                class="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600"
              >
                <Icon
                  name="ph:graduation-cap-duotone"
                  class="h-20 w-20 text-white opacity-80"
                />
              </div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-semibold text-white">
                  {{ $t("admissions.requirements.academic.title") }}
                </h3>
              </div>
            </div>
          </template>

          <div class="p-6">
            <div class="space-y-4">
              <div
                v-for="requirement in academicRequirements"
                :key="requirement"
                class="flex items-start gap-3"
              >
                <Icon
                  name="ph:check-circle-duotone"
                  class="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                />
                <span class="paragraph-2 text-gray-700">{{ requirement }}</span>
              </div>
            </div>
          </div>
        </AppCard>

        <!-- Document Requirements -->
        <AppCard
          variant="elevated"
          hover
          class="group"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <div
                class="flex h-48 items-center justify-center bg-gradient-to-br from-green-500 to-green-600"
              >
                <Icon
                  name="ph:files-duotone"
                  class="h-20 w-20 text-white opacity-80"
                />
              </div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-semibold text-white">
                  {{ $t("admissions.requirements.documents.title") }}
                </h3>
              </div>
            </div>
          </template>

          <div class="p-6">
            <div class="space-y-4">
              <div
                v-for="document in documentRequirements"
                :key="document"
                class="flex items-start gap-3"
              >
                <Icon
                  name="ph:check-circle-duotone"
                  class="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                />
                <span class="paragraph-2 text-gray-700">{{ document }}</span>
              </div>
            </div>
          </div>
        </AppCard>
      </div>

      <!-- Additional Information -->
      <div class="mt-12 rounded-xl bg-purple-50 p-8">
        <div class="text-center">
          <Icon
            name="ph:info-duotone"
            class="mx-auto mb-4 h-12 w-12 text-purple-600"
          />
          <h3 class="title-3 mb-4 text-purple-900">
            {{ $t("admissions.requirements.additional.title") }}
          </h3>
          <p class="paragraph-1 mx-auto max-w-2xl text-purple-700">
            {{ $t("admissions.requirements.additional.description") }}
          </p>
          <div class="mt-6">
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/contact"
              variant="outline"
              size="lg"
              icon="ph:chat-circle-duotone"
            >
              {{ $t("admissions.requirements.additional.contact") }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const academicRequirements = [
  "High school diploma or equivalent qualification",
  "Minimum GPA of 3.0 on a 4.0 scale",
  "English proficiency test scores (TOEFL/IELTS)",
  "Subject-specific prerequisites for chosen program",
  "Standardized test scores (SAT/ACT) if applicable",
];

const documentRequirements = [
  "Completed application form with personal statement",
  "Official high school transcripts and certificates",
  "Two letters of recommendation from teachers",
  "Copy of passport or national identification",
  "Proof of English proficiency (if applicable)",
  "Portfolio or additional materials (program-specific)",
];
</script>
