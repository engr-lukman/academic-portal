<template>
  <div>
    <ExaminationsHeroSection />
    <ExaminationsExamScheduleSection />
    <ExaminationsExamPoliciesSection />
    <ExaminationsResultsSection />
    <ExaminationsCallToActionSection />
  </div>
</template>

<script setup>
useHead({
  title: "Examinations - Dhaka International University",
  meta: [
    {
      name: "description",
      content:
        "Access examination schedules, policies, procedures, and results at Dhaka International University. Stay updated with exam dates and requirements.",
    },
    {
      name: "keywords",
      content:
        "exam schedule, examination policies, exam results, academic calendar, exam procedures, university exams",
    },
    {
      property: "og:title",
      content: "Examinations - Dhaka International University",
    },
    {
      property: "og:description",
      content:
        "Complete examination information including schedules, policies, and results for university students.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});
</script>
