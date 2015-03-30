(function(angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name heroApp
   * @description
   * # heroApp
   *
   * Main module of the application.
   */
  angular
    .module('heroApp', [
      'ui.router',
      'Home',
      'Profile',
      'mentio',
    ])
    .run([
        '$state',
        '$stateParams',
        '$rootScope',
        function($state, $stateParams, $rootScope) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;

          $rootScope.$on('$stateChangeError', function() {
            console.log('Router state change error');
          });

          $rootScope.$on('$stateChangeSuccess', function () {
            console.log('routeChange------------------------');

            // config for apply VWO Smart Code for single page app
            // window._vis_opt_url = 'thangangular.herokuapp.com/' + $state.href($state.current);
            window._vis_opt_url = document.URL;
            console.log('test', window._vis_opt_url);
            console.log('doc', document.URL);

            executeTrackingCode('body');
          });
        }
      ]);
})(angular);
