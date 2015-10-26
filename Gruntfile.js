module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/scripts/controllers/controllers.js',
                dest: 'server/public/assets/scripts/controllers.min.js'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    'index.html',
                    'users.html',
                    'register.html',
                    'login.html'
                ],
                dest: "server/public/views/"
            },
            style: {
                expand:true,
                cwd: 'client/',
                src:[
                    "styles/general.css"
                ],
                dest: "server/public/assets/"
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            },
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.map.js"
                ],
                dest: "server/public/vendors/"
            },
            angularMaterial: {
                expand: true,
                cwd: 'node_modules',
                src: "angular-material/angular-material.min.js",
                dest: "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};