'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.user',
  'myApp.spells',
  'myApp.detail',
  'myApp.spellService'
]);

module.controller('AppCtrl', ['Auth', '$scope', function(Auth, $scope) {
    $scope.logout = Auth.logout
}]);

module.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
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
                    location.reload();
                });
            }
            return deferred.promise;
        }
    };
}]);


module.factory('errorInterceptor', ['$q', function($q) {  
    return {
        responseError: function(response) {
            if (response.status == 401) {
                console.log('session timeout?');
                logout();
            } else if (response.status == 403) {
                alert("Forbidden");
            } else if (response.status == 404) {
                alert("Not found");
            } else if (response.status) {
                if (response.data && response.data.errorMessage) {
                    alert(response.data.errorMessage);
                } else {
                    alert("An unexpected server error has occurred");
                }
            }
            return $q.reject(response);
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


