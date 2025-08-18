<template>
  <div class="section-padding">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="title-1 mb-6">{{ $t("admissions.title") }}</h1>
        <p class="paragraph-1 mx-auto mb-12 max-w-3xl text-gray-600">
          {{ $t("admissions.description") }}
        </p>
      </div>

      <!-- Application Process -->
      <div class="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-xl bg-blue-50 p-6 text-center">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white"
          >
            1
          </div>
          <h3 class="title-3 mb-3 text-blue-900">
            {{ $t("admissions.process.step1.title") }}
          </h3>
          <p class="paragraph-2 text-blue-700">
            {{ $t("admissions.process.step1.description") }}
          </p>
        </div>

        <div class="rounded-xl bg-green-50 p-6 text-center">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white"
          >
            2
          </div>
          <h3 class="title-3 mb-3 text-green-900">
            {{ $t("admissions.process.step2.title") }}
          </h3>
          <p class="paragraph-2 text-green-700">
            {{ $t("admissions.process.step2.description") }}
          </p>
        </div>

        <div class="rounded-xl bg-purple-50 p-6 text-center">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white"
          >
            3
          </div>
          <h3 class="title-3 mb-3 text-purple-900">
            {{ $t("admissions.process.step3.title") }}
          </h3>
          <p class="paragraph-2 text-purple-700">
            {{ $t("admissions.process.step3.description") }}
          </p>
        </div>

        <div class="rounded-xl bg-orange-50 p-6 text-center">
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 font-bold text-white"
          >
            4
          </div>
          <h3 class="title-3 mb-3 text-orange-900">
            {{ $t("admissions.process.step4.title") }}
          </h3>
          <p class="paragraph-2 text-orange-700">
            {{ $t("admissions.process.step4.description") }}
          </p>
        </div>
      </div>

      <!-- Requirements -->
      <div class="rounded-2xl bg-white p-8 shadow-lg">
        <h2 class="title-2 mb-8 text-center">
          {{ $t("admissions.requirements.title") }}
        </h2>
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <h3 class="title-3 mb-4">
              {{ $t("admissions.requirements.academic.title") }}
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Icon
                  name="uil:check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                <span class="paragraph-2">{{
                  $t("admissions.requirements.academic.item1")
                }}</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="uil:check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                <span class="paragraph-2">{{
                  $t("admissions.requirements.academic.item2")
                }}</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="uil:check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                <span class="paragraph-2">{{
                  $t("admissions.requirements.academic.item3")
                }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="title-3 mb-4">
              {{ $t("admissions.requirements.documents.title") }}
            </h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Icon
                  name="uil:check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                <span class="paragraph-2">{{
                  $t("admissions.requirements.documents.item1")
                }}</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="uil:check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                <span class="paragraph-2">{{
                  $t("admissions.requirements.documents.item2")
                }}</span>
              </li>
              <li class="flex items-center">
                <Icon
                  name="uil:check"
                  class="mr-2 h-5 w-5 text-green-600"
                />
                <span class="paragraph-2">{{
                  $t("admissions.requirements.documents.item3")
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <h2 class="title-2 mb-6">{{ $t("cta.title") }}</h2>
        <p class="paragraph-1 mx-auto mb-8 max-w-2xl text-gray-600">
          {{ $t("cta.subtitle") }}
        </p>
        <AppButton
          variant="primary"
          size="lg"
        >
          {{ $t("cta.start_application") }}
        </AppButton>
      </div>
    </div>
  </div>
</template>
