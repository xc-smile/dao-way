$(function () {
  $('.service-scope').on('mouseenter', '.scope-list', function () {
    console.log(this);
    $(this).children("ul:last-child").addClass('show');
    $(this).css('background-color', '#60646d');
  });
  $('.service-scope').on('mouseleave', '.scope-list', function () {
    $('.service-list').removeClass('show');
    $(this).css('background-color', '');
  });
});