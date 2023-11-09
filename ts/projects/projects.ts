const primaryImages = document.querySelectorAll('.primaryImg');
const secondaryImages = document.querySelectorAll('.secondaryImg');

function expandImage(img) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');

  const clonedImg = img.cloneNode();
  clonedImg.classList.add('expanded');
  imgContainer.appendChild(clonedImg);
  document.body.appendChild(imgContainer);

  const closeImg = document.createElement('p');
  closeImg.innerHTML = '&times;';
  closeImg.classList.add('closeImg');
  imgContainer.appendChild(closeImg);
  document.body.appendChild(imgContainer);

  // Add an event listener to the close button
  imgContainer.addEventListener('click', () => {
    document.body.removeChild(imgContainer);
  });
}

primaryImages.forEach((img) => {
  img.addEventListener('click', () => {
    expandImage(img);
  });
});

secondaryImages.forEach((img) => {
  img.addEventListener('click', () => {
    expandImage(img);
  });
});




