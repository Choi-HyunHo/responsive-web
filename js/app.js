//이미지 슬라이더
$('.slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false,
      },
    },
  ],
})

//라이트 박스
$('.lightbox').lightGallery({
  thumnail: true,
  pause: 3000,
  autoplay: true,
  progressBar: true,
})

// 접기, 펼치기
$('.btn').click(function (e) {
  e.preventDefault()
  $('.nav').slideToggle()
  $('.btn').toggleClass('open')

  if ($('.btn').hasClass('open')) {
    // open이 있을 때, attr 속성 변경
    $('.btn').find('i').attr('class', 'fa fa-angle-up')
  } else {
    // open이 없을 때
    $('.btn').find('i').attr('class', 'fa fa-angle-down')
  }
})

$(window).resize(function () {
  const wWidth = $(window).width()

  if (wWidth > 600) {
    $('.nav').removeAttr('style')
  }
})
