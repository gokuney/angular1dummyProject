'use strict';

/**
 * @ngdoc overview
 * @name ngGautamApp
 * @description
 * # ngGautamApp
 *
 * Main module of the application.
 */
angular
  .module('ngGautamApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login/:id', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        id : '',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
