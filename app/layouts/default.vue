<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global styles are imported through nuxt.config.ts */
</style>
