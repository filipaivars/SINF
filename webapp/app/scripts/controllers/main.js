'use strict';

/**
 * @ngdoc function
 * @name sinfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sinfApp
 */
angular.module('sinfApp')
  .controller('MainCtrl', function ($scope, $sce) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.vendasImg = $sce.trustAsResourceUrl('styles/ticket.png');
    $scope.financasImg = $sce.trustAsResourceUrl('styles/euro.png');
    $scope.empresarialImg = $sce.trustAsResourceUrl('styles/company.png');
    $scope.reviewsImg = $sce.trustAsResourceUrl('styles/reviews.png');

    $scope.user={
      email: '',
      pwd: ''
    };
  }).config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('filipaPallete', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': '11998c',
    '400': 'ef5350',
    '500': '11998c',
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
  // Configure a dark theme with primary foreground filipaPallete
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('filipaPallete')
});
