'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });



  $http({method: 'GET', url: '/api/ccpp'}).
  success(function(data, status, headers, config) {
    $scope.ccpps = data;
  }).
  error(function(data, status, headers, config) {
    $scope.ccpps = 'Error!'
  });



  $scope.lista = [
  {name: 'Flexcash', city:'Trux'},
  {name: 'Jorge', city:'Jamaica'}
  ];

}


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
