var ym, fs, dir, src;
ym = require('js-yaml');
fs = require('fs');

module.exports = function(gulp, plugins, argv, dirname) {
	gulp.task('styles:front', function() {
		gulp.src('assets/sass/**/*.scss')
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
		.pipe( gulp.dest('build/css'))
		.pipe( gulp.dest('_site/build/css'))
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('CSS Compilado: <%= file.relative %>')) )
	});

	gulp.task('scripts:front', function() {
		gulp.src(['assets/js/**/*.js', '!' + 'assets/js/**/_*.js'])
		.pipe( plugins.plumber({errorHandler: plugins.notify.onError('Erro ao compilar os scripts, <%= error.message %>')}))
		.pipe( plugins.dynamic({ paths: ['_bower'] }))
		.pipe( plugins.if(!(argv.d || argv.debug), plugins.uglify()) )
		.pipe( plugins.rename({ suffix: '.min' }))
		.pipe( gulp.dest('build/js') )
		.pipe( gulp.dest('_site/build/js') )
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('JS Compilado: <%= file.relative %>')) )
	});

	gulp.task('task:images:retina', function() {
		gulp.src(['build/images/**/*-2x.{png,jpg,gif'])
		.pipe( plugins.gm(function (gmfile, done) {
			  done(null, gmfile.resize(50, '%'));
		}))
		.pipe( plugins.rename(function(path) {
			path.basename = path.basename.replace('-2x', '');
		}))
		.pipe( gulp.dest('build/images') )
	});

	gulp.task('clean:front', function(cb) {
		return gulp.src(['build/css/*', '_site/build/css/*', 'build/js/*', '_site/build/css/*'], { ready: true })
		.pipe( plugins.clean({ force: true }) )
		.pipe( plugins.if(argv.n || argv.notify, plugins.notify('Arquivos removidos com sucesso!')) );
	});

	gulp.task('watch:front', function() {
		gulp.watch(['assets/sass/**/*.scss'], ['styles:front']);
		gulp.watch(['assets/js/**/*.js'], ['scripts:front']);
		gulp.watch(['build/images/**/*-2x.{jpg,png.gif}'], ['task:images']);
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

		.pipe( gulp.dest( 'build' + d) )
		.pipe( gulp.dest( '_site/build' + d) )
	});

}
