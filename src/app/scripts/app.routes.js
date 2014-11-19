(function(angular) {
  'use strict';

  angular
    .module('srcApp')
    .config([
      '$locationProvider',
      function($locationProvider) {
        // use the HTML5 History API
        // $locationProvider.html5Mode(true);
      }])

    .config([
      '$urlRouterProvider',
      '$stateProvider',
      function($urlRouterProvider, $stateProvider) {
        $stateProvider.state( 'qPumpkin', {
          url: '/'
          // views: {
          //   'header': {
          //     template: '<p>Hello header</p>'
          //   },
          //   'navigation': {
          //     templateUrl: 'views/primary-nav/primary-nav.html'
          //   },
          //   'content': {
          //     template: '<p>Hello content</p>'
          //   },
          //   'sidebar': {
          //     template: '<p>Hello sidebar</p>'
          //   },
          //   'footer': {
          //     template: '<p>Hello footer</p>'
          //   }
          // }
        });

        $urlRouterProvider.otherwise('/home');
      }
    ]);

})(angular);
