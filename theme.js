function setTheme(theme) {
    const themeStyle = document.getElementById('theme-style');
    if (theme === 'dark') {
      themeStyle.setAttribute('href', '/dark.css');
      document.getElementById('themeToggle').innerHTML = '<i class="ri-sun-fill"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      themeStyle.setAttribute('href', '/styles.css');
      document.getElementById('themeToggle').innerHTML = '<i class="ri-moon-fill"></i>';
      localStorage.setItem('theme', 'light');
    }
  }
  
  function toggleTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkScheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }