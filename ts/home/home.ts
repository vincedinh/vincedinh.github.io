document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById('heroImg') as HTMLElement;
  if (element.id === 'heroImg') {
      element.className += ' responsive';
  }
  else {
      element.className = '';
  }

  const dividers = document.getElementsByClassName('divider') as HTMLCollection;
  const dividerArray = Array.from(dividers);
  if (window.innerWidth <= 600) {
    dividerArray.forEach(divider => {
      divider.textContent = 'a';
    });
  } else {
    dividerArray.forEach(divider => {
      divider.textContent = 'fad';
    });
  }
});