/*jslint
    node: true */

module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        javascript: {
            src: ['js/*.js']
        },
        concat: {
            options: {
                separator: ';'
            }
        },
        jslint: {
            src: ['gruntfile.js', '<%= javascript.src %>']
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results/results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['test/*.js']
            }
        },
        mocha_istanbul: {
            target: {
                options: {
                    scriptPath: require.resolve('./node_modules/.bin/istanbul') // usually in nameofcoveragelibrary/lib/cli
                }
            },
            coverage: {
                src: 'test'
            }
        },
        markdown: {
            all: {
                expand: true,
                src: 'README.md',
                dest: 'doc/',
                ext: '.html'
            }
        },
        browserify: {
            'lib/taxes.js': ['js/app.js']
        },
        uglify: {
            my_target: {
                files: {
                    'lib/taxes.min.js': ['lib/taxes.js']
                }
            }
        },
        copy: {
            'dist': {
                files: [
                    {
                        expand: true,
                        src: [
                            './**/*',
                            '!./package.json',
                            '!./gruntfile.js',
                            '!./dist/**',
                            '!./js/**',
                            "!./lib/<%= pkg.name %>.js",
                            '!./node_modules/**',
                            '!./less/**',
                            '!./test/**'
                        ],
                        dest: 'dist/<%= pkg.name %>-<%= pkg.version %>'
                    }
                ]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip',
                    mode: 'zip',
                    level: 9,
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**']
                    //dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                }]
            }
        },
        clean: {
            css: ['css/'],
            doc: ['doc/'],
            lib: ['lib/'],
            test: ['test/results'],
            coverage: ['coverage'],
            nodeModules: ['node_modules/'],
            dist: ['dist']
        },
        watch: {
            javascriptFiles: {
                files: ['<%= jslint.src %>'],
                tasks: ['jslint', 'mochaTest']
            },
            styles: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            mochaTest: {
                files: ['<%= mochaTest.test.src %>'],
                tasks: ['mochaTest']
            },
            markdown: {
                files: ['<%= markdown.all.src %>'],
                tasks: ['markdown']
            },
            browserify: {
                files: ['js/app.js'],
                tasks: ['browserify']
            },
            uglify: {
                files: ['lib/taxes.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('test', ['jslint', 'mochaTest']);
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
    grunt.registerTask('default', ['jslint', 'less', 'mochaTest', 'markdown', 'browserify', 'uglify']);
    grunt.registerTask('dist', ['copy', 'compress']);
};
