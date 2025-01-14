document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const figures = gallery.querySelectorAll('figure');

    // Automatically add tabindex to each figure for keyboard navigation
    figures.forEach(figure => {
        figure.setAttribute('tabindex', '0'); // Add tabindex attribute
    });

    // Function to handle mouseover (scale up the image)
    function onImageMouseOver(event) {
        const image = event.target;
        if (image.tagName === 'IMG') {
            image.style.transform = 'scale(1.2)';
        }
    }

    // Function to handle mouseout (reset the image scale)
    function onImageMouseOut(event) {
        const image = event.target;
        if (image.tagName === 'IMG') {
            image.style.transform = 'scale(1)';
        }
    }

    // Function to handle keyboard focus events (add visual focus)
    function onFigureFocus(event) {
        const figure = event.target;
        figure.style.border = '2px dashed #0078D7';
        figure.style.padding = '5px';
    }

    // Function to handle keyboard blur events (remove visual focus)
    function onFigureBlur(event) {
        const figure = event.target;
        figure.style.border = 'none';
        figure.style.padding = '0';
    }

    // Add event listeners for interactivity
    figures.forEach(figure => {
        figure.addEventListener('mouseover', onImageMouseOver);
        figure.addEventListener('mouseout', onImageMouseOut);
        figure.addEventListener('focus', onFigureFocus);
        figure.addEventListener('blur', onFigureBlur);
    });
});
