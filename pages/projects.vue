<template>
  <div>
    <!-- Page Header -->
    <div class="page-header">
      <div>
        <div class="section-label">Portfolio</div>
        <h1 class="page-title">All<br /><span>Projects.</span></h1>
      </div>
      <p class="page-header-right">
        A collection of web projects — from corporate sites and e-commerce platforms to city portals and SSR apps. Each one built with care for performance, design, and user experience.
      </p>
    </div>

    <!-- Filters -->
    <div class="filters">
      <span class="filter-label">Filter</span>
      <button
        v-for="f in filters"
        :key="f.value"
        class="filter-btn"
        :class="{ active: activeFilter === f.value }"
        @click="activeFilter = f.value"
      >
        {{ f.label }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-section">
      <div class="projects-grid">
        <div
          v-for="(project, i) in filteredProjects"
          :key="project.name"
          class="project-card"
          :class="{ featured: project.featured && activeFilter === 'all' }"
        >
          <a :href="project.url" target="_blank" rel="noopener" class="project-thumb">
            <div class="project-thumb-inner">
              <div class="project-thumb-num">0{{ i + 1 }}</div>
              <div class="project-thumb-name">{{ project.name }}</div>
            </div>
          </a>
          <div class="project-body">
            <div class="project-meta">
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <span class="project-year">{{ project.year }}</span>
            </div>
            <div class="project-name">{{ project.name }}</div>
            <div class="project-desc">{{ project.desc }}</div>
            <div class="project-footer">
              <a :href="project.url" target="_blank" rel="noopener" class="project-link">
                View Project <span class="project-link-arrow">↗</span>
              </a>
              <span class="project-type">{{ project.type }}</span>
            </div>
          </div>
        </div>

        <div v-if="filteredProjects.length === 0" class="empty-state">
          No projects match this filter.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Projects — Dilmurod Ismoilov' })

const { projects } = usePortfolioData()

const filters = [
  { label: 'All',      value: 'all' },
  { label: 'Frontend', value: 'Frontend' },
  { label: 'React',    value: 'React' },
  { label: 'Vue',      value: 'Vue' },
  { label: 'Nuxt',     value: 'Nuxt' },
  { label: 'Next',     value: 'Next' },
]

const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.tags.some((t) => t.includes(activeFilter.value)))
})
</script>

<style scoped>
/* ── PAGE HEADER ── */
.page-header {
  padding: 160px 48px 80px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--text);
}

.page-title span {
  color: var(--accent);
}

.page-header-right {
  max-width: 320px;
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.75;
  font-weight: 300;
  flex-shrink: 0;
}

/* ── FILTERS ── */
.filters {
  padding: 32px 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}

.filter-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-right: 4px;
}

.filter-btn {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--muted);
  background: none;
  border: 1px solid var(--border);
  padding: 6px 16px;
  border-radius: 100px;
  cursor: none;
  transition: all 0.2s;
}

.filter-btn:hover {
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.2);
}

.filter-btn.active {
  color: var(--bg);
  background: var(--accent);
  border-color: var(--accent);
}

/* ── GRID ── */
.projects-section {
  padding: 56px 48px 120px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  cursor: none;
  transition: border-color 0.3s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
}

.project-card.featured {
  grid-column: span 2;
}

.project-thumb {
  display: block;
  text-decoration: none;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
  background: var(--bg3);
}

.project-thumb-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: repeating-linear-gradient(
    -45deg,
    var(--bg3) 0px,
    var(--bg3) 8px,
    rgba(255, 255, 255, 0.025) 8px,
    rgba(255, 255, 255, 0.025) 16px
  );
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-thumb-inner {
  transform: scale(1.04);
}

.project-thumb-num {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.06);
  line-height: 1;
}

.project-thumb-name {
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.project-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.project-year {
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.06em;
}

.project-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.65;
  flex: 1;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;
}

.project-link:hover {
  color: var(--accent);
}

.project-link-arrow {
  transition: transform 0.2s;
}

.project-link:hover .project-link-arrow {
  transform: translate(3px, -3px);
}

.project-type {
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 0;
  color: var(--muted);
  font-size: 0.9rem;
}

/* ── RESPONSIVE ── */
@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-card.featured {
    grid-column: span 1;
  }
}

@media (max-width: 680px) {
  .page-header {
    flex-direction: column;
    padding: 140px 24px 60px;
  }

  .filters {
    padding: 24px;
  }

  .projects-section {
    padding: 40px 24px 80px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
