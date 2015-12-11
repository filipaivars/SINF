'use strict';

/**
 * @ngdoc function
 * @name sinfApp.controller:VendasCtrl
 * @description
 * # VendasCtrl
 * Controller of the sinfApp
 */
angular.module('sinfApp')
  .controller('VendasCtrl', function ($scope) {
    $(function() { //equivalent to document.ready
      $("#linkmes").addClass("temp");
    });

    $("#linksemestre,#linktrimestre,#linkano").click(function()
    {
        $("#linkmes").removeClass("temp");
    }
    );


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
    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();
    $scope.events = [{
      title: 'My event title', // The title of the event
      type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
      startsAt: new Date(2015,5,1,1), // A javascript date object for when the event starts
      endsAt: new Date(2015,8,26,15), // Optional - a javascript date object for when the event ends
      editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
      deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      draggable: true, //Allow an event to be dragged and dropped
      resizable: true, //Allow an event to be resizable
      incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
      recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
      cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
    }];
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
.controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

})
.controller("DoughnutCtrl_local", function ($scope) {
  $scope.labels = ["teatro sá da bandeira", "rivoli", "meo arena", "ccb"];
  $scope.data = [300,120, 500, 100, 75];
})
.controller("DoughnutCtrl_sazonal", function ($scope) {
  $scope.labels = ["outono", "primavera", "verão", "inverno"];
  $scope.data = [300,120, 500, 100, 75];
})
.controller("DoughnutCtrl_hora", function ($scope) {
  $scope.labels = ["final da tarde", "tarde", "noite", "madrugada"];
  $scope.data = [300,120, 500, 100, 75];
})
.controller("DoughnutCtrl_espetaculo", function ($scope) {
  $scope.labels = ["muse", "anselmo ralph", "coldplay", "jimmy p"];
  $scope.data = [300,120, 500, 100, 75];
})
.controller("DoughnutCtrl_tipo", function ($scope) {
  $scope.labels = ["concertos", "dança", "música", "teatro"];
  $scope.data = [300,120, 500, 100, 75];
})
.controller("DoughnutCtrl_idade", function ($scope) {
  $scope.labels = ["adultos", "seniores", "crianças", "adolescentes"];
  $scope.data = [300,120, 500, 100, 75];
})
.controller("BarCtrl", function ($scope) {
  $scope.labels = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
});
