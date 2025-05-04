// Generate floating bubbles
window.addEventListener('DOMContentLoaded', () => {
  const bubbleContainer = document.createElement('div');
  bubbleContainer.className = 'bubbles';

  for (let i = 0; i < 30; i++) {
    const span = document.createElement('span');
    span.style.setProperty('--i', i);
    bubbleContainer.appendChild(span);
  }

  document.body.appendChild(bubbleContainer);
});
