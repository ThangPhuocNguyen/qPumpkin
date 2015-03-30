(function(angular) {
  'use strict';

  angular
    .module('Home', [
      'ui.router'
    ])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'home', {
        url: '/home',
        views: {
          'content': {
            controller: 'HomeCtrl',
            templateUrl: 'views/home2.html'
          },
          'header': {
            template: '<p>Home header</p>'
          },
          'navigation': {
            templateUrl: 'views/primary-nav/primary-nav.html'
          },
          'sidebar': {
            template: '<p>Home sidebar</p>'
          },
          'footer': {
            template: '<p>Home footer</p>'
          }
        }
      });
    });

})(angular);
