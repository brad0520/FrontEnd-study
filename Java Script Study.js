console.clear();

console.log("사칙연산을 수행합니다.")
console.log(15+8);
console.log(15-8);
console.log(15*8);
console.log(15/8);

console.log('안녕하세요.');

let x;
let y;
let z;
x = 4;
y = 8;
z = x + y;
console.log(z);

// 구구단 출력
let i;
let dan;
for (dan=2; dan<=9; dan++) {
  console.log(dan +" 단을 출력합니다.")
  for(i=1; i<=9; i++) {
  console.log(dan + " X " + i + " = " + dan*i)
  };
};

// 구구단 출력(웹에 출력)
let j;
let dan1;
for (dan1=2; dan1<=9; dan1++) {
  document.write("<br>" + dan1 +" 단을 출력합니다. <br><br>")
  for(j=1; j<=9; j++) {
  document.write(dan1 + " X " + i + " = " + dan1*i + "<br>")
  };
};

document.getElementById("p").innerHTML = '<h1>Hi everyone~</h1>';

