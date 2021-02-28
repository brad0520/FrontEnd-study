function makeCountFunction(initVal) {
  var count = initVal;
  function Increase() {
    count++;
    console.log(count);
  }
  return Increase;
} 

var counter1 = makeCountFunction(0);
var counter2 = makeCountFunction(10);

counter1();
counter2();