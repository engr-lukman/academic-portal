<template>
  <section
    class="flex min-h-[60vh] items-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("admissions.title") }}
            <span class="block text-yellow-400">{{
              $t("admissions.subtitle")
            }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("admissions.description") }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <AppButton
              variant="accent"
              size="lg"
              icon="ph:user-plus-duotone"
            >
              {{ $t("cta.start_application") }}
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
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Join Our Community"
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
