'use strict';

/**
* @ngdoc function
* @name sinfApp.controller:ReviewsCtrl
* @description
* # ReviewsCtrl
* Controller of the sinfApp
*/
angular.module('sinfApp')
.controller('ReviewsCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.mes= 'Nov, 2015'; //current
  $scope.meses=[
    {name: 'Nov, 2015', url: '1'},
    {name: 'Dez, 2015', url: '2'},
    {name: 'Jan, 2016', url: '3'},
    {name: 'Fev, 2016', url: '4'},
    {name: 'Mar, 2016', url: '5'},
    {name: 'Abr, 2016', url: '6'},
    {name: 'Mai, 2016', url: '7'},
    {name: 'Jun, 2016', url: '8'},
    {name: 'Jul, 2016', url: '9'},
    {name: 'Ago, 2016', url: '10'},
    {name: 'Set, 2016', url: '11'},
    {name: 'Out, 2016', url: '12'}
  ];

  $scope.data=[
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
  $scope.data2=[
    {nome: "teatro sa da bandeira", value: 300},
    {nome: "rivoli", value: 200},
    {nome: "pavilhão rosa mota", value: 150},
    {nome: "coliseu lisboa", value: 80},
    {nome: "coliseu porto", value: 700},
    {nome: "tivoli", value: 300},
    {nome: "centro cultural de belem", value: 200},
    {nome: "casa da musica", value: 1020},
    {nome: "centro cultural vila flor", value: 20},
    {nome: "coliseu dos recreios", value: 1001},
    {nome: "teatro camões", value: 300},
    {nome: "culturgest", value: 150},
    {nome: "palacio da bolsa", value: 20},
    {nome: "teatro académico gil vicente", value: 200},
    {nome: "teatro viriato", value: 300},
    {nome: "teatro municipal sá de miranda", value: 700}
  ];
  $scope.soma = 4421;
  $scope.porcento=function(value){
    return (value/$scope.soma)*100;
  };


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
})

.controller("BarCtrl_qual_postos", function ($scope) {
  $scope.labels = ['UM', 'DOIS', 'TRES', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE', 'DEZ', 'ONZE', 'DOZE'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40, 1, 2, 3, 09, 98]
  ];
});
