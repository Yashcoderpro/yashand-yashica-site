// Countdown logic
const countdown = () => {
  const eventDate = new Date("2025-12-25");
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "Happy Anniversary!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `${days}d ${hrs}h ${mins}m ${secs}s`;
};

setInterval(countdown, 1000);

// Password check
function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "yashicaisbest") {
    document.getElementById("secret").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}
