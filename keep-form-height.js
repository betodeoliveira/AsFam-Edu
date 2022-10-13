$(window).bind("load resize submit",function(e){
    $('.contact_form').each(function() {
      var formHeight = $(this).height();
      $(this).siblings('.w-form-done').css({'min-height': formHeight});
    });
  });