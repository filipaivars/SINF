angular.module('sinfApp-core', ['sinfApp']).
controller('vendasController', ['Session', '$state', function (Session, $state) {

    Session.delete(function () {
        $state.go('vendas');
    });

}]).
config(function ($stateProvider) {
    $stateProvider.
    state('vendas', {
        url: 'vendas',
        controller: 'vendasController',
        templateUrl: 'vendas.html'
    }).
    state('about', {
        url: 'about',
        controller: 'AboutCtrl',
        templateUrl: 'scripts/controllers/about.html'
    }
  });
});
