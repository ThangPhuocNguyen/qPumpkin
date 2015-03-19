(function(angular) {
  'use strict';

  angular
    .module('Home')
    .controller('HomeCtrl', function ($scope) {
      console.log('Home');
      // var ref = new Firebase('https://qpumpkin.firebaseio.com/');

      // $scope.items = $firebase(ref);
      // // console.log('items:', $scope.items);

      // $scope.name = '';
      // $scope.text = '';
      // $scope.messages = [];

      // $scope.addMessage = function() {
      //   ref.child('message').set({
      //     user: $scope.name,
      //     text: $scope.text
      //   })
      //   $scope.text = '';
      // };
    });

})(angular);
