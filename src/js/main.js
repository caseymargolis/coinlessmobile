// On Scroll Animations
function animateOnScroll() {
  //Gets or sets the number of pixels that an element's content is scrolled vertically.
  var pageTop = window.pageYOffset || document.documentElement.scrollTop;

  // The innerHeight property returns the height of a window's viewport.
  var windowHeight =
    window.innerHeight ||
    doc.documentElement.clientHeight ||
    doc.getElementsByTagName("body")[0].clientHeight;

  var pageBottom = pageTop + windowHeight;
  var tags = document.getElementsByClassName("on-scroll-animation");
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if (tag.offsetTop + 200 < pageBottom) {
      tag.classList.add("visible");
    }
  }
}

if (document.getElementsByClassName("on-scroll-animation")) {
  window.addEventListener("scroll", animateOnScroll);
}


// Sitcky Header On Scroll
$(window).on('scroll', function() {
  var currentScrollTop = $(this).scrollTop();
		
  if (currentScrollTop > 100) {
    $('#navbar').addClass('sticky');
  } else {
    $('#navbar').removeClass('sticky');
  }
});


// faq page button active on click
$('#operatorBtn').on('click', function() {
  $('#customerBtn').removeClass('active');
  $('#customer-faq').removeClass('active');
  $(this).addClass('active');
  $('#operator-faq').addClass('active');
});
$('#customerBtn').on('click', function() {
  $('#operatorBtn').removeClass('active');
  $('#operator-faq').removeClass('active');
  $(this).addClass('active');
  $('#customer-faq').addClass('active');
});

//modal popup close event
$('body').on('click', function() {
  $('#coinlessvideoModal').click();
});