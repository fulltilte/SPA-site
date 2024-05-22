function removeActiveClassFromLinks() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-link');
    });
}

function changeBackgroundColor(element) {
    removeActiveClassFromLinks();
    element.classList.add('active-link');
}

window.addEventListener('load', () => {
    const path = window.location.hash;
    removeActiveClassFromLinks();
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href') === path);
    });
});
