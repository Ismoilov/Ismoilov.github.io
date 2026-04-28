<template>
  <div class="project-card">
    <a :href="project.url" target="_blank" rel="noopener" class="project-img">
      <div class="project-img-inner">
        <div class="project-img-icon">⬜</div>
        <div class="project-img-label">{{ project.label }}</div>
      </div>
    </a>
    <div class="project-info">
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="project-name">{{ project.name }}</div>
      <div class="project-desc">{{ project.desc }}</div>
      <a :href="project.url" target="_blank" rel="noopener" class="project-link">
        View Project <span class="project-link-arrow">↗</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/usePortfolioData'

defineProps<{ project: Project }>()
</script>

<style scoped>
.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: none;
  transition: border-color 0.3s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  border-color: rgba(255, 255, 255, 0.14);
  transform: translateY(-4px);
}

.project-img {
  display: block;
  text-decoration: none;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
}

.project-img-inner {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    -45deg,
    var(--bg3) 0px,
    var(--bg3) 8px,
    rgba(255, 255, 255, 0.025) 8px,
    rgba(255, 255, 255, 0.025) 16px
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-img-inner {
  transform: scale(1.03);
}

.project-img-label {
  font-family: monospace;
  font-size: 0.7rem;
  color: var(--muted);
  text-align: center;
  line-height: 1.5;
  padding: 0 16px;
  white-space: pre-line;
}

.project-img-icon {
  font-size: 1.5rem;
  opacity: 0.3;
}

.project-info {
  padding: 20px 24px 24px;
}

.project-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.project-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
  margin-bottom: 6px;
}

.project-desc {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
  text-decoration: none;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s, transform 0.3s, color 0.2s;
}

.project-link-arrow {
  font-size: 0.9rem;
  transition: transform 0.2s;
}

.project-card:hover .project-link {
  opacity: 1;
  transform: translateY(0);
}

.project-link:hover {
  color: var(--accent);
}

.project-link:hover .project-link-arrow {
  transform: translate(3px, -3px);
}
</style>
