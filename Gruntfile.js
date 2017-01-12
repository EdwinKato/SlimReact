"use strict";
var webpackConfig = require("./webpack.config");

module.exports = function(grunt) {
    var pkg = grunt.file.readJSON("package.json");
    grunt.initConfig({
        pkgName: pkg.name,
        name: pkg.name,

        watch: {
            options: {
                debounceDelay: 250,
                livereload: true
            }
        },
        
        webpack: {
            renderer: webpackConfig
        },

        clean: {
            build: [
                "./dist/index.js"
            ]
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-webpack");

    grunt.registerTask("default", [ "clean build", "watch" ]);    
    grunt.registerTask(
        "clean build",
        "Compiles all the assets and copies the files to the dist directory.", [ "clean:build", "webpack" ]
    );
    grunt.registerTask("build", [ "clean build" ]);
};
