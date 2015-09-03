$('.grid').isotope({
  // options

  // slow transitions
  transitionDuration: '0.8s',

  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$(document).ready(function () {
  $('.badgeImage').css('background-color', $(this).attr('data-hue'));
});
