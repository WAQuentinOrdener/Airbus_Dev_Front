(function () {
  'use strict';

  module.exports = {
    dist: {
      files: [{
          expand: true,
          dot: true,
          cwd: '<%= paths.app %>',
          dest: '<%= paths.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.webp',
            'components/{,*/}*.html',
            'directives/{,*/}*.html',
            '{,*/}*.html',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/components-font-awesome/fonts',
          src: ['styles/fonts/*.*'],
          dest: '<%= paths.dist %>'
        }]
    },
    styles: {
      expand: true,
      dot: true,
      cwd: '<%= paths.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  };
})();
