'use strict';

/**
* @ngdoc function
* @name sinfApp.controller:FinancasCtrl
* @description
* # FinancasCtrl
* Controller of the sinfApp
*/
angular.module('sinfApp')
.controller('FinancasCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.items = [
    {nome:'ola1', valor:'10'},
    {nome:'ola2', valor: '5'},
    {nome:'ola3', valor: '155'}
  ];
});
