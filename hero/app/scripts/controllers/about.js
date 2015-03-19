'use strict';

/**
 * @ngdoc function
 * @name heroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the heroApp
 */
angular.module('heroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
