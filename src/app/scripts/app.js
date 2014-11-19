(function(angular) {
  'use strict';

  angular
    .module('srcApp', [
      'srcApp.home',
      'Profile',
      'ui.router',
      'firebase'
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
      }
    ]);

})(angular);
