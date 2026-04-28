<template>
  <nav :class="{ scrolled }">
    <NuxtLink to="/" class="nav-logo">D<span>.</span>Ismoilov</NuxtLink>

    <ul class="nav-links">
      <li>
        <NuxtLink to="/#about" active-class="" exact-active-class=""
          :class="{ active: activeSection === 'about' }"
          @click="setActive('about')">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#projects" active-class="" exact-active-class=""
          :class="{ active: route.path === '/projects' || activeSection === 'projects' }"
          @click="setActive('projects')">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#contact" active-class="" exact-active-class=""
          :class="{ active: activeSection === 'contact' }"
          @click="setActive('contact')">Contact</NuxtLink>
      </li>
    </ul>

    <div class="nav-right">
      <a href="https://www.linkedin.com/in/dilmurod-ismoilov-545657199/"
        target="_blank" rel="noopener" class="nav-cta">Say Hello →</a>

      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li>
          <NuxtLink to="/#about" active-class="" exact-active-class=""
            :class="{ active: activeSection === 'about' }"
            @click="closeMenu('about')">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#projects" active-class="" exact-active-class=""
            :class="{ active: route.path === '/projects' || activeSection === 'projects' }"
            @click="closeMenu('projects')">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#contact" active-class="" exact-active-class=""
            :class="{ active: activeSection === 'contact' }"
            @click="closeMenu('contact')">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const scrolled      = ref(false)
const menuOpen      = ref(false)
const activeSection = ref('')

function setActive(id: string) { activeSection.value = id }
function closeMenu(id: string) { setActive(id); menuOpen.value = false }

function updateActive() {
  scrolled.value = window.scrollY > 40
  if (route.path !== '/') return
  const trigger = window.scrollY + window.innerHeight * 0.45
  let current = ''
  for (const id of ['about', 'projects', 'contact']) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= trigger) current = id
  }
  activeSection.value = current
}

onMounted(() => { updateActive(); window.addEventListener('scroll', updateActive, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', updateActive))
watch(() => route.path, () => { menuOpen.value = false; nextTick(updateActive) })
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.4s, background 0.4s, backdrop-filter 0.4s;
}
nav.scrolled {
  background: rgba(8, 8, 9, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: var(--border);
}

.nav-logo {
  font-family: var(--font-display);
  font-weight: 800; font-size: 1.2rem;
  letter-spacing: -0.02em;
  color: var(--text); text-decoration: none; flex-shrink: 0;
}
.nav-logo span { color: var(--accent); }

.nav-links { display: flex; gap: 36px; list-style: none; }
.nav-links a {
  position: relative;
  font-size: 0.85rem; font-weight: 500;
  color: var(--muted); text-decoration: none;
  letter-spacing: 0.06em; text-transform: uppercase;
  transition: color 0.2s;
}
.nav-links a::after {
  content: ''; position: absolute;
  bottom: -4px; left: 0; width: 0; height: 1px;
  background: var(--accent); transition: width 0.25s ease;
}
.nav-links a:hover,
.nav-links a.active        { color: var(--text); }
.nav-links a:hover::after,
.nav-links a.active::after { width: 100%; }

.nav-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }

.nav-cta {
  font-size: 0.8rem; font-weight: 600;
  color: var(--bg); background: var(--accent);
  padding: 9px 22px; border-radius: 100px;
  text-decoration: none; letter-spacing: 0.04em; white-space: nowrap;
  transition: opacity 0.2s, transform 0.2s;
}
.nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }

.hamburger {
  display: none; flex-direction: column; justify-content: center;
  gap: 5px; width: 36px; height: 36px;
  background: none; border: none; padding: 6px; cursor: none;
}
.hamburger span {
  display: block; width: 100%; height: 2px;
  background: var(--text); border-radius: 2px;
  transition: transform 0.35s ease, opacity 0.25s ease, width 0.3s ease;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu {
  display: none; position: absolute;
  top: 100%; left: 0; right: 0;
  background: rgba(8, 8, 9, 0.97);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--border);
  overflow: hidden; max-height: 0;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu.open { max-height: 320px; }
.mobile-menu ul { list-style: none; padding: 16px 24px 24px; display: flex; flex-direction: column; gap: 4px; }
.mobile-menu a {
  display: block; font-size: 1.1rem; font-weight: 600;
  font-family: var(--font-display); letter-spacing: 0.04em;
  text-transform: uppercase; color: var(--muted); text-decoration: none;
  padding: 12px 0; border-bottom: 1px solid var(--border);
  transition: color 0.2s, padding-left 0.2s;
}
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu a:hover,
.mobile-menu a.active { color: var(--accent); padding-left: 8px; }

@media (max-width: 900px) {
  nav { padding: 16px 20px; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }
}
@media (max-width: 480px) {
  .nav-cta { padding: 8px 16px; font-size: 0.75rem; }
}
</style>
