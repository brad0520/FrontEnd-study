$(document).ready(function(){
  
  $(".btn").click(function(){
    $(".toggle_menu").toggleClass("active");
    $(".list").removeClass("active");
  });
  
  $(".list").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  }); 
});