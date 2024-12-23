document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    const closeImageBtn = document.getElementsByClassName('close-image')[0];
    const imageGallery = document.querySelector('.image-gallery');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // 프로젝트별 이미지 데이터
    const projectImages = {
        project1: [
            "image/project1/image1.png",
            "image/project1/image2.png",
            "image/project1/image3.png",
            "image/project1/image4.png",
            "image/project1/image5.png",
            "image/project1/image6.png",
            "image/project1/image7.png",
            "image/project1/image8.png",
            "image/project1/image9.png",
        ],
        project2: [
            "image/project2/image1.png",
            "image/project2/image2.png",
            "image/project2/image3.png",
            "image/project2/image4.png",
            "image/project2/image5.png",
            "image/project2/image6.png",
            "image/project2/image7.png",
            "image/project2/image8.png",
            "image/project2/image9.png",
            "image/project2/image10.png",
            "image/project2/image11.png",
            "image/project2/image12.png",
            "image/project2/image13.png",
            "image/project2/image14.png",
        ],
        project3: [
            "image/project3/image1.png",
            "image/project3/image2.png",
            "image/project3/image3.png",
            "image/project3/image4.png",
            "image/project3/image5.png",
            "image/project3/image6.png",
            "image/project3/image7.png",
        ],
        project4: [
            "image/project4/image1.png",
            "image/project4/image2.png",
            "image/project4/image3.png",
            "image/project4/image4.png",
            "image/project4/image5.png",
            "image/project4/image6.png",
            "image/project4/image7.png",
            "image/project4/image8.png",
            "image/project4/image9.png",
            "image/project4/image10.png",
        ],
        // 다른 프로젝트의 이미지들도 추가
    };

    let currentImageIndex = 0;

    function openImageModal(button) {
        const projectId = button.dataset.project;
        const images = projectImages[projectId];
        
        if (images && images.length > 0) {
            imageGallery.innerHTML = '';
            
            // 이미지 갤러리 컨테이너 추가
            const galleryContainer = document.createElement('div');
            galleryContainer.className = 'gallery-container';
            
            images.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.className = index === 0 ? 'active' : '';
                galleryContainer.appendChild(img);
            });
            
            imageGallery.appendChild(galleryContainer);
            
            // 컨트롤 요소들 추가
            const controls = document.createElement('div');
            controls.className = 'image-controls';
            controls.innerHTML = `
                <button class="nav-btn prev"><i class="fas fa-chevron-left"></i></button>
                <button class="nav-btn next"><i class="fas fa-chevron-right"></i></button>
            `;
            imageGallery.appendChild(controls);
            
            // 카운터 추가
            const counter = document.createElement('div');
            counter.className = 'image-counter';
            imageGallery.appendChild(counter);
            
            currentImageIndex = 0;
            updateImageCounter();
            imageModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // 컨트롤 버튼에 이벤트 리스너 추가
            controls.querySelector('.prev').addEventListener('click', showPrevImage);
            controls.querySelector('.next').addEventListener('click', showNextImage);
        }
    }

    function updateImageCounter() {
        const images = imageGallery.getElementsByTagName('img');
        const counter = imageGallery.querySelector('.image-counter');
        if (counter) {
            counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        }
    }

    function showImage(index) {
        const images = imageGallery.getElementsByTagName('img');
        Array.from(images).forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        currentImageIndex = index;
        updateImageCounter();
    }

    function showPrevImage() {
        const images = imageGallery.getElementsByTagName('img');
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    }

    function showNextImage() {
        const images = imageGallery.getElementsByTagName('img');
        const newIndex = (currentImageIndex + 1) % images.length;
        showImage(newIndex);
    }

    // 닫기 버튼 이벤트
    if (closeImageBtn) {
        closeImageBtn.onclick = function() {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }

    // openImageModal 함수를 전역으로 노출
    window.openImageModal = openImageModal;
});

