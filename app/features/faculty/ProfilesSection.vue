<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("faculty.profiles.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("faculty.profiles.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="faculty in facultyMembers"
          :key="faculty.key"
          variant="elevated"
          hover
          class="group"
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
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div class="flex gap-2">
                  <Icon
                    name="ph:envelope-duotone"
                    class="h-5 w-5 cursor-pointer hover:text-teal-300"
                  />
                  <Icon
                    name="ph:linkedin-logo-duotone"
                    class="h-5 w-5 cursor-pointer hover:text-teal-300"
                  />
                  <Icon
                    name="ph:globe-duotone"
                    class="h-5 w-5 cursor-pointer hover:text-teal-300"
                  />
                </div>
              </div>
            </div>
          </template>

          <div class="p-6">
            <h3
              class="title-4 mb-2 text-gray-800 transition-colors duration-300 group-hover:text-teal-600"
            >
              {{ faculty.name }}
            </h3>
            <p class="mb-2 text-sm font-medium text-teal-600">
              {{ $t(`faculty.profiles.members.${faculty.key}.position`) }}
            </p>
            <p class="mb-3 text-sm text-gray-500">
              {{ faculty.department }}
            </p>
            <p class="paragraph-2 mb-4 line-clamp-3 text-gray-600">
              {{ $t(`faculty.profiles.members.${faculty.key}.bio`) }}
            </p>

            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon
                  name="ph:graduation-cap-duotone"
                  class="h-4 w-4"
                />
                <span>{{ faculty.education }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon
                  name="ph:books-duotone"
                  class="h-4 w-4"
                />
                <span>{{ faculty.publications }} Publications</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon
                  name="ph:clock-duotone"
                  class="h-4 w-4"
                />
                <span>{{ faculty.experience }} years experience</span>
              </div>
            </div>

            <div class="mt-4 flex flex-wrap gap-1">
              <span
                v-for="expertise in faculty.expertise"
                :key="expertise"
                class="inline-flex items-center rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800"
              >
                {{ expertise }}
              </span>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const facultyMembers = [
  {
    key: "prof_anderson",
    name: "Dr. James Anderson",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Computer Science",
    education: "PhD MIT",
    publications: "45",
    experience: "15",
    expertise: ["AI", "Machine Learning", "Data Science"],
  },
  {
    key: "prof_martinez",
    name: "Dr. Maria Martinez",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c27e1acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Business Administration",
    education: "PhD Harvard",
    publications: "32",
    experience: "12",
    expertise: ["Marketing", "Strategy", "Innovation"],
  },
  {
    key: "prof_chen",
    name: "Dr. Li Chen",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Physics",
    education: "PhD Stanford",
    publications: "67",
    experience: "18",
    expertise: ["Quantum Physics", "Nanotechnology", "Materials"],
  },
  {
    key: "prof_taylor",
    name: "Dr. Sarah Taylor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Psychology",
    education: "PhD Yale",
    publications: "38",
    experience: "10",
    expertise: ["Cognitive Psychology", "Neuroscience", "Behavior"],
  },
  {
    key: "prof_davis",
    name: "Dr. Robert Davis",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Engineering",
    education: "PhD Caltech",
    publications: "52",
    experience: "14",
    expertise: ["Robotics", "Automation", "Control Systems"],
  },
  {
    key: "prof_wilson",
    name: "Dr. Jennifer Wilson",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    department: "Biology",
    education: "PhD Oxford",
    publications: "41",
    experience: "11",
    expertise: ["Genetics", "Biotechnology", "Molecular Biology"],
  },
];
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
