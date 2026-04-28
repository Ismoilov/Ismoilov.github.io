<template>
  <canvas ref="canvasEl" class="hero-canvas" aria-hidden="true" />
</template>

<script setup lang="ts">
import type * as THREEType from 'three'

const canvasEl = ref<HTMLCanvasElement | null>(null)
let animFrame: number | null = null
let dispose: (() => void) | null = null

onMounted(async () => {
  const el = canvasEl.value
  if (!el) return

  // Dynamic import keeps Three.js out of the SSR bundle
  const THREE = await import('three')

  const isMobile = window.innerWidth < 768

  // ── RENDERER ──────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: !isMobile })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  renderer.setSize(el.offsetWidth, el.offsetHeight)

  // ── SCENE / CAMERA ────────────────────────────────────────────
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, el.offsetWidth / el.offsetHeight, 0.1, 100)
  camera.position.set(0, 0.4, 3.8) // slightly elevated so sphere sits in upper hero space

  const clock = new THREE.Clock()

  // ── SPHERE PARTICLE CLOUD ─────────────────────────────────────
  // IcosahedronGeometry gives evenly distributed vertices on a sphere
  const detail = isMobile ? 3 : 4  // ~162 pts at 3, ~642 pts at 4
  const icoGeo = new THREE.IcosahedronGeometry(1.3, detail)
  const posAttr = icoGeo.attributes.position

  // Deduplicate vertices (IcosahedronGeometry repeats edges)
  const seen = new Set<string>()
  const verts: number[] = []
  for (let i = 0; i < posAttr.count; i++) {
    const k = `${posAttr.getX(i).toFixed(3)},${posAttr.getY(i).toFixed(3)},${posAttr.getZ(i).toFixed(3)}`
    if (!seen.has(k)) {
      seen.add(k)
      verts.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
    }
  }
  icoGeo.dispose()

  const sphereGeo = new THREE.BufferGeometry()
  sphereGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))

  const sphereMat = new THREE.PointsMaterial({
    size: isMobile ? 0.034 : 0.024,
    color: 0xaaff00,
    transparent: true,
    opacity: 0.88,
    sizeAttenuation: true,
  })

  const sphere = new THREE.Points(sphereGeo, sphereMat)
  scene.add(sphere)

  // ── AMBIENT DRIFTING PARTICLES ────────────────────────────────
  const ambientCount = isMobile ? 120 : 300
  const aPos = new Float32Array(ambientCount * 3)
  for (let i = 0; i < ambientCount; i++) {
    // Random points in a shell between r=1.5 and r=3.5
    const r = 1.5 + Math.random() * 2.0
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    aPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    aPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    aPos[i * 3 + 2] = r * Math.cos(phi)
  }
  const ambientGeo = new THREE.BufferGeometry()
  ambientGeo.setAttribute('position', new THREE.BufferAttribute(aPos, 3))
  const ambientMat = new THREE.PointsMaterial({
    size: 0.011,
    color: 0xaaff00,
    transparent: true,
    opacity: 0.28,
    sizeAttenuation: true,
  })
  const ambient = new THREE.Points(ambientGeo, ambientMat)
  scene.add(ambient)

  // ── MOUSE PARALLAX ────────────────────────────────────────────
  const raw  = { x: 0, y: 0 }
  const lerp = { x: 0, y: 0 }

  const onMouseMove = (e: MouseEvent) => {
    raw.x =  (e.clientX / window.innerWidth  - 0.5) * 2
    raw.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('mousemove', onMouseMove, { passive: true })

  // ── RESIZE ────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => {
    const w = el.offsetWidth
    const h = el.offsetHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })
  ro.observe(el)

  // ── ANIMATION LOOP ────────────────────────────────────────────
  const tick = () => {
    animFrame = requestAnimationFrame(tick)
    if (document.hidden) return

    const t = clock.getElapsedTime()

    // Smooth-lerp mouse parallax (easing factor 0.04 = slow, silky)
    lerp.x += (raw.x * 0.22 - lerp.x) * 0.04
    lerp.y += (raw.y * 0.22 - lerp.y) * 0.04

    // Sphere: continuous slow rotation + parallax offset on top
    sphere.rotation.y = t * 0.14 + lerp.x
    sphere.rotation.x = t * 0.07 + lerp.y

    // Ambient cloud rotates slower and slightly differently
    ambient.rotation.y = t * 0.05 + lerp.x * 0.4
    ambient.rotation.x = t * 0.03 + lerp.y * 0.4

    renderer.render(scene, camera)
  }
  tick()

  // ── CLEANUP REFS ──────────────────────────────────────────────
  dispose = () => {
    window.removeEventListener('mousemove', onMouseMove)
    ro.disconnect()
    sphereGeo.dispose()
    ambientGeo.dispose()
    sphereMat.dispose()
    ambientMat.dispose()
    renderer.dispose()
  }
})

onUnmounted(() => {
  if (animFrame !== null) cancelAnimationFrame(animFrame)
  dispose?.()
})
</script>

<style scoped>
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;

  /* Fade edges so the canvas blends into the dark background:
     centered at 50% H / 38% V so the sphere feels in the upper half,
     bottom fades out before the hero text zone */
  mask-image: radial-gradient(ellipse 85% 72% at 50% 38%, black 45%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 85% 72% at 50% 38%, black 45%, transparent 100%);

  /* Fade in after hero text animations settle */
  opacity: 0;
  animation: cvFadeIn 1.8s ease 0.6s forwards;
}

@keyframes cvFadeIn {
  to { opacity: 0.75; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-canvas {
    opacity: 0.75;
    animation: none;
  }
}

@media (max-width: 900px) {
  .hero-canvas {
    /* On mobile the hero is shorter; shift mask center up */
    mask-image: radial-gradient(ellipse 100% 60% at 50% 35%, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 100% 60% at 50% 35%, black 40%, transparent 100%);
  }
}
</style>
