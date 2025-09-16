// Dark mode toggle with persistence
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-theme');

  // Load saved theme
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.body.classList.add('dark');
  }

  // Update button text
  function refreshButtons() {
    const isDark = document.body.classList.contains('dark');
    buttons.forEach(btn => {
      btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }

  // Attach listeners
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      refreshButtons();
    });
  });

  refreshButtons();
});
