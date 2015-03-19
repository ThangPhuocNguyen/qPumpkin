(function(angular) {
  'use strict';

  angular
    .module('Profile', [
      'ui.router'
    ])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'profile', {
        url: '/profile',
        views: {
          'content': {
            controller: 'ProfileCtrl',
            templateUrl: '/views/about.html'
          },
          'header': {
            template: '<p>Profile header</p>'
          },
          'navigation': {
            templateUrl: 'views/primary-nav/primary-nav.html'
          },
          'sidebar': {
            template: '<p>Profile sidebar</p>'
          },
          'footer': {
            template: '<p>Profile footer</p>'
          }
        }
      });
    });

})(angular);

