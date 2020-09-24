var gulp = require("gulp");
var livereload = require("gulp-livereload");
var sass = require("gulp-ruby-sass");

//执行任务，意思为监听src下的所有文件，发现有变动即刷新浏览器，根据自己的文件目录写监听的位置
gulp.task("after", function () {
  return sass("./伪类/style.scss").pipe(gulp.dest("./")).pipe(livereload());
});

gulp.task("sasswatch", function () {
  gulp.watch("src/sass/*.scss", ["sass"]);
});

gulp.task("default", function () {
  livereload.listen();
  gulp.watch("src/**/*.*", function (file) {
    livereload.changed(file.path);
  });
});
