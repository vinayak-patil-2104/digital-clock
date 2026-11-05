// Grab the elements from the HTML using their IDs
const timeText = document.getElementById("time-text");
const dateText = document.getElementById("header-date");
const dayText = document.getElementById("header-day");
const greetingText = document.getElementById("greetings-text");

// getDay() gives a number (0-6), so we use this list to get the name
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

    // Time, e.g. "10:01:55 AM"
    timeText.textContent = now.toLocaleTimeString("en-US");

    // Date, e.g. "4/11/2026" (day/month/year)
    // getMonth() starts from 0, so we add 1
    dateText.textContent = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();

    // Day name, e.g. "Wednesday"
    dayText.textContent = days[now.getDay()];

    // Greeting based on the current hour
    greetingText.textContent = getGreeting(now.getHours());
}

// Run once immediately so the page doesn't wait 1 second to show the time
updateClock();

// Then repeat every 1000 ms (1 second)
setInterval(updateClock, 1000);