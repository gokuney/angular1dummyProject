'use strict';

/**
 * @ngdoc service
 * @name ngGautamApp.useractions
 * @description
 * # useractions
 * Factory in the ngGautamApp.
 */
angular.module('ngGautamApp')
  .factory('useractions', function () {
    


    

    // Public API here
    return {

      test : function(arg){
        alert(arg + ' is what I got ');
      }

    };
  });
