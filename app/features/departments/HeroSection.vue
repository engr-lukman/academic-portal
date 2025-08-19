<template>
  <section
    class="flex min-h-[60vh] items-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("departments.title") }}
            <span class="block text-yellow-400">{{
              $t("departments.subtitle")
            }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("departments.description") }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/academics"
              variant="accent"
              size="lg"
              icon="ph:graduation-cap-duotone"
            >
              {{ $t("nav.academics") }}
            </AppButton>
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/faculty"
              variant="outline"
              size="lg"
              icon="ph:users-three-duotone"
            >
              {{ $t("nav.faculty") }}
            </AppButton>
          </div>
        </div>
        <div class="fade-in">
          <NuxtImg
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Academic Departments"
            class="h-auto w-full rounded-lg shadow-2xl"
            placeholder
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
