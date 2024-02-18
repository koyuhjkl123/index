

// * 순서대로 나타나는 기능
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.birds, .bird5');
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // DOMContentLoaded
  // 이벤트는 HTML 문서가 완전히 로드되어 DOM 트리가 구성된 후에 발생하는 이벤트
  // 즉, HTML 문서의 모든 요소가 파싱되어 메모리에 로드된 상태에서 발생
  //  이 이벤트는 이미지, 스타일시트, 외부 스크립트 등의 리소스의 로딩이 완료되지 않아도 발생
  // 이곳에는 HTML 문서의 DOM이 완전히 로드된 상태에서 실행되어야 하는 코드를 작성
  // DOMContentLoaded 이벤트는 load 이벤트와 다르게 대기 시간이 짧습니다. 페이지의 모든 리소스가 로드되기를 기다리지 않고, 
  // DOM 트리만 완료되면 즉시 발생합니다. 이는 페이지가 더 빨리 상호작용 가능하게 만들어줍니다

  // 클릭 시 이동할 URL
  let newPageURL = '../HTML/main.html';

  // 클릭 이벤트를 추가합니다.
  document.getElementById('contaniner').addEventListener('click', function() {
    // 새로운 페이지로 이동합니다.
    window.location.href = newPageURL;
  });
});