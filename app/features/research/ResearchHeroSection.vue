<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-32"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: url('data:image/svg+xml,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/></g></g></svg>');
        "
      ></div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <div
          class="animate-float mb-8 inline-flex h-20 w-20 transform items-center justify-center rounded-full bg-blue-600 transition-all duration-700 hover:scale-110"
        >
          <svg
            class="h-10 w-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        </div>

        <h1
          class="animate-fade-up mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          {{ $t("research.hero.title") }}
        </h1>

        <p
          class="animate-fade-up-delay-1 mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-blue-100 md:text-2xl"
        >
          {{ $t("research.hero.subtitle") }}
        </p>

        <div
          class="animate-fade-up-delay-2 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            to="/research/projects"
            class="inline-flex transform items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
          >
            <span>{{ $t("research.hero.exploreProjects") }}</span>
            <svg
              class="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/research/publications"
            class="inline-flex transform items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-900"
          >
            {{ $t("research.hero.viewPublications") }}
          </NuxtLink>
        </div>
      </div>

      <!-- Research Stats -->
      <div
        class="animate-fade-up-delay-3 mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="200"
          >
            0
          </div>
          <div class="text-blue-200">
            {{ $t("research.hero.stats.projects") }}
          </div>
        </div>
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="800"
          >
            0
          </div>
          <div class="text-blue-200">
            {{ $t("research.hero.stats.publications") }}
          </div>
        </div>
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="15"
          >
            0
          </div>
          <div class="text-blue-200">
            {{ $t("research.hero.stats.centers") }}
          </div>
        </div>
        <div class="text-center">
          <div class="mb-2 text-4xl font-bold text-white md:text-5xl">
            $<span
              class="counter"
              data-target="25"
              >0</span
            >M
          </div>
          <div class="text-blue-200">
            {{ $t("research.hero.stats.funding") }}
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Research Icons -->
    <div class="animate-float-delay-1 absolute top-20 left-10 hidden lg:block">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 opacity-20"
      >
        <svg
          class="h-8 w-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      </div>
    </div>

    <div
      class="animate-float-delay-2 absolute right-10 bottom-20 hidden lg:block"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 opacity-20"
      >
        <svg
          class="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Counter animation
  const counters = document.querySelectorAll(".counter");
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        setTimeout(updateCounter, 30);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  };

  // Intersection Observer for counter animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".counter");
        counters.forEach((counter) => {
          if (!counter.classList.contains("animated")) {
            counter.classList.add("animated");
            animateCounter(counter);
          }
        });
      }
    });
  });

  observer.observe(document.querySelector(".container"));
});
</script>
