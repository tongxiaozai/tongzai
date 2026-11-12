(() => {
  const sections = [...document.querySelectorAll('.ambient-surface')]
    .map((surface) => surface.parentElement);
  if (!sections.length) return;

  const syncVisibility = () => {
    document.documentElement.classList.toggle('ambient-hidden', document.hidden);
  };
  syncVisibility();
  document.addEventListener('visibilitychange', syncVisibility);

  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-ambient-active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle('is-ambient-active', entry.isIntersecting);
    }
  }, { rootMargin: '40px 0px' });
  sections.forEach((section) => observer.observe(section));

  if (!document.body.classList.contains('home-page') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('section-reveal-enabled');
  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });
  document.querySelectorAll('.statement, .experience').forEach((section) => revealObserver.observe(section));
})();
