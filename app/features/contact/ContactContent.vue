<template>
  <div class="section-padding">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="title-1 mb-6">{{ $t("contact.title") }}</h1>
        <p class="paragraph-1 mx-auto mb-12 max-w-3xl text-gray-600">
          {{ $t("contact.description") }}
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Contact Information -->
        <div>
          <h2 class="title-2 mb-8">{{ $t("contact.info.title") }}</h2>

          <div class="space-y-6">
            <div class="flex items-start">
              <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
              >
                <Icon
                  name="uil:map-marker"
                  class="h-6 w-6 text-blue-600"
                />
              </div>
              <div>
                <h3 class="title-3 mb-2">
                  {{ $t("contact.info.address.title") }}
                </h3>
                <p class="paragraph-2 text-gray-600">
                  {{ $t("contact.info.address.value") }}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
              >
                <Icon
                  name="uil:phone"
                  class="h-6 w-6 text-green-600"
                />
              </div>
              <div>
                <h3 class="title-3 mb-2">
                  {{ $t("contact.info.phone.title") }}
                </h3>
                <p class="paragraph-2 text-gray-600">
                  {{ $t("contact.info.phone.value") }}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100"
              >
                <Icon
                  name="uil:envelope"
                  class="h-6 w-6 text-purple-600"
                />
              </div>
              <div>
                <h3 class="title-3 mb-2">
                  {{ $t("contact.info.email.title") }}
                </h3>
                <p class="paragraph-2 text-gray-600">
                  {{ $t("contact.info.email.value") }}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100"
              >
                <Icon
                  name="uil:clock"
                  class="h-6 w-6 text-orange-600"
                />
              </div>
              <div>
                <h3 class="title-3 mb-2">
                  {{ $t("contact.info.hours.title") }}
                </h3>
                <p class="paragraph-2 text-gray-600">
                  {{ $t("contact.info.hours.value") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="rounded-2xl bg-white p-8 shadow-lg">
          <h2 class="title-2 mb-6">{{ $t("contact.form.title") }}</h2>
          <form class="space-y-6">
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="form-label mb-2 block">{{
                  $t("contact.form.firstName")
                }}</label>
                <input
                  type="text"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  :placeholder="$t('contact.form.firstNamePlaceholder')"
                />
              </div>
              <div>
                <label class="form-label mb-2 block">{{
                  $t("contact.form.lastName")
                }}</label>
                <input
                  type="text"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                  :placeholder="$t('contact.form.lastNamePlaceholder')"
                />
              </div>
            </div>

            <div>
              <label class="form-label mb-2 block">{{
                $t("contact.form.email")
              }}</label>
              <input
                type="email"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                :placeholder="$t('contact.form.emailPlaceholder')"
              />
            </div>

            <div>
              <label class="form-label mb-2 block">{{
                $t("contact.form.subject")
              }}</label>
              <input
                type="text"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                :placeholder="$t('contact.form.subjectPlaceholder')"
              />
            </div>

            <div>
              <label class="form-label mb-2 block">{{
                $t("contact.form.message")
              }}</label>
              <textarea
                rows="5"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                :placeholder="$t('contact.form.messagePlaceholder')"
              ></textarea>
            </div>

            <AppButton
              type="submit"
              variant="primary"
              size="lg"
              class="w-full"
            >
              {{ $t("common.submit") }}
            </AppButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
