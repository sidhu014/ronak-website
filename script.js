document.getElementById("contactBtn").addEventListener("click", function() {
  document.getElementById("contactOptions").classList.remove("hidden");
  this.style.display = "none";
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
