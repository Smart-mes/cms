const gulp = require('gulp')
const sass=require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

//css
gulp.task('sass', () => {
    return gulp.src('./src/sass/**/*.scss')//打包之前sass路径
        .pipe(sass().on('error',sass.logError))
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions', 'ie > 8']}))
		.pipe(cleanCSS())
		.pipe(uglifycss())
		.pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./static/css'));		
});

//JS处理
gulp.task('concatJs',function(){
   return gulp.src(['./src/js/jquery-3.5.1.min.js','./src/js/fullpage.js','./src/js/swiper.min.js'])  //选择合并的JS
       .pipe(concat('build.js'))   
       .pipe(gulp.dest('static/js'))        
       .pipe(rename({suffix:'.min'}))     
       .pipe(uglify())                    
       .pipe(gulp.dest('static/js'))             

});



gulp.task("watch",function(){
    // gulp.watch("./src/sass/**/*.scss",gulp.series('sass'));
	gulp.watch("./src/sass/**/*.scss",gulp.series('sass'))
	gulp.watch("./src/js/**/*.js",gulp.series('concatJs'));
}) 
