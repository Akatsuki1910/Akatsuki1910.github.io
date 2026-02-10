import { timeAwait } from './utils';

const TRANSITION_MS = 250;

window.addEventListener('load', () => {
  const show = () => (document.body.dataset.loaded = 'true');
  const hide = () => (document.body.dataset.loaded = 'false');
  show();

  window.addEventListener('pageshow', show);
  document.addEventListener('visibilitychange', show);

  document.querySelectorAll('a').forEach((v) => {
    v.addEventListener('click', async (e) => {
      e.preventDefault();

      const href = v.getAttribute('href');
      if (!href) return;

      if (href === '#') return;
      if (href.startsWith('#')) {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (!href.includes('mailto:')) {
        hide();
        await timeAwait(TRANSITION_MS);
      }

      if (v.getAttribute('target') === '_blank') {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
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

  document
    .querySelectorAll('[data-animate], [data-stagger]')
    .forEach((el) => animateObserver.observe(el));
});
