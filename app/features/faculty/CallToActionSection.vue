<template>
  <section class="section-padding bg-teal-600 text-white">
    <div class="container mx-auto text-center">
      <div class="fade-in">
        <h2 class="title-2 mb-6">
          {{ $t("faculty.cta.title") }}
        </h2>
        <p class="paragraph-1 mx-auto mb-8 max-w-2xl opacity-90">
          {{ $t("faculty.cta.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/research"
            variant="secondary"
            size="lg"
            icon="ph:flask-duotone"
          >
            {{ $t("nav.research") }}
          </AppButton>
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/contact"
            variant="outline"
            size="lg"
            icon="ph:chat-circle-duotone"
          >
            {{ $t("common.contact_us") }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
