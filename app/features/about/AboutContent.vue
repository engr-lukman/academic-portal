<template>
  <div class="section-padding">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="title-1 mb-6">{{ $t("about.title") }}</h1>
        <p class="paragraph-1 mx-auto mb-8 max-w-3xl text-gray-600">
          {{ $t("about.description") }}
        </p>
      </div>

      <div class="mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 class="title-2 mb-6">{{ $t("about.subtitle") }}</h2>
          <p class="paragraph-2 mb-4 text-gray-600">
            {{ $t("hero.description") }}
          </p>
          <AppButton
            :tag="'NuxtLinkLocale'"
            to="/contact"
            variant="primary"
          >
            {{ $t("common.contact_us") }}
          </AppButton>
        </div>
        <div>
          <NuxtImg
            src="/images/about-us.jpg"
            alt="About Us"
            class="h-auto w-full rounded-lg shadow-xl"
            placeholder
          />
        </div>
      </div>

      <!-- Mission, Vision, Values Section -->
      <div class="mt-20 grid gap-8 md:grid-cols-3">
        <div class="rounded-xl bg-blue-50 p-8 text-center">
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600"
          >
            <Icon
              name="uil:target"
              class="h-8 w-8 text-white"
            />
          </div>
          <h3 class="title-3 mb-4 text-blue-900">
            {{ $t("about.mission.title") }}
          </h3>
          <p class="paragraph-2 text-blue-700">
            {{ $t("about.mission.description") }}
          </p>
        </div>

        <div class="rounded-xl bg-green-50 p-8 text-center">
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600"
          >
            <Icon
              name="uil:eye"
              class="h-8 w-8 text-white"
            />
          </div>
          <h3 class="title-3 mb-4 text-green-900">
            {{ $t("about.vision.title") }}
          </h3>
          <p class="paragraph-2 text-green-700">
            {{ $t("about.vision.description") }}
          </p>
        </div>

        <div class="rounded-xl bg-purple-50 p-8 text-center">
          <div
            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600"
          >
            <Icon
              name="uil:heart"
              class="h-8 w-8 text-white"
            />
          </div>
          <h3 class="title-3 mb-4 text-purple-900">
            {{ $t("about.values.title") }}
          </h3>
          <p class="paragraph-2 text-purple-700">
            {{ $t("about.values.description") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
