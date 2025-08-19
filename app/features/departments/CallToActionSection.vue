<template>
  <section class="section-padding bg-indigo-600 text-white">
    <div class="container mx-auto text-center">
      <div class="fade-in">
        <h2 class="title-2 mb-6">
          {{ $t("departments.cta.title") }}
        </h2>
        <p class="paragraph-1 mx-auto mb-8 max-w-2xl opacity-90">
          {{ $t("departments.cta.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/academics"
            variant="secondary"
            size="lg"
            icon="ph:graduation-cap-duotone"
          >
            {{ $t("nav.academics") }}
          </AppButton>
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/admissions"
            variant="outline"
            size="lg"
            icon="ph:user-plus-duotone"
          >
            {{ $t("hero.apply_admission") }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
