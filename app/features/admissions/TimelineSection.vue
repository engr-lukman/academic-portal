<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("admissions.timeline.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("admissions.timeline.subtitle") }}
        </p>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute top-8 bottom-8 left-4 w-0.5 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 lg:left-1/2 lg:-translate-x-0.5"
          />

          <div class="space-y-8">
            <div
              v-for="(event, index) in timelineEvents"
              :key="event.key"
              class="relative flex items-start gap-6 lg:gap-12"
              :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
            >
              <!-- Timeline Dot -->
              <div
                class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2"
              >
                <Icon
                  :name="event.icon"
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
                    <div class="mb-2 flex items-center gap-2">
                      <span
                        class="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800"
                      >
                        {{ event.date }}
                      </span>
                      <span
                        class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
                        :class="
                          event.status === 'open'
                            ? 'bg-green-100 text-green-800'
                            : event.status === 'upcoming'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                        "
                      >
                        {{ event.status }}
                      </span>
                    </div>
                    <h3
                      class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-purple-600"
                    >
                      {{ $t(`admissions.timeline.${event.key}.title`) }}
                    </h3>
                    <p class="paragraph-2 text-gray-600">
                      {{ $t(`admissions.timeline.${event.key}.description`) }}
                    </p>
                  </div>
                </AppCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timelineEvents = [
  {
    key: "application_open",
    icon: "ph:calendar-duotone",
    date: "Oct 1, 2024",
    status: "open",
  },
  {
    key: "early_deadline",
    icon: "ph:clock-duotone",
    date: "Dec 15, 2024",
    status: "upcoming",
  },
  {
    key: "regular_deadline",
    icon: "ph:calendar-x-duotone",
    date: "Mar 1, 2025",
    status: "upcoming",
  },
  {
    key: "interview_period",
    icon: "ph:chats-circle-duotone",
    date: "Mar 15 - Apr 15, 2025",
    status: "upcoming",
  },
  {
    key: "decision_release",
    icon: "ph:envelope-duotone",
    date: "May 1, 2025",
    status: "upcoming",
  },
  {
    key: "enrollment_deadline",
    icon: "ph:graduation-cap-duotone",
    date: "Jun 1, 2025",
    status: "upcoming",
  },
];
</script>
