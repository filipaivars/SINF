angular.module('sinfApp').
  config(function ($urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/404');
  });
