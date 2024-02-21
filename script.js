const element = document.getElementById('element');

// Detect when the fade-out animation ends
element.addEventListener('transitionend', () => {
  if (element.classList.contains('fade-out-complete')) {
    // Navigate to another page when fade-out animation completes
  window.location.assign("ques.html"); // Replace with your desired URL
  }
});

// Add fade-out class to trigger the animation
element.classList.add('fade-out');

// Add class to indicate animation completion
element.classList.add('fade-out-complete');
