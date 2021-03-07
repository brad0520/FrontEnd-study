"use strict";

const { resolve } = require("path");

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executer runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("Brad studies so hard!!!");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber//
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hen'), 1000);
  });
const getEgg = Hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(Hen + ' => Egg'), 1000); // 주석 처리로 오류 검사
    setTimeout(() => reject(new Error('error! Hen => Egg')), 1000);
  });
const cook = Egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(Egg + ' => Fried_egg'), 1000);
  });

  // getHen()
  //   .then((hen) => getEgg(hen))
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));
  // 콜백함수를 전달할 때 받아오는 벨류를 다음 함수에 바로 전달할 때, 아래와 같이 생략하여 간결하게 작성할 수 있음.
  // 프리티어 포맷에서 한줄로 바꿔주는 것을 방지하지 위해 then 시작 전에 //를 입력하고 줄바꿈하면 then 구문들을 다른 줄에 배치하여 가독성을 높임

  getHen() //
    .then(getEgg)
    .catch(error => {
      return 'Bread';
    }) // catch 구문의 위치를 변경하면서 오류 처리 TEST!!!
    .then(cook)
    .then(console.log)
    .catch(console.log);


