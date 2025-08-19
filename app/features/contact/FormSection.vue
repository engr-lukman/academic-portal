<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Form -->
        <div class="fade-in">
          <div class="mb-8">
            <h2 class="title-2 mb-4 text-gray-800">
              {{ $t("contact.form.title") }}
            </h2>
            <p class="paragraph-1 text-gray-600">
              {{ $t("contact.form.subtitle") }}
            </p>
          </div>

          <form class="space-y-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label class="form-label mb-2 block text-gray-700">
                  {{ $t("contact.form.firstName") }}
                </label>
                <input
                  type="text"
                  :placeholder="$t('contact.form.firstNamePlaceholder')"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
              <div>
                <label class="form-label mb-2 block text-gray-700">
                  {{ $t("contact.form.lastName") }}
                </label>
                <input
                  type="text"
                  :placeholder="$t('contact.form.lastNamePlaceholder')"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label class="form-label mb-2 block text-gray-700">
                {{ $t("contact.form.email") }}
              </label>
              <input
                type="email"
                :placeholder="$t('contact.form.emailPlaceholder')"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
            </div>

            <div>
              <label class="form-label mb-2 block text-gray-700">
                {{ $t("contact.form.subject") }}
              </label>
              <select
                class="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              >
                <option value="">{{ $t("contact.form.selectSubject") }}</option>
                <option value="admissions">{{ $t("nav.admissions") }}</option>
                <option value="academics">{{ $t("nav.academics") }}</option>
                <option value="student-services">
                  {{ $t("contact.departments.student_services.title") }}
                </option>
                <option value="financial-aid">
                  {{ $t("contact.departments.financial_aid.title") }}
                </option>
                <option value="other">{{ $t("contact.form.other") }}</option>
              </select>
            </div>

            <div>
              <label class="form-label mb-2 block text-gray-700">
                {{ $t("contact.form.message") }}
              </label>
              <textarea
                rows="6"
                :placeholder="$t('contact.form.messagePlaceholder')"
                class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              ></textarea>
            </div>

            <div class="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                class="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20"
              />
              <label
                for="privacy"
                class="text-sm text-gray-600"
              >
                {{ $t("contact.form.privacy") }}
              </label>
            </div>

            <AppButton
              variant="primary"
              size="lg"
              icon="ph:paper-plane-duotone"
              class="w-full sm:w-auto"
            >
              {{ $t("common.submit") }}
            </AppButton>
          </form>
        </div>

        <!-- Contact Image & Info -->
        <div class="fade-in">
          <div class="sticky top-8">
            <NuxtImg
              src="/images/contact-form.jpg"
              alt="Contact Us"
              class="h-64 w-full rounded-lg object-cover shadow-lg"
              placeholder
            />

            <div class="mt-8 rounded-lg bg-blue-50 p-6">
              <h3 class="title-4 mb-4 text-blue-900">
                {{ $t("contact.quick_response.title") }}
              </h3>
              <div class="space-y-3 text-sm text-blue-700">
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:clock-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ $t("contact.quick_response.email_response") }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:phone-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ $t("contact.quick_response.phone_response") }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:chat-circle-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ $t("contact.quick_response.chat_available") }}</span>
                </div>
              </div>
            </div>

            <div class="mt-6 rounded-lg bg-green-50 p-6">
              <h3 class="title-4 mb-4 text-green-900">
                {{ $t("contact.campus_visits.title") }}
              </h3>
              <p class="paragraph-2 mb-4 text-green-700">
                {{ $t("contact.campus_visits.description") }}
              </p>
              <AppButton
                variant="outline"
                size="sm"
                icon="ph:calendar-duotone"
                class="border-green-300 text-green-700 hover:bg-green-100"
              >
                {{ $t("contact.campus_visits.schedule") }}
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
