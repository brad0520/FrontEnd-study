let count = 0;

while(true) {
  let a;
  a = parseInt(prompt("1+1=?"));
  if(a != 2){
    console.log((++count) + "번 틀렸습니다. 다시 도전하세요.")
    continue;
  }

  a = parseInt(prompt("7*3=?"));
  if (a != 21) {
    console.log(++count + "번 틀렸습니다. 다시 도전하세요.");
    continue;
  }
  
  a = parseInt(prompt("9*7=?"));
  if (a != 63) {
    console.log(++count + "번 틀렸습니다. 다시 도전하세요.");
    continue;
  } 
   
  break;
}

console.log("참 잘했습니다!^^")