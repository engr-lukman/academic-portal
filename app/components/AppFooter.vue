<template>
  <footer class="bg-slate-900 text-white">
    <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div>
          <div class="mb-6 flex items-center space-x-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600"
            >
              <Icon
                name="uil:graduation-cap"
                class="h-6 w-6 text-white"
              />
            </div>
            <div>
              <div class="text-lg font-bold">{{ $t("app.title") }}</div>
              <div class="text-sm text-slate-400">
                {{ $t("app.description") }}
              </div>
            </div>
          </div>
          <p class="paragraph-2 max-w-xs text-slate-400">
            {{ $t("hero.description") }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="title-3 mb-6 text-white">{{ $t("footer.quickLinks") }}</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLinkLocale
                to="/about"
                class="text-link"
                >{{ $t("nav.about") }}</NuxtLinkLocale
              >
            </li>
            <li>
              <NuxtLinkLocale
                to="/academics"
                class="text-link"
                >{{ $t("nav.academics") }}</NuxtLinkLocale
              >
            </li>
            <li>
              <NuxtLinkLocale
                to="/admissions"
                class="text-link"
                >{{ $t("nav.admissions") }}</NuxtLinkLocale
              >
            </li>
            <li>
              <NuxtLinkLocale
                to="/faculty"
                class="text-link"
                >{{ $t("nav.faculty") }}</NuxtLinkLocale
              >
            </li>
          </ul>
        </div>

        <!-- Programs -->
        <div>
          <h3 class="title-3 mb-6 text-white">{{ $t("footer.programs") }}</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLinkLocale
                to="/departments"
                class="text-link"
                >{{ $t("nav.departments") }}</NuxtLinkLocale
              >
            </li>
            <li>
              <NuxtLinkLocale
                to="/research"
                class="text-link"
                >{{ $t("nav.research") }}</NuxtLinkLocale
              >
            </li>
            <li>
              <NuxtLinkLocale
                to="/student-portal"
                class="text-link"
                >{{ $t("nav.student_portal") }}</NuxtLinkLocale
              >
            </li>
            <li>
              <NuxtLinkLocale
                to="/examinations"
                class="text-link"
                >{{ $t("nav.examinations") }}</NuxtLinkLocale
              >
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="title-3 mb-6 text-white">{{ $t("footer.contact") }}</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <Icon
                name="uil:map-marker"
                class="mr-2 h-4 w-4 text-slate-400"
              />
              <span class="paragraph-2 text-slate-400">{{
                $t("contact.info.address.value")
              }}</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="uil:phone"
                class="mr-2 h-4 w-4 text-slate-400"
              />
              <span class="paragraph-2 text-slate-400">{{
                $t("contact.info.phone.value")
              }}</span>
            </li>
            <li class="flex items-center">
              <Icon
                name="uil:envelope"
                class="mr-2 h-4 w-4 text-slate-400"
              />
              <span class="paragraph-2 text-slate-400">{{
                $t("contact.info.email.value")
              }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 border-t border-slate-700 pt-8">
        <div
          class="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p class="copyright text-slate-400">
            {{ $t("app.copyright", { year: new Date().getFullYear() }) }}
          </p>
          <div class="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
