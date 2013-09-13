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
            unit: {
                options: {
                    files: ['test/**/*.js']
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
                    'lib/vendor/vendor.css' : ['bower_components/bootstrap/dist/css/bootstrap.css']
                    

                }
            },

            dev : {
                files : {
                    'js/vendor/vendor.js' : ['bower_components/jquery/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
                    'js/vendor/modernizr.js' : ['js/vendor/modernizr.js'],
                    'css/vendor/vendor.css' : ['bower_components/bootstrap/dist/css/bootstrap.min.css']
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
                expand: true,
                cwd: 'bower_components/bootstrap/fonts/',
                src: '**',
                dest: 'css/fonts/',
                flatten: false,
                filter: 'isFile'
            }
        },

        jekyll : {
            options : {
                serve : true
            },
            serve : {
                options : {
                    dest : '.jekyll',
                    drafts : true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'karma', 'sass', 'concat:dist', 'uglify', 'copy']);
    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('dev', ['jshint', 'karma', 'concat:dev', 'sass','concat:dev', 'copy']);
};