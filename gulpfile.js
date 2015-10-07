var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  less = require('gulp-less'),
  minifycss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  jade = require('gulp-jade'),
  bower = require('gulp-bower'),
  gutil = require('gulp-util'),
  jshint = require('jshint'),
  jshint_stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify'),
  cache = require('gulp-cache'),
  browserify = require('browserify'),
  path = require('path'),
  source = require('vinyl-source-stream'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  nodemon = require('gulp-nodemon'),
  paths = {
    public: 'public/**',
    jade: ['!app/includes/*.jade', 'app/**/*.jade'],
    scripts: 'app/scripts/**/*.js',
    images: 'app/images/**/*',
    staticFiles: [
      '!app/**/*.+(less|css|js|jade)',
      '!app/images/**/*',
      'app/**/*.*'
    ],
    unitTests: [
      'public/vendor/angular/angular.min.js',
      'public/vendor/angular-ui-router/release/angular-ui-router.min.js',
      'public/js/application.js',
      'tests/unit/**/*.spec.js'
    ],
    libTests: ['public/vendor/tests/**/*.js'],
    styles: 'app/styles/**/*.+(less|css)'
  };


gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src(paths.unitTests)
    .pipe(karma({
      configFile: __dirname + '/karma.conf.js',
      // autoWatch: false,
      // singleRun: true
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('less', function() {
  gulp.src(paths.styles)
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(less())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('public/css/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/vendor/'));
});

gulp.task('browserify', function() {
  return browserify('./app/scripts/application.js').bundle()
    .on('success', gutil.log.bind(gutil, 'Browserify Rebundled'))
    .on('error', gutil.log.bind(gutil, 'Browserify Error: in browserify gulp task'))
    // vinyl-source-stream makes the bundle compatible with gulp
    .pipe(source('application.js')) // Desired filename
    // Output the file
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('lint', function() {
  return gulp.src(['./app/**/*.js', './index.js', './server/**/*.js', './tests/**/*.js'])
    .pipe(jshint())
    // .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(jshint_stylish))
    .pipe(jshint.reporter('fail'))
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }));
});

gulp.task('static-files', function() {
  return gulp.src(paths.staticFiles)
    .pipe(gulp.dest('public/'));
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 7878,
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('nodemon', function() {
  var started = false;
  nodemon({
      script: 'index.js',
      ext: 'js',
      ignore: ['public/', 'node_modules/']
    })
    .on('change', ['lint'])
    .on('restart', function() {
      console.log('>> node restart');
    })
    .on('start', function() {
      // to avoid nodemon being started multiple times
      // thanks @matthisk
      if (!started) {
        cb();
        started = true;
      }
    });;
});

gulp.task('watch', function() {
  // livereload.listen({ port: 35729 });
  gulp.watch(paths.jade, ['jade', 'bs-reload']);
  gulp.watch(paths.styles, ['less', 'bs-reload']);
  gulp.watch(paths.scripts, ['lint', 'browserify', 'bs-reload']);
  gulp.watch(['./gulpfile.js'], ['build']);
  // gulp.watch(paths.public).on('change', livereload.changed);
});

gulp.task('build', ['jade', 'less', 'static-files', 'images', 'browserify', 'bower', ]);
gulp.task('heroku:production', ['build']);
gulp.task('heroku:staging', ['build']);
gulp.task('production', ['nodemon', 'build']);
gulp.task('default', ['nodemon', 'watch', 'build']);

// While in development use this
gulp.task('beer', ['nodemon', 'watch', 'build', 'browser-sync']);
