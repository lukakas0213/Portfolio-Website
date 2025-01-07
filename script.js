// 현재 섹션 인덱스 추적
let currentSectionIndex = 0;

// 모든 섹션을 가져옴
const sections = document.querySelectorAll('.section');

// 스크롤 이벤트 리스너 추가
document.addEventListener('wheel', function(event) {
    const delta = event.deltaY; // 스크롤 방향 (양수: 아래, 음수: 위)

    if (delta > 0) {
        // 아래로 스크롤
        goToSection(currentSectionIndex + 1);
    } else {
        // 위로 스크롤
        goToSection(currentSectionIndex - 1);
    }
});

// 섹션 이동 함수
function goToSection(index) {
    if (index < 0 || index >= sections.length) {
        return; // 범위를 벗어나면 아무 것도 하지 않음
    }

    const section = sections[index];
    section.scrollIntoView({
        behavior: 'smooth', // 부드럽게 스크롤
        block: 'start', // 섹션의 시작 위치로 이동
    });

    currentSectionIndex = index; // 현재 섹션 인덱스 업데이트
}
document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        navigation: true, // 화면 오른쪽에 내비게이션 추가
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About Me'],
        showActiveTooltip: true,
        scrollingSpeed: 700, // 스크롤 속도 (밀리초)
        anchors: ['home', 'about'], // URL에 #home, #about 추가
        sectionsColor: ['#ffffff', '#f2f2f2'], // 각 섹션 배경색
    });
});
