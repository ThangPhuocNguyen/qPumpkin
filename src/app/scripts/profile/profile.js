(function(angular) {
  'use strict';

  angular
    .module('Profile', [
      'ui.router'
    ])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'qPumpkin.profile', {
        url: '/profile',
        views: {
          'content': {
            controller: 'ProfileCtrl',
            templateUrl: '/views/about.html'
          }
        }
      });
    });

})(angular);

