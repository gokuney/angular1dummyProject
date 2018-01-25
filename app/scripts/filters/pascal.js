'use strict';

/**
 * @ngdoc filter
 * @name ngGautamApp.filter:pascal
 * @function
 * @description
 * # pascal
 * Filter in the ngGautamApp.
 */
angular.module('ngGautamApp')
  .filter('pascal', function () {
    return function (input) {
      return input.toLowerCase().replace('a','❤');

    };
  });
