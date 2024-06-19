let ball = {
  x: 540, // 화면의 중앙에서 시작
  y: 960,
  radius: 20,
  xSpeed: 8,
  ySpeed: 8,
};

let logo;
let logo1, logo2, logo3; // 다른 이미지 변수
let bounceCount = 0; // 튕김 횟수 카운트

// 각 이미지의 위치와 크기 변수
let logo1Pos = { x: 330, y: 500, w: 500, h: 600 };
let logo2Pos = { x: 800, y: 950, w: 600, h: 550 };
let logo3Pos = { x: 200, y: 1300, w: 680, h: 778 };
let logo4Pos = { x: 800, y: 500, w: 600, h: 700 };

// 각 이미지의 투명도 변수
let logo1Alpha = 0;
let logo2Alpha = 0;
let logo3Alpha = 0;
let logo4Alpha = 0;

function preload() {
  logo = loadImage("images/landlogo.png"); // 기본 이미지 로드
  logo1 = loadImage("images/land1.png"); // 추가 이미지 로드
  logo2 = loadImage("images/land2.png");
  logo3 = loadImage("images/land3.png");
  logo4 = loadImage("images/land4.png");
}

function setup() {
  createCanvas(1080, 1920); // 1080x1920 크기의 캔버스 생성
}

function mousePressed() {
  window.location.href = "index.html"; // 메인 페이지의 파일명으로 대체
}

function draw() {
  background(0); // 검은색 배경

  // 공 그리기
  fill(255); // 흰색 공
  noStroke();

  // 그림자 효과 추가
  fill(50, 50, 50, 150); // 반투명의 회색 그림자
  ellipse(ball.x + 10, ball.y + 10, ball.radius * 2); // 원래 공 위치보다 약간 아래 오른쪽에 그림자 추가

  fill(255); // 다시 흰색으로 설정
  ellipse(ball.x, ball.y, ball.radius * 2); // 원래 공 그리기

  // 공 이동
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  // 벽에 부딪히면 방향 바꾸기 및 카운트 증가
  if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
    ball.xSpeed *= -1;
    bounceCount++;
  }
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
    ball.ySpeed *= -1;
    bounceCount++;
  }

  // 10번 튕긴 후 카운트 초기화
  if (bounceCount > 10) {
    bounceCount = 0;
  }

  // 로고 이미지 중앙에 배치
  imageMode(CENTER);

  // 기본 이미지를 항상 표시
  image(logo, width / 2, height / 2);

  // 튕김 횟수에 따라 다른 이미지 표시
  if (bounceCount == 2) {
    logo1Alpha = min(logo1Alpha + 5, 255); // 투명도 증가
    tint(255, logo1Alpha);
    image(logo1, logo1Pos.x, logo1Pos.y, logo1Pos.w, logo1Pos.h);
  } else if (bounceCount == 3) {
    logo2Alpha = min(logo2Alpha + 5, 255); // 투명도 증가
    tint(255, logo2Alpha);
    image(logo2, logo2Pos.x, logo2Pos.y, logo2Pos.w, logo2Pos.h);
  } else if (bounceCount == 5) {
    logo3Alpha = min(logo3Alpha + 5, 255); // 투명도 증가
    tint(255, logo3Alpha);
    image(logo3, logo3Pos.x, logo3Pos.y, logo3Pos.w, logo3Pos.h);
  } else if (bounceCount == 7) {
    logo4Alpha = min(logo4Alpha + 5, 255); // 투명도 증가
    tint(255, logo4Alpha);
    image(logo4, logo4Pos.x, logo4Pos.y, logo4Pos.w, logo4Pos.h);
  }

  // 투명도 초기화
  if (bounceCount != 2) logo1Alpha = 0;
  if (bounceCount != 3) logo2Alpha = 0;
  if (bounceCount != 5) logo3Alpha = 0;
  if (bounceCount != 7) logo4Alpha = 0;

  // tint 초기화
  noTint();
}
