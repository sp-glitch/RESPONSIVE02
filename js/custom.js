$(function () {
  $(".main_visual_slide").slick({
    arrows: false,
    dots: true,
  });

  $(".main_portfolio_slide").slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // .main_customer .left_tab .tab_tit>li.on {
  //     color: tomato;
  // }

  // .main_customer .left_tab .tab_con>li {
  //     display: none;
  // }

  $(".main_customer .left_tab .tab_tit>li a").on("click", function (e) {
    // 1. a를 클릭했을 때 새로고침 되지 않게 하기
    e.preventDefault();
    // 2. 번호를 받아오기
    let idx = $(this).parent().index();
    // 3. 번호에 부합하는 .tab_con>li를 보여주기
    $(".main_customer .left_tab .tab_con>li").removeClass("on");
    $(".main_customer .left_tab .tab_con>li").eq(idx).addClass("on");

    //4. 메뉴에 스타일 붙이기
    $(".main_customer .left_tab .tab_tit>li").removeClass("on");
    $(".main_customer .left_tab .tab_tit>li").eq(idx).addClass("on");
  });

  $(window).on("scroll", function () {
    let SCT = $(window).scrollTop();
    console.log(SCT);

    if (SCT > 400) {
      $(".to_top").addClass("on");
    } else {
      $(".to_top").removeClass("on");
    }
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  //responsive menu
  $(".mopen").on("click", function () {
    $("#gnb").toggleClass("on");
    $(this).toggleClass("on");
  });
});
