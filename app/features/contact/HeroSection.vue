<template>
  <section
    class="flex min-h-[60vh] items-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("contact.title") }}
            <span class="block text-yellow-400">{{
              $t("contact.subtitle")
            }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("contact.description") }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <AppButton
              variant="accent"
              size="lg"
              icon="ph:phone-duotone"
            >
              {{ $t("contact.call_us") }}
            </AppButton>
            <AppButton
              variant="outline"
              size="lg"
              icon="ph:envelope-duotone"
            >
              {{ $t("contact.email_us") }}
            </AppButton>
          </div>
        </div>
        <div class="fade-in">
          <NuxtImg
            src="/images/contact-hero.jpg"
            alt="Contact Us"
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
