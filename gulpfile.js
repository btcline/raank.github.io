"use strict";
 
var gulp    = require( "gulp" ),
	plugins = require( "gulp-load-plugins" )({ lazy: false }),
	argv    = require( "minimist" )(process.argv.slice(1));
 

gulp.task('build:front', ['clean:front', 'styles:front', 'scripts:front', 'task:images'])
gulp.task('default', ['watch:front']);

require('./_gulp/front')(gulp, plugins, argv, __dirname);