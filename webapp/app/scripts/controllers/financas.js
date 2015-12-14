'use strict';

/**
* @ngdoc function
* @name sinfApp.controller:FinancasCtrl
* @description
* # FinancasCtrl
* Controller of the sinfApp
*/
angular.module('sinfApp')
.controller('FinancasCtrl', function ($scope, $sce) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

$scope.euroImg = $sce.trustAsResourceUrl('styles/euroazul.png'); 
  
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

.controller("DoughnutCtrl_lucro", function ($scope) {
  $scope.labels = ["local x", "local y", "local z", "local w"];
  $scope.data = [300,120, 500, 100, 75];
});
