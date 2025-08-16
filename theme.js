const switchInput = document.getElementById('themeSwitch');
const toggleLabel = document.getElementsByClassName('toggle-label')[0];
const savedTheme = localStorage.getItem('theme');

// If no saved theme, use system preference
if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', defaultTheme);
    switchInput.checked = prefersDark;
} else {
    document.documentElement.setAttribute('data-theme', savedTheme);
    switchInput.checked = savedTheme === 'dark';
}

toggleLabel.textContent = switchInput.checked ? "Dark Mode" : "Light Mode";

switchInput.addEventListener('change', function () {
    const theme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleLabel.textContent = switchInput.checked ? "Dark Mode" : "Light Mode";
});