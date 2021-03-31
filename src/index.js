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
