<template>
  <section
    class="flex min-h-[60vh] items-center bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("academics.title") }}
            <span class="block text-yellow-400">{{
              $t("academics.subtitle")
            }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("academics.description") }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/departments"
              variant="accent"
              size="lg"
              icon="ph:buildings-duotone"
            >
              {{ $t("nav.departments") }}
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
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Academic Excellence"
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
