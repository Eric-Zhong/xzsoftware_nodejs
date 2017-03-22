module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");


    // Project configuration.
    grunt.initConfig({

        // 读取根目录的package.json配置文件内容
        pkg: grunt.file.readJSON("package.json"),

        // 自动化
        watch: {
            scripts: {
                files: [
                    "Gruntfile.js",
                    "src/weddingcar/js/*.js",
                    "src/weddingcar/css/*.css",
                    "src/fitcc/js/*.js",
                    "src/fitcc/css/*.css"
                ],
                tasks: [
                    "copy",
                    "concat",
                    // "cssmin",
                    // "uglify"
                ]
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    src: [
                        "node_modules/font-awesome/fonts"
                    ],
                    dest: "public/weddingcar/fonts"
                }, {
                    expand: true,
                    src: [
                        "node_modules/font-awesome/fonts"
                    ],
                    dest: "public/fitcc/fonts"
                }]
            },
        },

        // 合并文件
        concat: {
            app: {
                src: [
                    'src/app.js'
                ],
                dest: 'public/dist/js/app.js'
            },
            compontent: {
                src: [
                    "node_modules/angular/angular.js",
                    //"node_modules/angular-route/angular-route.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.gestures.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.js",
                    "node_modules/angular-ui-swiper/dist/angular-ui-swiper.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.js",
                    "node_modules/vis/dist/vis.min.js"
                ],
                dest: "public/dist/js/_module.min.js"
            },
            css: {
                src: [
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-hover.css",
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-base.css",
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.css",
                    "node_modules/angular-ui-swiper/dist/angular-ui-swiper.css",
                    "src/*.css"
                ],
                dest: "public/dist/css/app.css"
            },
            weddingcar_compontent_css: {
                src: [
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-hover.css",
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-base.css",
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.css",
                    "node_modules/angular-ui-swiper/dist/angular-ui-swiper.css"
                ],
                dest: "public/weddingcar/css/_compontent.css"
            },
            fitcc_compontent_css: {
                src: [
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-hover.css",
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-base.css",
                    "node_modules/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.css",
                    "node_modules/angular-ui-swiper/dist/angular-ui-swiper.css",
                    "node_modules/vis/dist/vis.css"
                ],
                dest: "public/fitcc/css/_compontent.css"
            },
            weddingcar_compontent_js: {
                src: [
                    "node_modules/angular/angular.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.gestures.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.js",
                    "node_modules/angular-ui-swiper/dist/angular-ui-swiper.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.js",
                    "node_modules/vis/dist/vis.min.js"
                ],
                dest: "public/weddingcar/js/_compontent.js"
            },
            compontent_js_fitcc: {
                src: [
                    "node_modules/angular/angular.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.gestures.js",
                    "node_modules/mobile-angular-ui/dist/js/mobile-angular-ui.js",
                    "node_modules/angular-ui-swiper/dist/angular-ui-swiper.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.js",
                    "node_modules/vis/dist/vis.min.js"
                ],
                dest: "public/fitcc/js/_compontent.js"
            },
            // Wedding car compontent
            weddingcar_app_css: {
                src: [
                    "src/weddingcar/css/*.css"
                ],
                dest: "public/weddingcar/css/app.css"
            },
            weddingcar_app_js: {
                src: [
                    "src/weddingcar/js/*.js"
                ],
                dest: "public/weddingcar/js/app.js"
            },
            // Fit CC compontent
            fitcc_app_css: {
                src: [
                    "src/fitcc/css/*.css"
                ],
                dest: "public/fitcc/css/app.css"
            },
            fitcc_app_js: {
                src: [
                    "src/fitcc/js/*.js"
                ],
                dest: "public/fitcc/js/app.js"
            }
        },

        // 压缩JS
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *//n'
            },
            build: {
                src: [
                    "public/dist/js/_module.min.js"
                    // "public/dist/js/app.js"
                ],
                dest: "public/dist/js/<%= pkg.name %>.min.js"
            },
            // 婚车
            weddingcar: {
                src: [
                    "public/weddingcar/js/app.js"
                ],
                dest: "public/weddingcar/js/app.min.js"
            },
            // Fit CC
            fitcc: {
                src: [
                    "public/fitcc/js/app.js"
                ],
                dest: "public/fitcc/js/app.min.js"
            }
        },

        // 压缩CSS
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            build: {
                src: [
                    "public/dist/css/app.css"
                ],
                dest: 'public/dist/css/app.min.css'
            },
            // 婚车
            weddingcar_css: {
                src: [
                    "public/weddingcar/css/app.css"
                ],
                dest: 'public/weddingcar/css/app.min.css'
            },
            fitcc_css: {
                src: [
                    "public/fitcc/css/app.css"
                ],
                dest: 'public/fitcc/css/app.min.css'
            }

        }

    });

    grunt.registerTask(
        "default", [
            "copy", "concat", "cssmin", "uglify"
        ]
    );

};