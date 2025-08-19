<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("news.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("news.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          v-for="article in newsArticles"
          :key="article.key"
          variant="elevated"
          hover
          class="group"
        >
          <template #media>
            <div class="relative overflow-hidden">
              <NuxtImg
                :src="article.image"
                :alt="$t(`news.${article.key}.title`)"
                class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder
              />
              <div class="absolute top-4 left-4">
                <span
                  class="inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {{ article.category }}
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <span
                  class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm"
                >
                  {{ article.date }}
                </span>
              </div>
            </div>
          </template>

          <div class="p-6">
            <h3
              class="title-4 mb-3 text-gray-800 transition-colors duration-300 group-hover:text-blue-600"
            >
              {{ $t(`news.${article.key}.title`) }}
            </h3>
            <p class="paragraph-2 mb-4 line-clamp-3 text-gray-600">
              {{ $t(`news.${article.key}.description`) }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <Icon
                  name="ph:calendar-duotone"
                  class="h-4 w-4"
                />
                <span>{{ article.readTime }}</span>
              </div>
              <AppButton
                variant="ghost"
                size="sm"
                icon="ph:arrow-right"
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                {{ $t("common.read_more") }}
              </AppButton>
            </div>
          </div>
        </AppCard>
      </div>

      <div class="fade-in mt-12 text-center">
        <AppButton
          variant="outline"
          size="lg"
          icon="ph:newspaper-duotone"
        >
          {{ $t("news.view_all") }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const newsArticles = [
  {
    key: "academic_excellence_award",
    image: "/images/news-academic-award.jpg",
    category: "Awards",
    date: "Dec 15, 2024",
    readTime: "3 min read",
  },
  {
    key: "new_research_center",
    image: "/images/news-research-center.jpg",
    category: "Research",
    date: "Dec 10, 2024",
    readTime: "5 min read",
  },
  {
    key: "student_achievements",
    image: "/images/news-student-achievements.jpg",
    category: "Students",
    date: "Dec 8, 2024",
    readTime: "4 min read",
  },
  {
    key: "international_partnership",
    image: "/images/news-partnership.jpg",
    category: "Partnership",
    date: "Dec 5, 2024",
    readTime: "6 min read",
  },
  {
    key: "technology_upgrade",
    image: "/images/news-technology.jpg",
    category: "Technology",
    date: "Dec 3, 2024",
    readTime: "3 min read",
  },
  {
    key: "community_outreach",
    image: "/images/news-community.jpg",
    category: "Community",
    date: "Dec 1, 2024",
    readTime: "4 min read",
  },
];
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
