
// Need to revisit event bubbling in JavaScript

const toggle = document.getElementById('dark-mode-toggle');
const svg = document.getElementById('svgToggle')

toggle.addEventListener('click', () => {
  console.log('CLICKED')
  if(document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
});

// https://www.npmjs.com/package/canvas-confetti

const memoji = document.getElementById('memoji');

memoji.addEventListener('click', () => {
  const rect = memoji.getBoundingClientRect();
  confetti({
    particleCount: 100,
    spread: 70,
    // 0.603125 is where the lid of the MacBook is located
    origin: { y: ((rect.y + (rect.height * 0.603125)) / window.innerHeight)}
  });
});
