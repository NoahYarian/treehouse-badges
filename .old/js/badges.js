$('.grid').isotope({
  // options

  // slow transitions
  transitionDuration: '0.8s',

  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

var hueBadgesArr = [];

var colorThief = new ColorThief();

function convertRgbArray(arr) {
  return {
    r: arr[0],
    g: arr[1],
    b: arr[2],
    a: 1
  }
}

function thieveColor(imageElement, cb) {
  imageElement.onload = function () {
    // console.log('thieveColor - imageElement: ',imageElement);
    var dominantColor = convertRgbArray(colorThief.getColor(imageElement));
    // console.log('thieveColor - dominantColor: ',dominantColor);
    cb(dominantColor);
  }
}

function getHue(color, cb) {
  // console.log('getHue - color: ',color);
  var hue = tinycolor(color).toHsv().h;
  // console.log('getHue - hue: ',hue);
  cb(hue);
}

function getSorted(selector, attrName) {
  return $($(selector).toArray().sort(function(a, b){
    var aVal = parseInt(a.getAttribute(attrName)),
        bVal = parseInt(b.getAttribute(attrName));
    return aVal - bVal;
  }));
}

// function getSorted2(arr, attrName) {
//   return $(arr.sort(function(a, b){
//     var aVal = parseInt(a.getAttribute(attrName)),
//         bVal = parseInt(b.getAttribute(attrName));
//     return aVal - bVal;
//   }));
// }

function setHueAttrs (cb) {
  var $badges = $('.badgeImage');
  // console.log('setHueAttrs - $badges: ',$badges);
  $badges.each(function(index, element) {
    // console.log('setHueAttrs - index: ',index);
    // console.log('setHueAttrs - element.src: ',element.src);
    // console.log('setHueAttrs - element: ',element);
    thieveColor(element, function (dominantColor) {
      getHue(dominantColor, function (hue) {
        $(element).attr('data-hue', hue);
        hueBadgesArr.push({
          src: element.src,
          hue: hue
        });
      });
    });
  });
  cb(hueBadgesArr);
}

$(document).ready(function () {
  setHueAttrs(function (hueBadgesArr) {
    console.log('hueBadgesArr: ',hueBadgesArr);
    $.each(hueBadgesArr, function(hueBadgeObj) {
      var img = document.createElement('img');
      $(img).attr('src', hueBadgeObj.src);
      $(img).attr('data-hue', hueBadgeObj.hue);
      $(img).appendTo($('.withHues'));
    });
  });
});

    // getHue(element, function (hue) {
    //   $( element ).attr('data-hue', hue);
    // });


    // var img = new Image();
    // img.onload = function () {
    //   var colorThief = new ColorThief();
    //   colorThief.getColor(img);
    // };
    // img.crossOrigin = 'Anonymous';
    // img.src = element.src;

  // console.log(getSorted('.badgeImg', 'data-hue'));
function imgConstThief(src, cb) {
  var img = new Image();
  img.onload = function () {
    var colorThief = new ColorThief();
    colorThief.getColor(img);
  };
  img.crossOrigin = 'Anonymous';
  img.src = src;
}


