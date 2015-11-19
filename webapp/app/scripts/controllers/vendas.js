angular.module('sinfApp-vendas', ['amep-model']).
controller('logoutController', ['Session', '$state', function (Session, $state) {

    Session.delete(function () {
        $state.go('vendas');
    });

}]).
config(function ($stateProvider) {
    $stateProvider.
    state('vendas', {
        parent: 'lt',
        url: 'vendas',
        controller: 'vendasController',
        templateUrl: 'scripts/views/vendas.html'
    })
});
