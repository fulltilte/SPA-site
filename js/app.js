document.addEventListener('DOMContentLoaded', () => {
    renderPage();
    
    window.addEventListener('hashchange', renderPage);
});

const renderPage = () => {
    const path = window.location.hash.substr(1);
    const routes = {
        '/': '/activity.html',
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
