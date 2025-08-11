// 🌗 Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// 📄 Download resume button (Requires a resume.pdf file in your repo)
document.getElementById('download-btn').addEventListener('click', () => {
  // Replace 'resume.pdf' below with your actual PDF file's name if hosted
  window.open('Arun Subramani.pdf', '_blank');
});