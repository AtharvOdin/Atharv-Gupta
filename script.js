// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set greeting based on time
const hour = new Date().getHours();
let message = "Welcome!";
if (hour < 12) message = "Good Morning!";
else if (hour < 18) message = "Good Afternoon!";
else message = "Good Evening!";
document.getElementById("Greeting").textContent = message;

// Toggle contact info
document.getElementById("toggle-contact").addEventListener("click", function () {
  const info = document.getElementById("contact-info");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    this.textContent = "Hide Contact Info";
  } else {
    info.style.display = "none";
    this.textContent = "Show Contact Info";
  }
});