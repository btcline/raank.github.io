var ym, fs, dir, config, project, wp, src;
ym = require('js-yaml');
fs = require('fs');
config = ym.load(fs.readFileSync('app/config.yml'));
project = ym.load(fs.readFileSync('package.json'));
wp = (config.wp == true ? 'wp-content/themes/' + project.name + '/' : '');

dir = {
	script		: wp + config.javascript,
	sass		: wp + config.sass,
	css			: wp + config.css,
	js			: wp + config.js,
	img			: wp + config.imgs,
	build		: wp + "build",
	assets		: wp + "assets",
	jekyll_css	: config.jekyll_css,
	jekyll_js	: config.jekyll_js,
}

module.exports = function(gulp, plugins, argv, dirname) {
	gulp.task('styles:front', function() {
		gulp.src(dir.sass + '/**/*.scss')
		.pipe( plugins.plumber({errorHandler: plugins.notify.onError('Erro ao compilar os styles, <%= error.message %>')}))
		.pipe( plugins.rubySass({
			loadPath        : ['_bower'],
			noCache         : true,
			compass         : false,
			style           : 'compressed',
			trace           : true,
			'sourcemap=none': true
		}))
		.pipe( plugins.autoprefixer(['last 2 version', '> 1%', 'ie 8', 'ie 7'], {cascade: false}))
		.pipe( plugins.rename({ suffix: '.min' }))
		.pipe( plugins.if(!(argv.d || argv.debug), plugins.minifyCss()) )
		.pipe( gulp.dest(dir.css))
		.pipe( gulp.dest(dir.jekyll_css))
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('CSS Compilado: <%= file.relative %>')) )
	});

	gulp.task('scripts:front', function() {
		gulp.src([dir.script + '/**/*.js', '!' + dir.script + '/**/_*.js'])
		.pipe( plugins.plumber({errorHandler: plugins.notify.onError('Erro ao compilar os scripts, <%= error.message %>')}))
		.pipe( plugins.dynamic({ paths: ['_bower'] }))
		.pipe( plugins.if(!(argv.d || argv.debug), plugins.uglify()) )
		.pipe( plugins.rename({ suffix: '.min' }))
		.pipe( gulp.dest(dir.js) )
		.pipe( gulp.dest(dir.jekyll_js) )
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('JS Compilado: <%= file.relative %>')) )
	});

	gulp.task('task:images:retina', function() {
		gulp.src([dir.img + '/**/*-2x.{png,jpg,gif'])
		.pipe( plugins.gm(function (gmfile, done) {
			  done(null, gmfile.resize(50, '%'));
		}))
		.pipe( plugins.rename(function(path) {
			path.basename = path.basename.replace('-2x', '');
		}))
		.pipe( gulp.dest(dir.img) )
	});

	gulp.task('clean:front', function(cb) {
		return gulp.src([dir.css + '/*', dir.jekyll_css + '/*', dir.js + '/*', dir.jekyll_js + '/*'], { ready: true })
		.pipe( plugins.clean({ force: true }) )
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('Arquivos removidos com sucesso!')) );
	});

	gulp.task('task:csscomb', function(){
		return gulp.src([dir.sass + '/**/*.scss', '!' + dir.sass + '/global/_*.scss'])
		.pipe( plugins.csscomb(comb))
		.pipe( gulp.dest(dir.sass))
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('Organização completa!')) );
	});

	gulp.task('watch:front', function() {
		gulp.watch([dir.sass + '/**/*.scss'], ['styles:front']);
		gulp.watch([dir.script + '/**/*.js'], ['scripts:front']);
		gulp.watch([dir.img + '/**/*-2x.{jpg,png.gif}'], ['task:images']);
	});

	gulp.task('copy:front', function() {
		src = "_bower";
		var d = (argv.dest ? "/" + argv.dest : "");
		var sources = [];
		if(argv.files) {
			var files = argv.files.split(',');
			for(key in files) {
				sources.push(src + '/' + files[key]);
			}
		} else {
			sources.push(src);
		}
		gulp.src(sources)

		.pipe( gulp.dest(dir.build + d));
	});

}
