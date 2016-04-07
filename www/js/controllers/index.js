(function() {
  'use strict';

  angular
    .module('pglv')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$ionicModal', '$timeout'];

  function AppCtrl($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    var appVm = this;
    appVm.loginData = {};

    // TODO: como organizar melhor os modais?
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    appVm.closeLogin = function() {
      appVm.loginData = {};
      $scope.modal.hide();
    };

    appVm.login = function() {
      $scope.modal.show();
    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    appVm.doLogin = function() {
      console.log('Doing login', appVm.loginData);

      // Simulate a login delay.
      $timeout(function() {
        appVm.closeLogin();
      }, 1000);
    };
  }

})();
