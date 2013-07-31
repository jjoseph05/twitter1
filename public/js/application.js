// $(document).ready(function() {
//   $('form').off();
//   $('form').on('submit', function(event){
//     event.preventDefault();
//     $('#tweet').remove();
//     $('#loading').show();
//     var data = $('#tweetspace').serialize();
//     // console.log(data)
//     $.post('/', data, function(response){
//       console.log(response);
//       // $('#loading').replaceWith(response);
//       $('#loading').hide();
//       $('#loading').after(response);
//     })
//   })
// });

$(document).ready(function(){
  $('#tweet-form').submit(function(event){
    event.preventDefault();
    
    var zebraunicornponyhorse = $(this).attr('action');
    $.post(zebraunicornponyhorse, $(this).serialize(), function(data, status)
    {
      if (status === 'success'){
        $('.container').append("<p>by gosh, you've done it!</p>");
        $('#tweetspace').val('');
      }
    }).fail(function(){
      $('.container').append("<p>Something's wrong with your tweet! 140 character limit please!</p>");
    });
  });
});
