(function() {
  'use strict';

  module.exports = {
    dist: {
      src: [
        '<%= paths.dist %>/scripts/{,*/}*.js',
        '<%= paths.dist %>/styles/{,*/}*.css',
        '<%= paths.dist %>/*.{ico,png}'
      ]
    }
  };
})();
