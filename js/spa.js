document.addEventListener('DOMContentLoaded', () => {
    renderPage();

    // Обработка изменений в адресной строке при использовании кнопок браузера "Назад" и "Вперед"
    window.addEventListener('popstate', renderPage);
});

const renderPage = () => {
    const path = window.location.pathname; // получаем текущий путь

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

// Функция для обновления адресной строки и вызова renderPage
const navigateTo = (path) => {
    history.pushState(null, null, path);
    renderPage();
};

document.getElementById('act-link').addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    navigateTo('/');
});

document.getElementById('mapButton').addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    navigateTo('/map');
});

document.getElementById('timer-link').addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    navigateTo('/timer');
});

// Добавьте аналогичные обработчики для других ссылок, если они есть
