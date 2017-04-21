$('#work').hover(function() {
  $('.back-container-b').toggleClass('work');
})
$('#about').hover(function() {
  $('.back-container-b').toggleClass('about');
})
$('#contact').hover(function() {
  $('.back-container-b').toggleClass('contact');
})
$('#resume').hover(function() {
  $('.back-container-b').toggleClass('resume');
})

$('#expand1').click(function() {
  $('#work1').toggleClass('expanded');
  $('.phone, .ipad, .desktop').toggleClass('gone');
})
$('#expand2').click(function() {
  $('#work2').toggleClass('expanded');
  $('#work2 .phone, #work2 .ipad, #work2 .desktop').toggleClass('gone');
  $('#work2 i').toggleClass('fa-rotate-180');
})
