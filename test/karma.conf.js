// Karma configuration
// Generated on Mon Apr 20 2015 20:03:02 GMT+0900 (JST)
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha','chai','sinon'],
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/tether/dist/js/tether.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      // injector:js
      'app/components/applicationtiles/applicationtiles.js',
      'app/components/blockinfotile/blockinfotile.js',
      'app/components/home/home.js',
      'app/components/kibana/kibana.js',
      'app/components/login/login.js',
      'app/components/monitoring/monitoring.js',
      'app/components/refresh/refresh.js',
      'app/components/searchbar/searchbar.js',
      'app/scripts/config.js',
      'app/service/dataloader/dataloader.js',
      'app/service/gruntfiles/gruntfiles.js',
      'app/service/users/users.js',
      'test/components/applicationtiles/applicationtiles.spec.js',
      'test/components/blockinfotile/blockinfotile.spec.js',
      'test/components/home/home.spec.js',
      'test/components/kibana/kibana.spec.js',
      'test/components/login/login.spec.js',
      'test/components/monitoring/monitoring.spec.js',
      'test/components/refresh/refresh.spec.js',
      'test/components/searchbar/searchbar.spec.js',
      'test/components/tile/tile.spec.js',
      'test/main.spec.js',
      'test/service/authentification/authentification.mock.js',
      'test/service/authentification/authentification.spec.js',
      'test/service/dataloader/dataloader.mock.js',
      'test/service/dataloader/dataloader.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      'test/service/user/user.mock.js',
      'test/service/user/user.spec.js',
      // endinjector
      'app/scripts/main.js',
      'test/main.spec.js',
      'app/**/*.html'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.html': ['ng-html2js'],
      'app/**/*.js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'templates'
    },

    coverageReporter: {
      type : 'html',
      dir : 'report',
      subdir: 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS2'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
