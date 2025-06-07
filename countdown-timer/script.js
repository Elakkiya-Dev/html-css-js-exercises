let countdown;

function startCountdown() {
    debugger
  clearInterval(countdown); // clear previous timer
  const input = document.getElementById("countdownDate").value;
  const endTime = new Date(input).getTime();

  countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("output").innerText = "🎉 Time's up!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("output").innerText =
      `⏳ Time Left: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }, 1000);
}
