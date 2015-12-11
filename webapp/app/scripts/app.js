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
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'chart.js',
    'mwl.calendar',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/vendas',{
        templateUrl: 'views/vendas.html',
        controller: 'VendasCtrl',
        controllerAs: 'vendas'
      })
      .when('/empresarial',{
        templateUrl: 'views/empresarial.html',
        controller: 'EmpresarialCtrl',
        controllerAs: 'empresarial'
      })
      .when('/financas',{
        templateUrl: 'views/financas.html',
        controller: 'FinancasCtrl',
        controllerAs: 'financas'
      })
      .when('/reviews',{
        templateUrl: 'views/reviews.html',
        controller: 'ReviewsCtrl',
        controllerAs: 'reviews'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
