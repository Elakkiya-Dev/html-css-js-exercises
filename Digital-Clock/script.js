function showTime() {
    debugger
  const date = new Date();

  // Time formatting
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeStr = `🕒 ${hours}:${minutes}:${seconds} ${ampm}`;

  // Date formatting
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const dateStr = `📅 ${dayName}, ${monthName} ${day}, ${year}`;

  document.getElementById("currentTime").innerText = timeStr;
  document.getElementById("todayDate").innerText = dateStr;
}

setInterval(showTime, 1000);
showTime(); // Initial call