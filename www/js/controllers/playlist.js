(function() {
  'use strict';
  angular.module('playlist', ['services.playlist'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistCtrl as playlistVm'
        }
      }
    })

    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl as playlistVm'
        }
      }
    })
  })

  .controller('PlaylistCtrl', PlaylistCtrl);

  PlaylistCtrl.$inject = ['$scope','playlistService'];

  function PlaylistCtrl($scope, playlistService) {
    var playlistVm = this;
    playlistVm.playlists = playlistService.getAll();
  }

})();
