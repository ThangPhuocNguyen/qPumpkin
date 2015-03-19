(function(angular) {
  'use strict';

  angular
    .module('heroApp')
  //   .config([
  //     '$locationProvider',
  //     function($locationProvider) {
  //       // use the HTML5 History API
  //       $locationProvider.html5Mode(true);
  //     }])
  // /////////////////////////////////////////////////////////////////////
  // // Make a trailing slash

  //   .config([
  //     '$urlRouterProvider',

  //     function ($urlRouterProvider) {

  //       $urlRouterProvider.rule( function ($injector, $location) {
  //         var path = $location.url();

  //         // check to see if the path already has a slash where it should be
  //         if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
  //           return;
  //         }

  //         if (path.indexOf( '?' ) > -1) {
  //           return path.replace('?', '/?');
  //         }

  //         return path + '/';
  //       });

  //     }])

    .config([
      '$urlRouterProvider',
      '$stateProvider',
      function($urlRouterProvider, $stateProvider) {
        // $stateProvider.state( 'qPumpkin', {
        //   url: '/',
        //   // views: {
        //   //   'header': {
        //   //     template: '<p>Hello header1</p>'
        //   //   },
        //   //   'navigation': {
        //   //     templateUrl: 'views/primary-nav/primary-nav.html'
        //   //   },
        //   //   'content': {
        //   //     template: '<p>Hello content1</p>'
        //   //   },
        //   //   'sidebar': {
        //   //     template: '<p>Hello sidebar1</p>'
        //   //   },
        //   //   'footer': {
        //   //     template: '<p>Hello footer1</p>'
        //   //   }
        //   }
        // });

        $urlRouterProvider.otherwise('/home');
      }
    ]);

})(angular);
