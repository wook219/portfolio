// Modal functionality
const modal = document.getElementById('readmeModal');
const closeBtn = document.getElementsByClassName('close')[0];
const modalBody = document.querySelector('.modal-body');

// Project README contents (you can add more projects)
const readmeContents = {
    project1: {
        title: '인사잘해 (HR)',
        content: `
            <h1>인사잘해 (HR)</h1>
            <hr>
            <div>
                <i class="fa-solid fa-paperclip"></i>
                <h2 class = "deployment-url">Deployment URL</h2>
            </div>
            <div class="link-container">
                <label for="project-link" class="">WebSite : </label>
                <a href="http://34.47.90.224:3000/" class="project-link">http://34.47.90.224:3000/</a>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Admin Account : </label>
                <span>ID : 20241217 / password : adminadmin</span>
            </div>
            <div class="link-container test-account">
                <label for="project-link" class="">Employee Account : </label>
                <span>ID : 20241213 / password : 123123123</span>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Github(BE) : </label>
                <a href="https://github.com/wook219/hr-handlers-BE" class="project-link">https://github.com/wook219/hr-handlers-BE</a>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Github(FE) : </label>
                <a href="https://github.com/wook219/hr-handlers-FE" class="project-link">https://github.com/wook219/hr-handlers-FE</a>
            </div>
            <hr>

            <i class="fa-solid fa-location-dot"></i>
            <h2>Summary</h2>
            <p class = "summary-title">인사 및 근태 관리를 통합한 사내 HR 프로그램</p>

            <ul>
                <li>공공데이터포털 공휴일 API를 사용하여 공휴일 조회</li>
                <li>REST API를 이용한 클라이언트와 서버 독립 개발</li>
                <li>FullCalendar API를 사용하여 사원 일정 관리</li>
                <li>Swagger를 사용하여 API 문서화</li>
                <li>공통 AOP 클래스를 사용한 메서드 예외 추적 및 실행 로깅</li>
            </ul>
            <blockquote>
                <p class = "summary-title">
                개발 기능 : 홈, 휴가 관리(사원,관리자), 근태 관리(사원, 관리자), 일정 관리
                </p>
            </blockquote>
            <hr>
            
            <i class="fa-solid fa-hammer"></i>
            <h2>Tech Stack</h2>
            <p class = "summary-title">Java, Spring Boot, JPA, QueryDSL, MySQL, React, Bootstrap, Nginx</p>
            <hr>

            <i class="fa-regular fa-face-smile"></i>
            <h2>Background</h2>
            <p>
            교직원으로 근무하던 시절, 교내 통합관리 시스템(웹)에서 인사업무 처리를 하였었는데,
            출, 퇴근 처리를 본부에 직접 가서 했던 번거로움이 있었습니다. 사무실과 거리가 멀었던 본부에
            들려서 출근, 퇴근 처리를 하려면 집에서 일찍 나와야 하는 번거로움도 있었습니다. 또, 서면으로
            처리해야 하는 업무(인사 정보 변경, 정산 등)도 다수 있었습니다.
            이러한 불편했던 경험으로 팀원들에게 사내에서 사용하는 HR를 개발해보자는 의견을 제시했고,
            팀원분들이 좋게 봐주셔서 채택하게 되었습니다.
            </p>

            <p>
            자율주제 프로젝트 였다보니, 기획에 대한 구체화를 하여 컨셉을 확실히 하려고 노력했고, 페르소나 정의
            가 저희 프로젝트 정체성에 큰 도움을 주기도 하였습니다.
            </p>
            <img src="인사잘해페르소나.png" alt="페르소나 사진" class="persona-image">
            <hr>

            <i class="fa-solid fa-magnifying-glass"></i>
            <h2>Meaning</h2>
            <p>
            처음으로 공공데이터 API를 이용하여 개발해본 프로젝트입니다. FullCalendar API를 사용하여 달력 형태
            의 일정 관리 페이지를 만들었고, 달력에 공휴일을 표시할 때 DB에 모든 공휴일 날짜를 저장하여 데이터를
            계산하고, 저장하여 받아아오는 것은 비효율적이라고 생각했습니다. 구글링을 통해 공공데이터포털을 알게
            되었고, 공휴일 API를 사용하여 데이터를 가져올 수 있게 되었습니다.
            </p>

            <p>
            또한, QueryDSL을 처음 사용하여 개발해본 프로젝트이기도 하였습니다. 기존에 저는 JPA에서 제공하는 메서드만
            사용하여 findById(id), delete(Entity) 이렇게 삭제를 했다면, 이번 프로젝트에서는 QueryDSL을 사용하여
            직접 쿼리를 작성했고, delete문에 where절을 추가해 한 번의 Connection으로 처리하는 등
            DB Connection 횟수를 줄이려고 고민을 많이 했던 프로젝트였습니다.
            </p>
        `
    },
    project2: {
        title: '편집 (가구 판매 사이트)',
        content: `

            <h1>편집 (가구 판매 사이트)</h1>
            <hr>
            <div>
                <i class="fa-solid fa-paperclip"></i>
                <h2 class = "deployment-url">Deployment URL</h2>
            </div>
            <div class="link-container">
                <label for="project-link" class="">WebSite : </label>
                <a href="http://43.202.4.58:3000" class="project-link">http://43.202.4.58:3000</a>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Admin Account : </label>
                <span>ID : admin123@naver.com / password : asd123</span>
            </div>
            <div class="link-container test-account">
                <label for="project-link" class="">User Account : </label>
                <span>ID : hihi0219@naver.com / password : asd123</span>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Github(BE) : </label>
                <a href="https://github.com/wook219/pyeonjip-BE" class="project-link">https://github.com/wook219/pyeonjip-BE</a>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Github(FE) : </label>
                <a href="https://github.com/wook219/pyeonjip-FE" class="project-link">https://github.com/wook219/pyeonjip-FE</a>
            </div>
            <hr>

            <i class="fa-solid fa-location-dot"></i>
            <h2>Summary</h2>
            <p class = "summary-title">인사 및 근태 관리를 통합한 사내 HR 프로그램</p>

            <ul>
                <li>WebSocket을 이용한 실시간 채팅 문의 구현</li>
                <li>REST API를 이용한 클라이언트와 서버 독립 개발</li>
                <li>User / Admin 권한에 따른 채팅대기방/채팅방 활성화</li>
                <li>이전 문의 내역을 통한 이력 조회 기능</li>
                <li>AWS RDS를 사용하여 팀원들과 DataBase 공유</li>
            </ul>
            <blockquote>
                <p class = "summary-title">
                개발 기능 : 채팅 기능 구현
                </p>
            </blockquote>
            <hr>
            
            <i class="fa-solid fa-hammer"></i>
            <h2>Tech Stack</h2>
            <p class = "summary-title">Java, Spring Boot, JPA, MySQL, AWS RDS, React, Bootstrap</p>
            <hr>

            <i class="fa-regular fa-face-smile"></i>
            <h2>Background</h2>
            <p>
            쇼핑몰을 주제로 진행했던 프로젝트입니다. 벤치마킹할 웹사이트를 구글링을 해보았고, 기어라운지라는 음향 관련 장비
            판매 사이트를 찾게 되었습니다. 기어라운지는 무채색으로 깔끔한 UI를 표현하는 것이 특징이었고, 가구를 판매하는
            사이트 또한 깔끔함을 강조하면 좋을 것 같아서 가구 판매 사이트로 주제를 정하였습니다.
            </p>

            <p>
            벤치마킹할 사이트에는 채팅 및 문의 관련 기능이 존재하지 않았고 그냥 클론코딩을 하는 것 보다는, 
            벤치마킹할 사이트에 없는 기능을 추가하는 것이 저에게 의미가 클 것 같아서 채팅 도메인을 맡아서 개발을
            진행하였습니다. WebSocket과 STOMP에 대해서 공부하며 개발을 진행하게 되었습니다.
            </p>
            <hr>

            <i class="fa-solid fa-magnifying-glass"></i>
            <h2>Meaning</h2>
            <p>
            처음으로 WebSocket, STOMP라는 프로토콜을 접해보고 직접 구현해본 프로젝트입니다. 
            프론트 개발에서도 React라는 처음 써보는 라이브러리를 사용했기 때문에, 시간이 부족하지 않을까 라는 걱정에
            학습과 개발을 병행하며 프로젝트를 진행하였습니다. 
            </p>

            <p>
            프로젝트가 마무리 된 후, WebSocket과 STOMP의 라이프사이클에 대해서 이해할 수 있었고,
            HTTP와 WebSocket 프로토콜의 차이에 대해서 이해하였으며, 사용자 입장에서 실시간 통신이 가능하다는 것은
            UX적으로 큰 이점을 가져갈 수 있다는 생각도 들었습니다.
            </p>
        `
    },
    project3: {
        title: 'BeginAgain (게시판)',
        content: `
            <h1>BeginAgain (게시판)</h1>
            <hr>
            <div>
                <i class="fa-solid fa-paperclip"></i>
                <h2 class = "deployment-url">Deployment URL</h2>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Github : </label>
                <a href="https://github.com/wook219/BeginAgain" class="project-link">https://github.com/wook219/BeginAgain</a>
            </div>
            <hr>

            <i class="fa-solid fa-location-dot"></i>
            <h2>Summary</h2>
            <p class = "summary-title">원하는 지역 게시판에 중고 거래를 구인하는 게시판</p>

            <ul>
                <li>게시글, 댓글 CRUD 구현</li>
                <li>게시글에 댓글을 달아 거래 약속을 잡을 수 있습니다.</li>
                <li>MVC 패턴을 적용하여 서버에서 뷰를 생성한 후 클라이언트에 전달</li>
                <li>로그인 여부(session 유무)에 따른 게시글, 댓글 기능 권한 부여</li>
            </ul>
            <blockquote>
                <p class = "summary-title">
                개발 기능 : 게시글, 댓글 기능 구현
                </p>
            </blockquote>
            <hr>
            
            <i class="fa-solid fa-hammer"></i>
            <h2>Tech Stack</h2>
            <p class = "summary-title">Java, Spring Boot, Thymeleaf, JPA, MySQL, Vanilla JS</p>
            <hr>

            <i class="fa-regular fa-face-smile"></i>
            <h2>Background</h2>
            <p>
            간단한 게시판 구현 프로젝트입니다. 회원이 게시판을 만들고, 회원이 게시글도 작성할 수 있는
            회원들이 하나의 웹사이트를 회원들이 만들어나가는 구조입니다. 
            주요 특징으로는 회원은 게시판을 만들 수 있고, 원하는 지역 게시판에 중고 거래를 구인하는 게시글을 올릴 수 있습니다.
            게시글에 댓글을 달아 거래 약속도 잡을 수 있습니다.
            </p>
            <hr>

            <i class="fa-solid fa-magnifying-glass"></i>
            <h2>Meaning</h2>
            <p>
            Thymeleaf를 처음 사용해본 프로젝트입니다. 이전의 프로젝트에서 JSP라는 비슷한 서버사이드 템플릿 엔진을 사용해보아서,
            두 기술의 차이를 알게 되었습니다. Thymeleaf는 스프링 부트와 좋은 호환성을 가지고 있으며, 복잡한 데이터 처리와 표현이 
            용이했습니다.
            </p>
        `
    },
    project4: {
        title: 'JCT (티켓팅 사이트)',
        content: `
            <h1>JCT (티켓팅 사이트)</h1>
            <hr>
            <div>
                <i class="fa-solid fa-paperclip"></i>
                <h2 class = "deployment-url">Deployment URL</h2>
            </div>
            <div class="link-container">
                <label for="project-link" class="">Github : </label>
                <a href="https://github.com/wook219/jcticket" class="project-link">https://github.com/wook219/jcticket</a>
            </div>
            <hr>

            <i class="fa-solid fa-location-dot"></i>
            <h2>Summary</h2>
            <p class = "summary-title">공연 티켓팅 웹 사이트 개발</p>

            <ul>
                <li>Naver, Kakao 소셜 로그인 구현</li>
                <li>jbcrypt 라이브러리를 사용하여 비밀번호 암호화</li>
                <li>Java mailsender를 이용한 회원가입 시 이메일 인증</li>
                <li>Valid 어노테이션을 이용한 서버 측 유효성 검사</li>
                <li>ajax를 활용한 클라이언트 측 실시간 유효성 검사</li>
                <li>Cookie를 이용한 로그인 시 ID 저장 기능</li>
                <li>회원가입 시 Kakao 우편번호 API 를 이용한 주소 검색</li>
            </ul>
            <blockquote>
                <p class = "summary-title">
                개발 기능 : 로그인, 회원가입 구현
                </p>
            </blockquote>
            <hr>
            
            <i class="fa-solid fa-hammer"></i>
            <h2>Tech Stack</h2>
            <p class = "summary-title">Java, Spring Boot, JPA, MySQL, AWS RDS, React, Bootstrap</p>
            <hr>

            <i class="fa-regular fa-face-smile"></i>
            <h2>Background</h2>
            <p>
            개발 공부를 시작하고 처음 진행했던 프로젝트였습니다. 아이디어 구상 중, 교직원 재직 당시의 업무가
            공연 실습, 공연 기획 업무였었습니다. 이를 기반으로 팀원들에게 공연 티켓팅 사이트를 만들어보자라는 
            의견을 제시하였고 채택되어 진행하게 되었습니다.
            </p>
            <hr>

            <i class="fa-solid fa-magnifying-glass"></i>
            <h2>Meaning</h2>
            <p>
            코딩 경험이 부족했기에 코드 관련 부분에서 도움이 못되어 심적인 압박이 컸지만, 팀의 운영, 사소한 일 처리에 신경을 쓰려고 노력했습니다.
            팀원들은 좋게 봐주셨고 끝까지 함께 할 수 있었으나, 완성에만 집착했던 저는 레퍼런스에만 의존하며 동작 방식이나 원리를 이해하지 못한 채
            코드를 짰던 게 아쉬움으로 남았습니다. 이후 개인적으로 학습하여 이해한 코드에 주석을 달았고,
            클라이언트 측에서만 진행하던 유효성 검사를 서버 측에서도 하도록 기능 추가를 하여 조금이나마 아쉬움을 해소했습니다.
            </p>
        `
    },
};

function openReadmeModal(button) {
    const projectId = button.dataset.project;
    const content = readmeContents[projectId];
    
    if (content) {
        modalBody.innerHTML = content.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}