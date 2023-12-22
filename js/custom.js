$(document).ready(function() {
    $('#collapseBtn').click(function() {
    
      
      var buttonText = $('#collapseBtn').text();
      if (buttonText === 'COLLAPSE ALL') {
        $('#collapseBtn').text('EXPAND ALL');
      } else {
        $('#collapseBtn').text('COLLAPSE ALL');
      }
    });
  });


    $('.collapse-content').each(function() {
      if (!$(this).hasClass('show') && $('#collapseBtn').text() === 'EXPAND ALL') {
        $(this).addClass('show');
      } else if ($(this).hasClass('show') && $('#collapseBtn').text() === 'COLLAPSE ALL') {
        $(this).removeClass('show');
      }
     });
