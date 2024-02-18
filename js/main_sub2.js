

let xPos = 0; // 초기 마우스 설정하고자 하는 변수

gsap.timeline()
// rotationY : 양수 : 오른쪽으로 이동(시계반향),  음수 : 왼쪽으로 이동(반시계 반향)
// cursor: 'grab' : 사용자에게 드래그를 가능한다는 시각적인 표시를 해줌
  .set('.ring', { rotationY: 80, cursor: 'grab' }) // .ring 클래스의 초기 회전 및 커서 속성 설정
  .set('.img', { // img 클래스의 초기 설정값
    // rotateY : 3D 공간에서 Y축을 기준으로 회전하는 속성이며,
    // i는 인덱스이며, 첫번째 이미지 0 -36, 2. 1-36 등 이미지의 회전 각도를 정함
    rotateY: (i) => i * -36, // 각 이미지의 Y축 회전 각도 값
    transformOrigin: '50% 50% 550px', // 회전 중심점 설정(x축(가로), y축(세로), 중심점)
    // 중심점 : 요소가 화면으로부터 얼마나 떨어져 있어 보이는가
    z: -500, // 카메라 이미지의 위치 설정
    backgroundImage: (i) => `url(../images/bird${i + 1}.png)`, // 이미지 url
    backgroundPosition: (i) => getBgPos(i), // 이미지 위치 설정
    backfaceVisibility: 'hidden' // 이미지가 뒷면이 보이지 않도록 설정
  })
  // 각 이미지의 대한 애니메이션 효과 설정
  .from('.img', {
    duration: 1.5,
    y: 200,
    opacity: 0,
    // stagger : 옵션은 애니메이션의 시작 시간을 요소 간에 일정한 간격으로 늘려주는 역할
    stagger: 0.1, // 각 이미지 마다 0.1초씩 간격을 줌
    ease: 'expo'
  })

  

  // 마우스가 해당 이미지에 들어갈 때 이벤트 발생 설정?
  .add(() => {
    $('.img').on('mouseenter', (e) => {
      let current = e.currentTarget;
      gsap.to('.img', { opacity: (i, t) => (t == current) ? 1 : 0.5, ease: 'power3' })
    })
    $('.img').on('mouseleave', (e) => {
      gsap.to('.img', { opacity: 1, ease: 'power2.inOut' })
    })
  }, '-=0.5')
// 아무 이미지 클릭 시 해당 본문 페이지로 넘어감
  $('.img').on('click', function() {
    window.location.href = "../HTML/main.html";
});
$(window).on('mousedown touchstart', dragStart); // 마우스 다운 또는 터치 시작 이벤트에 대한 핸들러 등록
$(window).on('mouseup touchend', dragEnd); // 마우스 업 또는 터치 종료 이벤트에 대한 핸들러 등록


function dragStart(e) {
  if (e.touches) e.clientX = e.touches[0].clientX; // 터치 이벤트가 있을 경우 터치의 첫 번째 위치를 사용
  xPos = Math.round(e.clientX); // xPos에 대한 변수를 현재 마우스 위치로 설정
  gsap.set('.ring', { cursor: 'grabbing' }) // .ring 클래스의 커서 속성 변경
  $(window).on('mousemove touchmove', drag); // 마우스 이동 또는 터치 이동 이벤트에 대한 핸들러 등록
}

function drag(e) {
  if (e.touches) e.clientX = e.touches[0].clientX; // 터치 이벤트가 있을 경우 터치의 첫 번째 위치를 사용

  gsap.to('.ring', {
    rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 150), // 마우스 이동에 따라 .ring 클래스의 Y축 회전 속성 변경
    onUpdate: () => { gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) }) } // .img 클래스의 배경 위치 조정
  });

  xPos = Math.round(e.clientX); // 현재 마우스 위치를 다시 업데이트
}


function dragEnd(e) {
  $(window).off('mousemove touchmove', drag); // 마우스 이동 또는 터치 이동 이벤트에 대한 핸들러 제거
  gsap.set('.ring', { cursor: 'grab' }); // .ring 클래스의 커서 속성 원래대로 변경
}

function getBgPos(i) { // 각 이미지들의 위치를 설정하는 함수
  return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 36) / 360 * 500) + 'px 0px';
}




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
