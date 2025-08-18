<template>
  <div class="section-padding">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="title-1 mb-6">{{ $t("academics.title") }}</h1>
        <p class="paragraph-1 mx-auto mb-12 max-w-3xl text-gray-600">
          {{ $t("academics.description") }}
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Icon name="uil:book-reader" class="h-8 w-8 text-blue-600" />
          </div>
          <h3 class="title-3 mb-4">{{ $t("programs.elementary.title") }}</h3>
          <p class="paragraph-2 mb-6 text-gray-600">
            {{ $t("programs.elementary.description") }}
          </p>
          <AppButton variant="outline" size="sm">
            {{ $t("common.learn_more") }}
          </AppButton>
        </div>

        <div class="rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Icon name="uil:graduation-cap" class="h-8 w-8 text-green-600" />
          </div>
          <h3 class="title-3 mb-4">{{ $t("programs.middle_school.title") }}</h3>
          <p class="paragraph-2 mb-6 text-gray-600">
            {{ $t("programs.middle_school.description") }}
          </p>
          <AppButton variant="outline" size="sm">
            {{ $t("common.learn_more") }}
          </AppButton>
        </div>

        <div class="rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
            <Icon name="uil:university" class="h-8 w-8 text-purple-600" />
          </div>
          <h3 class="title-3 mb-4">{{ $t("programs.high_school.title") }}</h3>
          <p class="paragraph-2 mb-6 text-gray-600">
            {{ $t("programs.high_school.description") }}
          </p>
          <AppButton variant="outline" size="sm">
            {{ $t("common.learn_more") }}
          </AppButton>
        </div>
      </div>

      <!-- Academic Excellence Section -->
      <div class="mt-20">
        <div class="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-white">
          <div class="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 class="title-2 mb-6">{{ $t("features.academic_excellence.title") }}</h2>
              <p class="paragraph-1 mb-8 opacity-90">
                {{ $t("features.academic_excellence.description") }}
              </p>
              <div class="flex flex-col gap-4 sm:flex-row">
                <AppButton
                  :tag="'NuxtLinkLocale'"
                  to="/admissions"
                  variant="accent"
                >
                  {{ $t("common.apply_now") }}
                </AppButton>
                <AppButton
                  :tag="'NuxtLinkLocale'"
                  to="/contact"
                  variant="outline"
                >
                  {{ $t("common.contact_us") }}
                </AppButton>
              </div>
            </div>
            <div>
              <NuxtImg
                src="/images/academic-excellence.jpg"
                alt="Academic Excellence"
                class="h-auto w-full rounded-lg"
                placeholder
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
