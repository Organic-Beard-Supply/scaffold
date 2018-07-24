var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mq4HoverShim = require('mq4-hover-shim');
var rimraf = require('rimraf').sync;
var browser = require('browser-sync');
var panini = require('panini');
var concat = require('gulp-concat');
var port = process.env.SERVER_PORT || 8080;
var nodepath =  'node_modules/';
var assetspath =  'assets/';

// Starts a BrowerSync instance
gulp.task('server', ['build'], function(){
    browser.init({server: './_site', port: port});
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*', ['compile-scss-one', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-two', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-three', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-four', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-five', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-six', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-seven', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-om', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-components', browser.reload]);
    gulp.watch('scss/**/*', ['compile-scss-dashboard', browser.reload]);
    gulp.watch('sass/**/*', ['compile-sass', browser.reload]);
    gulp.watch('js/**/*', ['copy-js', browser.reload]);
    gulp.watch('images/**/*', ['copy-images', browser.reload]);
    gulp.watch('html/pages/**/*', ['compile-html']);
    gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['compile-html:reset','compile-html']);
    gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
});

// Erases the dist folder
gulp.task('reset', function() {
    rimraf('bulma/*');
    rimraf('scss/*');
    rimraf('assets/css/*');
    rimraf('assets/fonts/*');
    rimraf('images/*');
});

// Erases the dist folder
gulp.task('clean', function() {
    rimraf('_site');
});

// Copy Bulma filed into Bulma development folder
gulp.task('setupBulma', function() {
    //Get Bulma from node modules
    gulp.src([nodepath + 'bulma/*.sass']).pipe(gulp.dest('bulma/'));
    gulp.src([nodepath + 'bulma/**/*.sass']).pipe(gulp.dest('bulma/'));
});

