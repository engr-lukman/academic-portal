<template>
  <section class="section-padding bg-blue-600 text-white">
    <div class="container mx-auto text-center">
      <h2 class="title-2 mb-6">
        {{ $t("cta.title") }}
      </h2>
      <p class="paragraph-1 mx-auto mb-8 max-w-2xl opacity-90">
        {{ $t("cta.subtitle") }}
      </p>
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <AppButton
          :tag="'NuxtLink'"
          :to="localePath('/admissions')"
          variant="secondary"
          size="lg"
        >
          {{ $t("cta.start_application") }}
        </AppButton>
        <AppButton
          :tag="'NuxtLink'"
          :to="localePath('/contact')"
          variant="outline"
          size="lg"
        >
          {{ $t("common.contact_us") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
