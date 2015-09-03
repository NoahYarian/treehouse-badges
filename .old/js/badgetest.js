var $badge = $('.badgeImage');
var colorThief = new ColorThief();
var colorDom = colorThief.getColor($badge[0]);
var palette = colorThief.getPalette($badge[0], 3);

console.log(colorDom);
console.log(palette);

$('.color').css('backgroundColor', 'rgb(' + colorDom[0] + ',' + colorDom[1] + ',' + colorDom[2] + ')');
$('.color').text('colorDom: ' + colorDom[0] + ', ' + colorDom[1] + ', ' + colorDom[2]);

$('.palette0').css('backgroundColor', 'rgb(' + palette[0][0] + ',' + palette[0][1] + ',' + palette[0][2] + ')');
$('.palette1').css('backgroundColor', 'rgb(' + palette[1][0] + ',' + palette[1][1] + ',' + palette[1][2] + ')');
$('.palette2').css('backgroundColor', 'rgb(' + palette[2][0] + ',' + palette[2][1] + ',' + palette[2][2] + ')');
$('.palette3').css('backgroundColor', 'rgb(' + palette[3][0] + ',' + palette[3][1] + ',' + palette[3][2] + ')');

$('.palette0').text('palette0: ' + palette[0][0] + ', ' + palette[0][1] + ', ' + palette[0][2]);
$('.palette1').text('palette1: ' + palette[1][0] + ', ' + palette[1][1] + ', ' + palette[1][2]);
$('.palette2').text('palette2: ' + palette[2][0] + ', ' + palette[2][1] + ', ' + palette[2][2]);
$('.palette3').text('palette3: ' + palette[3][0] + ', ' + palette[3][1] + ', ' + palette[3][2]);

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

var datColor = convertRgbArray(palette[0]);
var palette0b = tinycolor(datColor).toHsvString();
console.log(palette0b);
console.log(getHue($badge[0]));
$('.palette0b').css('backgroundColor', palette0b)
$('.palette0b').text('palette0 complement: ',palette0b);
// $.each(badges, function(badge) {
//   $('<img src="' + badge.icon_url + '" class="badgeImage">').appendTo( $('.badges') );
// });

// For each badge:
//   get dominant color
//   convert to Hsv
//   sort badges by hue




