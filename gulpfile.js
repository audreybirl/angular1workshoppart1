// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

/*
gulp.task('default', function () {
    connect.server({
      root: 'app/',
      port: 8888
    });
});
*/

var proxyList = [
    '^/testendpoint/(.*)$ http://localhost:1337/$1 [P]'
];

var modRewrite = require('connect-modrewrite');

gulp.task('default', function () {
  connect.server({
    root: 'app/',
    port: 8889,
    livereload: true,
    middleware: function () {
          return [
              modRewrite(proxyList)
          ];
      }
  });
});
