"use strict";
angular.module('login', [])
.controller('LoginController', ['$scope', '$cookies', '$window', '$location','RequestFactory', function ($scope, $cookies, $window, $location, RequestFactory) {
  $scope.isActivePage = function (viewLocation) {
    $scope.welcomeString = "<span>Welcome, "+$cookies.get('githubName')+"!</span>";
    return viewLocation === $location.path();
  };
}]);
