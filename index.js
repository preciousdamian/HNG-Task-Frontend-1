// Functionalities Starts Here (HNG IT - Task 1)
const day = document.getElementById("currentDayOfTheWeek");

// Date

const currentDate = new Date();

const dayOfWeek = currentDate.getDay();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDayOfWeek = daysOfWeek[dayOfWeek];

day.innerHTML = currentDayOfWeek;

// Time

function updateClock() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    
    const amPm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

    const time = document.getElementById("currentTimeOfTheDay");
    time.innerHTML = `${hours}:${minutes}:${seconds}: ${amPm}`;
}

updateClock();

setInterval(updateClock, 1000);