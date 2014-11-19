(function(angular) {
  'use strict';

  angular
    .module('srcApp.home', [
      'ui.router'
    ])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'home', {
        url: '/home',
        views: {
          'content': {
            controller: 'HomeCtrl',
            templateUrl: 'views/home.html'
          },
          'header': {
            template: '<p>Hello header</p>'
          },
          'navigation': {
            templateUrl: 'views/primary-nav/primary-nav.html'
          },
          'sidebar': {
            template: '<p>Hello sidebar</p>'
          },
          'footer': {
            template: '<p>Hello footer</p>'
          }
        }
      });
    });

})(angular);
