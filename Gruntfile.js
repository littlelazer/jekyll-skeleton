module.exports = function(grunt) {
    var bannerContent = '... banner template ...';
    var name = '<%= pkg.name %>-v<%= pkg.version%>';

    grunt.initConfig({ 
        pkg : grunt.file.readJSON('package.json'),
        
        jshint : {
            options : {
                eqeqeq : true,
                trailing : true
            },
            target : {
                src : ['src/**/*.js', 'test/**/*.js']
            }
        },

        karma : {
            dist: {
                options: {
                    files: ['test/**/*.js'],
                    singleRun: true,
                    browsers: ['Chrome', 'ChromeCanary', 'PhantomJS', 'Firefox', 'Safari'],
                    basePath: '',
                    frameworks: ['jasmine'],
                },
            }
        },

        sass : {
            options : {},
            dist : {
                files : [{
                    expand : true,
                    cwd : 'sass',
                    src : ['*.scss'],
                    dest : 'css',
                    ext : '.css'
                }]
            }
        },

        concat : {
            options : {
                //banner: bannerContent
            },
            
            dist : {
                files : {
                    'lib/vendor/vendor.js' : ['bower_components/jquery/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
                    'lib/vendor/modernizr.js' : ['bower_components/modernizr/modernizr.js'],
                    'js/main.js' : ['src/**/*.js'],
                    'lib/vendor/vendor.css' : ['bower_components/bootstrap/dist/css/bootstrap.min.css']
                }
            },

            dev : {
                files : {
                    'js/vendor/vendor.js' : ['bower_components/jquery/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
                    'js/vendor/modernizr.js' : ['js/vendor/modernizr.js'],
                    'css/vendor/vendor.css' : ['bower_components/bootstrap/dist/css/bootstrap.css']
                }
            },

            watch : {
                files : {
                    'js/main.js' : ['src/**/*.js'],
                }
            }
        },

        uglify : {
            options : {
                //banner: bannerContent
            },
            dist : {
                files : {
                    'js/vendor/vendor.js' : 'lib/vendor/vendor.js',
                    'js/vendor/modernizr.js' : 'lib/vendor/modernizr.js',
                    'js/main.js' : 'js/main.js'
                }
            }
        },

        copy : {
            options : {},
            dist : {
                files : [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/fonts/',
                        src: '**',
                        dest: 'css/fonts/',
                        flatten: false,
                        filter: 'isFile'
                    },
                    {'css/vendor/vendor.css' : ['bower_components/bootstrap/dist/css/bootstrap.css']}
                ]
            }
        },

        watch : {
            css : {
                files : ['sass/**/*.scss', 'sass/**/*.css'],
                tasks : ['sass']
            },
            js : {
                files : ['src/**/*.js'],
                tasks : ['jshint', 'karma']
            },
            concat : {
                files : ['src/**/*.js'],
                tasks : ['concat:watch']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'jshint', 'karma', 'concat:dist', 'uglify', 'copy']);
    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('dev', ['sass', 'jshint', 'karma', 'concat:dev', 'copy']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};