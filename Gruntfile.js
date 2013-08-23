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
                banner: bannerContent
            },
            target : {
                src : ['src/**/*.js'],
                dest : 'src/concat/' + name + '.js'
            },
            dev : {
                src : ['src/**/*.js'],
                dest : ['js/'  + name + '.min.js']
            }
        },

        bower : {
            dev : {
                dest: 'js/vendor'
            }
        },

        uglify : {
            options : {
                banner: bannerContent
            },
            target : {
                src : ['src/concat/*.js'],
                dest : ['js/' + name + '.min.js']
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
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['jshint', 'karma', 'sass', 'concat', 'uglify', 'bower']);
    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('dev', ['jshint', 'karma', 'sass','concat:dev'])
};