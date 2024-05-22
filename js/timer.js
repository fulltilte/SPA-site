function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    return hours.toString().padStart(2, '0') + ':' +
           minutes.toString().padStart(2, '0') + ':' +
           remainingSeconds.toString().padStart(2, '0');
}

function updateTimer() {
    let currentTime = new Date().getTime();
    let timeOnSite = Math.floor((currentTime - window.startTime) / 1000);
    let formattedTime = formatTime(timeOnSite);

    let timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerText = formattedTime;
    }
}

window.startTime = window.startTime || new Date().getTime();

setInterval(updateTimer, 100);

window.onfocus = function() {
    window.startTime = new Date().getTime();
};

window.addEventListener('beforeunload', function() {
    window.startTime = 0;
});