<template>
  <section
    class="flex min-h-screen items-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("hero.title") }}
            <span class="block text-yellow-400">{{ $t("hero.subtitle") }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("hero.description") }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/admissions"
              variant="accent"
              size="lg"
              icon="uil:user-plus"
            >
              {{ $t("hero.apply_admission") }}
            </AppButton>
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/academics"
              variant="outline"
              size="lg"
              icon="uil:search"
            >
              {{ $t("hero.explore_programs") }}
            </AppButton>
          </div>
        </div>
        <div class="fade-in">
          <NuxtImg
            src="/images/hero-education.jpg"
            alt="Students learning"
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
