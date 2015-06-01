"use strict";
 
var gulp    = require( "gulp" ),
	plugins = require( "gulp-load-plugins" )({ lazy: false }),
	argv    = require( "minimist" )(process.argv.slice(1));
 

gulp.task('build:front', ['clean:front', 'styles:front', 'scripts:front'])
gulp.task('default', ['watch:front']);

require('./_gulp')(gulp, plugins, argv, __dirname);