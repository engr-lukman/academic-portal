<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("faculty.achievements.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("faculty.achievements.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="achievement in achievements"
          :key="achievement.key"
          class="group text-center"
        >
          <AppCard
            variant="elevated"
            hover
            class="transition-all duration-300 group-hover:scale-105"
          >
            <div class="p-8">
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg"
              >
                <Icon
                  :name="achievement.icon"
                  class="h-8 w-8 text-white"
                />
              </div>
              <div
                class="mb-2 text-3xl font-bold text-teal-600 transition-colors duration-300 group-hover:text-teal-700"
              >
                {{ achievement.number }}
              </div>
              <h3 class="title-4 text-gray-800">
                {{ $t(`faculty.achievements.stats.${achievement.key}.title`) }}
              </h3>
              <p class="paragraph-2 mt-2 text-gray-600">
                {{
                  $t(
                    `faculty.achievements.stats.${achievement.key}.description`
                  )
                }}
              </p>
            </div>
          </AppCard>
        </div>
      </div>

      <!-- Recent Awards Section -->
      <div class="mt-20">
        <div class="fade-in mb-12 text-center">
          <h3 class="title-3 mb-4 text-gray-800">
            {{ $t("faculty.achievements.recent_awards.title") }}
          </h3>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <AppCard
            v-for="award in recentAwards"
            :key="award.key"
            variant="elevated"
            hover
            class="group"
          >
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100"
                >
                  <Icon
                    :name="award.icon"
                    class="h-6 w-6 text-teal-600"
                  />
                </div>
                <div class="flex-1">
                  <h4
                    class="title-4 mb-2 text-gray-800 transition-colors duration-300 group-hover:text-teal-600"
                  >
                    {{ $t(`faculty.achievements.awards.${award.key}.title`) }}
                  </h4>
                  <p class="paragraph-2 mb-2 text-gray-600">
                    {{
                      $t(`faculty.achievements.awards.${award.key}.description`)
                    }}
                  </p>
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <Icon
                      name="ph:calendar-duotone"
                      class="h-4 w-4"
                    />
                    <span>{{ award.year }}</span>
                    <span class="mx-2">•</span>
                    <span>{{ award.recipient }}</span>
                  </div>
                </div>
              </div>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievements = [
  {
    key: "publications",
    icon: "ph:books-duotone",
    number: "500+",
  },
  {
    key: "grants",
    icon: "ph:money-duotone",
    number: "$10M+",
  },
  {
    key: "awards",
    icon: "ph:trophy-duotone",
    number: "50+",
  },
  {
    key: "patents",
    icon: "ph:certificate-duotone",
    number: "25+",
  },
];

const recentAwards = [
  {
    key: "excellence_teaching",
    icon: "ph:star-duotone",
    year: "2024",
    recipient: "Dr. Sarah Taylor",
  },
  {
    key: "research_innovation",
    icon: "ph:lightbulb-duotone",
    year: "2024",
    recipient: "Dr. Li Chen",
  },
  {
    key: "outstanding_mentor",
    icon: "ph:users-duotone",
    year: "2023",
    recipient: "Dr. James Anderson",
  },
  {
    key: "industry_collaboration",
    icon: "ph:handshake-duotone",
    year: "2023",
    recipient: "Dr. Robert Davis",
  },
];
</script>
