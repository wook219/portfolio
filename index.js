// index.js
document.addEventListener('DOMContentLoaded', function() {
    // 섹션 스크롤 기능
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    const toTopBtn = document.getElementById('toTop');

    // 네비게이션 클릭 이벤트
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 현재 활성화된 메뉴의 클래스를 제거
            navItems.forEach(i => i.classList.remove('active'));
            // 클릭된 메뉴에 활성화 클래스 추가
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // 윈도우 높이와 섹션 높이를 고려하여 스크롤 위치 계산
            const windowHeight = window.innerHeight;
            const sectionHeight = targetSection.getBoundingClientRect().height;
            const targetPosition = targetSection.offsetTop;
            
            // 섹션이 화면 중앙에 오도록 조정
            const scrollPosition = targetPosition - (windowHeight / 2) + (sectionHeight / 2);
            
            // 부드러운 스크롤 적용
            window.scrollTo({
                top: Math.max(0, scrollPosition),
                behavior: 'smooth'
            });
        });
    });
    
    // 스크롤 이벤트 처리
    window.addEventListener('scroll', () => {
        // 활성 메뉴 표시
        let current = '';
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // 현재 화면의 중앙점 계산
            const viewportMiddle = scrollY + (window.innerHeight / 2);
            
            if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });

        // 맨 위로 가기 버튼 표시/숨김
        if (window.pageYOffset > 200) {
            toTopBtn.classList.add('show');
        } else {
            toTopBtn.classList.remove('show');
        }
    });
    
    // 맨 위로 가기 버튼 클릭 이벤트
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});