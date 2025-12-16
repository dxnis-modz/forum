// JS für sanft ausklappbare Update-Logs
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const log = button.nextElementSibling; // div.update-log
    log.classList.toggle('show');          // Toggle Klasse

    // Button-Text ändern
    if (log.classList.contains('show')) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "Show Details";
    }
  });
});
