<template>
  <section class="section-padding bg-emerald-600 text-white">
    <div class="container mx-auto text-center">
      <div class="fade-in">
        <h2 class="title-2 mb-6">
          {{ $t("about.cta.title") }}
        </h2>
        <p class="paragraph-1 mx-auto mb-8 max-w-2xl opacity-90">
          {{ $t("about.cta.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/admissions"
            variant="secondary"
            size="lg"
            icon="ph:user-plus-duotone"
          >
            {{ $t("hero.apply_admission") }}
          </AppButton>
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/academics"
            variant="outline"
            size="lg"
            icon="ph:graduation-cap-duotone"
          >
            {{ $t("nav.academics") }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
