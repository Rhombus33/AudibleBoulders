"use strict";
angular.module('logout', [])
.controller('LogoutController', ['AuthFactory', function (AuthFactory) {
  AuthFactory.eatCookies();
  AuthFactory.logout();
}]);
