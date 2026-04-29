<template>
  <button
    v-show="visible"
    class="scroll-top"
    aria-label="Scroll to top"
    @click="scrollTop"
  >
    ↑
  </button>
</template>

<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    visible.value = window.scrollY > 400
  }, { passive: true })
})

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg2);
  color: var(--text);
  font-size: 1.1rem;
  cursor: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.scroll-top:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
  transform: translateY(-3px);
}
</style>
