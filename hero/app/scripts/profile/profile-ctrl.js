(function(angular) {
  'use strict';

  angular.module('Profile')
    .controller('ProfileCtrl', function ($scope) {
      // $scope.abc = 'profile';
      // console.log('Thang:', $scope.abc);
      console.log('Profile');

      var initPeople = [
        { label: 'Thang Nguyen'},
        { label: 'Qtysth'},
        { label: 'Green Turtle'},
        { label: 'Nothing'},
        { label: 'Something'},
        { label: 'Everything'}
      ]

      // $scope.people = [
      //   { label: 'Joe'},
      //   { label: 'Mike'},
      //   { label: 'Diane'}
      // ]

      $scope.searchPeople= function(term) {
        console.log('here:', term);

        var peopleList = [];

        if ( term === '' ) {
          $scope.people = [];
          return;
        }

        angular.forEach( initPeople, function (item) {

          if (item.label.toUpperCase().indexOf(term.toUpperCase()) >= 0) {

            console.log('search:', item);
            peopleList.push(item);
          }

        });

        $scope.people = peopleList;
      };


      $scope.getPeopleTextRaw = function(item) {
        return 'hehe:'+item.label;
      };
    });

})(angular);
