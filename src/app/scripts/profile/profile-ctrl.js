(function(angular) {
  'use strict';

  angular.module('Profile')
    .controller('ProfileCtrl', function ($scope) {
      $scope.abc = 'profile';
      console.log('Thang:', $scope.abc);
    });

})(angular);
