'use strict';

/**
* @ngdoc function
* @name sinfApp.controller:EmpresarialCtrl
* @description
* # EmpresarialCtrl
* Controller of the sinfApp
*/
angular.module('sinfApp')
.controller('MyController', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);


  });
})
.controller('EmpresarialCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.mes= '1';
  $scope.meses=[
    {name: 'Nov, 2015', url: '1'},
    {name: 'Dez, 2015', url: '2'},
    {name: 'Jan, 2016', url: '3'},
    {name: 'Fev, 2016', url: '4'},
    {name: 'Mar, 2016', url: '5'},
    {name: 'Abr, 2016', url: '6'},
    {name: 'Abr, 2016', url: '7'},
    {name: 'Abr, 2016', url: '8'},
    {name: 'Abr, 2016', url: '9'},
    {name: 'Abr, 2016', url: '10'},
    {name: 'Abr, 2016', url: '11'},
    {name: 'Abr, 2016', url: '12'},
  ];

  //Mandar para aqui as localizações dos postos
  $scope.positions=["Porto","Lisboa","Vila Nova de Gaia","Cascais"];

})

.controller("DoughnutCtrl_volumevendas", function ($scope) {
  //Mandar para aqui o volume de vendas por posto
  $scope.labels = ["teatro sá da bandeira", "rivoli", "meo arena", "ccb"];
  $scope.data = [300,120, 500, 100, 75];
});

.controller("DoughnutCtrl_trabalhadores", function ($scope) {
  //Mandar para aqui os trabalhadores por posto
  $scope.labels = ["teatro sá da bandeira", "rivoli", "meo arena", "ccb"];
  $scope.data = [300,120, 500, 100, 75];
});