// Copy Bulma extensions Sass into Bulma development folder
gulp.task('extendBulma', function() {
    gulp.src([nodepath + 'bulma-extensions/bulma-iconpicker/dist/bulma-iconpicker.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
    gulp.src([nodepath + 'bulma-extensions/bulma-divider/dist/bulma-divider.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
    gulp.src([nodepath + 'bulma-extensions/bulma-tagsinput/dist/bulma-tagsinput.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
    gulp.src([nodepath + 'bulma-extensions/bulma-steps/dist/bulma-steps.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
    gulp.src([nodepath + 'bulma-extensions/bulma-calendar/dist/bulma-calendar.sass']).pipe(gulp.dest('bulma/sass/extensions/'));
});

// Copy static assets
gulp.task('copy', function() {
    gulp.src(['assets/css/icons.min.css']).pipe(gulp.dest('_site/assets/css/'));
    //
    gulp.src([nodepath + 'bulma-extensions/bulma-iconpicker/dist/bulma-iconpicker.js']).pipe(gulp.dest('js/extensions/'));
    //Copy other external font and data assets
    gulp.src(['assets/fonts/**/*']).pipe(gulp.dest('_site/assets/fonts/'));
    gulp.src([nodepath + 'datedropper/dd-icon/**/*']).pipe(gulp.dest('_site/assets/css/dd-icon/'));
    gulp.src([nodepath + 'wickedpicker/fonts/**/*']).pipe(gulp.dest('_site/assets/fonts/'));
    gulp.src([nodepath + 'slick-carousel/slick/fonts/**/*']).pipe(gulp.dest('_site/assets/css/fonts/'));
    gulp.src([nodepath + 'slick-carousel/slick/ajax-loader.gif']).pipe(gulp.dest('_site/assets/css/'));
    gulp.src(['assets/data/**/*']).pipe(gulp.dest('_site/assets/data/'));
});

// Sass variables
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: [nodepath + 'bulma/sass']
};

// Scss variables
var scssOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
    includePaths: ['./scss/partials']
};

// Compile Bulma Sass
gulp.task('compile-sass', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./bulma/bulma.sass')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile various Scss (only one is needed - others included for demo purposes)
gulp.task('compile-scss-one', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/one.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-two', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/two.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-three', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/three.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-four', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/four.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-five', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/five.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-six', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/six.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-seven', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/seven.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-om', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/om.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-components', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/components.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});
gulp.task('compile-scss-dashboard', function () {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.is-true-hover ' }),
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
        })//,
        //cssnano(),
    ];
    //Watch me get Sassy
    return gulp.src('./scss/dashboard.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile Html
gulp.task('compile-html', function() {
    gulp.src('html/pages/**/*.html')
        .pipe(panini({
        root: 'html/pages/',
        layouts: 'html/layouts/',
        pageLayouts: {
            // ie - all pages inside pages/one will use the default.html layout
            'one': 'one',
            'two': 'two',
            'three': 'three',
            'four': 'four',
            'five': 'five',
            'six': 'six',
            'seven': 'seven',
            'om': 'om',
            'components': 'components',
            'dashboard': 'dashboard',
            'docs': 'docs'
        },
        partials: 'html/includes/',
        helpers: 'html/helpers/',
        data: 'html/data/'
    }))
        .pipe(gulp.dest('_site'))
        .on('finish', browser.reload);
});

gulp.task('compile-html:reset', function(done) {
    panini.refresh();
    done();
});

// Compile css from node modules
gulp.task('compile-css', function() {
    return gulp.src([ 
        nodepath + 'izitoast/dist/css/iziToast.min.css', 
        nodepath + 'slick-carousel/slick/slick.css',
        nodepath + 'slick-carousel/slick/slick-theme.css',
        nodepath + 'wickedpicker/dist/wickedpicker.min.css',
        nodepath + 'billboard.js/dist/billboard.min.css',
        nodepath + 'datedropper/datedropper.min.css',
        nodepath + 'timedropper/timedropper.min.css',
        nodepath + 'wallop/css/wallop.css',
        nodepath + 'easy-autocomplete/dist/easy-autocomplete.min.css',
        nodepath + 'jquery-ui-dist/jquery-ui.min.css',
        //Additional static css assets
        //assetspath + 'css/icons.min.css',
        assetspath + 'css/datepicker/datepicker.css',
        assetspath + 'css/chosen/chosen.css',
        assetspath + 'js/fileuploader/jquery.fileuploader.min.css',
        assetspath + 'css/docs/prettify.css',
        assetspath + 'css/docs/style.css',

    ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./_site/assets/css/'));
});

// Compile js from node modules
gulp.task('compile-js', function() {
    return gulp.src([ 
        nodepath + 'jquery/dist/jquery.min.js', 
        nodepath + 'slick-carousel/slick/slick.min.js', 
        nodepath + 'izitoast/dist/js/iziToast.min.js',
        nodepath + 'chosen-js/chosen.jquery.min.js',
        nodepath + 'jquery-ui-dist/jquery-ui.min.js',
        nodepath + 'scrollreveal/dist/scrollreveal.min.js',
        nodepath + 'peity/jquery.peity.min.js',
        nodepath + 'vivus/dist/vivus.min.js',
        nodepath + 'covervid/covervid.min.js',
        nodepath + 'waypoints/lib/jquery.waypoints.min.js',
        nodepath + 'waypoints/lib/shortcuts/sticky.min.js',
        nodepath + 'jquery.counterup/jquery.counterup.min.js',
        nodepath + '@claviska/jquery-dropdown/jquery.dropdown.min.js',
        nodepath + '@fengyuanchen/datepicker/dist/datepicker.min.js',
        nodepath + 'wickedpicker/dist/wickedpicker.min.js',
        nodepath + 'datedropper/datedropper.min.js',
        nodepath + 'timedropper/timedropper.min.js',
        nodepath + 'easy-autocomplete/dist/jquery.easy-autocomplete.min.js',
        nodepath + 'jquery-tags-input/dist/jquery.tagsinput.min.js',
        nodepath + 'jqvmap/dist/jquery.vmap.min.js',
        nodepath + 'jqvmap/dist/maps/jquery.vmap.usa.js',
        nodepath + 'jqvmap/dist/data/jquery.vmap.sampledata.js',
        nodepath + 'paper/dist/paper-full.min.js',
        nodepath + 'd3/dist/d3.min.js',
        nodepath + 'chart.js/dist/Chart.bundle.min.js',
        nodepath + 'billboard.js/dist/billboard.min.js',
        nodepath + 'wallop/js/Wallop.min.js',
        //Additional static js assets
        assetspath + 'js/highlight/highlight.min.js',
        assetspath + 'js/ggpopover/ggpopover.min.js',
        assetspath + 'js/ggpopover/ggtooltip.js',
        assetspath + 'js/demo/scrollspy/scrollspy.min.js',
        assetspath + 'js/fileuploader/jquery.fileuploader.min.js',
        assetspath + 'js/embed/embed.js',
        assetspath + 'js/gmap/gmap.min.js',
        assetspath + 'js/datatable/datatable.min.js',
        assetspath + 'js/docs/prettify.min.js',
        //Bulma Extensions js
        //nodepath + 'bulma-extensions/bulma-iconpicker/dist/bulma-iconpicker.min.js',
        nodepath + 'bulma-extensions/bulma-tagsinput/dist/bulma-tagsinput.min.js',
        nodepath + 'bulma-extensions/bulma-steps/dist/bulma-steps.min.js',
        nodepath + 'bulma-extensions/bulma-calendar/dist/bulma-calendar.min.js',
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy js to production site
gulp.task('copy-js', function() {
    gulp.src('js/**/*.js')
        .pipe(gulp.dest('./_site/assets/js/'));
});

//Copy images to production site
gulp.task('copy-images', function() {
    gulp.src('images/**/*')
        .pipe(gulp.dest('./_site/assets/images/'));
});

gulp.task('init', ['setupBulma']);
gulp.task('build', ['clean','copy', 'compile-js', 'compile-css', 'copy-js', 'compile-sass', 'compile-scss-one', 'compile-scss-two', 'compile-scss-three', 'compile-scss-four', 'compile-scss-five', 'compile-scss-six', 'compile-scss-seven', 'compile-scss-om', 'compile-scss-components', 'compile-scss-dashboard', 'compile-html', 'copy-images']);
gulp.task('default', ['server', 'watch']);
gulp.task('scss', ['compile-scss-one', 'compile-scss-two', 'compile-scss-three', 'compile-scss-four', 'compile-scss-five', 'compile-scss-six', 'compile-scss-seven', 'compile-scss-om', 'compile-scss-components', 'compile-scss-dashboard']);