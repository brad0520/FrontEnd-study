$(document).ready(function () {
  $(".menu-box > ul > li").click(function () {
    let thisIndex = $(this).index();

    if ($(".nav-2-content").eq(thisIndex).hasClass("active")) {
      $(".nav-2-depth-wrap").removeClass("active");
      $(".nav-2-content").removeClass("active");
    } else {
      $(".nav-2-depth-wrap").addClass("active");
      $(".nav-2-content").removeClass("active");
      $(".nav-2-content").eq(thisIndex).addClass("active");
    }
  });

  $(".nav-2-depth-right").click(function () {
    $(".nav-2-depth-wrap").removeClass("active");
    $(".nav-2-content").removeClass("active");
  });
});

$(window).scroll(function () {
  var text = $(this).scrollTop();

  console.log(text);

  if (text > 0) {
    $(".nav-wrap").css("top", 0);
  }
});
