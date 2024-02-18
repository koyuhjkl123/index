function toggleMenu() {
  let menuContainer = document.getElementById("menu-container");
  // 현재 투명도 값 가져오기
  let currentOpacity = parseFloat(window.getComputedStyle(menuContainer).opacity);

  // 투명도가 0이면 1로, 1이면 0으로 변경
  menuContainer.style.opacity = currentOpacity === 0 ? 1 : 0;
  // 클릭 가능 여부 설정
  menuContainer.style.pointerEvents = currentOpacity === 0 ? "auto" : "none";
}

document.addEventListener('DOMContentLoaded', function () {
  let iconContainer = document.querySelector('#container header .icon-container');
  let menubar = document.querySelector('.menubar');
  let menuUl = document.querySelector('.menubar #menu-container ul');
  let menuSubUl = document.querySelector('header .menubar #menu-container ul li > ul');
  let body = document.querySelector('body');

  iconContainer.addEventListener('click', function () {
    iconContainer.classList.toggle('active');
    menubar.classList.toggle('active');

    if (iconContainer.classList.contains('active')) {
      menubar.style.left = '0'; // 클릭 후
      body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
      menubar.style.left = '-1220px'; // 클릭 전
    }

    if (iconContainer.classList.contains('active')) {
      menuUl.style.opacity = '1'; // 클릭 후
      // menuUl.style.backgroundColor = "gray";
      menuSubUl.style.opacity = '1';
    } else {
      menuUl.style.opacity = '0'; // 클릭 전
    }

  });
});

