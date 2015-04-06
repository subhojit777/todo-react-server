$('document').ready(function() {
  $('document').ajaxStart(function() {
    $('.todoList .progress').removeClass('hidden');
    $('.todoList .list').addClass('hidden');
  }).ajaxStop(function() {
    $('.todoList .progress').addClass('hidden');
    $('.todoList .list').removeClass('hidden');
  });
});
