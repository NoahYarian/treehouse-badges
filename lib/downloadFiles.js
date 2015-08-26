// Dependencies
var fs = require('fs');
var url = require('url');
var http = require('http');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

// App variables
module.exports = function (file_urls, cb) {
  var DOWNLOAD_DIR = './www/img/badges/';
  var count = file_urls.length;
  var finished = 0;

  // We will be downloading the files to a directory, so make sure it's there
  // This step is not required if you have manually created the directory
  var mkdir = 'mkdir -p ' + DOWNLOAD_DIR;
  var child = exec(mkdir, function(err, stdout, stderr) {
    if (err) {
      throw err;
    } else {
      for (var i = 0; i < count; i++) {
        download_file_httpget(file_urls[i]);
      }
    }
  });

  // Function to download file using HTTP.get
  var download_file_httpget = function(file_url) {
  var options = {
    host: url.parse(file_url).host,
    port: 80,
    path: url.parse(file_url).pathname
  };

  var file_name = url.parse(file_url).pathname.split('/').pop();
  var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

  http.get(options, function(res) {
    res.on('data', function(data) {
        file.write(data);
      }).on('end', function() {
        file.end();
        finished++;
        console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
        if (finished === count) {
          console.log('file downloads complete');
          cb();
        }
      });
    });
  };
}
