import { timeAwait } from './utils';

const TRANSITION_MS = 250;

const init = () => {
  const show = () => (document.body.dataset.loaded = 'true');
  const hide = () => (document.body.dataset.loaded = 'false');
  show();

  window.addEventListener('pageshow', show);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') show();
  });

  document.querySelectorAll('a').forEach((v) => {
    v.addEventListener('click', async (e) => {
      // Allow browser defaults for modified clicks, non-primary clicks, or already prevented clicks
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const href = v.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }

      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // External new-tab links and mailto should follow standard browser navigation
      if (v.getAttribute('target') === '_blank' || href.startsWith('mailto:')) {
        return;
      }

      // In-page navigation with transition
      e.preventDefault();
      hide();
      await timeAwait(TRANSITION_MS);
      window.location.href = href;
    });
  });

  // Tooltip repositioning
  new ResizeObserver(() => {
    (
      [...document.getElementsByClassName('tooltip')] as HTMLSpanElement[]
    ).forEach((tooltip) => {
      const tooltipR = tooltip.getBoundingClientRect();
      const l = tooltipR.left;
      const r = tooltipR.right;
      const vw = window.innerWidth;
      tooltip.style.left = `calc(50% - ${Math.min(l, 0) + Math.max(r - vw, 0)}px)`;
    });
  }).observe(document.body);

  // Scroll-reveal animations
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          animateObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  );

  document.querySelectorAll('[data-animate], [data-stagger]').forEach((el) => {
    animateObserver.observe(el);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
