<template>
  <header
    class="glass sticky top-0 z-50 transition-all duration-300"
    :class="{ 'shadow-lg backdrop-blur-xl': scrolled }"
  >
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLinkLocale
          to="/"
          class="group flex items-center space-x-3"
        >
          <div
            class="flex h-12 w-12 transform items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-110"
          >
            <Icon
              name="uil:graduation-cap"
              class="h-8 w-8 text-white"
            />
          </div>
          <div class="hidden sm:block">
            <div
              class="text-xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ $t("app.title") }}
            </div>
            <div class="-mt-1 text-sm text-slate-500">
              {{ $t("hero.subtitle") }}
            </div>
          </div>
        </NuxtLinkLocale>

        <!-- Desktop Navigation -->
        <div class="hidden items-center space-x-1 lg:flex">
          <NuxtLinkLocale
            to="/"
            class="nav-link"
            >{{ $t("nav.home") }}</NuxtLinkLocale
          >

          <!-- About Dropdown -->
          <div class="group relative">
            <button class="nav-link flex items-center">
              {{ $t("nav.about") }}
              <Icon
                name="uil:angle-down"
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              />
            </button>
            <div
              class="glass invisible absolute left-0 top-full mt-2 w-56 transform rounded-2xl opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100"
            >
              <div class="p-2">
                <NuxtLinkLocale
                  to="/about"
                  class="dropdown-link"
                  >{{ $t("nav.about") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/faculty"
                  class="dropdown-link"
                  >{{ $t("nav.faculty") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/administration"
                  class="dropdown-link"
                  >{{ $t("nav.administration") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/campus-life"
                  class="dropdown-link"
                  >{{ $t("nav.campus_life") }}</NuxtLinkLocale
                >
              </div>
            </div>
          </div>

          <!-- Academics Dropdown -->
          <div class="group relative">
            <button class="nav-link flex items-center">
              {{ $t("nav.academics") }}
              <Icon
                name="ph:caret-down"
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              />
            </button>
            <div
              class="glass invisible absolute left-0 top-full mt-2 w-56 transform rounded-2xl opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100"
            >
              <div class="p-2">
                <NuxtLinkLocale
                  to="/academics"
                  class="dropdown-link"
                  >{{ $t("nav.academics") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/departments"
                  class="dropdown-link"
                  >{{ $t("nav.departments") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/examinations"
                  class="dropdown-link"
                  >{{ $t("nav.examinations") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/research"
                  class="dropdown-link"
                  >{{ $t("nav.research") }}</NuxtLinkLocale
                >
              </div>
            </div>
          </div>

          <NuxtLinkLocale
            to="/admissions"
            class="nav-link"
            >{{ $t("nav.admissions") }}</NuxtLinkLocale
          >

          <!-- Student Services Dropdown -->
          <div class="group relative">
            <button class="nav-link flex items-center">
              {{ $t("nav.student_portal") }}
              <Icon
                name="ph:caret-down"
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              />
            </button>
            <div
              class="glass invisible absolute left-0 top-full mt-2 w-56 transform rounded-2xl opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100"
            >
              <div class="p-2">
                <NuxtLinkLocale
                  to="/student-portal"
                  class="dropdown-link"
                  >{{ $t("nav.student_portal") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/campus-life"
                  class="dropdown-link"
                  >{{ $t("nav.campus_life") }}</NuxtLinkLocale
                >
              </div>
            </div>
          </div>

          <NuxtLinkLocale
            to="/contact"
            class="nav-link"
            >{{ $t("nav.contact") }}</NuxtLinkLocale
          >
        </div>

        <!-- CTA Buttons -->
        <div class="hidden items-center space-x-4 lg:flex">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <NuxtLinkLocale
            to="/student-portal"
            class="btn-secondary btn-small"
          >
            {{ $t("nav.student_portal") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/admissions"
            class="btn-primary btn-small"
          >
            {{ $t("common.apply_now") }}
          </NuxtLinkLocale>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-200 hover:bg-slate-200 lg:hidden"
          :class="{ 'bg-slate-200': mobileMenuOpen }"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon
            :name="mobileMenuOpen ? 'ph:x' : 'ph:list'"
            class="h-6 w-6 text-slate-600 transition-transform duration-300"
            :class="{ 'rotate-90': mobileMenuOpen }"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      class="glass overflow-hidden border-t border-white/20 transition-all duration-300 lg:hidden"
      :class="mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="container-custom py-6">
        <div class="space-y-2">
          <NuxtLinkLocale
            to="/"
            class="mobile-nav-link"
            @click="closeMobileMenu"
            >{{ $t("nav.home") }}</NuxtLinkLocale
          >

          <!-- About Section -->
          <div>
            <button
              class="mobile-nav-link flex w-full items-center justify-between text-left"
              @click="toggleMobileSection('about')"
            >
              {{ $t("nav.about") }}
              <Icon
                name="ph:caret-down"
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': openSections.about }"
              />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :class="
                openSections.about
                  ? 'max-h-48 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div class="mt-2 space-y-1 pl-6">
                <NuxtLinkLocale
                  to="/about"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.about") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/faculty"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.faculty") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/administration"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.administration") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/campus-life"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.campus_life") }}</NuxtLinkLocale
                >
              </div>
            </div>
          </div>

          <!-- Academics Section -->
          <div>
            <button
              class="mobile-nav-link flex w-full items-center justify-between text-left"
              @click="toggleMobileSection('academics')"
            >
              {{ $t("nav.academics") }}
              <Icon
                name="ph:caret-down"
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': openSections.academics }"
              />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :class="
                openSections.academics
                  ? 'max-h-48 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div class="mt-2 space-y-1 pl-6">
                <NuxtLinkLocale
                  to="/academics"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.academics") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/departments"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.departments") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/examinations"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.examinations") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/research"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.research") }}</NuxtLinkLocale
                >
              </div>
            </div>
          </div>

          <NuxtLinkLocale
            to="/admissions"
            class="mobile-nav-link"
            @click="closeMobileMenu"
            >{{ $t("nav.admissions") }}</NuxtLinkLocale
          >

          <!-- Students Section -->
          <div>
            <button
              class="mobile-nav-link flex w-full items-center justify-between text-left"
              @click="toggleMobileSection('students')"
            >
              {{ $t("nav.student_portal") }}
              <Icon
                name="ph:caret-down"
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': openSections.students }"
              />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :class="
                openSections.students
                  ? 'max-h-48 opacity-100'
                  : 'max-h-0 opacity-0'
              "
            >
              <div class="mt-2 space-y-1 pl-6">
                <NuxtLinkLocale
                  to="/student-portal"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.student_portal") }}</NuxtLinkLocale
                >
                <NuxtLinkLocale
                  to="/campus-life"
                  class="block py-2 text-slate-600 transition-colors hover:text-blue-600"
                  @click="closeMobileMenu"
                  >{{ $t("nav.campus_life") }}</NuxtLinkLocale
                >
              </div>
            </div>
          </div>

          <NuxtLinkLocale
            to="/contact"
            class="mobile-nav-link"
            @click="closeMobileMenu"
            >{{ $t("nav.contact") }}</NuxtLinkLocale
          >

          <!-- Mobile CTA Buttons -->
          <div class="mt-6 space-y-3 border-t border-white/20 pt-6">
            <NuxtLinkLocale
              to="/student-portal"
              class="btn-secondary w-full text-center"
              @click="closeMobileMenu"
            >
              {{ $t("nav.student_portal") }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              to="/admissions"
              class="btn-primary w-full text-center"
              @click="closeMobileMenu"
            >
              {{ $t("common.apply_now") }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const openSections = ref({
  about: false,
  academics: false,
  students: false,
});

const toggleMobileSection = (section) => {
  openSections.value[section] = !openSections.value[section];
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  Object.keys(openSections.value).forEach((key) => {
    openSections.value[key] = false;
  });
};

// Handle scroll effect
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 10;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});

// Close mobile menu when clicking outside or navigating
watch(mobileMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    // Close all sections when menu closes
    Object.keys(openSections.value).forEach((key) => {
      openSections.value[key] = false;
    });
  }
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>
