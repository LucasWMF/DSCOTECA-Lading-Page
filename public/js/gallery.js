document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const closeBtn = document.getElementById('close');
    const downloadLink = document.getElementById('downloadLink');
    const galleryContentImg = document.getElementById('.galleryContent img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = item.src;
            caption.textContent = item.alt;
            downloadLink.href = item.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });

    modal.addEventListener('click', (event) => {
        if (!galleryContentImg.contains(event.target) && event.target !== downloadLink) {
            modal.style.display = 'none';
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const gallery = [
        {
            src: "",
            alt: "",
            instagram: "",
            largeY: "",
            largeX: ""
        }
    ]

});