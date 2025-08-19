<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("about.achievements.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("about.achievements.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.key"
          class="group text-center"
        >
          <AppCard
            variant="elevated"
            hover
            class="transition-all duration-300 group-hover:scale-105"
          >
            <div class="p-8">
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg"
              >
                <Icon
                  :name="stat.icon"
                  class="h-8 w-8 text-white"
                />
              </div>
              <div
                class="mb-2 text-3xl font-bold text-emerald-600 transition-colors duration-300 group-hover:text-emerald-700"
              >
                {{ stat.number }}
              </div>
              <h3 class="title-4 text-gray-800">
                {{ $t(`about.stats.${stat.key}.title`) }}
              </h3>
              <p class="paragraph-2 mt-2 text-gray-600">
                {{ $t(`about.stats.${stat.key}.description`) }}
              </p>
            </div>
          </AppCard>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="mt-20">
        <div class="fade-in mb-12 text-center">
          <h3 class="title-3 mb-4 text-gray-800">
            {{ $t("about.history.title") }}
          </h3>
          <p class="paragraph-1 mx-auto max-w-2xl text-gray-600">
            {{ $t("about.history.subtitle") }}
          </p>
        </div>

        <div class="mx-auto max-w-4xl">
          <div class="relative">
            <!-- Timeline Line -->
            <div
              class="absolute top-8 bottom-8 left-4 w-0.5 bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-300 lg:left-1/2 lg:-translate-x-0.5"
            />

            <div class="space-y-12">
              <div
                v-for="(milestone, index) in milestones"
                :key="milestone.key"
                class="relative flex items-start gap-6 lg:gap-12"
                :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
              >
                <!-- Timeline Dot -->
                <div
                  class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                >
                  <Icon
                    :name="milestone.icon"
                    class="h-4 w-4 text-white"
                  />
                </div>

                <!-- Content -->
                <div
                  class="flex-1 lg:w-1/2"
                  :class="index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'"
                >
                  <AppCard
                    variant="elevated"
                    hover
                    class="group transition-all duration-300 hover:scale-105"
                  >
                    <div class="p-6">
                      <div class="mb-2 text-lg font-bold text-emerald-600">
                        {{ milestone.year }}
                      </div>
                      <h4
                        class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-emerald-600"
                      >
                        {{ $t(`about.milestones.${milestone.key}.title`) }}
                      </h4>
                      <p class="paragraph-2 text-gray-600">
                        {{
                          $t(`about.milestones.${milestone.key}.description`)
                        }}
                      </p>
                    </div>
                  </AppCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    key: "students",
    icon: "ph:users-duotone",
    number: "5,000+",
  },
  {
    key: "faculty",
    icon: "ph:graduation-cap-duotone",
    number: "300+",
  },
  {
    key: "programs",
    icon: "ph:books-duotone",
    number: "50+",
  },
  {
    key: "years",
    icon: "ph:trophy-duotone",
    number: "25+",
  },
];

const milestones = [
  {
    key: "founded",
    icon: "ph:building-duotone",
    year: "1999",
  },
  {
    key: "accreditation",
    icon: "ph:certificate-duotone",
    year: "2005",
  },
  {
    key: "expansion",
    icon: "ph:plant-duotone",
    year: "2010",
  },
  {
    key: "recognition",
    icon: "ph:medal-duotone",
    year: "2015",
  },
  {
    key: "digital",
    icon: "ph:monitor-duotone",
    year: "2020",
  },
];
</script>
