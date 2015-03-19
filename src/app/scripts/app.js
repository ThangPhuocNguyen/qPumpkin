(function(angular) {
  'use strict';

  angular
    .module('srcApp', [
      'ui.router',
      'firebase',
      'Home',
      'Profile',
    ])

    // .element(document).ready(function() {
    //   angular.bootstrap(document, ['srcApp']);
    // })

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
          window._vis_opt_url = '172.16.126.108:9000/#' + $state.href($state.current);
          executeTrackingCode('body');
        });
      }
    ]);

})(angular);
