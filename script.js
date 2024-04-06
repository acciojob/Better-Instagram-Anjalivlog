//your code here
let draggedImage = null;

function onDragStart(event) {
  draggedImage = event.target.closest('.image');
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  let targetImage = event.target.closest('.image');
  if (targetImage && targetImage !== draggedImage) {
    let tempBackgroundImage = targetImage.style.backgroundImage;
    targetImage.style.backgroundImage = draggedImage.style.backgroundImage;
    draggedImage.style.backgroundImage = tempBackgroundImage;
  }
  draggedImage = null;
}

// Add event listeners to the images
let images = document.querySelectorAll('.image');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('dragstart', onDragStart, false);
  images[i].addEventListener('dragover', onDragOver, false);
  images[i].addEventListener('drop', onDrop, false);
}
