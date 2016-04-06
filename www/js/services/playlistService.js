(function() {

  angular.module('services.playlist', [])
  .factory('playlistService', PlaylistService);

  function PlaylistService() {
    var playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];

    var playlistService = {};

    playlistService.getAll = function() {
      return playlists;
    };

    playlistService.findByTitle = function(playlistTitle) {
      return playlists.find(function(el) {
        el.title === playlistTitle;
      });
    };

    return playlistService;
  }

})();
