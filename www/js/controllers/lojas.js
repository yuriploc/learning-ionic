(function() {
  'use strict';
  angular.module('lojas', [])
    .config(configLojas)
    .controller('LojasCtrl', LojasCtrl);

  function configLojas($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu.lojas', {
        url: '/lojas',
        views: {
          'menuContent': {
            templateUrl: 'templates/lojas.html',
            controller: 'LojasCtrl'
          }
        }
      });
    }

  LojasCtrl.$inject = ['$scope', '$log'];
  function LojasCtrl($scope, $log) {
  }

})();
