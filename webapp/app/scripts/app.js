'use strict';

/**
 * @ngdoc overview
 * @name sinfApp
 * @description
 * # sinfApp
 *
 * Main module of the application.
 */
angular
  .module('sinfApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
      'angularChart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/vendas', {
            templateUrl: 'views/vendas.html',
            controller: 'vendasCtrl',
            controllerAs: 'vendas'
        })
      .otherwise({
        redirectTo: '/'
      });

  });





