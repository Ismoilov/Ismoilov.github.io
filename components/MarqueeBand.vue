<template>
  <div class="marquee-wrap">
    <div class="marquee-track">
      <span
        v-for="(item, i) in repeated"
        :key="i"
        class="marquee-item"
      >
        <span class="marquee-dot" />{{ item }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { marqueeItems } = usePortfolioData()
const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]
</script>

<style scoped>
.marquee-wrap {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  padding: 18px 0;
  background: var(--bg2);
}

.marquee-track {
  display: flex;
  gap: 0;
  animation: marquee 22s linear infinite;
  white-space: nowrap;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  padding: 0 32px;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.marquee-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}
</style>
