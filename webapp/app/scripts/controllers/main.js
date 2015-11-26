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

  });
