  const themeBtn = document.getElementById('themeBtn');
  const modes = ['auto', 'dark', 'light'];
  const labels = { auto: 'Tema: automático', dark: 'Tema: oscuro', light: 'Tema: claro' };
  let mode = 0;
  themeBtn.addEventListener('click', () => {
    mode = (mode + 1) % modes.length;
    const m = modes[mode];
    if (m === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', m);
    themeBtn.textContent = labels[m];
  });

  const sw = document.getElementById('sw');
  const swLabel = document.getElementById('swLabel');
  sw.addEventListener('click', () => {
    const on = sw.getAttribute('aria-checked') !== 'true';
    sw.setAttribute('aria-checked', String(on));
    swLabel.textContent = on ? 'Encendido' : 'Apagado';
  });

  document.querySelectorAll('[role="tab"]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[role="tab"]').forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
    });
  });

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.addEventListener('click', async () => {
    const text = 'kivora publish --web';
    try { await navigator.clipboard.writeText(text); copyBtn.textContent = '¡Copiado!'; }
    catch (e) { copyBtn.textContent = text; }
    setTimeout(() => { copyBtn.textContent = 'Copiar comando'; }, 1600);
  });
