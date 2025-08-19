<template>
  <div>
    <AdministrationHeroSection />
    <LeadershipSection />
    <DepartmentsSection />
    <ServicesSection />
    <GovernanceSection />
    <AdministrationCallToActionSection />
  </div>
</template>

<script setup>
useHead({
  title: "Administration - Dhaka International University",
  meta: [
    {
      name: "description",
      content:
        "Learn about university administration, leadership team, departments, services, and governance structure at Dhaka International University.",
    },
    {
      name: "keywords",
      content:
        "university administration, leadership, governance, academic departments, administrative services, university management",
    },
    {
      property: "og:title",
      content: "Administration - Dhaka International University",
    },
    {
      property: "og:description",
      content:
        "Discover our university administration, experienced leadership team, and comprehensive services that support academic excellence.",
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
