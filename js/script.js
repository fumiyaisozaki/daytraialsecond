var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',
  spaceBetween: 40,
  initialSlide: 1,
  loop: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 25,
    },
    1240: {
      spaceBetween: 40,
    }
  },
});

$(function() {
  $('.accordion').click(function () {   //クリック時の動作
    var $answer = $(this).find('.answer');    //関数の定義ここではクリックされた要素のみに指定を受ける
    var $img = $(this).find('img');   //クリックされたimgタグのみを指定
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');  // クラスを外す
      $answer.slideUp();
      $img.attr('src', 'img/plus.svg');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $img.attr('src', 'img/minus.svg');
    }
  });
});

$(function ($) {
  WindowHeight = $(window).height();
  $('.drawr-menu').css('height', WindowHeight); //メニューをwindowの高さいっぱいにする

  $(document).ready(function () {
    $('.drawr-btn').click(function () { //クリックしたら
      if ($('.drawr-menu').is(":animated")) {
        $('.overlay').removeClass('open');
        return false;
      } else {
        $('.drawr-menu').animate({ width: 'toggle' }); //animateで表示・非表示
        $(this).toggleClass('peke'); //toggleでクラス追加・削除
        $('.overlay').addClass('open');
        return false;
      }
    });
  });

  //別領域をクリックでメニューを閉じる
  $(document).click(function (event) {
    if (!$(event.target).closest('.drawr-menu').length) {
      $('.drawr-btn').removeClass('peke');
      $('.drawr-menu').hide();
    }
  });
});

// クリックしたらトップへ戻るボタン
jQuery(function () {
  var appear = false;
  var pagetop = $('.totop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
     // スクロールの速度
     var speed = 300; // ミリ秒
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得
     var position = target.offset().top;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
});
