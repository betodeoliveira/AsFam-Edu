$('.w-nav-menu').on('click', 'a', function () {
    if ($('.w--open').length === 1) { // detect whether menu is open in mobile view
      $('.w-nav-button').triggerHandler('tap');
    }
  });