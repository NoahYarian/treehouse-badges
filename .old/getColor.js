var exec = require('child_process').exec;

module.exports = function (badgeImgUrl, cb) {
  exec('color-palette ' + badgeImgUrl, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    var dominantColorIndex = stdout.indexOf('Dominant Color: ') + 16;
    var dominantColor = stdout.slice(dominantColorIndex, dominantColorIndex + 7);
    console.log('Dominant Color: ', dominantColor);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    cb(dominantColor);
  });
}
