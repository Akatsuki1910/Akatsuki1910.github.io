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
});
