'use strict';

/**
 * @ngdoc function
 * @name heroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heroApp
 */
angular.module('heroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
