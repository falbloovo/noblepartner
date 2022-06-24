$(document).ready(function(){
  $('.parallax').parallax();
  $('.sidenav').sidenav({
    edge: 'right',
  });
  $('select').formSelect();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.modal').modal();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 200 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});