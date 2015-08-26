(function() {
    'use strict';

    angular.element(document).ready(function () {
        var keycloakAuth = new Keycloak('keycloak.json');
        
        keycloakAuth.init({ onLoad: 'check-sso' }).success(function () {
            angular
                .module('hogwarts')
                .factory('Auth', function() {
                    return keycloakAuth;
                });
            angular.bootstrap(document, ["hogwarts"]);
        }).error(function () {
                window.location.reload();
            });

    });

    angular
        .module('hogwarts')
        .run(['$rootScope', '$location', 'Auth', runBlock]);

    /** @ngInject */
    function runBlock($rootScope, $location, Auth) {
        $rootScope.$on( "event:auth-loginRequired", function() {
            Auth.login();
        });        
    }


})();
