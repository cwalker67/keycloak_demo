'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.user',
  'myApp.spells'
]);

module.controller('AppCtrl', ['Auth', '$scope', function(Auth, $scope) {
    $scope.logout = Auth.logout
}]);

module.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $routeProvider
      .when('/', {
          templateUrl: 'home.html',
          controller: 'AppCtrl'
      })
      .otherwise({redirectTo: '/'});
}]);

module.run(['$rootScope', '$location', 'Auth', function($rootScope, $location, Auth) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if (Auth.authenticated != true) {
          // no logged user, redirect to /login
          Auth.login();
          $location.path("/user");
      }
    });
}]);

module.factory('authInterceptor', ['$q', 'Auth', function($q, Auth) {
    return {
        request: function (config) {
            var deferred = $q.defer();
            if (Auth.token) {
                Auth.updateToken(5).success(function() {
                    config.headers = config.headers || {};
                    config.headers.Authorization = 'Bearer ' + Auth.token;

                    deferred.resolve(config);
                }).error(function() {
                        deferred.reject('Failed to refresh token');
                    });
            }
            return deferred.promise;
        }
    };
}]);



angular.element(document).ready(function () {
    var keycloakAuth = new Keycloak('keycloak.json');
    
    keycloakAuth.init({ onLoad: 'check-sso' }).success(function () {
        module.factory('Auth', function() {
            return keycloakAuth;
        });
        angular.bootstrap(document, ["myApp"]);
    }).error(function () {
            window.location.reload();
        });

});


