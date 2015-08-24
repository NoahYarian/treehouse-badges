$('.grid').isotope({
  // options

  // slow transitions
  transitionDuration: '0.8s',

  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});


var colorThief = new ColorThief();

function convertRgbArray(arr) {
  return {
    r: arr[0],
    g: arr[1],
    b: arr[2],
    a: 1
  }
}

function getHue(imageURL) {
  var color = convertRgbArray(colorThief.getColor(imageURL));
  return tinycolor(color).toHsv().h;
}

function getSorted(selector, attrName) {
  return $($(selector).toArray().sort(function(a, b){
    var aVal = parseInt(a.getAttribute(attrName)),
        bVal = parseInt(b.getAttribute(attrName));
    return aVal - bVal;
  }));
}

$(document).ready(function () {

  var $badges = $('.badgeImage');

  console.log($badges);
  $badges.each(function( index, element ) {
    // console.log(index + ': ' + element);
    var hue = getHue(element);
    $( element ).text(hue);
  });
  // console.log(getSorted('.badgeImg', 'data-hue'));

});


// var img = new Image();
// img.onload = function () {
//   var colorThief = new ColorThief();
//   colorThief.getColor(img);
// };
// img.crossOrigin = 'Anonymous';
// img.src = 'src of the image you want to process';



