function updateTimer() {
    let currentTime = new Date().getTime();
    
    let timeOnSite = currentTime - startTime;
    
    timeOnSite = Math.floor(timeOnSite / 1000);
    
    let hours = Math.floor(timeOnSite / 3600);
    let minutes = Math.floor((timeOnSite % 3600) / 60);
    let seconds = timeOnSite % 60;
    
    let formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    
    let timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerText = formattedTime;
    }
}

let startTime = localStorage.getItem('startTime');

if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime);
}

startTime = parseInt(startTime);

setInterval(updateTimer, 1000);

window.onfocus = function() {
    localStorage.setItem('startTime', new Date().getTime());
};

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('startTime');
});