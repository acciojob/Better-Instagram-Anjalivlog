//your code here
var dragImage = null;

function handleDragStart(e) {
    dragImage = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragImage !== this) {
        var sourceIndex = Array.from(dragImage.parentNode.children).indexOf(dragImage);
        var targetIndex = Array.from(this.parentNode.children).indexOf(this);

        var images = document.querySelectorAll('.image');
        var tempHTML = this.outerHTML;
        this.outerHTML = dragImage.outerHTML;
        dragImage.outerHTML = tempHTML;

        // Re-attach drag and drop event listeners to the new elements
        images.forEach(image => {
            image.addEventListener('dragstart', handleDragStart);
            image.addEventListener('dragover', handleDragOver);
            image.addEventListener('drop', handleDrop);
        });
    }

    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('#drag1, #drag2, #drag3, #drage4, #drag5, #drag6');

    images.forEach(image => {
        image.addEventListener('dragstart', handleDragStart);
        image.addEventListener('dragover', handleDragOver);
        image.addEventListener('drop', handleDrop);
    });
});
