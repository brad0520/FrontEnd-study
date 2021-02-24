$(document).ready(function(){
  
    $(".box1").click(function(){
      // $(".box1").toggleClass("active");
      if($(".box1").hasClass("active")==true) {
        $(".box1").removeClass("active")
      } else {
        $(".box1").addClass("active")
      }
    });
    
    $(".box2").click(function(){
      $(".box2").toggleClass("active");
    });
    
    $(".box3").click(function(){
      
      let c = $(".box3").css("background-color");
      console.log(c);
      
      if ($(".box3, .box4").css("background-color")=="rgb(255, 99, 71)"){
        $(".box3, .box4").css({'background-color':'red'});
      } else {
        $(".box3, .box4").css({'background-color':'tomato'});
        $(".box-container").toggleClass("active");
      };
      
    });
    
  });
