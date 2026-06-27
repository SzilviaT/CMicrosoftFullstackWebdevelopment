const darkModeButton = document.getElementById('dark-mode-toggle');

if (darkModeButton) {
  const body = document.body;

  const applyMode = (lightMode) => {
    body.classList.toggle('light-mode', lightMode);
    darkModeButton.textContent = lightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    localStorage.setItem('lightModeEnabled', lightMode ? 'true' : 'false');
  };

  const savedMode = localStorage.getItem('lightModeEnabled');
  const initialLightMode = savedMode === 'true';
  applyMode(initialLightMode);

  darkModeButton.addEventListener('click', () => {
    const isLight = !body.classList.contains('light-mode');
    applyMode(isLight);
  });
}
