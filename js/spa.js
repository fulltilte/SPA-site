document.addEventListener('DOMContentLoaded', () => {
    renderPage();

    window.addEventListener('popstate', renderPage);
});

const renderPage = () => {
    const path = window.location.pathname;

    const routes = {
        '': '/activity.html',
        '/map': '/map.html',
        '/timer': '/timer.html'
    };

    const pagePath = routes[path] || '/activity.html';

    fetch(pagePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found: ' + pagePath);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('app').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching page:', error);
        });
};

const navigateTo = (path) => {
    history.pushState(null, null, path);
    renderPage();
};

document.getElementById('act-link').addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/');
});

document.getElementById('mapButton').addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/map');
});

document.getElementById('timer-link').addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/timer');
});
