const darkModeButton = document.getElementById('dark-mode-toggle');

if (darkModeButton) {
  const body = document.body;

  const applyMode = (darkMode) => {
    body.classList.toggle('dark-mode', darkMode);
    darkModeButton.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    localStorage.setItem('darkModeEnabled', darkMode ? 'true' : 'false');
  };

  const savedMode = localStorage.getItem('darkModeEnabled');
  const initialDarkMode = savedMode === 'true';
  applyMode(initialDarkMode);

  darkModeButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    applyMode(isDark);
  });
}
