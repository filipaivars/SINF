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
.controller('EmpresarialCtrl', function ($scope, $sce) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  var i = new Date();
  $scope.mes= new Date(); //current
  $scope.logout = function () {
  $scope.errorMessage = null;
  $scope.flagLogin = false;
  //Session.save({email: email, password: password});
};
  $scope.meses=[
    {name: $scope.mes},
    {name: i.setMonth($scope.mes.getMonth()-1)},
    {name: i.setMonth($scope.mes.getMonth()-2)},
    {name: i.setMonth($scope.mes.getMonth()-3)},
    {name: i.setMonth($scope.mes.getMonth()-4)},
    {name: i.setMonth($scope.mes.getMonth()-5)},
    {name: i.setMonth($scope.mes.getMonth()-6)},
    {name: i.setMonth($scope.mes.getMonth()-7)},
    {name: i.setMonth($scope.mes.getMonth()-8)},
    {name: i.setMonth($scope.mes.getMonth()-9)},
    {name: i.setMonth($scope.mes.getMonth()-10)},
    {name: i.setMonth($scope.mes.getMonth()-11)}
  ];
  $scope.mesSelected = $scope.meses[0];

  $scope.loginImg = $sce.trustAsResourceUrl('images/login.png');
  // Informação do inventario
  $scope.inventario=[
    {nome: "coldplay", value: 300},
    {nome: "muse", value: 200},
    {nome: "anselmo ralph", value: 150},
    {nome: "jimmy p", value: 80},
    {nome: "u2", value: 700},
    {nome: "meo sudoeste", value: 300},
    {nome: "nos alive", value: 200},
    {nome: "disney in concert", value: 1020},
    {nome: "os patinhos", value: 20},
    {nome: "lalala", value: 1001},
    {nome: "verdocas", value: 300},
    {nome: "doraemon", value: 150}
  ];

  Chart.defaults.global.colours = [
    { // orange
      fillColor: "#F79022",
      strokeColor: "#F79022",
      pointColor: "#F79022",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,0.8)"
    },
    { // pink
      fillColor: "#D75574",
      strokeColor: "#D75574",
      pointColor: "#D75574",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,0.8)"
    },
    { // blue
      fillColor: "#66BFDD",
      strokeColor: "#66BFDD",
      pointColor: "#66BFDD",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,0.8)"
    },
    { // yellow
      fillColor: "#E4E417",
      strokeColor: "#E4E417",
      pointColor: "#E4E417",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,0.8)"
    },
    { // blue
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,0.8)"
    },
    { // light grey
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,0.8)"
    },
    { // red
      fillColor: "rgba(247,70,74,0.2)",
      strokeColor: "rgba(247,70,74,1)",
      pointColor: "rgba(247,70,74,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(247,70,74,0.8)"
    },
    { // green
      fillColor: "rgba(70,191,189,0.2)",
      strokeColor: "rgba(70,191,189,1)",
      pointColor: "rgba(70,191,189,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(70,191,189,0.8)"
    },
    { // yellow
      fillColor: "rgba(253,180,92,0.2)",
      strokeColor: "rgba(253,180,92,1)",
      pointColor: "rgba(253,180,92,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(253,180,92,0.8)"
    },
    { // grey
      fillColor: "rgba(148,159,177,0.2)",
      strokeColor: "rgba(148,159,177,1)",
      pointColor: "rgba(148,159,177,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(148,159,177,0.8)"
    },
    { // dark grey
      fillColor: "rgba(77,83,96,0.2)",
      strokeColor: "rgba(77,83,96,1)",
      pointColor: "rgba(77,83,96,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(77,83,96,1)"
    }
  ];

  $scope.getTotal = function(){
      var total = 0;
      for(var i = 0; i < $scope.inventario.length; i++){

          total += $scope.inventario[i].value;
      }
      return total;
  }
  $scope.porcento=function(value){
    return (value/$scope.getTotal())*100;
  };

  //Mandar para aqui as localizações dos postos
  $scope.positions=["Rua direta do viso, 347, porto","Lisboa","Vila Nova de Gaia","Cascais"];

})

.controller("DoughnutCtrl_volumevendas", function ($scope) {
  //Mandar para aqui o volume de vendas por posto
  $scope.labels = ["teatro sá da bandeira", "rivoli", "meo arena", "ccb"];
  $scope.data = [300,120, 500, 100, 75];
})

.controller("DoughnutCtrl_trabalhadores", function ($scope) {
  //Mandar para aqui os trabalhadores por posto
  $scope.labels = ["teatro sá da bandeira", "rivoli", "meo arena", "ccb"];
  $scope.data = [300,600, 500, 100, 75];
});
