// Getting html elements
const timeText = document.getElementById("time-text");
const dateText = document.getElementById("header-date");
const dayText = document.getElementById("header-day");
const greetingText = document.getElementById("greetings-text");

// Days array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getGreeting(hour) {
    // hour is 0-23 (24-hour format)
    if (hour < 6) {
        return "SLEEP WELL";
    } else if (hour < 12) {
        return "GOOD MORNING";
    } else if (hour < 17) {
        return "GOOD AFTERNOON";
    } else if (hour < 21) {
        return "GOOD EVENING";
    } else {
        return "GOOD NIGHT";
    }
}

function updateClock() {
    const now = new Date();

    // Time
    timeText.textContent = now.toLocaleTimeString("en-US");
    // getMonth() starts from 0, so we add 1
    dateText.textContent = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    // Day name
    dayText.textContent = days[now.getDay()];
    // Greeting based on the current hour
    greetingText.textContent = getGreeting(now.getHours());
}

updateClock();
setInterval(updateClock, 1000);
