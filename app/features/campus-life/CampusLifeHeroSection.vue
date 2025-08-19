<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 py-32"
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
          class="animate-float mb-8 inline-flex h-20 w-20 transform items-center justify-center rounded-full bg-green-600 transition-all duration-700 hover:scale-110"
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            ></path>
          </svg>
        </div>

        <h1
          class="animate-fade-up mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          {{ $t("campusLife.hero.title") }}
        </h1>

        <p
          class="animate-fade-up-delay-1 mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-green-100 md:text-2xl"
        >
          {{ $t("campusLife.hero.subtitle") }}
        </p>

        <div
          class="animate-fade-up-delay-2 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            to="/campus-life/activities"
            class="inline-flex transform items-center rounded-full bg-white px-8 py-4 font-semibold text-green-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:shadow-xl"
          >
            <span>{{ $t("campusLife.hero.exploreActivities") }}</span>
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
            to="/campus-life/housing"
            class="inline-flex transform items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-green-900"
          >
            {{ $t("campusLife.hero.viewHousing") }}
          </NuxtLink>
        </div>
      </div>

      <!-- Campus Life Stats -->
      <div
        class="animate-fade-up-delay-3 mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="50"
          >
            0
          </div>
          <div class="text-green-200">
            {{ $t("campusLife.hero.stats.clubs") }}
          </div>
        </div>
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="15"
          >
            0
          </div>
          <div class="text-green-200">
            {{ $t("campusLife.hero.stats.sportsTeams") }}
          </div>
        </div>
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="8"
          >
            0
          </div>
          <div class="text-green-200">
            {{ $t("campusLife.hero.stats.residenceHalls") }}
          </div>
        </div>
        <div class="text-center">
          <div
            class="counter mb-2 text-4xl font-bold text-white md:text-5xl"
            data-target="200"
          >
            0
          </div>
          <div class="text-green-200">
            {{ $t("campusLife.hero.stats.events") }}
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Campus Icons -->
    <div class="animate-float-delay-1 absolute top-20 left-10 hidden lg:block">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 opacity-20"
      >
        <svg
          class="h-8 w-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    </div>

    <div
      class="animate-float-delay-2 absolute right-10 bottom-20 hidden lg:block"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 opacity-20"
      >
        <svg
          class="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
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
