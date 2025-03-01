document.getElementById('hamburger-menu').addEventListener('click', function () {
    const mainNav = document.getElementById('main-nav');
    if (mainNav.style.display === 'block') {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'block';
    }
});
