var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mq4HoverShim = require('mq4-hover-shim');
var rimraf = require('rimraf').sync;
var browser = require('browser-sync');
var panini = require('panini');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var port = process.env.SERVER_PORT || 8080;
var nodepath =  'node_modules/';
var assetspath =  'assets/';

// Starts a BrowerSync instance
gulp.task('server', ['build'], () => {
  browser.init({
    server: './_site', 
    open: false,
    port: port
  });
});

// Watch files for changes
gulp.task('watch', () => {
  gulp.watch('sass/**/*', ['compile-sass-bulma', browser.reload]);
  gulp.watch('scss/**/*', ['compile-scss-om', browser.reload]);
  gulp.watch('js/**/*', ['copy-js', browser.reload]);
  gulp.watch('images/**/*', ['copy-images', browser.reload]);
  gulp.watch('html/pages/**/*', ['compile-html']);
  gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['compile-html:reset','compile-html']);
  gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
});

// Erases the dist folder
gulp.task('reset', () => {
  rimraf('bulma/*');
  rimraf('scss/*');
  rimraf('assets/css/*');
  rimraf('assets/fonts/*');
  rimraf('images/*');
});

// Erases the dist folder
gulp.task('clean', () => { return rimraf('_site') });

// Copy Bulma files into Bulma development folder
gulp.task('setupBulma', () => {
  //Get Bulma from node modules
  gulp.src([nodepath + 'bulma/*.sass']).pipe(gulp.dest('bulma/'));
  gulp.src([nodepath + 'bulma/**/*.sass']).pipe(gulp.dest('bulma/'));
});

// Copy static assets
gulp.task('copy', () => {
  gulp.src(['assets/css/icons.min.css']).pipe(gulp.dest('_site/assets/css/'));
  
  //Copy other external font and data assets
  gulp.src(['assets/fonts/**/*']).pipe(gulp.dest('_site/assets/fonts/'));
  gulp.src([nodepath + 'slick-carousel/slick/fonts/**/*']).pipe(gulp.dest('_site/assets/fonts/'));
  gulp.src([nodepath + 'slick-carousel/slick/ajax-loader.gif']).pipe(gulp.dest('_site/assets/css/'));
  return;
});

// Sass variables
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed',
  includePaths: [ nodepath + 'bulma/sass' ]
};

var sassProcessors = [
  mq4HoverShim.postprocessorFor({ 
    hoverSelectorPrefix: '.is-true-hover ' 
  }),
  autoprefixer({
    browsers: [
      "Chrome >= 45",
      "Firefox ESR",
      "Edge >= 12",
      "Explorer >= 10",
      "iOS >= 9",
      "Safari >= 9",
      "Android >= 4.4",
      "Opera >= 30"
    ]
  }),
  cssnano()
];

const compileSass = (file) => {
  return gulp.src(file)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(sassProcessors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./_site/assets/css/'));
}

gulp.task('compile-sass-bulma', () => { // Compile Bulma Sass
  return compileSass('./bulma/bulma.sass')
});

gulp.task('compile-scss-om', () => { // Compile OM Scss
  return compileSass('./scss/om.scss') 
});

// Compile Html
gulp.task('compile-html', () => {
  return gulp.src('html/pages/**/*.html')
    .pipe(
      panini({
        root: 'html/pages/',
        layouts: 'html/layouts/',
        partials: 'html/includes/'
      })
    )
    .pipe(gulp.dest('_site'))
    .on('finish', browser.reload);
});

gulp.task('compile-html:reset', (done) => {
  panini.refresh();
  done();
});

// Compile css from node modules
gulp.task('compile-css', () => {
  const cssSource = [ 
    nodepath + 'slick-carousel/slick/slick.css',
    nodepath + 'slick-carousel/slick/slick-theme.css'
  ];

  return gulp.src(cssSource)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile blocking js
gulp.task('compile-blocking-js', () => {
  const jsSource = [
    nodepath + 'jquery/dist/jquery.min.js'
  ];

  return gulp.src(jsSource)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./_site/assets/js/'));
})

// Compile js from node modules
gulp.task('compile-vendor-js', () => { 
  const jsSource = [ 
    nodepath + 'slick-carousel/slick/slick.min.js', 
    nodepath + 'scrollreveal/dist/scrollreveal.min.js',
    nodepath + 'waypoints/lib/jquery.waypoints.min.js',
    nodepath + 'waypoints/lib/shortcuts/sticky.min.js',
    
    //Additional static js assets
    assetspath + 'js/ggpopover/ggpopover.min.js',
    assetspath + 'js/ggpopover/ggtooltip.js',
    assetspath + 'js/scrollspy/scrollspy.min.js',
    assetspath + 'js/kayako/kayako.js',
    assetspath + 'js/shopify/buy-button.js',
    assetspath + 'js/sumome/sumome.js'
  ]; 

  return gulp.src(jsSource)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy js to production site
gulp.task('copy-js', () => {
  const jsSource = 'js/**/*.js'
  
  return gulp.src(jsSource)
    .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy images to production site
gulp.task('copy-images', () => {
  const imgSource = 'images/**/*'
    
  return gulp.src(imgSource)
    .pipe(gulp.dest('./_site/assets/images/'));
});

// Erases blog static
gulp.task('clean-blog-assets', () => { 
  return rimraf('blog/static/bulkit') 
});

// Copy bulkit assets to /blog
gulp.task('copy-assets-to-blog', () => { 
  return setTimeout(() => {
    return gulp.src(['_site/assets/**/*']).pipe(gulp.dest('./blog/static/bulkit'));
  }, 100) //timeout necessary to ensure all fonts are copied over
});

// Copy built blog to _site
gulp.task('copy-blog', () => {
  return gulp.src(['blog/public/**/*']).pipe(gulp.dest('_site/blog'));
})

gulp.task('init', ['setupBulma']);
gulp.task('build', [
    'clean',
    'copy',
    'compile-blocking-js', 
    'compile-vendor-js', 
    'compile-css', 
    'copy-js', 
    'compile-sass-bulma', 
    'compile-scss-om', 
    'compile-html', 
    'copy-images',
    'copy-blog'
  ]);

gulp.task('build-blog', (callback) => { runSequence('clean-blog-assets', 'build', 'copy-assets-to-blog', callback) });
gulp.task('default', ['server', 'watch']);