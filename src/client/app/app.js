"use strict";
angular.module('GitSpy', [
  'add', 'dashboard', 'home', 'login', 'setup', 'ngRoute', 'helper', 'logout', 'ngCookies'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/home/home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/login',{
    templateUrl: '/app/login/login.html'
  });
  $routeProvider.when('/add', {
    templateUrl: '/app/add/add.html',
    controller: 'AddController'
  });
  $routeProvider.when('/:orgName/:repoName', {
    templateUrl: '/app/dashboard/dashboard.html',
    controller: 'DashboardController'
  });
  $routeProvider.when('/:orgName/:repoName/setup', {
    templateUrl: '/app/setup/setup.html',
    controller: 'SetupController'
  });
  $routeProvider.when('/logout', {
    templateUrl: '/app/logout/logout.html',
    controller: 'LogoutController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}])

.run(function($rootScope, $location, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, toState) {
    var route = toState.originalPath;
    if (AuthFactory.authRoutes.indexOf(route) >= 0 && !AuthFactory.isAuth()) {
      $location.path('/login');
    }
  });
});