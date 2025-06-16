function toggleDarkMode() {
  const body = document.body;
  if (body.style.background === 'rgb(245, 245, 220)' || body.style.background === '#f5f5dc') {
    // switch to dark cream (light mode)
    body.style.background = '#d2b48c';
  } else {
    // switch to light cream (dark mode)
    body.style.background = '#f5f5dc';
  }
}

document.getElementById("contactBtn").addEventListener("click", function() {
  document.getElementById("contactOptions").classList.remove("hidden");
  this.style.display = "none";
});
