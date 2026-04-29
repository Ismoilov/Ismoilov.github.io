<template>
  <div>
    <AppCursor />
    <AppNav />
    <div class="below-nav">
      <MarqueeBand />
    </div>
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<style>
.below-nav {
  margin-top: var(--nav-h);
}
</style>
