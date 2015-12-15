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
    'ui.bootstrap',
    'ngMap',
    'ngMdIcons'
  ])
  .config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'f79022',
    '400': 'ef5350',
    '500': '2c2c2c',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName');
})
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
