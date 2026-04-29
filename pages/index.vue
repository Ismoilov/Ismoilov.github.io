<template>
  <div>
    <!-- Hero -->
    <section id="hero">
      <div class="hero-noise" />
      <div class="hero-bg-glow" />
      <HeroCanvas />

      <div class="hero-counter">
        <div class="hero-stat">
          <div class="hero-stat-num">6<span>+</span></div>
          <div class="hero-stat-label">Yrs Experience</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">99<span>%</span></div>
          <div class="hero-stat-label">Happy Clients</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">20<span>+</span></div>
          <div class="hero-stat-label">Projects</div>
        </div>
      </div>

      <div class="hero-eyebrow">
        <div class="hero-eyebrow-dot" />
        <span>Available for work</span>
      </div>

      <h1 class="hero-name">
        DILMUROD<br /><span class="accent-word">ISMOILOV</span>
      </h1>

      <div class="hero-bottom">
        <p class="hero-desc">
          <strong>Full-Stack Developer</strong> crafting fast, beautiful web experiences — from pixel-perfect frontends to robust backends. Always learning. Always building.
        </p>
        <div class="hero-scroll">
          <div class="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <div class="section-label">About Me</div>
      <h2 class="section-title reveal">From pixel-perfect UI<br />to powerful backends.</h2>
      <div class="about-grid">
        <div class="about-text reveal">
          <p>I'm <strong>Dilmurod Ismoilov</strong>, a full-stack developer with a passion for clean code and pixel-perfect design. I build complete web products — from beautiful frontends to scalable server-side architecture.</p>
          <p>On the backend I work with <strong>Node.js, Express.js</strong> and <strong>Nest.js</strong> to design RESTful APIs and robust services. On the frontend I craft fast, accessible interfaces with modern HTML, CSS, JS, <strong>React</strong> and <strong>Vue.js</strong>.</p>
          <p>I also build server-side rendered applications using <strong>Next.js</strong> and <strong>Nuxt.js</strong> — delivering SEO-friendly, lightning-fast web apps with great developer experience and optimized performance out of the box.</p>
          <p>My philosophy: <strong>never stop learning</strong>. Don't follow money, follow knowledge — and money will follow you.</p>
        </div>
        <div class="skills-list reveal">
          <div v-for="group in skillGroups" :key="group.label" class="skill-group">
            <div class="skill-group-label">{{ group.label }}</div>
            <div class="skill-pills">
              <span v-for="pill in group.pills" :key="pill" class="skill-pill">{{ pill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <div class="projects-header">
        <div>
          <div class="section-label">Work</div>
          <h2 class="section-title">Recent Projects</h2>
        </div>
        <NuxtLink to="/projects" class="view-all">View all ↗</NuxtLink>
      </div>

      <div class="bento-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
          :class="{ featured: project.featured }"
        />
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="section-label">Get In Touch</div>
      <h2 class="contact-big reveal">Let's Work<br /><span>Together.</span></h2>
      <p class="contact-sub reveal">
        Have a project in mind? I'd love to hear about it. Whether it's a full site build or just a quick question — my inbox is always open.
      </p>
      <div class="contact-actions reveal">
        <a href="https://t.me/Dilmur0d99" target="_blank" rel="noopener" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.022 9.531c-.149.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.885.69z" /></svg>
          Message on Telegram
        </a>
        <a href="https://www.linkedin.com/in/dilmurod-ismoilov-545657199/" target="_blank" rel="noopener" class="btn-outline">
          LinkedIn Profile ↗
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Dilmurod Ismoilov — Full-Stack Developer' })

const { projects, skillGroups } = usePortfolioData()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>
