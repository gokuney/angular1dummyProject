'use strict';

/**
 * @ngdoc function
 * @name ngGautamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngGautamApp
 */
angular.module('ngGautamApp')
  .controller('MainCtrl', function ($scope , $location) {



    $scope.go = function(d){
    	$location.path('/login/'+d);
    };
  });
