import { timeAwait } from './utils';

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
        await timeAwait(200);
      }

      if (v.getAttribute('target') === '_blank') {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    });
  });

  (
    [...document.getElementsByClassName('tooltip')] as HTMLSpanElement[]
  ).forEach((tooltip) => {
    const tooltipR = tooltip.getBoundingClientRect();
    const w = tooltipR.width;
    const l = tooltipR.left;
    const r = tooltipR.right;
    const vw = window.innerWidth;
    tooltip.style.left = `calc(50% - ${Math.min(l, 0) + Math.max(r - vw, 0)}px)`;
  });
});
