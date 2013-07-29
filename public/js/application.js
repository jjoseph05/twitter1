$(document).ready(function() {
  $('form').off();
  $('form').on('submit', function(event){
    event.preventDefault();
    $('#tweet').remove();
    $('#loading').show();
    var data = $('#username').serialize();
    // console.log(data)
    $.post('/user/get_username', data, function(response){
      console.log(response);
      // $('#loading').replaceWith(response);
      $('#loading').hide();
      $('#loading').after(response);
    })
  })
});
