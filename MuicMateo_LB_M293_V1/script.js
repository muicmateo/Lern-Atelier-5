document.addEventListener('DOMContentLoaded', () => {
    const imageItems = document.querySelectorAll('.image-item');
    let enlargedImageContainer = null;
  
    imageItems.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        if (!enlargedImageContainer) {
          enlargedImageContainer = document.createElement('div');
          enlargedImageContainer.classList.add('enlarged-image');
          document.body.appendChild(enlargedImageContainer);
        }
        enlargedImageContainer.innerHTML = `<img src="${imgSrc}" />`;
  
        enlargedImageContainer.addEventListener('click', () => {
          enlargedImageContainer.remove();
          enlargedImageContainer = null;
        });
      });
    });
  });
  
  document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', (e) => {
        if (isMobileView()) {
            const description = container.querySelector('.description');
            if (description) {
                description.style.display = description.style.display === 'none' ? 'block' : 'none';
            }
        } else {
            const img = container.querySelector('img');
            img.classList.toggle('enlarged');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!isMobileView() && !e.target.classList.contains('image') && document.querySelector('.enlarged')) {
        document.querySelector('.enlarged').classList.remove('enlarged');
    }
});

function isMobileView() {
    return window.matchMedia("(max-width: 768px)").matches;
}
