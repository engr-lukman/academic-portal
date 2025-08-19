<template>
  <section
    class="flex min-h-[60vh] items-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("about.title") }}
            <span class="block text-yellow-400">{{
              $t("about.subtitle")
            }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("about.description") }}
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
              to="/contact"
              variant="outline"
              size="lg"
              icon="ph:chat-circle-duotone"
            >
              {{ $t("common.contact_us") }}
            </AppButton>
          </div>
        </div>
        <div class="fade-in">
          <NuxtImg
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="About Our Institution"
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
