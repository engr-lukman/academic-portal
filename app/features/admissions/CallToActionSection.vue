<template>
  <section class="section-padding bg-purple-600 text-white">
    <div class="container mx-auto text-center">
      <div class="fade-in">
        <h2 class="title-2 mb-6">
          {{ $t("admissions.cta.title") }}
        </h2>
        <p class="paragraph-1 mx-auto mb-8 max-w-2xl opacity-90">
          {{ $t("admissions.cta.subtitle") }}
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <AppButton
            variant="secondary"
            size="lg"
            icon="ph:user-plus-duotone"
          >
            {{ $t("cta.start_application") }}
          </AppButton>
          <AppButton
            variant="outline"
            size="lg"
            icon="ph:download-duotone"
          >
            {{ $t("admissions.download_brochure") }}
          </AppButton>
        </div>

        <!-- Contact Information -->
        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <div class="text-center">
            <Icon
              name="ph:phone-duotone"
              class="mx-auto mb-2 h-8 w-8 opacity-80"
            />
            <h3 class="mb-1 text-lg font-semibold">
              {{ $t("contact.info.phone.title") }}
            </h3>
            <p class="text-sm opacity-80">
              {{ $t("contact.info.phone.value") }}
            </p>
          </div>
          <div class="text-center">
            <Icon
              name="ph:envelope-duotone"
              class="mx-auto mb-2 h-8 w-8 opacity-80"
            />
            <h3 class="mb-1 text-lg font-semibold">
              {{ $t("contact.info.email.title") }}
            </h3>
            <p class="text-sm opacity-80">admissions@academicportal.edu</p>
          </div>
          <div class="text-center">
            <Icon
              name="ph:clock-duotone"
              class="mx-auto mb-2 h-8 w-8 opacity-80"
            />
            <h3 class="mb-1 text-lg font-semibold">
              {{ $t("contact.info.hours.title") }}
            </h3>
            <p class="text-sm opacity-80">
              {{ $t("contact.info.hours.value") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
