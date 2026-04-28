<template>
  <ClientOnly>
    <div id="cursor-dot" :style="dotStyle" />
    <div id="cursor-ring" :style="ringStyle" />
  </ClientOnly>
</template>

<script setup lang="ts">
const OFFSCREEN = -200

const mx = ref(OFFSCREEN)
const my = ref(OFFSCREEN)
const rx = ref(OFFSCREEN)
const ry = ref(OFFSCREEN)
const hasMoved = ref(false)

const dotStyle = computed(() => ({
  left: `${mx.value}px`,
  top: `${my.value}px`,
  opacity: hasMoved.value ? '1' : '0',
}))

const ringStyle = computed(() => ({
  left: `${rx.value}px`,
  top: `${ry.value}px`,
  opacity: hasMoved.value ? '0.5' : '0',
}))

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    if (!hasMoved.value) hasMoved.value = true
    mx.value = e.clientX
    my.value = e.clientY
  })

  const animate = () => {
    rx.value += (mx.value - rx.value) * 0.12
    ry.value += (my.value - ry.value) * 0.12
    requestAnimationFrame(animate)
  }
  animate()

  const addHoverListeners = () => {
    document.querySelectorAll('a, button, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'))
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'))
    })
  }

  addHoverListeners()

  const observer = new MutationObserver(addHoverListeners)
  observer.observe(document.body, { childList: true, subtree: true })
})
</script>

<style scoped>
#cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
}

#cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
}

:global(body.hovering #cursor-dot) {
  width: 12px;
  height: 12px;
}

:global(body.hovering #cursor-ring) {
  width: 56px;
  height: 56px;
  opacity: 0.3;
}
</style>
