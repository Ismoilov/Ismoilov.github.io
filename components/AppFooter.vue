<template>
  <footer>
    <div class="footer-copy">© 2026 Dilmurod Ismoilov. All rights reserved.</div>
    <div class="footer-socials">
      <a href="https://t.me/Dilmur0d99" target="_blank" rel="noopener" class="social-link">Telegram</a>
      <a
        href="https://www.linkedin.com/in/dilmurod-ismoilov-545657199/"
        target="_blank"
        rel="noopener"
        class="social-link"
      >LinkedIn</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: 40px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--muted);
}

.footer-socials {
  display: flex;
  gap: 20px;
}

.social-link {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.social-link:hover {
  color: var(--text);
}

@media (max-width: 900px) {
  footer {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
