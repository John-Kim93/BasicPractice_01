let target = document.querySelector("#dynamic");

function randomStringArr() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomTextArr) {
  if (randomTextArr.length > 0) {
    target.textContent += randomTextArr.shift();
    setTimeout(function() {
      dynamic(randomTextArr);
    }, 80);
  } else {
    setTimeout(function() {
      target.textContent = "";
      dynamic(randomStringArr())
    }, 2000)
  }
}

dynamic(randomStringArr())

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);