<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("contact.info.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("contact.info.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <AppCard
          v-for="info in contactInfo"
          :key="info.key"
          variant="elevated"
          hover
          class="group text-center"
        >
          <div class="p-6">
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
            >
              <Icon
                :name="info.icon"
                class="h-8 w-8 text-white"
              />
            </div>
            <h3
              class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ $t(`contact.info.${info.key}.title`) }}
            </h3>
            <p class="paragraph-2 text-gray-600">
              {{ $t(`contact.info.${info.key}.value`) }}
            </p>
            <div class="mt-4">
              <AppButton
                v-if="info.action"
                :variant="'ghost'"
                :size="'sm'"
                :icon="info.actionIcon"
                class="transition-transform duration-300 group-hover:translate-y-1"
              >
                {{ info.action }}
              </AppButton>
            </div>
          </div>
        </AppCard>
      </div>

      <!-- Department Contacts -->
      <div class="mt-16">
        <h3 class="title-3 mb-8 text-center text-gray-800">
          {{ $t("contact.departments.title") }}
        </h3>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AppCard
            v-for="dept in departments"
            :key="dept.key"
            variant="elevated"
            hover
            class="group"
          >
            <div class="p-6">
              <div class="mb-4 flex items-center gap-3">
                <Icon
                  :name="dept.icon"
                  class="h-6 w-6 text-blue-600"
                />
                <h4
                  class="title-4 text-gray-800 transition-colors duration-300 group-hover:text-blue-600"
                >
                  {{ $t(`contact.departments.${dept.key}.title`) }}
                </h4>
              </div>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:envelope-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ dept.email }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:phone-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ dept.phone }}</span>
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
const contactInfo = [
  {
    key: "address",
    icon: "ph:map-pin-duotone",
    action: "Get Directions",
    actionIcon: "ph:navigation-arrow-duotone",
  },
  {
    key: "phone",
    icon: "ph:phone-duotone",
    action: "Call Now",
    actionIcon: "ph:phone-duotone",
  },
  {
    key: "email",
    icon: "ph:envelope-duotone",
    action: "Send Email",
    actionIcon: "ph:paper-plane-duotone",
  },
  {
    key: "hours",
    icon: "ph:clock-duotone",
    action: null,
    actionIcon: null,
  },
];

const departments = [
  {
    key: "admissions",
    icon: "ph:user-plus-duotone",
    email: "admissions@academicportal.edu",
    phone: "+1 (555) 123-4567",
  },
  {
    key: "academic_affairs",
    icon: "ph:graduation-cap-duotone",
    email: "academics@academicportal.edu",
    phone: "+1 (555) 123-4568",
  },
  {
    key: "student_services",
    icon: "ph:users-duotone",
    email: "students@academicportal.edu",
    phone: "+1 (555) 123-4569",
  },
  {
    key: "financial_aid",
    icon: "ph:money-duotone",
    email: "finaid@academicportal.edu",
    phone: "+1 (555) 123-4570",
  },
  {
    key: "research",
    icon: "ph:flask-duotone",
    email: "research@academicportal.edu",
    phone: "+1 (555) 123-4571",
  },
  {
    key: "international",
    icon: "ph:globe-duotone",
    email: "international@academicportal.edu",
    phone: "+1 (555) 123-4572",
  },
];
</script>
