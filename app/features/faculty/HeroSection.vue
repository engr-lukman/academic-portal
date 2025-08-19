<template>
  <section
    class="flex min-h-[60vh] items-center bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white"
  >
    <div class="section-padding container mx-auto">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="fade-in">
          <h1 class="title-1 mb-6 leading-tight">
            {{ $t("faculty.title") }}
            <span class="block text-yellow-400">{{
              $t("faculty.subtitle")
            }}</span>
          </h1>
          <p class="paragraph-1 mb-8 max-w-2xl opacity-90">
            {{ $t("faculty.description") }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/research"
              variant="accent"
              size="lg"
              icon="ph:flask-duotone"
            >
              {{ $t("nav.research") }}
            </AppButton>
            <AppButton
              :tag="'NuxtLinkLocale'"
              to="/departments"
              variant="outline"
              size="lg"
              icon="ph:buildings-duotone"
            >
              {{ $t("nav.departments") }}
            </AppButton>
          </div>
        </div>
        <div class="fade-in">
          <NuxtImg
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Faculty Excellence"
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
