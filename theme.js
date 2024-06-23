function toggleTheme() {
    let theme = document.getElementsByTagName('html')[0].getAttribute('data-theme');
    if (theme === 'dark') {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');
        document.getElementById('theme').innerText = '🌜';
    } else {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark');
        document.getElementById('theme').innerText = '🌞';
    }
}