<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("departments.faculty.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("departments.faculty.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <AppCard
          v-for="faculty in facultyMembers"
          :key="faculty.key"
          variant="elevated"
          hover
          class="group text-center"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="faculty.image"
                :alt="faculty.name"
                class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </template>

          <div class="p-6">
            <h3
              class="title-4 mb-2 text-gray-800 transition-colors duration-300 group-hover:text-indigo-600"
            >
              {{ faculty.name }}
            </h3>
            <p class="mb-2 text-sm font-medium text-indigo-600">
              {{ $t(`departments.faculty.members.${faculty.key}.position`) }}
            </p>
            <p class="mb-3 text-xs text-gray-500">
              {{ faculty.department }}
            </p>
            <div class="space-y-1 text-xs text-gray-600">
              <div class="flex items-center justify-center gap-1">
                <Icon
                  name="ph:graduation-cap-duotone"
                  class="h-3 w-3"
                />
                <span>{{ faculty.education }}</span>
              </div>
              <div class="flex items-center justify-center gap-1">
                <Icon
                  name="ph:clock-duotone"
                  class="h-3 w-3"
                />
                <span>{{ faculty.experience }} years</span>
              </div>
            </div>
          </div>
        </AppCard>
      </div>

      <div class="fade-in mt-12 text-center">
        <AppButton
          :tag="'NuxtLinkLocale'"
          to="/faculty"
          variant="primary"
          size="lg"
          icon="ph:users-three-duotone"
        >
          {{ $t("departments.faculty.view_all") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const facultyMembers = [
  {
    key: "prof_smith",
    name: "Dr. John Smith",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Engineering",
    education: "PhD MIT",
    experience: "15",
  },
  {
    key: "prof_johnson",
    name: "Dr. Emily Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c27e1acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Business",
    education: "PhD Harvard",
    experience: "12",
  },
  {
    key: "prof_williams",
    name: "Dr. Michael Williams",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Sciences",
    education: "PhD Stanford",
    experience: "18",
  },
  {
    key: "prof_brown",
    name: "Dr. Sarah Brown",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Liberal Arts",
    education: "PhD Yale",
    experience: "10",
  },
];
</script>
